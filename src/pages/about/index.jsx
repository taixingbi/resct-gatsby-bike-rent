import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery, navigate } from 'gatsby';
import ScrollReveal from 'scrollreveal';
import AboutLayout from '../../components/layouts/about';
import AdultBikeImg from '../../images/bikes/adult-bike-normal.png';
import EBikeImg from '../../images/bikes/e-bike-normal.png';
import {
  SectionWrapper,
  BikeImgWrapper,
  AdultBikeImgTag,
  AdultBikeContentWrapper,
  EBikeImgTag,
  EBikeContentWrapper,
  AboutDescriptionButton,
  BikesSelectionsWrapper,
  BikeSelectionPlus,
  BikeSelectionLabel,
  BikeSelectionCard,
  AboutContentWrapper,
  AboutContentTitle,
  AboutContentSubtitle,
  AboutContentPointsColumn,
} from '../../components/pages/about/about-styled';
import Seo from '../../components/shared/head/seo';
import variables from '../../theme/variables';
import { goLeft, goRight } from '../../helpers/scroll-reveal-options';

const ABOUT_CONTENT_QUERY = graphql`
    {
        siteGeneralInfoContent {
            brooklynbridgebikerent{
                socialMedia{
                    name
                    url
                }
            }
            bikewilliamsburgbridge{
                socialMedia{
                    name
                    url
                }
            }
            centralparkrentbike{
                socialMedia{
                    name
                    url
                }
            }
            centralparkbiketours{
                socialMedia{
                    name
                    url
                }
            }
            centralparkbikeride{
                socialMedia{
                    name
                    url
                }
            }
            rentalbikenyc{
                socialMedia{
                    name
                    url
                }
            }
        }
        aboutContent {
            brooklynbridgebikerent{
                metaData{
                    googleProperty {
                        og_title
                        og_description
                        og_url
                        og_type
                    }
                    facebookProperty {
                        og_url
                        og_description
                        og_title
                        og_site_name
                    }
                    title
                    description
                }
                content {
                    title
                    subtitle
                    points
                    bikeItems
                    accessoryItems
                    freeItems
                }
            }
            bikewilliamsburgbridge{
                metaData{
                    googleProperty {
                        og_title
                        og_description
                        og_url
                        og_type
                    }
                    facebookProperty {
                        og_url
                        og_description
                        og_title
                        og_site_name
                    }
                    title
                    description
                }
                content {
                    title
                    subtitle
                    points
                    bikeItems
                    accessoryItems
                    freeItems
                }
            }
            centralparkrentbike{
                metaData{
                    googleProperty {
                        og_title
                        og_description
                        og_url
                        og_type
                    }
                    facebookProperty {
                        og_url
                        og_description
                        og_title
                        og_site_name
                    }
                    title
                    description
                }
                content {
                    title
                    subtitle
                    points
                    bikeItems
                    accessoryItems
                    freeItems
                }
            }
            centralparkbiketours{
                metaData{
                    googleProperty {
                        og_title
                        og_description
                        og_url
                        og_type
                    }
                    facebookProperty {
                        og_url
                        og_description
                        og_title
                        og_site_name
                    }
                    title
                    description
                }
                content {
                    title
                    subtitle
                    points
                    bikeItems
                    accessoryItems
                    freeItems
                }
            }
            centralparkbikeride{
                metaData{
                    googleProperty {
                        og_title
                        og_description
                        og_url
                        og_type
                    }
                    facebookProperty {
                        og_url
                        og_description
                        og_title
                        og_site_name
                    }
                    title
                    description
                }
                content {
                    title
                    subtitle
                    points
                    bikeItems
                    accessoryItems
                    freeItems
                }
            }
            rentalbikenyc{
                metaData{
                    googleProperty {
                        og_title
                        og_description
                        og_url
                        og_type
                    }
                    facebookProperty {
                        og_url
                        og_description
                        og_title
                        og_site_name
                    }
                    title
                    description
                }
                content {
                    title
                    subtitle
                    points
                    bikeItems
                    accessoryItems
                    freeItems
                }
            }
        }
    }
`;

