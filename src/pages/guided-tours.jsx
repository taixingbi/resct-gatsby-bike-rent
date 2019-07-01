import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import _ from 'lodash';
import ScrollReveal from 'scrollreveal';
import { FaCheck } from 'react-icons/fa';
import RentalLayout from '../components/layouts/rental';
import { SectionWrapper } from '../components/shared/general-styling';
import {
  BikeTourRowSectionWrapper,
  SectionTitleContent,
  SectionPContent,
  SectionList,
} from '../components/pages/guided-tours/guided-tours-styled';
import SectionDivider from '../components/shared/section-divider';
import variables from '../theme/variables';
import Seo from '../components/shared/head/seo';
import GuidedTourCard from '../components/pages/guided-tours/GuidedTourCard';
import { goLeft, goRight } from '../helpers/scroll-reveal-options';

const GUIDED_TOURS_QUERY = graphql`
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
            centralparkbikeride
            {
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
        guidedToursContent {
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
                content{
                    headerSection{
                        imageUrl
                        title
                    }
                    guidedToursSection{
                        title
                        description
                        cards {
                            centralPark {
                                image
                                title
                                subtitle
                                peekUrl
                            }
                            brooklynBridge {
                                image
                                title
                                subtitle
                                peekUrl
                            }
                            walkingTour {
                                image
                                title
                                subtitle
                                peekUrl
                            }
                        }
                    }
                    bikeToursSection{
                        brooklynBridgeTour {
                            title
                            description
                            points
                        }
                        centralParkTour {
                            title
                            description
                            points
                        }
                        sideNote
                    }
                    centralParkPedicabTourSection{
                        title
                        description
                        row {
                            columnOne {
                                title
                                description
                            }
                            columnTwo {
                                title
                                description
                            }
                        }
                    }
                    privateBikeTourSection{
                        title
                        description
                    }
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
                content{
                    headerSection{
                        imageUrl
                        title
                    }
                    guidedToursSection{
                        title
                        description
                        cards {
                            centralPark {
                                image
                                title
                                subtitle
                                peekUrl
                            }
                            brooklynBridge {
                                image
                                title
                                subtitle
                                peekUrl
                            }
                            walkingTour {
                                image
                                title
                                subtitle
                                peekUrl
                            }
                        }
                    }
                    bikeToursSection{
                        brooklynBridgeTour {
                            title
                            description
                            points
                        }
                        centralParkTour {
                            title
                            description
                            points
                        }
                        sideNote
                    }
                    centralParkPedicabTourSection{
                        title
                        description
                        row {
                            columnOne {
                                title
                                description
                            }
                            columnTwo {
                                title
                                description
                            }
                        }
                    }
                    privateBikeTourSection{
                        title
                        description
                    }
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
                content{
                    headerSection{
                        imageUrl
                        title
                    }
                    guidedToursSection{
                        title
                        description
                        cards {
                            centralPark {
                                image
                                title
                                subtitle
                                peekUrl
                            }
                            brooklynBridge {
                                image
                                title
                                subtitle
                                peekUrl
                            }
                            walkingTour {
                                image
                                title
                                subtitle
                                peekUrl
                            }
                        }
                    }
                    bikeToursSection{
                        brooklynBridgeTour {
                            title
                            description
                            points
                        }
                        centralParkTour {
                            title
                            description
                            points
                        }
                        sideNote
                    }
                    centralParkPedicabTourSection{
                        title
                        description
                        row {
                            columnOne {
                                title
                                description
                            }
                            columnTwo {
                                title
                                description
                            }
                        }
                    }
                    privateBikeTourSection{
                        title
                        description
                    }
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
                content{
                    headerSection{
                        imageUrl
                        title
                    }
                    guidedToursSection{
                        title
                        description
                        cards {
                            centralPark {
                                image
                                title
                                subtitle
                                peekUrl
                            }
                            brooklynBridge {
                                image
                                title
                                subtitle
                                peekUrl
                            }
                            walkingTour {
                                image
                                title
                                subtitle
                                peekUrl
                            }
                        }
                    }
                    bikeToursSection{
                        brooklynBridgeTour {
                            title
                            description
                            points
                        }
                        centralParkTour {
                            title
                            description
                            points
                        }
                        sideNote
                    }
                    centralParkPedicabTourSection{
                        title
                        description
                        row {
                            columnOne {
                                title
                                description
                            }
                            columnTwo {
                                title
                                description
                            }
                        }
                    }
                    privateBikeTourSection{
                        title
                        description
                    }
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
                content{
                    headerSection{
                        imageUrl
                        title
                    }
                    guidedToursSection{
                        title
                        description
                        cards {
                            centralPark {
                                image
                                title
                                subtitle
                                peekUrl
                            }
                            brooklynBridge {
                                image
                                title
                                subtitle
                                peekUrl
                            }
                            walkingTour {
                                image
                                title
                                subtitle
                                peekUrl
                            }
                        }
                    }
                    bikeToursSection{
                        brooklynBridgeTour {
                            title
                            description
                            points
                        }
                        centralParkTour {
                            title
                            description
                            points
                        }
                        sideNote
                    }
                    centralParkPedicabTourSection{
                        title
                        description
                        row {
                            columnOne {
                                title
                                description
                            }
                            columnTwo {
                                title
                                description
                            }
                        }
                    }
                    privateBikeTourSection{
                        title
                        description
                    }
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
                content{
                    headerSection{
                        imageUrl
                        title
                    }
                    guidedToursSection{
                        title
                        description
                        cards {
                            centralPark {
                                image
                                title
                                subtitle
                                peekUrl
                            }
                            brooklynBridge {
                                image
                                title
                                subtitle
                                peekUrl
                            }
                            walkingTour {
                                image
                                title
                                subtitle
                                peekUrl
                            }
                        }
                    }
                    bikeToursSection{
                        brooklynBridgeTour {
                            title
                            description
                            points
                        }
                        centralParkTour {
                            title
                            description
                            points
                        }
                        sideNote
                    }
                    centralParkPedicabTourSection{
                        title
                        description
                        row {
                            columnOne {
                                title
                                description
                            }
                            columnTwo {
                                title
                                description
                            }
                        }
                    }
                    privateBikeTourSection{
                        title
                        description
                    }
                }
            }
        }
    }
`;

