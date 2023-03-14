import type { NextApiRequest, NextApiResponse } from "next";
import cloudinary from "~/utils/cloudinary";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Upload
  const timestamp = Math.round(new Date().getTime() / 1000);
  const uploadedResponse = await cloudinary.v2.utils.api_sign_request(
    {
      timestamp,
      eager: "c_pad,h_300,w_400|c_crop,h_200,w_260",
    },
    process.env.CLOUDINARY_API_SECRET as string
  );

  res.status(200).json({
    timestamp,
    signature: uploadedResponse,
    cloudName: process.env.CLOUDINARY_NAME,
    apiKey: process.env.CLOUDINARY_API_KEY,
  });
}
