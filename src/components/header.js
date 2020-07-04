import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from 'styled-components'
import React from "react"

const HeaderComponent = styled.header`
  font-weight: 600;
  height: 60px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  position: fixed;
`;

const Navigation = styled.nav`
  display: flex;

  .link {
    text-decoration: none;
    font-weight: 600;
    color: #fff;
    margin-right: 30px;
    cursor: pointer;
    font-size: 18px;
    text-shadow: 0.1px 0.5px 5px #032a3f
  }

  .link:hover {
    color: #032a3f;
  }
`;

const Header = ({ siteTitle }) => (
  <div>
    <HeaderComponent>
      <Navigation>
        <Link to='/' className="link">{siteTitle}</Link>
        <Link to="/page-2/" className="link">Nasz świat</Link> <br />
        <Link to="/page-2/" className="link">Europa</Link> <br />
        <Link to="/page-2/" className="link">Polska</Link> <br />
        <Link to="/using-typescript/" className="link">Posty</Link>
      </Navigation>
    </HeaderComponent>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
}
Header.defaultProps = {
  siteTitle: ``,
}


export default Header
