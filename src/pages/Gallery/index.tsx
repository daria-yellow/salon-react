import type React from 'react';
import { useEffect, useState } from 'react';
import { OpenedPhoto } from '../../components/OpenedPhoto';
import { useHttpClient } from '../../hooks/http-hook';
import { type GalleryImageType } from '../../types';

const Gallery: React.FC = () => {
  const { sendRequest } = useHttpClient();
  const [gallery, setGallery] = useState<GalleryImageType[]>([]);
  const [imageOpened, setImageOpened] = useState<string>('');

  useEffect(() => {
    const fetchGallery: () => Promise<void> = async () => {
      try {
        const responseData = await sendRequest('/gallery');
        setGallery(responseData);
      } catch (err) {}
    };
    fetchGallery();
  }, [sendRequest]);

  return (
    <div className="gallery">
      {gallery.length && imageOpened && (
        <OpenedPhoto
          photo={imageOpened}
          onClick={() => {
            setImageOpened('');
          }}
        />
      )}
      <div className="gallery__cards">
        {gallery.map((image) => (
          <img
            src={image.link}
            alt={image.position.toString()}
            key={image.position}
            onClick={() => {
              setImageOpened(image.link);
            }}
          ></img>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
