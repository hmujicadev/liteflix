import React,{useContext} from 'react'
import {object} from 'prop-types'
import {
    FeaturedSectionWrapper,
    FeaturedSectionImage,
    FeaturedSectionOverlay
    
  } from './FeaturedSection.styles';
import MoviesContext from '../../context/moviesContext'
import { IMAGES_URL } from '../../constants';



const FeaturedSection = ({featuredMovie}) => {

   
  return (
    <>
     <FeaturedSectionWrapper>
        <FeaturedSectionOverlay/>
          <FeaturedSectionImage src={`${IMAGES_URL}/original/${featuredMovie.backdrop_path}`}/>
        </FeaturedSectionWrapper>
      
    </>
  )
}
FeaturedSection.propTypes = {
  featuredMovie: object.isRequired,
}

export default FeaturedSection