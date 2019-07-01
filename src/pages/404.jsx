import React from 'react';
import { graphql, StaticQuery, navigate } from 'gatsby';
import styled from 'styled-components';
import { FaCaretRight } from 'react-icons/fa';
import RentalLayout from '../components/layouts/rental';
import { SectionWrapper } from '../components/shared/general-styling';
import variables from '../theme/variables';
import Seo from '../components/shared/head/seo';

const NOT_FOUND_PAGE_QUERY = graphql`
    {
        siteGeneralInfoContent {
            brooklynbridgebikerent{
                socialMedia{
                    name
                    url
                }
            }
        }
    }
`;

const Wrapper = styled.div`
  min-height: 100vh;
`;
const SectionTitle = styled.h1`
  all: unset;
  color: ${variables.color.green};
  font-size: 15rem;
  line-height: 1;
`;
const SectionSubtitle = styled.h3`
  all: unset;
  color: ${variables.color.darkGray};
  font-size: 5rem;
  line-height: 1;
`;
const SectionListWrapper = styled.div`
  padding: 5rem 0;
`;
const SectionListTitle = styled.h5`
  color: ${variables.color.darkGray};
  font-size: 2rem;
  margin-bottom: 1rem;
`;
const SectionList = styled.a`
  all: unset;
  cursor: pointer;
  font-size: 1.8rem;
  display: flex;
  align-items: center;

  &:hover{
    text-decoration: underline;
  }
  
  svg {
    margin-right: 1rem;
    color: ${variables.color.green};
  }
`;

const renderer = ({ siteGeneralInfoContent }) => {
  const brooklynBridgeFooterData = siteGeneralInfoContent.brooklynbridgebikerent;

  const goTo = page => navigate(page);

  return (
    <RentalLayout
      pageTitle="Page not found"
      footerData={brooklynBridgeFooterData}
    >
      <Seo
        description="Page not found"
        title="Page not found"
      />
      <Wrapper>
        <SectionWrapper
          putPadding
          minHeight="30rem"
          className="grid-y"
        >
          <SectionTitle className="cell">
            404
          </SectionTitle>
          <SectionSubtitle className="cell">
            Sorry, page not found.
          </SectionSubtitle>
          <SectionListWrapper className="cell">
            <SectionListTitle>
              These are the pages available:
            </SectionListTitle>
            <SectionList
              onClick={() => goTo('/')}
            >
              <FaCaretRight />
              Home
            </SectionList>
            <SectionList
              onClick={() => goTo('/bike-rental')}
            >
              <FaCaretRight />
              Bike Rentals
            </SectionList>
            <SectionList
              onClick={() => goTo('/guided-tours')}
            >
              <FaCaretRight />
              Guided Tours
            </SectionList>
            <SectionList
              onClick={() => goTo('/special-offers')}
            >
              <FaCaretRight />
              Special Offers
            </SectionList>
            <SectionList
              onClick={() => goTo('/about')}
            >
              <FaCaretRight />
              Company
            </SectionList>
            <SectionList
              onClick={() => goTo('/about/faq')}
            >
              <FaCaretRight />
              FAQ
            </SectionList>
            <SectionList
              onClick={() => goTo('/about/location')}
            >
              <FaCaretRight />
              Location
            </SectionList>
          </SectionListWrapper>
        </SectionWrapper>
      </Wrapper>
    </RentalLayout>
  );
};

const NotFoundPage = () => <StaticQuery query={NOT_FOUND_PAGE_QUERY} render={props => renderer(props)} />;

export default NotFoundPage;
