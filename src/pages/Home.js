import React from 'react';
import styled from 'styled-components';

import {
  Ads,
  Ads2,
  Ads3,
  Bestoffer,
  Categories,
  CTA,
  Exlusive,
  // Footer,
  Products,
} from '../components';

const Home = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <div className='desktop-view'>
          <CTA />
        </div>

        <Categories />
        <Ads />
        <Exlusive />
        <Ads2 />
        <Bestoffer />
        <Ads3 />
        <Products />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  font-size: 18px;
  .desktop-view {
    display: none;
  }
  @media (min-width: 768px) {
    .desktop-view {
      display: block;
    }
  }
`;
export default Home;
