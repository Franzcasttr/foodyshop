import { allproducts } from '../data';

import styled from 'styled-components';
import formatPrice from '../../utils/helper';

import { GoPlus } from 'react-icons/go';
const viewAllProducts = () => {
  return (
    <Wrapper className='section-center'>
      <div className='container'>
        <div className='top'>
          <h5>More products</h5>
        </div>
        <div className='content-container'>
          <div className='mobile'>
            {allproducts.map((item, index) => {
              const { name, image, tag, price } = item;
              return (
                <div className='content'>
                  <article key={index}>
                    <img src={image} alt={name} />
                    <p className='name'>{name}</p>
                    <p className='tag'>{tag}</p>
                    <div className='flex'>
                      <h4>{formatPrice(price)}</h4>
                      <button className='btn-web'>Add to cart</button>
                      <button className='btn'>
                        <GoPlus />
                      </button>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .container {
    margin: 2rem 0;
  }
  .btn-web {
    display: none;
  }
  h5 {
    font-size: 18px;
    font-weight: normal;
  }
  .mobile {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    place-items: center;
  }
  .content {
    height: 235.51px;
    padding: 1rem;
    box-shadow: var(--light-shadow);
    border-radius: 1rem;
    width: 100%;

    .name {
      font-size: 15px;
    }
    .tag {
      font-size: 13px;
      margin-top: -1rem;
    }
  }
  article {
    text-align: center;
  }
  img {
    width: 70.89px;
    height: 75.43px;
    text-align: center;
  }
  h4 {
    color: var(--clr-darkgrey);
  }
  .flex {
    display: flex;
    justify-content: space-between;

    button {
      height: 30px;
      border: none;
      color: #fff;
      background: var(--clr-primary-1);
      font-size: 20px;
      padding: 0.3rem;
      border-radius: 7px;
      text-align: center;
    }
  }
  .top {
    display: flex;
    justify-content: space-between;

    .link-btn {
      color: var(--clr-primary-1);
      cursor: pointer;
    }
  }

  @media (min-width: 768px) {
    .container {
      margin: 3rem 0 !important;
    }
    .btn-web {
      display: block;
    }
    .btn {
      display: none;
    }
    h5 {
      font-size: 25px !important;
    }
    .mobile {
      grid-template-columns: repeat(3, 1fr) !important;
      gap: 2rem;
    }
    .content {
      height: 300px !important;
      padding: 0.3rem !important;

      .name {
        font-size: 20px !important;
      }
      .tag {
        font-size: 15px !important;
      }
    }

    img {
      width: 100.89px;
      height: 100.43px;
      text-align: center;
    }
    h4 {
      color: var(--clr-darkgrey);
      font-size: 25px !important;
    }
    .flex {
      display: flex;
      flex-direction: column;
      align-items: center;

      button {
        height: 1% !important;
        padding: 0.5rem !important;
        width: 10rem !important;
        border-radius: 19px;
      }
    }
    .top {
      display: flex;
      justify-content: space-between;

      .link-btn {
        color: var(--clr-primary-1);
        cursor: pointer;
      }
    }
  }
`;

export default viewAllProducts;
