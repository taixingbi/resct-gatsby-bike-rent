import React, {useContext, useEffect, useState} from 'react';
import { graphql, StaticQuery, navigate } from 'gatsby';
import ScrollReveal from 'scrollreveal';
import {
  FaCaretRight,
} from 'react-icons/fa';
import PropTypes from 'prop-types';
import RentalLayout from '../components/layouts/rental';
import { SectionWrapper } from '../components/shared/general-styling';
import {
  BikeRentalSectionTitleContent,
  BikeRentalSectionPContent,
  BikeRentalSectionFreeTitle,
  BikeRentalSectionFreeContentWrapper,
  BikeRentalSectionFreePlusIcon,
  BikeRentalSectionFreeAccessoriesImage,
  BikeRentalSectionFreeDescriptionWrapper,
  BikeRentalSectionAccessoriesDetailsWrapper,
  BikeRentalSectionSpecialOfferCard,
  BikeRentalSectionSpecialOfferWrapper,
  BikeRentalSectionSpecialOfferLabel,
  BikeRentalSectionSpecialOfferCardDescriptionWrapper,
} from '../components/pages/bike-rental/bike-rental-styled';
import FourItemSlider from '../components/shared/item-sliders/FourColumnSlider';
import SectionDivider from '../components/shared/section-divider';
import variables from '../theme/variables';
import {
  goLeft,
  goRight,
} from '../helpers/scroll-reveal-options';
import RentalCard from '../components/shared/cards/RentalCard';
import Seo from '../components/shared/head/seo';
import {Store} from "../App";

const BIKE_RENTAL_QUERY = graphql`
    {
        bikeSliderContent{
            brooklynbridgebikerent {
                name
                price
                imageUrl
                peekUrl
            }
            bikewilliamsburgbridge{
                name
                price
                imageUrl
                peekUrl
            }
            centralparkrentbike{
                name
                price
                imageUrl
                peekUrl
            }
            centralparkbiketours{
                name
                price
                imageUrl
                peekUrl
            }
            centralparkbikeride{
                name
                price
                imageUrl
                peekUrl
            }
            rentalbikenyc{
                name
                price
                imageUrl
                peekUrl
            }
            bikerent{
                name
                price
                imageUrl
            }
        }
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
        accessoriesSliderContent{
            brooklynbridgebikerent {
                name
                imageUrl
                price
                peekUrl
            }
            centralparkrentbike{
                name
                imageUrl
                price
                peekUrl
            }
            centralparkbiketours{
                name
                imageUrl
                price
                peekUrl
            }
            centralparkbikeride{
                name
                imageUrl
                price
                peekUrl
            }
            bikewilliamsburgbridge{
                name
                imageUrl
                price
                peekUrl
            }
            rentalbikenyc{
                name
                imageUrl
                price
                peekUrl
            }
        }
        bikeRentalContent {
            brooklynbridgebikerent {
                metaData {
                    title
                    description
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
                }
                content {
                    headerSection {
                        imageUrl
                        title
                    }
                    bikeRentalSection {
                        columnOne {
                            title
                            points
                        }
                        columnTwo {
                            title
                            description
                            images
                        }
                        columnThree {
                            title
                            description
                        }
                    }
                    accessoriesSection {
                        columnOne {
                            title
                            points
                        }
                        columnTwo {
                            imageUrl
                            label
                            description
                            link
                        }
                    }
                }
            }
            bikewilliamsburgbridge{
                metaData {
                    title
                    description
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
                }
                content {
                    headerSection {
                        imageUrl
                        title
                    }
                    bikeRentalSection {
                        columnOne {
                            title
                            points
                        }
                        columnTwo {
                            title
                            description
                            images
                        }
                        columnThree {
                            title
                            description
                        }
                    }
                    accessoriesSection {
                        columnOne {
                            title
                            points
                        }
                        columnTwo {
                            imageUrl
                            label
                            description
                            link
                        }
                    }
                }
            }
            centralparkrentbike{
                metaData {
                    title
                    description
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
                }
                content {
                    headerSection {
                        imageUrl
                        title
                    }
                    bikeRentalSection {
                        columnOne {
                            title
                            points
                        }
                        columnTwo {
                            title
                            description
                            images
                        }
                        columnThree {
                            title
                            description
                        }
                    }
                    accessoriesSection {
                        columnOne {
                            title
                            points
                        }
                        columnTwo {
                            imageUrl
                            label
                            description
                            link
                        }
                    }
                }
            }
            centralparkbiketours{
                metaData {
                    title
                    description
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
                }
                content {
                    headerSection {
                        imageUrl
                        title
                    }
                    bikeRentalSection {
                        columnOne {
                            title
                            points
                        }
                        columnTwo {
                            title
                            description
                            images
                        }
                        columnThree {
                            title
                            description
                        }
                    }
                    accessoriesSection {
                        columnOne {
                            title
                            points
                        }
                        columnTwo {
                            imageUrl
                            label
                            description
                            link
                        }
                    }
                }
            }
            centralparkbikeride{
                metaData {
                    title
                    description
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
                }
                content {
                    headerSection {
                        imageUrl
                        title
                    }
                    bikeRentalSection {
                        columnOne {
                            title
                            points
                        }
                        columnTwo {
                            title
                            description
                            images
                        }
                        columnThree {
                            title
                            description
                        }
                    }
                    accessoriesSection {
                        columnOne {
                            title
                            points
                        }
                        columnTwo {
                            imageUrl
                            label
                            description
                            link
                        }
                    }
                }
            }
            rentalbikenyc{
                metaData {
                    title
                    description
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
                }
                content {
                    headerSection {
                        imageUrl
                        title
                    }
                    bikeRentalSection {
                        columnOne {
                            title
                            points
                        }
                        columnTwo {
                            title
                            description
                            images
                        }
                        columnThree {
                            title
                            description
                        }
                    }
                    accessoriesSection {
                        columnOne {
                            title
                            points
                        }
                        columnTwo {
                            imageUrl
                            label
                            description
                            link
                        }
                    }
                }
            }
        }
    }
`;

