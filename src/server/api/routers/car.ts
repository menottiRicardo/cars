import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const carRouter = createTRPCRouter({
  createCar: publicProcedure
    .input(z.object({ images: z.string().array() }))
    .mutation(async ({ input, ctx }) => {
      const images_array = input.images.map((image) => ({ uri: image }));
      const newCar = await ctx.prisma.car.create({
        data: {
          images: {
            createMany: {
              data: images_array,
            },
          },
          year: 0,
          make: "",
          model: "",
          traction: "",
          kms: 0,
          registryUri: "",
        },
      });

      return {
        carId: newCar.id,
      };
    }),
  updateCar: publicProcedure
    .input(
      z.object({
        year: z.number(),
        id: z.string(),
        make: z.string(),
        model: z.string(),
        kms: z.number(),
        traction: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const newCar = await ctx.prisma.car.update({
        where: {
          id: input.id,
        },
        data: {
          year: input.year,
          make: input.make,
          model: input.model,
          kms: input.kms,
          traction: input.traction,
          registryUri: "",
        },
      });

      return {
        carId: newCar.id,
      };
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.car.findMany();
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),

  getMakes: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.make.findMany({
      include: {
        models: true,
      },
    });
  }),
});
