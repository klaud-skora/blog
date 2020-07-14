import React from 'react';import { Link } from 'gatsby';
import styled from 'styled-components';
import { slide as Menu } from 'react-burger-menu';
import variables from '../styles/variables';

const MenuContainer = styled.nav`
  display: none;
  z-index: 999;
  font-weight: 600;
  height: ${variables.height.headerHeight};
  width: 100%;
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
    display: inline-block;
  }
`;


const LinkBox = styled.div`
  display: flex;
  padding: 4px 8px;
  align-items: center;
  height: 30px;
  margin-right: 30px;
  border-radius: 5px;
  
  .link {
    font-weight: 600;
    cursor: pointer;
    font-size: 20px;
    text-shadow: 0.1px 0.5px 2px ${variables.color.mainColor};
    padding: 8px 15px;
    z-index: 999;
  }

  &:hover { background: rgba(35, 0, 0, 0.2); .link {color: #1f3a24}  }
`;

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '30px',
    height: '25px',
    left: '15px',
    top: '22vh'
  },
  bmBurgerBars: {
    background: '#122916'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#000'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
  },
  bmMenu: {
    // background: '#122916',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block',
    marginTop: '4px',
    outline: 'none'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}


const MobileMenu = () => {
  return <MenuContainer>
      <Menu styles={styles}  pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
        <LinkBox><Link to='/nasz-swiat/' className='link'>Nasz świat</Link></LinkBox>
        <LinkBox><Link to='/europa/' className='link'>Europa</Link></LinkBox>
        <LinkBox><Link to='/Poland' className='link'>Polska</Link></LinkBox>
        <LinkBox><Link to='/posts' className='link'>Posty</Link></LinkBox>
      </Menu>
    </MenuContainer>;
};

export default MobileMenu;