const menuItems = {
  'Bikes Detail': '#bike-rental-description',
  'Accessories Detail': '#bike-rental-accessories',
};
const breadcrumbsItems = {
  Home: '/',
  'Bike Rentals': '/bike-rental',
};

const addBike = (name, state, actions) => {
  actions.setHours(1);

  if (name === 'Adult Bike') {
    actions.setAdultQnty(state.adultQnty + 1);
  } else if (name === 'Child Bike') {
    actions.setChildQnty(state.childQnty + 1);
  } else if (name === 'Tandem Bike') {
    actions.setTandemQnty(state.tandemQnty + 1);
  } else if (name === 'Electric Bike') {
    actions.setEbikeQnty(state.ebikeQnty + 1);
  } else if (name === 'Road Bike') {
    actions.setRoadQnty(state.roadQnty + 1);
  } else if (name === 'Electric Hand Bike') {
    actions.setEHandQnty(state.eHandQnty + 1);
  } else if (name === 'Hand Bike') {
    actions.setEHandQnty(state.handQnty + 1);
  } else if (name === 'Snow Bike') {
    actions.setSnowQnty(state.snowQnty + 1);
  } else if (name === 'Mountain Bike') {
    actions.setMountainQnty(state.mountainQnty + 1);
  }

  return navigate('/checkout/bike-rental');
};

