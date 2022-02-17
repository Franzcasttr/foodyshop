import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { GoSettings } from 'react-icons/go';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Wrapper className='section-center section2'>
      <div className='container'>
        <div className='user-login'>
          <div className='navi'>
            <Link to='/' className='user-btn'>
              Home
            </Link>
            <Link to='/products' className='user-btn'>
              Products
            </Link>
          </div>
          <div className='navi'>
            <Link className='user-btn' to='/login'>
              Login
            </Link>
            <Link className='user-btn' to='/singup'>
              Signup
            </Link>
          </div>
        </div>
        <div className='nav-container'>
          <Link to='/'>
            <h1 className='logo'>Foody</h1>
          </Link>
          <div className='input'>
            <input type='text' className='search' placeholder='Search Store' />
            <div className='mobile-filter'>
              <button className='filter'>
                <GoSettings />
              </button>
            </div>
            <button className='search-btn'>Search</button>
          </div>
          <Link to='/cart' className='btn'>
            <FaShoppingBag className='btn-cart' />
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  overflow: hidden;
  .logo {
    display: grid;
    place-items: center;
    padding: 1rem;
    font-size: 24px;
    font-weight: bold;
    color: var(--clr-primary-1);
  }
  .input {
    display: grid;
    place-items: center;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 1rem;

    .filter {
      font-size: 25px;
      color: var(--clr-primary-1);
      border: none;
      background: none;
      outline: none;
    }
    .search {
      width: 290px;
      height: 45px;
      border: none;
      border-radius: 15px;
      box-shadow: var(--shadow);
      padding: 1rem;
      font-size: 17px;
      outline: none;
      letter-spacing: 1px;
      font-family: 'Poppins';
      margin-left: 1rem;
    }
    .search-btn {
      display: none;
    }
  }
  .btn {
    display: none;
  }
  .user-login {
    display: none;
  }
  @media (max-width: 360px) {
    .search {
      width: 270px !important;

      margin-left: 0.5rem !important;
    }
  }
  @media (min-width: 768px) {
    .nav-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .user-login {
      display: flex;
      justify-content: space-between;
      gap: 2rem;
      margin: 1rem 0;

      .user-btn {
        color: var(--clr-primary-1);
        font-size: 18px;
        cursor: pointer;
        font-weight: bold;
      }
    }
    .navi {
      display: inline-flex;
      gap: 2rem;
    }
    .logo {
      font-size: 24px;
      padding: 0 !important;
      cursor: pointer;
    }
    .input {
      display: flex !important;
      gap: 1rem;
    }
    .search-btn {
      display: flex !important;
      width: 80px;
      height: 50px;
      border-radius: 15px;
      align-items: center;
      padding: 1rem;
      font-size: 16px;
      border: none;
      color: #fff;
      background: var(--clr-primary-2);
      cursor: pointer;
    }
    .search {
      width: 350px !important;
      height: 57px !important;
      background: #fff !important;
      border: 2px solid var(--clr-primary-1) !important;
      font-size: 18px !important;
      box-shadow: none !important;
    }

    .btn {
      display: inline-flex;
      border: none;
      background: none;
      cursor: pointer;
      margin-top: -1rem;
    }
    .btn-cart {
      width: 30px;
      height: 40px;
      color: var(--clr-primary-2);
    }
    .filter {
      display: none;
    }
  }

  @media (min-width: 1024px) {
    .search {
      width: 600px !important;
    }

    /* .btn {
      display: inline-flex;
      border: none;
      background: none;
      cursor: pointer;
      margin-top: -1rem;
    }
    .btn-cart {
      width: 30px;
      height: 40px;
      color: var(--clr-primary-2);
    } */
  }
`;
export default Navbar;
