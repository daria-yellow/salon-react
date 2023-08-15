import type React from "react";
import { useEffect, useState } from "react";
import { useHttpClient } from "../../hooks/http-hook";
import { type GalleryImageType } from "../../types";

const Gallery: React.FC = () => {
  const { sendRequest } = useHttpClient();
  const [gallery, setGallery] = useState<GalleryImageType[]>([]);

  useEffect(() => {
    const fetchGallery: () => Promise<void> = async () => {
      try {
        const responseData = await sendRequest("/gallery");
        setGallery(responseData);
      } catch (err) {}
    };
    fetchGallery();
  }, [sendRequest]);

  return (
    <div className="gallery">
      <div className="gallery__cards">
        {gallery.map((image) => (
          <img
            src={image.link}
            alt={image.position.toString()}
            key={image.position}
          ></img>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
