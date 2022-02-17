import { allproducts } from '../data';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import formatPrice from '../../utils/helper';

import { GoPlus } from 'react-icons/go';
const products = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='top'>
          <h5>More products</h5>
          <Link to='/products' className='link-btn'>
            See all
          </Link>
        </div>
        <div className='content-container'>
          <div className='mobile'>
            {allproducts.slice(0, 4).map((item, index) => {
              const { name, image, tag, price } = item;
              return (
                <div className='content'>
                  <article key={index}>
                    <img src={image} alt={name} />
                    <p className='name'>{name}</p>
                    <p className='tag'>{tag}</p>
                    <div className='flex'>
                      <h4>{formatPrice(price)}</h4>
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
  margin: 2rem 0;
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
    width: 99.89px;
    height: 79.43px;
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
    display: none;
  }
`;

export default products;
