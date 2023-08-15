import type React from 'react';
import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { TitleText } from '../TitleText';
import { useHttpClient } from '../../hooks/http-hook';
import { type GalleryImageType } from '../../types';

export const OurWorks: React.FC = () => {
  const { sendRequest } = useHttpClient();
  const [gallery, setGallery] = useState<GalleryImageType[]>([]);

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
    <div className="our-works">
      <TitleText text={<FormattedMessage id="page.landing.works.title" />} />
      <div className="our-works__images">
        <div className="our-works__images-row">
          <div className="our-works__images-row-image our-works__images-row-small">
            <img src={gallery[1]?.link} alt="firstImage" />
          </div>
          <div className="our-works__images-row-image">
            <img src={gallery[0]?.link} alt="secondImage" />
          </div>
        </div>
        <div className="our-works__images-row">
          <div className="our-works__images-row-image">
            <img src={gallery[2]?.link} alt="thirdImage" />
          </div>
          <div className="our-works__images-row-image our-works__images-row-small">
            <img src={gallery[3]?.link} alt="fourthImage" />
          </div>
        </div>
      </div>
      <Link to="/gallery" className="our-works__button text__t3">
        <FormattedMessage id="page.landing.works.button" />
      </Link>
    </div>
  );
};
