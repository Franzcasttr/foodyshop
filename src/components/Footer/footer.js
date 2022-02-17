import React from 'react';
//home
import { AiOutlineHome } from 'react-icons/ai';

//product
import { BsBarChartLine } from 'react-icons/bs';
import { BsFillHeartFill } from 'react-icons/bs';

import { IoBagOutline } from 'react-icons/io5';
import { AiOutlineHeart } from 'react-icons/ai';
import { VscAccount } from 'react-icons/vsc';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { Bottle, Discount, Truck } from '../../assets';

const Footer = () => {
  // const [toggle, setToggle] = useState(true);
  // const toggleLink = (index) => {
  //   // setToggle(index)
  //   console.log(index);
  // };

  return (
    <Wrapper>
      <div className='mobile'>
        <NavLink to='/' className='clr'>
          <AiOutlineHome />
        </NavLink>

        <NavLink to='/products' className='clr'>
          <BsBarChartLine />
        </NavLink>
        <NavLink to='/cart' className='clr'>
          <IoBagOutline />
        </NavLink>
        <NavLink to='/favorites' className='clr'>
          <AiOutlineHeart />
        </NavLink>
        <NavLink to='/profile' className='clr'>
          <VscAccount />
        </NavLink>
      </div>
      {/* //web */}

      <div className='web section-center'>
        <div className='assurance'>
          <div className='delivery'>
            <div className='image'>
              <img src={Truck} alt='delivery' />
            </div>
            <div className='desc'>
              <h4>Next Day Delivery </h4>
              <p>Next day delivery on your door step.</p>
            </div>
          </div>
          <div className='satisfaction'>
            <div className='image'>
              <img src={Bottle} alt='bottle' />
            </div>
            <div className='desc'>
              <h4>100% Satisfaction </h4>
              <p>We value our customer with healthy and fresh products.</p>
            </div>
          </div>
          <div className='discount'>
            <div className='image'>
              <img src={Discount} alt='discount' />
            </div>
            <div className='desc'>
              <h4>Greate Discounts</h4>
              <p>We offer greate discounts for our costumer.</p>
            </div>
          </div>
        </div>

        {/* about */}
        <div className='about'>
          <div className='about-us'>
            <h1>About Food Denx</h1>
            <Link className='link' to='/about'>
              About Us
            </Link>
            <Link className='link' to='/policie'>
              Food Denx policie
            </Link>
            <Link className='link' to='/privacy'>
              Food Denx Privacy
            </Link>
            <Link className='link' to='/terms'>
              Terms & Conditions
            </Link>
            <Link className='link' to='/blog'>
              Food Denx Blog
            </Link>
          </div>

          {/*  payment*/}
          <div className='payment'>
            <h1>Payment Methods</h1>
            <div className='payment-flex'>
              <img
                src='https://res.cloudinary.com/dyvisacbu/image/upload/v1644926132/food-denx/payment/visa_mwdph0.png'
                alt='visa'
              />
              <img
                src='https://res.cloudinary.com/dyvisacbu/image/upload/v1644926247/food-denx/payment/gcash_gz6t51.png'
                alt='gcash'
              />
            </div>
            <div className='payment-flex'>
              <img
                src='https://res.cloudinary.com/dyvisacbu/image/upload/v1644926132/food-denx/payment/amex_amjdwb.png'
                alt='Amex'
              />
              <img
                src='https://res.cloudinary.com/dyvisacbu/image/upload/v1644926132/food-denx/payment/jcb_qvznfg.png'
                alt='JCB'
              />
            </div>
          </div>
          {/* follow us */}
          <div className='follow-us'>
            <h1>Follow Us</h1>
            <a href='https://google.com'>Facebook</a>
            <a href='https://google.com'>Instagram</a>
            <a href='https://google.com'>Twitter</a>
            <a href='https://google.com'>Linkedin</a>
          </div>
        </div>
        <p className='copyright'>
          Made And Craft With <BsFillHeartFill className='red' /> By : Francis
          Castro 2022
        </p>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  position: sticky;
  bottom: 0;

  .mobile {
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.7rem;
    box-shadow: var(--dark-shadow);
    border-radius: 1rem 1rem 0 0;
    background: #fff;
    padding: 0.5rem 2rem;
    background: #eee;
  }

  .active {
    color: var(--clr-primary-1) !important;
  }
  .clr {
    color: var(--clr-primary-5);
  }
  .web {
    display: none;
  }
  @media (min-width: 768px) {
    position: relative !important;
    margin-top: 2rem;
    .mobile {
      display: none;
    }

    .web {
      display: block !important;
    }
    .assurance {
      display: flex;

      justify-content: space-between;
      padding: 1rem;
      background: var(--clr-secondary-2);

      img {
        width: 60px;
        height: 60px;
        padding: 0.5rem;
        border: 1px solid var(--clr-primary-1);
        border-radius: 50%;
      }
      .delivery {
        display: flex;
        gap: 1rem;
      }
      .satisfaction {
        display: flex;
        gap: 1rem;
      }
      .discount {
        display: flex;
        gap: 1rem;
      }

      h4 {
        font-size: 18px;
      }
      p {
        font-size: 14px;
      }
    }
    .about {
      padding: 5rem 0;
      color: var(--clr-darkgrey);
      display: flex;
      justify-content: space-between;
      .about-us {
        display: grid;
        grid-template-columns: 1fr;
        line-height: 2rem;

        h1 {
          font-size: 25px;
          color: var(--clr-primary-1);
        }
        .link {
          color: var(--clr-darkgrey);
          cursor: pointer;
          font-size: 18px;
        }
      }
      //payment
      .payment {
        display: grid;
        grid-template-columns: 1fr;
        line-height: 2rem;
        text-align: center;

        h1 {
          font-size: 25px;
          color: var(--clr-primary-1);
        }
        img {
          width: 100px;
          text-align: center;
        }
      }

      //follow us
      .follow-us {
        display: grid;
        grid-template-columns: 1fr;
        line-height: 2rem;
        h1 {
          font-size: 25px;
          color: var(--clr-primary-1);
        }
        a {
          font-size: 18px;
          color: var(--clr-darkgrey);
          cursor: pointer;
        }
      }
    }
    .copyright {
      text-align: center;
      .red {
        color: red;
      }
    }
  }
  @media (min-width: 1024px) {
    .assurance {
      display: flex;

      justify-content: space-between;
      padding: 1rem;
      background: var(--clr-secondary-2);

      img {
        width: 60px;
        height: 60px;
        padding: 0.5rem;
        border: 1px solid var(--clr-primary-1);
        border-radius: 50%;
      }
      .delivery {
        display: flex;
        gap: 1rem;
      }
      .satisfaction {
        display: flex;
        gap: 1rem;
      }
      .discount {
        display: flex;
        gap: 1rem;
      }

      h4 {
        font-size: 18px;
      }
      p {
        font-size: 14px;
      }
    }
    .about {
      padding: 5rem 5rem !important;
      .about-us {
        h1 {
          font-size: 30px !important;
        }
      }
      //payment
      .payment {
        h1 {
          font-size: 30px;
        }
      }

      //follow us
      .follow-us {
        h1 {
          font-size: 30px !important;
        }
      }
    }
  }
`;
export default Footer;
