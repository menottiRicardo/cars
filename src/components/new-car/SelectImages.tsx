import React, { useEffect, useState } from "react";

const SelectImages = ({ next }: { next: () => void }) => {
  const [images, setImages] = useState<File[]>([]);
  const [imagesUrl, setImagesUrl] = useState<string[]>([]);
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

  return (
    <div>
      <h2 className="mt-2 text-center text-xl font-bold text-primary-focus">
        Ahora seleciona los archivos que quieras anadir
      </h2>

      <label htmlFor="upload">
        <div
          className="mt-4 rounded-md bg-secondary px-3 py-2 text-center text-secondary-content shadow-md"
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

      {imagesUrl.map((src) => (
        <img key={src} src={src}></img>
      ))}
    </div>
  );
};

export default SelectImages;
