import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import {
  FaBlind,
  FaComment,
  FaWheelchair,
} from 'react-icons/fa';
import _ from 'lodash';
import RentalLayout from '../components/layouts/rental';
import {
  SectionWrapper,
  ColumnTitle,
} from '../components/shared/general-styling';
import {
  SectionLabel,
  CardWrapper,
  Card,
  CardPosted,
  FitnessTitleWrapper,
  SectionTitle,
  SectionSubtitle,
  FitnessLeftColumnWrapper,
  FitnessRightColumnWrapper,
  SpecialNeedsLeftColumn,
  SpecialNeedsRightIconWrapper,
  SpecialNeedsLeftIconWrapper,
  SpecialOffersDescriptionWrapper,
} from '../components/pages/special-offers/special-offers-styled';
import variables from '../theme/variables';
import SectionDivider from '../components/shared/section-divider';
import Seo from '../components/shared/head/seo';
import TileOffers from '../components/pages/special-offers/TileOffers';

const SPECIAL_OFFERS_CONTENT_QUERY = graphql`
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
        specialOffersContent {
            brooklynbridgebikerent{
                metaData{
                    title
                    description
                    facebookProperty {
                        og_url
                        og_description
                        og_title
                        og_site_name
                    }
                    googleProperty {
                        og_title
                        og_description
                        og_url
                        og_type
                    }
                },
                content{
                    images{
                        tiles {
                            circleLineCruise
                            cicleLineCruise2
                            intrepid
                            metMuseum
                            moma
                            tripleCombo
                        }
                        partners {
                            circleLine
                            grayLine
                            intrepid
                            metMuseum
                            moma
                            nycTaxi
                            onLocationTours
                        }
                    }
                    specialOffersSection{
                        bgImages
                        description
                    }
                    ourPartnerSection{
                        title
                        description
                        images
                    }
                    fitnessSection{
                        title
                        description
                        logo
                        images
                    }
                    specialNeeds{
                        title
                        points
                        images
                    }
                }
            }
            bikewilliamsburgbridge{
                metaData{
                    title
                    description
                    facebookProperty {
                        og_url
                        og_description
                        og_title
                        og_site_name
                    }
                    googleProperty {
                        og_title
                        og_description
                        og_url
                        og_type
                    }
                },
                content{
                    images{
                        tiles {
                            circleLineCruise
                            cicleLineCruise2
                            intrepid
                            metMuseum
                            moma
                            tripleCombo
                        }
                        partners {
                            circleLine
                            grayLine
                            intrepid
                            metMuseum
                            moma
                            nycTaxi
                            onLocationTours
                        }
                    }
                    specialOffersSection{
                        bgImages
                        description
                    }
                    ourPartnerSection{
                        title
                        description
                        images
                    }
                    fitnessSection{
                        title
                        description
                        logo
                        images
                    }
                    specialNeeds{
                        title
                        points
                        images
                    }
                }
            }
            centralparkrentbike{
                metaData{
                    title
                    description
                    facebookProperty {
                        og_url
                        og_description
                        og_title
                        og_site_name
                    }
                    googleProperty {
                        og_title
                        og_description
                        og_url
                        og_type
                    }
                },
                content{
                    images{
                        tiles {
                            circleLineCruise
                            cicleLineCruise2
                            intrepid
                            metMuseum
                            moma
                            tripleCombo
                        }
                        partners {
                            circleLine
                            grayLine
                            intrepid
                            metMuseum
                            moma
                            nycTaxi
                            onLocationTours
                        }
                    }
                    specialOffersSection{
                        bgImages
                        description
                    }
                    ourPartnerSection{
                        title
                        description
                        images
                    }
                    fitnessSection{
                        title
                        description
                        logo
                        images
                    }
                    specialNeeds{
                        title
                        points
                        images
                    }
                }
            }
            centralparkbiketours{
                metaData{
                    title
                    description
                    facebookProperty {
                        og_url
                        og_description
                        og_title
                        og_site_name
                    }
                    googleProperty {
                        og_title
                        og_description
                        og_url
                        og_type
                    }
                },
                content{
                    images{
                        tiles {
                            circleLineCruise
                            cicleLineCruise2
                            intrepid
                            metMuseum
                            moma
                            tripleCombo
                        }
                        partners {
                            circleLine
                            grayLine
                            intrepid
                            metMuseum
                            moma
                            nycTaxi
                            onLocationTours
                        }
                    }
                    specialOffersSection{
                        bgImages
                        description
                    }
                    ourPartnerSection{
                        title
                        description
                        images
                    }
                    fitnessSection{
                        title
                        description
                        logo
                        images
                    }
                    specialNeeds{
                        title
                        points
                        images
                    }
                }
            }
            centralparkbikeride{
                metaData{
                    title
                    description
                    facebookProperty {
                        og_url
                        og_description
                        og_title
                        og_site_name
                    }
                    googleProperty {
                        og_title
                        og_description
                        og_url
                        og_type
                    }
                },
                content{
                    images{
                        tiles {
                            circleLineCruise
                            cicleLineCruise2
                            intrepid
                            metMuseum
                            moma
                            tripleCombo
                        }
                        partners {
                            circleLine
                            grayLine
                            intrepid
                            metMuseum
                            moma
                            nycTaxi
                            onLocationTours
                        }
                    }
                    specialOffersSection{
                        bgImages
                        description
                    }
                    ourPartnerSection{
                        title
                        description
                        images
                    }
                    fitnessSection{
                        title
                        description
                        logo
                        images
                    }
                    specialNeeds{
                        title
                        points
                        images
                    }
                }
            }
            rentalbikenyc{
                metaData{
                    title
                    description
                    facebookProperty {
                        og_url
                        og_description
                        og_title
                        og_site_name
                    }
                    googleProperty {
                        og_title
                        og_description
                        og_url
                        og_type
                    }
                },
                content{
                    images{
                        tiles {
                            circleLineCruise
                            cicleLineCruise2
                            intrepid
                            metMuseum
                            moma
                            tripleCombo
                        }
                        partners {
                            circleLine
                            grayLine
                            intrepid
                            metMuseum
                            moma
                            nycTaxi
                            onLocationTours
                        }
                    }
                    specialOffersSection{
                        bgImages
                        description
                    }
                    ourPartnerSection{
                        title
                        description
                        images
                    }
                    fitnessSection{
                        title
                        description
                        logo
                        images
                    }
                    specialNeeds{
                        title
                        points
                        images
                    }
                }
            }
        }
    }
`;

