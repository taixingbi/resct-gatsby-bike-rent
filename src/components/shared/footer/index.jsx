import React from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby';
import {
  FaEnvelope,
  FaPhone,
  FaClock,
  FaCaretRight,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaTripadvisor,
  FaYoutube,
} from 'react-icons/fa';
import variables from '../../../theme/variables';
import SocialCard from './SocialCard';
import { NavbarBrandLogo } from '../navigation/navbar-styled';

const Wrapper = styled.div`
  padding-top: 5rem;
  height: 35rem;
  background-color: ${variables.color.darkGray};
  overflow: hidden;
`;
const TradeMarkContent = styled.p`
  display: flex;
  align-items: center;
  font-weight: bold;
  color: white;
  background-color: #292929;
  padding: 0 ${variables.section.paddingLeftRight};

  @media (max-width: 750px) {
    padding: 0 1.5rem;
  }
`;
const FooterContentWrapper = styled.div`
  position: relative;
  padding: 0 ${variables.section.paddingLeftRight};
  overflow: hidden;
  @media (max-width: 750px) {
    padding: 0 1.5rem;
  }
`;
const FooterMenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  color: #8b8b8b;
  text-transform: uppercase;
  ul {
    li {
      list-style: none;
      a {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        cursor: pointer;
        font-size: 1.2rem;
        svg {
          font-size: 1rem;
          margin-right: 1rem;
        }
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
const FooterSocialMediaWrapper = styled.div`
  align-items: center;
`;
const FooterSocialMediaTitle = styled.p`
  color: #8b8b8b;
  font-size: 1.4rem;
`;
const FooterSocialMediaItems = styled.div`
  width: 100%;
  margin: 1rem 0;
  padding: 1.5rem 0;
  border-top: solid 1px #8b8b8b;
  border-bottom: solid 1px #8b8b8b;
  display: flex;
  justify-content: center;
  align-items: center;
  
  svg {
    cursor: pointer;
    font-size: 3rem;
    color: #8b8b8b;
    margin: 0 1rem;
  }
`;
const FooterTitle = styled.h2`
  all: unset;
  font-size: 10.7rem;
  font-weight: bold;
  color: #292929;
  position: absolute;
  text-transform: uppercase;
  bottom: -6rem;
  right: 8.5rem;

  @media (max-width: 750px) {
    display: none;
  }
`;
const ATag = styled.a`
  all: unset;
`;

const Footer = ({ socialMediaData }) => (
  <Wrapper className="grid-y">
    <FooterContentWrapper className="cell medium-10 small-11 grid-x grid-margin-x">
      <div className="cell medium-3 small-12 grid-y">
        <SocialCard
          icon={<FaEnvelope />}
          content="info@bikerent.nyc"
        />
        <SocialCard
          icon={<FaPhone />}
          content="(212) 541-8759"
        />
        <SocialCard
          icon={<FaClock />}
          content="8am - 8pm"
        />
      </div>
      <FooterMenuWrapper className="cell medium-3 hide-for-small-only">
        <ul>
          <li>
            <ATag onClick={() => navigate('/about')}>
              <FaCaretRight />
                Our Company
            </ATag>
          </li>
          <li>
            <ATag onClick={() => navigate('/about/location')}>
              <FaCaretRight />
              Locations
            </ATag>
          </li>
          <li>
            <ATag onClick={() => navigate('/about/faq')}>
              <FaCaretRight />
              Customer Service
            </ATag>
          </li>
          <li>
            <ATag onClick={() => navigate('/about/location')}>
              <FaCaretRight />
              Contact Us
            </ATag>
          </li>
          <li>
            <ATag onClick={() => navigate('/')}>
              <FaCaretRight />
              Home
            </ATag>
          </li>
        </ul>
      </FooterMenuWrapper>
      <FooterSocialMediaWrapper className="cell medium-6 small-12 grid-y">
        <FooterSocialMediaTitle>
              Come visit and follow us on
        </FooterSocialMediaTitle>
        <FooterSocialMediaItems>
          {
            socialMediaData.map((media) => {
              if (media.name === 'facebook') {
                return (
                  <ATag
                    key={media.name}
                    href={media.url}
                    target="_blank"
                  >
                    <FaFacebook />
                  </ATag>
                );
              }
              if (media.name === 'instagram') {
                return (
                  <ATag
                    key={media.name}
                    href={media.url}
                    target="_blank"
                  >
                    <FaInstagram />
                  </ATag>
                );
              }
              if (media.name === 'twitter') {
                return (
                  <ATag
                    key={media.name}
                    href={media.url}
                    target="_blank"
                  >
                    <FaTwitter />
                  </ATag>
                );
              }
              if (media.name === 'instagram') {
                return (
                  <ATag
                    key={media.name}
                    href={media.url}
                    target="_blank"
                  >
                    <FaInstagram />
                  </ATag>
                );
              }
              if (media.name === 'tripadvisor') {
                return (
                  <ATag
                    key={media.name}
                    href={media.url}
                    target="_blank"
                  >
                    <FaTripadvisor />
                  </ATag>
                );
              }
              if (media.name === 'youtube') {
                return (
                  <ATag
                    key={media.name}
                    href={media.url}
                    target="_blank"
                  >
                    <FaYoutube />
                  </ATag>
                );
              }
            })
          }
        </FooterSocialMediaItems>
      </FooterSocialMediaWrapper>
      <FooterTitle>
            bikerent.nyc
      </FooterTitle>
    </FooterContentWrapper>
    <TradeMarkContent className="cell medium-2 small-1">
          © 2014-2019 Bike Rent NYC. All Rights Reserved.
    </TradeMarkContent>
  </Wrapper>
);

export default Footer;