const renderer = (
  {
    bikeSliderContent,
    accessoriesSliderContent,
    bikeRentalContent,
    siteGeneralInfoContent,
  },
  sliderItems,
  domain,
  state,
  actions,
) => {
  const bikeSliderData = bikeSliderContent[domain];
  const accessoriesSliderData = accessoriesSliderContent[domain];
  const contentData = bikeRentalContent[domain];
  const { metaData, content } = contentData;
  const footerData = siteGeneralInfoContent[domain];

  return (
    <RentalLayout
      menuItems={menuItems}
      breadcrumbsItems={breadcrumbsItems}
      pageTitle="Bike Rental"
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
        id="bike-rental-description"
        className="cell grid-y"
        minHeight="40rem"
      >
        <FourItemSlider
          sliderItems={sliderItems}
        >
          {
            bikeSliderData.map(({
              name, price, imageUrl,
            }) => (
              <RentalCard
                key={name}
                url={() => addBike(name, state, actions)}
                price={price}
                imageUrl={imageUrl}
                title={name}
              />
            ))
          }
        </FourItemSlider>
      </SectionWrapper>

      <SectionWrapper
        putPadding
        className="cell grid-x grid-padding-x grid-margin-y"
      >
        <div className="cell go-right-animation medium-6 small-12">
          <BikeRentalSectionTitleContent
            fontColor={variables.color.green}
            fontSize={variables.typo.lg}
          >
            { content.bikeRentalSection.columnOne.title }
          </BikeRentalSectionTitleContent>
          { content.bikeRentalSection.columnOne.points.map(point => (
            <BikeRentalSectionPContent
              key={point}
              fontColor={variables.color.darkGray}
              fontSize={variables.typo.md}
            >
              { point }
            </BikeRentalSectionPContent>
          ))}
        </div>
        <div className="cell medium-4 small-12 grid-y go-left-animation">
          <BikeRentalSectionFreeTitle
            fontColor={variables.color.green}
            fontSize={variables.typo.md}
            className="cell medium-3"
          >
            { content.bikeRentalSection.columnTwo.title }
          </BikeRentalSectionFreeTitle>
          <BikeRentalSectionFreeContentWrapper className="cell auto grid-x">
            <div className="cell medium-3 small-4">
              <BikeRentalSectionFreePlusIcon />
            </div>
            <div className="cell medium-9 small-8 grid-x grid-padding-x">
              { content.bikeRentalSection.columnTwo.images.map(image => (
                <BikeRentalSectionFreeAccessoriesImage
                  key={image}
                  src={image}
                  className="cell auto"
                  alt={image}
                />
              ))}
            </div>
          </BikeRentalSectionFreeContentWrapper>
          <BikeRentalSectionFreeDescriptionWrapper className="cell medium-4">
            { content.bikeRentalSection.columnTwo.description }
          </BikeRentalSectionFreeDescriptionWrapper>
        </div>
        <div className="cell medium-2 small-12 go-left-animation">
          <BikeRentalSectionTitleContent
            fontColor={variables.color.green}
            fontSize={variables.typo.lg}
          >
            { content.bikeRentalSection.columnThree.title }
          </BikeRentalSectionTitleContent>
          <BikeRentalSectionPContent
            fontColor={variables.color.darkGray}
            fontSize={variables.typo.md}
          >
            { content.bikeRentalSection.columnThree.description }
          </BikeRentalSectionPContent>
        </div>
      </SectionWrapper>

      <SectionDivider
        fontSize="13rem"
        fullHeight="9rem"
        bgColor={variables.color.green}
      >
        <span>+Add</span>
          Accessories
      </SectionDivider>

      <SectionWrapper
        id="bike-rental-accessories"
        className="cell grid-y"
        minHeight="40rem"
      >
        <FourItemSlider
          sliderItems={sliderItems}
        >
          {
            accessoriesSliderData.map(
              ({
                name, imageUrl, price,
              }) => (
                <RentalCard
                  key={name}
                  price={price}
                  imageUrl={imageUrl}
                  title={name}
                  url={() => addBike(name, state, actions)}
                />
              ),
            )
          }
        </FourItemSlider>
      </SectionWrapper>

      <SectionWrapper
        putPadding
        className="cell grid-y"
        minHeight="25rem"
      >
        <BikeRentalSectionTitleContent
          className="cell medium-2 go-right-animation"
          fontColor={variables.color.green}
          fontSize={variables.typo.lg}
        >
          { content.accessoriesSection.columnOne.title }
        </BikeRentalSectionTitleContent>
        <BikeRentalSectionAccessoriesDetailsWrapper className="cell medium-10 small-12 grid-x grid-margin-x">
          <div className="cell medium-6 small-12 go-right-animation">
            {
              content.accessoriesSection.columnOne.points.map(point => (
                <BikeRentalSectionPContent
                  key={point}
                  fontColor={variables.color.darkGray}
                  fontSize={variables.typo.md}
                >
                  { point }
                </BikeRentalSectionPContent>
              ))
            }
          </div>
          <BikeRentalSectionSpecialOfferWrapper className="cell medium-6 small-12 grid-y go-left-animation">
            <BikeRentalSectionSpecialOfferLabel
              className="cell medium-2"
              fontSize={variables.typo.md}
            >
              <FaCaretRight />
              { content.accessoriesSection.columnTwo.label }
            </BikeRentalSectionSpecialOfferLabel>
            <BikeRentalSectionSpecialOfferCard className="cell medium-10 grid-x">
              <BikeRentalSectionSpecialOfferCardDescriptionWrapper className="cell medium-8">
                { content.accessoriesSection.columnTwo.description }
              </BikeRentalSectionSpecialOfferCardDescriptionWrapper>
            </BikeRentalSectionSpecialOfferCard>
          </BikeRentalSectionSpecialOfferWrapper>
        </BikeRentalSectionAccessoriesDetailsWrapper>
      </SectionWrapper>
    </RentalLayout>
  );
};

const BikeRentalPage = ({ location }) => {
  const { state, actions } = useContext(Store);
  const [sliderItems, setSliderItems] = useState(4);
  const [domain, setDomain] = useState('brooklynbridgebikerent');

  useEffect(() => {
    // Check WINDOW WIDTH
    if (window.innerWidth < 480) {
      setSliderItems(1);
    } else if (window.innerWidth > 480 && window.innerWidth < 750) {
      setSliderItems(2);
    } else if (window.innerWidth > 750 && window.innerWidth < 980) {
      setSliderItems(3);
    } else if (window.innerWidth > 980) {
      setSliderItems(4);
    }

    // Window Event Listener
    window.onresize = () => {
      // Slider Item options
      if (window.innerWidth < 480) {
        setSliderItems(1);
      } else if (window.innerWidth > 480 && window.innerWidth < 750) {
        setSliderItems(2);
      } else if (window.innerWidth > 750 && window.innerWidth < 980) {
        setSliderItems(3);
      } else if (window.innerWidth > 980) {
        setSliderItems(4);
      }
    };

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

    // Animation
    ScrollReveal().reveal('.go-right-animation', goRight);
    ScrollReveal().reveal('.go-left-animation', goLeft);

    return () => {
      window.onresize = null;
    };
  }, []);

  return (
    <StaticQuery
      query={BIKE_RENTAL_QUERY}
      render={props => renderer(props, sliderItems, domain, state, actions)}
    />
  );
};

BikeRentalPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default BikeRentalPage;