const menuItems = {
  Combo: '#combo',
  Partner: '#partner',
  Fitness: '#fitness',
  'Special Needs': '#special-needs',
};
const breadcrumbsItems = {
  Home: '/',
  'Special Offers': '/special-offers',
};

const renderer = ({ specialOffersContent, siteGeneralInfoContent }, domain) => {
  const { metaData, content } = specialOffersContent[domain];
  const footerData = siteGeneralInfoContent[domain];

  return (
    <RentalLayout
      menuItems={menuItems}
      breadcrumbsItems={breadcrumbsItems}
      pageTitle="Special Offers"
      hasSecondaryNavbar
      footerData={footerData}
    >
      <Seo
        title={metaData.title}
        description={metaData.description}
        google={metaData.googleProperty}
        facebook={metaData.facebookProperty}
      />
      <SectionWrapper
        id="combo"
        className="cell"
        putPadding
      >
        <div className="show-for-large">
          <TileOffers
            images={content.images.tiles}
            bgImages={content.specialOffersSection.bgImages}
            logoImages={content.ourPartnerSection.images}
          />
          <SpecialOffersDescriptionWrapper className="grid-x">
            <SectionLabel
              fontColor={variables.color.green}
              fontSize={variables.typo.md}
            >
              { content.specialOffersSection.description }
            </SectionLabel>
          </SpecialOffersDescriptionWrapper>
        </div>
        <ColumnTitle
          centerIt
          className="hide-for-large"
        >
          Available in desktop
        </ColumnTitle>
      </SectionWrapper>

      <SectionDivider
        className="cell"
        fontSize="13rem"
        fullHeight="9rem"
        bgColor="#575759"
      >
        <span>Our</span>
          Partners
      </SectionDivider>

      <SectionWrapper
        id="partner"
        className="cell"
        putPadding
      >
        <SectionTitle
          fontColor={variables.color.green}
          spanColor={variables.color.darkGray}
          fontSize={variables.typo.lg}
        >
          { content.ourPartnerSection.title }
        </SectionTitle>
        <SectionLabel
          fontColor={variables.color.green}
          fontSize={variables.typo.md}
        >
          { content.ourPartnerSection.description }
        </SectionLabel>
        <CardWrapper
          className="grid-y"
          bgColor="#575759"
        >
          <CardPosted left>
              Save up
            <span>
            &nbsp;
                20%
            </span>
            <span className="hook" />
          </CardPosted>
          <div className="cell auto grid-x grid-padding-y grid-padding-x">
            { _.map(content.images.partners, (image, key) => (
              <Card key={image} className="cell medium-3 small-3">
                <img
                  src={image}
                  alt={key}
                />
              </Card>
            ))}
          </div>
        </CardWrapper>
      </SectionWrapper>
      <SectionDivider
        className="cell"
        fontSize="13rem"
        fullHeight="9rem"
        bgColor={variables.color.green}
      >
          Fitness
      </SectionDivider>
      <SectionWrapper
        id="fitness"
        className="cell"
        putPadding
      >
        <FitnessTitleWrapper>
          <SectionTitle
            fontColor={variables.color.green}
            spanColor={variables.color.darkGray}
            fontSize={variables.typo.lg}
          >
            { content.fitnessSection.title }
            <span>
            Available
            </span>
          </SectionTitle>
          <SectionSubtitle
            fontColor={variables.color.darkGray}
            fontSize={variables.typo.md}
          >
            { content.fitnessSection.description }
          </SectionSubtitle>
        </FitnessTitleWrapper>
        <CardWrapper
          borderProperty="solid 1px #575759"
          height="25rem"
          className="grid-x grid-padding-x"
        >
          <CardPosted
            right
          >
            Coming
            <span>
            &nbsp;
            Soon
            </span>
            <span className="hook" />
          </CardPosted>
          <FitnessLeftColumnWrapper className="cell medium-4 small-4">
            <img src={content.fitnessSection.images[1]} alt="elliptigo-handle" />
          </FitnessLeftColumnWrapper>
          <FitnessRightColumnWrapper className="cell medium-8 small-8 grid-x">
            <div className="cell medium-6 small-12 elliptigo-title__wrapper">
              <img src={content.fitnessSection.logo} alt="elliptigo-logo" />
            </div>
            <div className="cell medium-6 small-12">
              <img
                className="elliptigo-paddle__img"
                src={content.fitnessSection.images[0]}
                alt="elliptigo-paddle"
              />
            </div>
          </FitnessRightColumnWrapper>
        </CardWrapper>
      </SectionWrapper>
      <SectionDivider
        className="cell"
        fontSize="13rem"
        fullHeight="9rem"
        bgColor={variables.color.darkGray}
      >
        <span>
        Special
        </span>
          Needs
      </SectionDivider>
      <SectionWrapper
        id="special-needs"
        className="cell"
        putPadding
      >
        <SectionTitle
          fontColor={variables.color.green}
          spanColor={variables.color.darkGray}
          fontSize={variables.typo.lg}
        >
          { content.specialNeeds.title }
        </SectionTitle>
        <SectionSubtitle
          fontColor={variables.color.darkGray}
          fontSize={variables.typo.md}
        >
          { content.specialNeeds.points[0] }
        </SectionSubtitle>
        <CardWrapper
          height="25rem"
          className="grid-x"
          borderProperty="solid 1px #575759"
        >
          <CardPosted
            right
            className="hide-for-small-only"
          >
            Coming
            <span>
            &nbsp;
            Soon
            </span>
            <span className="hook" />
          </CardPosted>
          <SpecialNeedsLeftColumn
            className="cell medium-1 small-12 grid-y"
            borderColor="#575759"
            backgroundColor={variables.color.green}
          >
            <SpecialNeedsLeftIconWrapper className="cell medium-3 small-3">
              65+
            </SpecialNeedsLeftIconWrapper>
            <SpecialNeedsLeftIconWrapper className="cell medium-3 small-3">
              <FaWheelchair />
            </SpecialNeedsLeftIconWrapper>
            <SpecialNeedsLeftIconWrapper className="cell medium-3 small-3">
              <FaComment />
            </SpecialNeedsLeftIconWrapper>
            <SpecialNeedsLeftIconWrapper className="cell medium-3 small-3">
              <FaBlind />
            </SpecialNeedsLeftIconWrapper>
          </SpecialNeedsLeftColumn>
          <SpecialNeedsRightIconWrapper className="cell medium-11 small-12 grid-x grid-padding-x">
            {
              content.specialNeeds.images.map((image, i) => (
                <div key={image} className="cell auto">
                  <img src={image} alt={`special-needs-${i}`} />
                </div>
              ))
            }
          </SpecialNeedsRightIconWrapper>
        </CardWrapper>
        <SectionLabel
          fontColor={variables.color.red}
          fontSize={variables.typo.md}
        >
          { content.specialNeeds.points[1] }
        </SectionLabel>
      </SectionWrapper>
    </RentalLayout>
  );
};

const SpecialOffersPage = ({ location }) => {
  const [domain, setDomain] = useState('brooklynbridgebikerent');
  useEffect(() => {
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
    <StaticQuery
      query={SPECIAL_OFFERS_CONTENT_QUERY}
      render={props => renderer(props, domain)}
    />
  );
};

SpecialOffersPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default SpecialOffersPage;
