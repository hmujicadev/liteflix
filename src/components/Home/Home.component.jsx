import React from 'react';
import Layout from '../layout/Layout.component';
import COVER_PAGE_WRAPPER_URL from '../../assets/images/cover-page.png';
import {
  CoverPageWrapper,
  CoverPageBackgroundImage,
  CoverPageBackgroundImageWrapper,
} from './Home.style';

const Home = () => {
  return (
    <>
      <Layout>
        <section>
          <CoverPageBackgroundImage src={COVER_PAGE_WRAPPER_URL} />

          <CoverPageWrapper></CoverPageWrapper>
        </section>
      </Layout>
    </>
  );
};

export default Home;
