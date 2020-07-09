import { Link } from 'gatsby';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import variables from '../styles/variables';

const HeaderComponent = styled.header`
  z-index: 999;
  font-weight: 600;
  height: ${variables.height.headerHeight};
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  padding: 0 10px;
  position: absolute;
  .link {color: ${variables.color.lightColor}};

  ${({ active }) => active && `
    .link { color: ${variables.color.mainColor} }
    border-bottom: 1px solid ${variables.color.mainColor};
    box-shadow: 0 1px 1px ${variables.color.mainColor};
  `}

  &.sticky {
    position: fixed;
    top: 0;
  }

  @media(max-width: 740px) {
    display: none;
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
    font-family: 'Inconsolata', monospace;
    font-weight: 600;
    cursor: pointer;
    font-size: 20px;
    text-shadow: 0.1px 0.5px 2px ${variables.color.mainColor};
    padding: 8px 15px;
    z-index: 999;
  }

  // .logo {
  //   display: none;
  //   width: 100px;
  //   padding: 8px 15px;
  // }
  // ${({ europa }) => europa && `
  //     .logo { display: inline-block }
  //   `}

  &:hover { background: rgba(35, 0, 0, 0.2); .link {color: #1f3a24}  }
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

  useEffect(() => {
    return () => {
      console.log("cleaned up");
    };
  }, []);
  
  return <HeaderComponent className={isSticky ? 'sticky' : null} active={ window.location.pathname === '/' ? false : true} >
      <Navigation>
        {/* <LinkBox europa={ window.location.pathname === '/europa/' ? true : false } ><Link to='/' className='logo' ><img src={logo} alt='logo' /></Link></LinkBox> */}
        <LinkBox><Link to='/nasz-swiat/' className='link'>Nasz świat</Link></LinkBox>
        <LinkBox><Link to='/europa/' className='link'>Europa</Link></LinkBox>
        <LinkBox><Link to='/' className='link'>Polska</Link></LinkBox>
        <LinkBox><Link to='/posts' className='link'>Posty</Link></LinkBox>
      </Navigation>
    </HeaderComponent>;
};

export default Header;
