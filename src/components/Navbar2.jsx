import React from "react";
import styled from "styled-components";
import Burger2 from "../components/Burger2";

import { Link } from "gatsby";

const Nav = styled.nav`
  top: 0;
  left: 0;
  right: 0;
  padding-right: 100px;
  margin-right: 100px;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background-color: #fff;
  z-index: 999;
  font-family: "Roboto", sans-serif;
`;

const Name = styled.div`
  margin-right: 30px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-left: 20px;
  @media only screen and (min-width: 1024px) {
    margin-left: 250px;
  }
`;

const NameTitle = styled.h1`
  font-size: 1.3rem;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  cursor: pointer;
`;

const Navbar2 = (props) => {
  let { language, setLanguage } = props;

  return (
    <Nav>
      <Name>
        <Link to="/">
          <NameTitle>Seb Gourmet</NameTitle>
        </Link>
        <Link to="/">
          <Title>Traiteur</Title>
        </Link>
      </Name>{" "}
      <Burger2 language={language} setLanguage={setLanguage} />
    </Nav>
  );
};

export default Navbar2;
