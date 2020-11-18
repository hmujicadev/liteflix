import React from 'react';
import Layout from '../layout/Layout.component';
import COVER_PAGE_WRAPPER_URL from '../../assets/images/cover-page.png';
import {
  FeaturedSection,
  CoverPageWrapper,
  FeaturedSectionImage,
  FeaturedSectionOverlay
  
} from './Home.style';

const Home = () => {
  return (
    <>
      <Layout>
        <FeaturedSection>
        <FeaturedSectionOverlay/>
          <FeaturedSectionImage src={COVER_PAGE_WRAPPER_URL} />
        </FeaturedSection>

          <section>
            <CoverPageWrapper></CoverPageWrapper>
          </section>
          <section>
      
          </section>
          <section>
        
          </section>
         
      </Layout>
    </>
  );
};

export default Home;
