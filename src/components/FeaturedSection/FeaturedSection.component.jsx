import React from 'react';
import {object} from 'prop-types';
import {
  FeaturedSectionWrapper,
  FeaturedSectionImage,
  FeaturedSectionOverlay,
  FeaturedContainer,
  FeaturedPreTitle,
  FeaturedTitle,
  FeaturedOptionsWrapper,
  FeaturedOption,
  OverviewWrapper,
  Overview,
  FeaturedSubTitle,
  FeaturedOptionMobile,
  FeaturedSectionImageWrapper,
} from './FeaturedSection.styles';
import {IMAGES_URL} from '../../constants';
import {FiPlay} from 'react-icons/fi';
import {FaPlus} from 'react-icons/fa';
import SpanText from '../global/SpanText/SpanText.component';

const FeaturedSection = ({featuredMovie}) => {
  const commonVariants = duration => ({
    initial: {
      opacity: 0,
      y: -70,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
      },
    },
  });

  return (
    <>
      <FeaturedSectionWrapper>
        <FeaturedSectionOverlay />
        <FeaturedSectionImageWrapper>
          <FeaturedSectionImage src={`${IMAGES_URL}/original/${featuredMovie.backdrop_path}`} />
        </FeaturedSectionImageWrapper>
        <FeaturedContainer>
          <FeaturedPreTitle animate="visible" initial={'initial'} variants={commonVariants(1.6)}>
            ORIGINAL DE <strong>LITEFLIX</strong>
          </FeaturedPreTitle>
          <FeaturedTitle animate={'visible'} initial={'initial'} variants={commonVariants(2.2)}>
            {featuredMovie.title}
          </FeaturedTitle>
          <FeaturedOptionsWrapper>
            <FeaturedOption animate="visible" initial={'initial'} variants={commonVariants(2.5)}>
              <FiPlay />
              <SpanText font="16px" color="#fff" padding="0 0 0 10px">
                Reproducir
              </SpanText>
            </FeaturedOption>
            <FeaturedOption animate="visible" initial={'initial'} variants={commonVariants(2.5)}>
              <FaPlus />
              <SpanText font="16px" color="#fff" padding="0 0 0 10px">
                Mi lista
              </SpanText>
            </FeaturedOption>
            <FeaturedOptionMobile
              animate="visible"
              initial={'initial'}
              variants={{...commonVariants(2.5), initial: {x: 100} , visible: {x: 0,transition:{duration:2}}}}>
              <FaPlus />
            </FeaturedOptionMobile>
          </FeaturedOptionsWrapper>

          <OverviewWrapper initial={'initial'} animate="visible" variants={commonVariants(2.2)}>
            <FeaturedSubTitle margin="0 0 10px 0">Ver Temporada 1</FeaturedSubTitle>
            <Overview>{featuredMovie.overview}</Overview>
          </OverviewWrapper>
        </FeaturedContainer>
      </FeaturedSectionWrapper>
    </>
  );
};
FeaturedSection.propTypes = {
  featuredMovie: object.isRequired,
};

export default FeaturedSection;
