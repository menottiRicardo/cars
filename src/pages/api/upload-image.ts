import type { NextApiRequest, NextApiResponse } from "next";
import cloudinary from "~/utils/cloudinary";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const rawBody = req.body;
  const body = JSON.parse(rawBody);
  // Upload

  const uploadedResponse = await cloudinary.v2.uploader.upload(body.image);

  res.status(200).json(uploadedResponse);
}