const renderer = ({ siteGeneralInfoContent, aboutContent }, domain) => {
  const footerData = siteGeneralInfoContent[domain];
  const { content, metaData } = aboutContent[domain];

  return (
    <AboutLayout
      pageTitle={content.title}
      footerData={footerData}
    >
      <Seo
        description={metaData.description}
        title={metaData.title}
        facebook={metaData.facebookProperty}
        google={metaData.googleProperty}
      />
      <SectionWrapper
        minHeight="60rem"
        className="cell grid-x"
      >
        <BikeImgWrapper className="cell medium-6 hide-for-small-only">
          <AdultBikeImgTag
            src={AdultBikeImg}
          />
        </BikeImgWrapper>
        <AdultBikeContentWrapper className="cell medium-6 small-12 grid-y go-left-animation">
          <div className="content__wrapper">
            <h3 className="about__official cell">
                - Official -
            </h3>
            <h2 className="about__title cell">
                BIKE RENTAL COMPANY
            </h2>
            <h2 className="about__subtitle cell">
                of the NYC Parks
            </h2>
          </div>
        </AdultBikeContentWrapper>
      </SectionWrapper>
      <SectionWrapper
        minHeight="60rem"
        className="cell grid-x"
      >
        <EBikeContentWrapper className="cell medium-6 small-12 go-right-animation">
          <div className="content__wrapper grid-y">
            <p className="about__description cell">
                nearly
              {' '}
              <span>3000 RENTALS</span>
              {' '}
                available
            </p>
            <AboutDescriptionButton
              variant="outlined"
              className="cell"
              onClick={() => navigate('/bike-rental')}
            >
                book now
            </AboutDescriptionButton>
          </div>
        </EBikeContentWrapper>
        <BikeImgWrapper className="cell medium-6 hide-for-small-only">
          <EBikeImgTag
            src={EBikeImg}
          />
        </BikeImgWrapper>
      </SectionWrapper>
      <SectionWrapper
        bgColor="#3b3b3b"
        className="cell"
      >
        <BikesSelectionsWrapper className="grid-x grid-margin-y">
          <div className="cell medium-6 small-12 grid-y grid-margin-y">
            <BikeSelectionLabel
              className="cell medium-3 small-3 small"
              color={variables.color.green}
            >
                Biggest Bike RENTAL selection
            </BikeSelectionLabel>
            <div className="cell medium-9 small-9 grid-x grid-margin-x grid-margin-y">
              {
                content.bikeItems.map(item => (
                  <BikeSelectionCard key={item} className="cell medium-4 small-4">
                    { item }
                  </BikeSelectionCard>
                ))
              }
            </div>
          </div>
          <div className="cell medium-1 hide-for-small-only grid-y grid-margin-y">
            <BikeSelectionPlus className="cell medium-3">
                +
            </BikeSelectionPlus>
          </div>
          <div className="cell medium-2 small-12 grid-y grid-margin-y">
            <BikeSelectionLabel
              className="cell medium-3 small-3"
              color={variables.color.green}
            >
                ADD-ons
            </BikeSelectionLabel>
            <div className="cell medium-9 small-9 grid-y grid-margin-x grid-margin-y">
              {
                content.accessoryItems.map(item => (
                  <BikeSelectionCard key={item} className="cell medium-3 small-3">
                    { item }
                  </BikeSelectionCard>
                ))
              }
            </div>
          </div>
          <div className="cell medium-1 hide-for-small-only grid-y grid-margin-y">
            <BikeSelectionPlus className="cell medium-3">
                +
            </BikeSelectionPlus>
          </div>
          <div className="cell medium-2 small-6 small-12 grid-y grid-margin-y">
            <BikeSelectionLabel
              className="cell medium-3 small-3"
              color={variables.color.green}
            >
                Free
            </BikeSelectionLabel>
            <div className="cell medium-9 small-3 grid-y grid-margin-x grid-margin-y">
              {
                content.freeItems.map(item => (
                  <BikeSelectionCard key={item} className="cell medium-3">
                    { item }
                  </BikeSelectionCard>
                ))
              }
            </div>
          </div>
        </BikesSelectionsWrapper>
      </SectionWrapper>
      <SectionWrapper className="cell">
        <AboutContentWrapper className="grid-y grid-margin-y">
          <AboutContentTitle className="cell medium-2 small-12 go-right-animation">
            { content.title }
          </AboutContentTitle>
          <AboutContentSubtitle className="cell medium-2 small-12 go-right-animation">
            { content.subtitle }
          </AboutContentSubtitle>
          <div className="cell medium-8 small-12 grid-x grid-margin-x grid-margin-y go-left-animation">
            {
              content.points.map(point => (
                <AboutContentPointsColumn
                  key={point}
                  className="cell medium-4 small-12 go-top-animation"
                >
                  { point }
                </AboutContentPointsColumn>
              ))
            }
          </div>
        </AboutContentWrapper>
      </SectionWrapper>
    </AboutLayout>
  );
};

const AboutPage = ({ location }) => {
  const [domain, setDomain] = useState('brooklynbridgebikerent');
  useEffect(() => {
    // Animation
    ScrollReveal().reveal('.go-right-animation', goRight);
    ScrollReveal().reveal('.go-left-animation', goLeft);

    // Dynamic content changer
    if (location.hostname.indexOf('brooklynbridgebikerent') > -1) {
      setDomain('brooklynbridgebikerent');
    } else if (location.hostname.indexOf('bikerent') > -1) {
      setDomain('bikerent');
    } else if (location.hostname.indexOf('bikewilliamsburgbridge') > -1) {
      setDomain('bikewilliamsburgbridge');
    } else if (location.hostname.indexOf('centralparkbiketours') > -1) {
      setDomain('centralparkbiketours');
    } else if (location.hostname.indexOf('centralparkbikeride') > -1) {
      setDomain('centralparkbikeride');
    } else if (location.hostname.indexOf('centralparkrentbike') > -1) {
      setDomain('centralparkrentbike');
    } else if (location.hostname.indexOf('rentalbikenyc') > -1) {
      setDomain('rentalbikenyc');
    } else {
      setDomain('brooklynbridgebikerent');
    }
  }, []);

  return <StaticQuery query={ABOUT_CONTENT_QUERY} render={props => renderer(props, domain)} />;
};

AboutPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default AboutPage;
