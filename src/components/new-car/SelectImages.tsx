import { PlusCircleIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { api } from "~/utils/api";

const SelectImages = ({ next }: { next: (id: string) => void }) => {
  const [images, setImages] = useState<File[]>([]);
  const [message, setMessage] = useState("Siguiente");
  const [imagesUrl, setImagesUrl] = useState<string[]>([]);
  const createCar = api.car.createCar.useMutation({
    onSuccess: (values) => {
      setMessage("Listo!!");
      next(values.carId);
    },
  });

  const handleImageSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files: any = e.target.files;
    setImages(images.concat([...files]));
  };

  useEffect(() => {
    if (images.length < 1) return;
    const newImagesUrls: string[] = [];
    images.forEach((image) => newImagesUrls.push(URL.createObjectURL(image)));
    setImagesUrl(newImagesUrls);
  }, [images]);

  const submit = async () => {
    setMessage("Subiendo Imagenes...");
    // if (message === "Subiendo Imagenes...") {
    //   return;
    // }
    const signResponse = await fetch("/api/upload-image");
    const signData = await signResponse.json();
    const imagesUploaded: string[] = [];
    const result = images.map(async (image) => {
      const result = await uploadImage(image, signData);
      imagesUploaded.push(result.public_id);
    });
    await Promise.all(result);

    // create car
    createCar.mutateAsync({ images: imagesUploaded });
  };

  const uploadImage = async (image: File, signData: any) => {
    // sign the upload

    const base54 = await toBase64(image);

    const formData = new FormData();
    formData.append("file", image);
    formData.append("api_key", signData.apiKey);
    formData.append("timestamp", signData.timestamp);
    formData.append("signature", signData.signature);
    formData.append("eager", "c_pad,h_300,w_400|c_crop,h_200,w_260");

    const upload = await fetch(
      `https://api.cloudinary.com/v1_1/${signData.cloudName}/auto/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    const uploadedResponse = await upload.json();

    return uploadedResponse;
  };

  return (
    <div className="relative">
      <h2 className="mt-2 text-center text-xl font-bold">
        Empecemos subiendo las imagenes
      </h2>

      {images.length > 0 && (
        <div>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {imagesUrl.map((src, index) => (
              <div className="relative h-full w-full rounded-md" key={src}>
                <div className="absolute top-2 left-2 flex items-center justify-center rounded-full bg-secondary px-2 text-primary-content">
                  {index}
                </div>
                <img src={src} className="h-28 w-full rounded-md shadow-xl" />
              </div>
            ))}
            <label htmlFor="upload">
              <div
                className="flex h-full items-center justify-center rounded-md bg-secondary px-3 py-2 font-bold text-secondary-content shadow-xl"
                aria-hidden="true"
              >
                <PlusCircleIcon className="mr-2 w-8" />
                Anade otra!
              </div>
              <input
                type="file"
                id="upload"
                style={{ display: "none" }}
                accept="image/*"
                onChange={handleImageSelection}
              />
            </label>
          </div>
          <button
            className="btn-primary btn mt-4 flex w-full items-center justify-center"
            onClick={submit}
          >
            {message}
          </button>
        </div>
      )}
      {images.length === 0 && (
        <label htmlFor="upload">
          <div
            className="mt-4 rounded-md bg-primary px-3 py-2 text-center text-secondary-content shadow-md"
            aria-hidden="true"
          >
            Toca aqui para subir tus imagenes
          </div>
          <input
            type="file"
            id="upload"
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleImageSelection}
          />
        </label>
      )}
    </div>
  );
};
const toBase64 = (file: any) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
export default SelectImages;
