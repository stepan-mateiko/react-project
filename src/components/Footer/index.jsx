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

import {
  marvel,
  privacy,
  terms,
  license,
  cookie,
  facebookLink,
  instagramLink,
  twitterLink,
  youtubeLink,
  tumblrLink,
  pinterestLink,
} from "../../constants/links";

const Footer = () => {
  return (
    <AllFooter>
      <FooterContainer>
        <LogoLink to={marvel} target="_blank">
          <img src={Logo} alt="logo" width="100%" />
        </LogoLink>
        <Links>
          <TextLink to={privacy} target="_blank">
            Privacy Policy
          </TextLink>
          <TextLink to={terms} target="_blank">
            Terms of Use
          </TextLink>
          <TextLink to={license} target="_blank">
            License agreement
          </TextLink>
          <TextLink to={cookie} target="_blank">
            Cookie Policy
          </TextLink>
        </Links>
        <Icons>
          <p>Follow Marvel</p>
          <IconWrapper>
            <IconLink to={facebookLink} target="_blank">
              <Facebook />
            </IconLink>
            <IconLink to={instagramLink} target="_blank">
              <Instagram />
            </IconLink>
            <IconLink to={twitterLink} target="_blank">
              <Twitter />
            </IconLink>
            <IconLink to={tumblrLink} target="_blank">
              <Tumblr />
            </IconLink>
            <IconLink to={youtubeLink} target="_blank">
              <Youtube />
            </IconLink>
            <IconLink to={pinterestLink} target="_blank">
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
