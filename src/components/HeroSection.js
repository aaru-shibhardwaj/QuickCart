import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const HeroSection = ({ myData }) => {
  const { name } = myData;

  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to </p>
            <h1> {name} </h1>
            <p>
            At QuickCart, we’re committed to bringing you the best selection of products at unbeatable prices. Whether you’re looking for the latest trends, everyday essentials, or unique finds, our diverse collection has something for everyone.
            </p>
            <NavLink>
              <Button className="description">show now</Button>
            </NavLink>
          </div>
         
          <div className="hero-section-image">
            <figure>
              <img
                src="images/hero.jpg"
                alt="hero-section"
                className="img-style"
              />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 12rem 0;

  img {
    min-width: 10rem;
    height: 10rem;
    
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
      font-family: "Kanit", system-ui;
    }

    h1 {
      text-transform: capitalize;
      color:rgb(89 13 4);
      font-family: "Great Vibes", cursive;
    }

    .intro-data {
      margin-bottom: 0;
      font-family: "Kanit", system-ui;
     
    }
    .description{
      background-color:rgb(89 13 4 / 74%);
      font-family: "Kanit", system-ui;
      border-radius: 10px;
      
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
    border-radius:10px;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default HeroSection;
