import React from "react";
import {
  ArrowToTop,
  Copyright,
  FooterArrowLine,
  FooterLine,
  Small,
  StyledFooter,
} from "../styles/Footer.styled";
import { animateScroll as scroll } from "react-scroll";

const toTop = () => {
  scroll.scrollToTop({ delay: 0, duration: 0 });
};

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <StyledFooter>
      <FooterArrowLine>
        <FooterLine />
        <ArrowToTop title="Back to Top" onClick={toTop}></ArrowToTop>
      </FooterArrowLine>

      <Copyright>
        <small>
          &copy; Copyright {year},{" "}
          <Small
            href="https://github.com/aayush-sharma001"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aayush Sharma
          </Small>
        </small>
      </Copyright>
    </StyledFooter>
  );
};

export default Footer;