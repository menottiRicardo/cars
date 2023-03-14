import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Upload
  const options = {
    method: "GET",
    url: "https://car-api2.p.rapidapi.com/api/vin/KNDJ23AU4N7154467",
    headers: {
      "X-RapidAPI-Key": "ed4d351b27mshc48805240000f5fp1be4d1jsnf81e58e7dd79",
      "X-RapidAPI-Host": "car-api2.p.rapidapi.com",
    },
  };
  const rawResponse = await fetch(
    "https://car-api2.p.rapidapi.com/api/makes?direction=asc&sort=name",
    options
  );
  const response = await rawResponse.json();
  const makes = response.data.map((make: any) => make.name);

  res.status(200).json(makes);
}
