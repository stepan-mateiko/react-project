import React from "react";

import {
  Facebook,
  Instagram,
  Twitter,
  Tumblr,
  Youtube,
  Pinterest,
} from "../Icon";
import Logo from "../../assets/Logo.svg.png";
import {
  AllFooter,
  FooterContainer,
  LogoLink,
  Links,
  TextLink,
  Icons,
  IconWrapper,
  IconLink,
  Copyright,
} from "./styles";

const Footer = () => {
  return (
    <AllFooter>
      <FooterContainer>
        <LogoLink to={"https://www.marvel.com/"}>
          <img src={Logo} alt="logo" width="100%" />
        </LogoLink>
        <Links>
          <TextLink
            to={
              "https://privacy.thewaltdisneycompany.com/en/current-privacy-policy/"
            }
            target="_blank"
          >
            Privacy Policy
          </TextLink>
          <TextLink
            to={`https://disneytermsofuse.com/english-united-kingdom/`}
            target="_blank"
          >
            Terms of Use
          </TextLink>
          <TextLink
            to={"https://www.marvel.com/corporate/license_tou"}
            target="_blank"
          >
            License agreement
          </TextLink>
          <TextLink
            to={
              "https://privacy.thewaltdisneycompany.com/en/current-privacy-policy/cookies-policy"
            }
            target="_blank"
          >
            Cookie Policy
          </TextLink>
        </Links>
        <Icons>
          <p>Follow Marvel</p>
          <IconWrapper>
            <IconLink to={"http://facebook.com/marvel"} target="_blank">
              <Facebook />
            </IconLink>
            <IconLink to={"http://instagram.com/marvel"} target="_blank">
              <Instagram />
            </IconLink>
            <IconLink to={"http://twitter.com/marvel"} target="_blank">
              <Twitter />
            </IconLink>
            <IconLink
              to={"http://marvelentertainment.tumblr.com/"}
              target="_blank"
            >
              <Tumblr />
            </IconLink>
            <IconLink to={"http://youtube.com/marvel"} target="_blank">
              <Youtube />
            </IconLink>
            <IconLink
              to={"https://www.pinterest.com/marvelofficial"}
              target="_blank"
            >
              <Pinterest />
            </IconLink>
          </IconWrapper>
        </Icons>
      </FooterContainer>
      <Copyright>"Data provided by Marvel. © 2014 Marvel".</Copyright>
    </AllFooter>
  );
};

export default Footer;
