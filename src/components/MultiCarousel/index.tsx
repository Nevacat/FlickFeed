import React from 'react';
import Carousel, { CarouselProps } from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

type MultiCarouselProps = Omit<CarouselProps, 'responsive'> & {
  children: React.ReactNode;
};

function MultiCarousel({ children, ...props }: MultiCarouselProps) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 5,
      partialVisibilityGutter: 30,
    },
  };
  return (
    <Carousel responsive={responsive} {...props}>
      {children}
    </Carousel>
  );
}

export default MultiCarousel;
