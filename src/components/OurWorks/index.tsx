import type React from 'react';
import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { TitleText } from '../TitleText';
import { useHttpClient } from '../../hooks/http-hook';
import { type GalleryImageType } from '../../types';
import WorksBg from '../../images/worksBg.jpg';
import { useWindowWidth } from '@react-hook/window-size';

export const OurWorks: React.FC = () => {
  const { sendRequest } = useHttpClient();
  const [gallery, setGallery] = useState<GalleryImageType[]>([]);
  const windowWidth = useWindowWidth();

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
    <div className="our-works" style={{ backgroundImage: `url(${WorksBg})` }}>
      <TitleText text={<FormattedMessage id="page.landing.works.title" />} />
      <div className="our-works__box">
        {windowWidth >= 1280 && (
          <div className="our-works__content">
            <div className="text__t2">
              <FormattedMessage id="page.landing.works.content" />
            </div>
            <Link to="/gallery" className="our-works__button text__t3">
              <FormattedMessage id="page.landing.works.button" />
            </Link>
          </div>
        )}
        <div className="our-works__images">
          <img
            src={gallery[1]?.link}
            alt="firstPhoto"
            className="our-works__images__photo our-works__images__photo-p1"
          />
          <img
            src={gallery[0]?.link}
            alt="secondPhoto"
            className="our-works__images__photo our-works__images__photo-p2"
          />
          <img
            src={gallery[3]?.link}
            alt="thirdPhoto"
            className="our-works__images__photo our-works__images__photo-p3"
          />
        </div>
        {windowWidth < 1280 && (
          <Link to="/gallery" className="our-works__button text__t3">
            <FormattedMessage id="page.landing.works.button" />
          </Link>
        )}
      </div>
    </div>
  );
};
