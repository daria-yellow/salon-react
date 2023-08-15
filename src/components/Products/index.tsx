import type React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Arrow } from '../../images/Arrow';
import useSmoothHorizontalScroll from 'use-smooth-horizontal-scroll';
import { TitleText } from '../TitleText';
import { useWindowWidth } from '@react-hook/window-size';
import { useHttpClient } from '../../hooks/http-hook';
import { type ProductType } from '../../types';

export const Products: React.FC = () => {
  const { sendRequest } = useHttpClient();
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchProducts: () => Promise<void> = async () => {
      try {
        const responseData = await sendRequest('/products');
        setProducts(responseData);
      } catch (err) {}
    };
    fetchProducts();
  }, [sendRequest]);

  const windowWidth = useWindowWidth();
  const arrowSize =
    windowWidth < 568
      ? '20'
      : windowWidth < 767
        ? '30'
        : windowWidth < 1024
          ? '40'
          : '60';
  const { scrollContainerRef, handleScroll, scrollTo, isAtStart, isAtEnd } =
    useSmoothHorizontalScroll();

  const arrowLeft = useCallback(() => {
    return (
      <div
        className="products__content__arrow products__content__arrow-left"
        onClick={() => {
          scrollTo(windowWidth < 767 ? -200 : -400);
        }}
        style={isAtStart ? {} : { opacity: 0.8 }}
      >
        <Arrow width={arrowSize} heigth={arrowSize} />
      </div>
    );
  }, [isAtStart, scrollTo, arrowSize, windowWidth]);

  const arrowRight = useCallback(() => {
    return (
      <div
        className="products__content__arrow"
        onClick={() => {
          scrollTo(windowWidth < 767 ? 200 : 400);
        }}
        style={isAtEnd ? {} : { opacity: 0.8 }}
      >
        <Arrow width={arrowSize} heigth={arrowSize} />
      </div>
    );
  }, [isAtEnd, scrollTo, arrowSize, windowWidth]);

  return (
    <div className="products">
      <TitleText text={<FormattedMessage id="page.landing.products.title" />} />
      <div className="products__content">
        {arrowLeft()}
        <div
          className="products__content__images"
          ref={scrollContainerRef as React.RefObject<HTMLDivElement>}
          onScroll={handleScroll}
        >
          {products.map((product) => (
            <img src={product.link} alt={product.name} key={product.name}></img>
          ))}
        </div>
        {arrowRight()}
      </div>
    </div>
  );
};
