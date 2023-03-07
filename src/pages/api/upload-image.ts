import type { NextApiRequest, NextApiResponse } from "next";
import cloudinary from "~/utils/cloudinary";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const image = req.body;

  // Upload
  console.log('image', image)

  const upload = await cloudinary.v2.uploader.upload(
    "https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
    { public_id: "olympic_flag" }
  );
}
