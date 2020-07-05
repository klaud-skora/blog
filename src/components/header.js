import { Link } from "gatsby"
// import PropTypes from "prop-types"
import styled from 'styled-components'
import React, { useEffect, useState } from 'react';

const HeaderComponent = styled.header`
  z-index: 999;
  font-weight: 600;
  height: 60px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  position: absolute;

  ${({ active }) => active && `
    background: #EAEAEA;
    border-bottom: 1px solid #032a3f;
    box-shadow: 0 15px 15px #032a3f;
  `}

  &.sticky {
    position: fixed;
    top: 0;
  }
`;

const Navigation = styled.nav`
  display: flex;
`;

const LinkBox = styled.div`
  display: flex;
  padding: 4px 8px;
  align-items: center;
  height: 30px;
  margin-right: 30px;
  border-radius: 5px;
  
  .link {
    text-decoration: none;
    font-weight: 600;
    cursor: pointer;
    font-size: 18px;
    text-shadow: 0.1px 0.5px 5px #032a3f;
    padding: 8px 15px;
    color: #fff;
  }

  &:hover { background: rgba(35, 0, 0, 0.2); .link {color: #032a3f;}  }
`;

const Header = () => {
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    let offset = window.pageYOffset;
    let height = window.innerHeight;
    if(offset <= height * 0.25) setSticky(false);
    if(offset > height * 0.25 ) setSticky(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);
  
  return <HeaderComponent className={isSticky ? "sticky" : null} active={ window.location.pathname === '/' ? false : true} >
      <Navigation>
        <LinkBox><Link to="/nasz-swiat/" className="link">Nasz świat</Link></LinkBox>
        <LinkBox><Link to="/europa/" className="link">Europa</Link></LinkBox>
        <LinkBox><Link to="/page-2/" className="link">Polska</Link></LinkBox>
        <LinkBox><Link to="/using-typescript/" className="link">Posty</Link></LinkBox>
      </Navigation>
    </HeaderComponent>;
};

export default Header
