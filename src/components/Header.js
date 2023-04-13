import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #fff;
`;

const NavigationItem = styled.a`
  color: #000;
  text-decoration: none;
  font-size: 1rem;
  margin-right: 2rem;
  font-weight: 700;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #f00;
  }
`;

const Logo = styled.img`
  height: 50px;
`;

const Banner = styled.div`
  height: 350px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContactButton = styled.button`
  background-color: #f00;
  color: #fff;
  font-size: 1rem;
  padding: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #fff;
    color: #f00;
  }
`;

const Header = ({ navItems, logoImage, bannerImage, onContactClick }) => {
  return (
    <HeaderContainer>
      <Navigation>
        <Logo src={logoImage} />
        {navItems.map((item, index) => (
          <NavigationItem key={index} href={item.url}>
            {item.label}
          </NavigationItem>
        ))}
      </Navigation>
      <Banner image={bannerImage}></Banner>
      <ContactButton onClick={onContactClick}>Contato</ContactButton>
    </HeaderContainer>
  );
};

export default Header;
