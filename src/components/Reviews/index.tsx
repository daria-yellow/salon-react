import type React from 'react';
import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Carousel from 'react-material-ui-carousel';
import { useHttpClient } from '../../hooks/http-hook';
import { type ReviewType } from '../../types';
import { TitleText } from '../TitleText';

export const Reviews: React.FC = () => {
  const { sendRequest } = useHttpClient();
  const [reviews, setReviews] = useState<ReviewType[]>([]);

  useEffect(() => {
    const fetchProducts: () => Promise<void> = async () => {
      try {
        const responseData = await sendRequest('/reviews');
        setReviews(responseData);
      } catch (err) {}
    };
    fetchProducts();
  }, [sendRequest]);

  return (
    <div className="reviews">
      <TitleText text={<FormattedMessage id="page.landing.reviews.title" />} />
      <Carousel
        indicators={false}
        duration={1000}
        animation="slide"
        interval={5000}
      >
        {reviews.map((review) => (
          <div className="reviews__review" key={review.name.toString()}>
            <img
              src={review.img}
              alt="Review"
              width={180}
              height={180}
              className="reviews__review-photo"
            ></img>
            <div className="text__t1-semibold">{review.name}</div>
            <div className="text__t3">{review.review}</div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
