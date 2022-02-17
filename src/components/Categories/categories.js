import React from 'react';
import styled from 'styled-components';
import { data } from './categorydata';

//swiper
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const categories = () => {
  return (
    <Wrapper>
      <div className='web'>
        <h4>Categories</h4>
        <div className='container-data'>
          {data.map((category, index) => {
            const { title, image } = category;
            return (
              <article key={index}>
                <div className='img'>
                  <img src={image} alt={title} />
                </div>
                <p>{title}</p>
              </article>
            );
          })}
        </div>
      </div>

      <div className='mobile'>
        <h4>Categories</h4>
        <div className='container-data'>
          <Swiper
            slidesPerView={3}
            spaceBetween={5}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}>
            {data.map((category, index) => {
              const { title, image } = category;
              return (
                <SwiperSlide key={index}>
                  <article>
                    <div className='img'>
                      <img src={image} alt={title} />
                    </div>
                    <p>{title}</p>
                  </article>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: -3rem;
  .mobile {
    display: none;
  }
  .web {
    h4 {
      color: var(--clr-primary-1);
      font-weight: normal;
      margin-bottom: 2rem;
    }
    .container-data {
      display: flex;
      justify-content: space-between;
      text-align: center;
      margin-bottom: 5rem;
    }
    .img {
      padding: 1rem;
      box-shadow: var(--dark-shadow);
      border-radius: 50%;
      margin-bottom: 1rem;
      cursor: pointer;
      width: 90px;
      height: 90px;
      img {
        width: 50px;
        height: 50px;
      }
    }
  }
  @media (max-width: 767px) {
    .web {
      display: none;
    }
    .mobile {
      display: block;
      margin: 2.5rem 0;

      h4 {
        font-weight: normal;
        font-size: 18px;
      }
      .container-data {
        display: flex;

        color: #fff;

        article {
          padding: 1rem;
          background: var(--clr-primary-1);

          border-radius: 1rem;
          text-align: center;

          width: 14rem;
          height: 10rem;
          img {
            width: 80px;
            height: 80px;
          }
          p {
            font-size: 18px;
          }
        }
      }
    }
  }
  @media (max-width: 750px) {
    article {
      width: 8rem !important;
    }
  }
  @media (max-width: 414px) {
    .web {
      display: none;
    }

    article {
      padding: 0.5rem !important;
      width: 6.5rem !important;
      height: 8rem !important;

      img {
        width: 50px !important;
        height: 50px !important;
      }

      p {
        font-size: 14px !important;
      }
    }
  }

  @media (max-width: 363px) {
    article {
      width: 6.3rem !important;
    }
  }
  @media (max-width: 360px) {
    article {
      width: 6.5rem !important;
    }
  }
`;
export default categories;