const menuItems = {
  'Bike Tours': '#bike-tours',
  'Pedicab Tour': '#pedicab-tours',
  'Private Tours': '#private-tours',
};
const breadcrumbsItems = {
  Home: '/',
  'Guided Tours': '/guided-tours',
};

const renderer = ({ guidedToursContent, siteGeneralInfoContent }, domain) => {
  const guidedToursData = guidedToursContent[domain];
  const { metaData, content } = guidedToursData;
  const centralParkCard = content.guidedToursSection.cards.centralPark;
  const brooklynBridgeCard = content.guidedToursSection.cards.brooklynBridge;
  const footerData = siteGeneralInfoContent[domain];

  return (
    <RentalLayout
      footerData={footerData}
      pageTitle="Guided Tours"
      menuItems={menuItems}
      breadcrumbsItems={breadcrumbsItems}
      hasSecondaryNavbar
    >
      <Seo
        title={metaData.title}
        description={metaData.description}
        google={metaData.googleProperty}
        facebook={metaData.facebookProperty}
      />

      <SectionWrapper
        putPadding
        minHeight="40rem"
        className="cell grid-x grid-padding-x grid-margin-y"
      >
        {
          _.map(content.guidedToursSection.cards, cardData => (
            <div
              key={cardData.peekUrl}
              className="cell medium-4 small-12"
            >
              <GuidedTourCard content={cardData} />
            </div>
          ))
        }
      </SectionWrapper>

      <SectionWrapper
        centerIt
        minHeight="20rem"
        putPaddingWithoutHeight
        className="cell grid-x grid-padding-x"
      >
        <div className="cell go-left-animation auto">
          <SectionTitleContent
            fontColor={variables.color.green}
            fontSize={variables.typo.lg}
          >
            { content.guidedToursSection.title }
          </SectionTitleContent>
          <SectionPContent
            fontSize={variables.typo.md}
          >
            { content.guidedToursSection.description }
          </SectionPContent>
        </div>
      </SectionWrapper>

      <SectionDivider
        fontSize="13rem"
        fullHeight="9rem"
        bgColor={variables.color.green}
      >
          Bike Tour
      </SectionDivider>

      <SectionWrapper
        id="bike-tours"
        putPadding
        className="cell"
      >
        <BikeTourRowSectionWrapper className="grid-x grid-margin-x">
          <div className="cell medium-6 small-12 go-right-animation">
            <SectionTitleContent
              fontColor={variables.color.green}
              fontSize={variables.typo.lg}
            >
              { content.bikeToursSection.centralParkTour.title }
            </SectionTitleContent>
            <SectionPContent
              fontSize={variables.typo.md}
            >
              { content.bikeToursSection.centralParkTour.description }
            </SectionPContent>
            {
              content.bikeToursSection.centralParkTour.points.map(point => (
                <SectionList key={point}>
                  <FaCheck color={variables.color.green} />
                  { point }
                </SectionList>
              ))
            }
          </div>
          <div className="cell medium-6 small-12">
            <GuidedTourCard
              content={{
                image: centralParkCard.image,
                title: centralParkCard.title,
                subtitle: centralParkCard.subtitle,
                peekUrl: centralParkCard.peekUrl,
              }}
            />
          </div>
        </BikeTourRowSectionWrapper>
        <BikeTourRowSectionWrapper className="grid-x grid-margin-x grid-margin-y">
          <div className="cell medium-6 small-12 go-right-animation">
            <SectionTitleContent
              fontColor={variables.color.green}
              fontSize={variables.typo.lg}
            >
              { content.bikeToursSection.brooklynBridgeTour.title }
            </SectionTitleContent>
            <SectionPContent
              fontSize={variables.typo.md}
            >
              { content.bikeToursSection.brooklynBridgeTour.description }
            </SectionPContent>
            {
              content.bikeToursSection.brooklynBridgeTour.points.map(point => (
                <SectionList key={point}>
                  <FaCheck color={variables.color.green} />
                  { point }
                </SectionList>
              ))
            }
          </div>
          <div className="cell medium-6 small-12">
            <GuidedTourCard
              content={{
                image: brooklynBridgeCard.image,
                title: brooklynBridgeCard.title,
                subtitle: brooklynBridgeCard.subtitle,
                peekUrl: brooklynBridgeCard.peekUrl,
              }}
            />
          </div>
        </BikeTourRowSectionWrapper>
        <SectionTitleContent
          fontColor={variables.color.red}
          fontSize={variables.typo.lg}
          className="go-right-animation"
        >
          { content.bikeToursSection.sideNote }
        </SectionTitleContent>
      </SectionWrapper>

      <SectionDivider
        fontSize="13rem"
        fullHeight="9rem"
        bgColor={variables.color.darkGray}
      >
        <span> Pedicab </span>
          Tour
      </SectionDivider>

      <SectionWrapper
        id="pedicab-tours"
        putPadding
        className="cell grid-y grid-margin-y grid-padding-x"
      >
        <div className="cell medium-4 small-5 grid-y go-right-animation">
          <SectionTitleContent
            fontColor={variables.color.green}
            fontSize={variables.typo.lg}
            className="cell medium-2"
          >
            { content.centralParkPedicabTourSection.title }
          </SectionTitleContent>
          <SectionPContent
            fontSize={variables.typo.md}
            className="cell medium-10"
          >
            { content.centralParkPedicabTourSection.description }
          </SectionPContent>
        </div>
        <div className="cell medium-8 small-7 grid-x">
          <div className="cell medium-6 small-12 grid-y go-right-animation">
            <SectionTitleContent
              fontColor={variables.color.green}
              fontSize={variables.typo.lg}
              className="cell medium-2"
            >
              { content.centralParkPedicabTourSection.row.columnOne.title }
            </SectionTitleContent>
            <SectionPContent
              fontSize={variables.typo.md}
              className="cell medium-10"
            >
              { content.centralParkPedicabTourSection.row.columnOne.description }
            </SectionPContent>
          </div>
          <div className="cell medium-6 small-12 grid-y go-left-animation">
            <SectionTitleContent
              fontColor={variables.color.green}
              fontSize={variables.typo.lg}
              className="cell medium-2"
            >
              { content.centralParkPedicabTourSection.row.columnTwo.title }
            </SectionTitleContent>
            <SectionPContent
              fontSize={variables.typo.md}
              className="cell medium-10"
            >
              { content.centralParkPedicabTourSection.row.columnTwo.description }
            </SectionPContent>
          </div>
        </div>
      </SectionWrapper>

      <SectionDivider
        fontSize="13rem"
        fullHeight="9rem"
        bgColor={variables.color.green}
      >
        <span>PRIVATE</span>
          BIKE TOUR
      </SectionDivider>

      <SectionWrapper
        id="private-tours"
        putPadding
        className="cell grid-x grid-padding-x"
      >
        <div className="cell auto grid-y go-right-animation">
          <SectionTitleContent
            fontColor={variables.color.red}
            fontSize={variables.typo.lg}
            className="cell medium-2"
          >
            { content.privateBikeTourSection.title }
          </SectionTitleContent>
          <SectionPContent
            fontSize={variables.typo.md}
            className="cell medium-10"
          >
            { content.privateBikeTourSection.description }
          </SectionPContent>
        </div>
      </SectionWrapper>
    </RentalLayout>
  );
};

const BikeRentalPage = ({ location }) => {
  const [domain, setDomain] = useState('brooklynbridgebikerent');
  useEffect(() => {
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

  return (
    <StaticQuery query={GUIDED_TOURS_QUERY} render={props => renderer(props, domain)} />
  );
};

BikeRentalPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default BikeRentalPage;
