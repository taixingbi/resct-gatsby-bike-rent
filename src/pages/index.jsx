import React, {
  useContext,
  useEffect,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery, navigate } from 'gatsby';
import ScrollReveal from 'scrollreveal';
import { FaCheck, FaChevronRight } from 'react-icons/fa';
import DefaultLayout from '../components/layouts/default';
import HeaderSlider from '../components/shared/header-slider';
import SectionDivider from '../components/shared/section-divider';
import FourColumnSlider from '../components/shared/item-sliders/FourColumnSlider';
import variables from '../theme/variables';
import {
  SectionWrapper,
} from '../components/shared/general-styling';
import {
  HeaderDivider,
  HeaderNotificationWrapper,
  HeaderPostCard,
  HeaderPostCardWrapper,
  HeaderTitle,
  HeaderWrapper,
  HomeBikeRentalBikeImage,
  HomeBikeRentalBikeImageWrapper,
  HomeWPBikeRentalContentColumnOneWrapper,
  HomeWPBikeRentalContentWrapper,
  SectionButton,
  SpecialOffersContentWrapper,
  WPGuidedTourContentWrapper,
  WPImageCard,
  WPImageCardButton,
} from '../components/pages/home/home-styled';
import {
  goLeft,
  goRight,
} from '../helpers/scroll-reveal-options';
import RentalCard from '../components/shared/cards/RentalCard';
import HomeLocation from '../components/pages/home/HomeLocation';
import Seo from '../components/shared/head/seo';
import { Store } from '../App';

const HOME_QUERY = graphql`{
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
  }
  homeContent {
      brooklynbridgebikerent {
            metaData {
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
            }
            content {
                headerSection {
                    title
                    notification
                    images
                    divider
                    rentBikeUrl
                }
                guidedToursSection {
                    columnOne{
                        image
                        title
                        subtitle
                        bookNowUrl
                    }
                    columnTwo {
                        title
                        description
                        points
                    }
                    seeAllToursUrl
                }
                bikeRentalsSection {
                    title
                    imageBike
                    points
                    bookRightAway
                }
                specialOffersSection {
                    title
                    description
                }
                locationSection {
                    title
                    description
                }
            }
        }
      bikewilliamsburgbridge {
            metaData {
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
            }
            content {
                headerSection {
                    title
                    notification
                    images
                    divider
                    rentBikeUrl
                }
                guidedToursSection {
                    columnOne{
                        image
                        title
                        subtitle
                        bookNowUrl
                    }
                    columnTwo {
                        title
                        description
                        points
                    }
                    seeAllToursUrl
                }
                bikeRentalsSection {
                    title
                    imageBike
                    points
                    bookRightAway
                }
                specialOffersSection {
                    title
                    description
                }
                locationSection {
                    title
                    description
                }
            }
        }
      centralparkrentbike {
            metaData {
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
            }
            content {
                headerSection {
                    title
                    notification
                    images
                    divider
                    rentBikeUrl
                }
                guidedToursSection {
                    columnOne{
                        image
                        title
                        subtitle
                        bookNowUrl
                    }
                    columnTwo {
                        title
                        description
                        points
                    }
                    seeAllToursUrl
                }
                bikeRentalsSection {
                    title
                    imageBike
                    points
                    bookRightAway
                }
                specialOffersSection {
                    title
                    description
                }
                locationSection {
                    title
                    description
                }
            }
        }
      centralparkbikeride {
            metaData {
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
            }
            content {
                headerSection {
                    title
                    notification
                    images
                    divider
                    rentBikeUrl
                }
                guidedToursSection {
                    columnOne{
                        image
                        title
                        subtitle
                        bookNowUrl
                    }
                    columnTwo {
                        title
                        description
                        points
                    }
                    seeAllToursUrl
                }
                bikeRentalsSection {
                    title
                    imageBike
                    points
                    bookRightAway
                }
                specialOffersSection {
                    title
                    description
                }
                locationSection {
                    title
                    description
                }
            }
        }
      centralparkbiketours {
            metaData {
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
            }
            content {
                headerSection {
                    title
                    notification
                    images
                    divider
                    rentBikeUrl
                }
                guidedToursSection {
                    columnOne{
                        image
                        title
                        subtitle
                        bookNowUrl
                    }
                    columnTwo {
                        title
                        description
                        points
                    }
                    seeAllToursUrl
                }
                bikeRentalsSection {
                    title
                    imageBike
                    points
                    bookRightAway
                }
                specialOffersSection {
                    title
                    description
                }
                locationSection {
                    title
                    description
                }
            }
        }
      rentalbikenyc {
            metaData {
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
            }
            content {
                headerSection {
                    title
                    notification
                    images
                    divider
                    rentBikeUrl
                }
                guidedToursSection {
                    columnOne{
                        image
                        title
                        subtitle
                        bookNowUrl
                    }
                    columnTwo {
                        title
                        description
                        points
                    }
                    seeAllToursUrl
                }
                bikeRentalsSection {
                    title
                    imageBike
                    points
                    bookRightAway
                }
                specialOffersSection {
                    title
                    description
                }
                locationSection {
                    title
                    description
                }
            }
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
}`;

const bikeSaleTitle = (domain) => {
  if (domain === 'centralparkrentbike') return 'get up to 10% off';
  if (domain === 'bikerent') return 'get up to 10% off';
  if (domain === 'bikewilliamsburgbridge') return 'get up to 10% off';
  if (domain === 'centralparkbiketours') return 'get up to 30% off';
  if (domain === 'centralparkbikeride') return 'get up to 30% off';
  if (domain === 'rentalbikenyc') return 'get up to 70% off';
  if (domain === 'brooklynbridgebikerent') return 'get up to 30% off';
  return 'list of all the bikes available';
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

const renderer = ({
  homeContent,
  bikeSliderContent,
  siteGeneralInfoContent,
},
sliderItems,
domain,
state,
actions) => {
  const { metaData, content } = homeContent[domain];
  const {
    bikeRentalsSection,
    guidedToursSection,
    headerSection,
    locationSection,
    specialOffersSection,
  } = content;
  const brooklynBridgeBikesSliderData = bikeSliderContent[domain];
  const brooklynBridgeFooterData = siteGeneralInfoContent[domain];

  return (
    <DefaultLayout
      footerData={brooklynBridgeFooterData}
    >
      <Seo
        title={metaData.title}
        description={metaData.description}
        google={metaData.googleProperty}
        facebook={metaData.facebookProperty}
      />
      <HeaderWrapper
        className="cell"
        minHeight={variables.section.minHeight}
      >
        <HeaderNotificationWrapper
          dangerouslySetInnerHTML={{ __html: headerSection.notification }}
        />
        <HeaderSlider images={headerSection.images} />
        <HeaderTitle
          headerFontSize={variables.section.headerTitleSize}
        >
          Rentals
          <span> & </span>
          Tours
        </HeaderTitle>
        <HeaderPostCardWrapper>
          <HeaderPostCard onClick={() => navigate('/checkout/bike-rental')}>
            <span className="clipper" />
            <FaChevronRight />
            rent a BIKE NOW
          </HeaderPostCard>
        </HeaderPostCardWrapper>
        <HeaderDivider
          bgColor={variables.color.darkGray}
        >
          { headerSection.divider }
        </HeaderDivider>
      </HeaderWrapper>

      <SectionWrapper
        className="cell"
        minHeight="35rem"
        centerIt
      >
        <FourColumnSlider
          title={bikeSaleTitle(domain)}
          titleColor={variables.color.red}
          showPointer
          sliderItems={sliderItems}
        >
          {
            brooklynBridgeBikesSliderData.map(({
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
        </FourColumnSlider>
      </SectionWrapper>

      <SectionDivider
        className="cell"
        fullHeight={variables.section.dividerHeight}
        bgColor={variables.color.green}
      >
        Guided Tours
      </SectionDivider>

      <SectionWrapper
        putPadding
        className="cell"
      >
        <WPGuidedTourContentWrapper
          className="grid-x grid-margin-x"
          contentColor={variables.color.darkGray}
        >
          <WPImageCard
            className="wp__picture cell medium-6 small-12"
            imageUrl={guidedToursSection.columnOne.image}
          >
            <div className="wp__image-card grid-y">
              <h2 className="cell">
                { guidedToursSection.columnOne.title }
              </h2>
              <h4 className="cell">
                { guidedToursSection.columnOne.subtitle }
              </h4>
              <WPImageCardButton
                className="cell"
                variant="outlined"
                href={guidedToursSection.columnOne.bookNowUrl}
              >
                Book Now
              </WPImageCardButton>
            </div>
          </WPImageCard>
          <div className="wp__content go-left-animation cell medium-6 small-12">
            <h4 className="wp__content-title">
              { guidedToursSection.columnTwo.title }
            </h4>
            <p className="wp__content-description">
              { guidedToursSection.columnTwo.description }
            </p>
            { guidedToursSection.columnTwo.points.map(point => (
              <p
                key={point}
                className="wp__content-list"
              >
                <FaCheck color={variables.color.green} />
                { point }
              </p>
            ))}
          </div>
        </WPGuidedTourContentWrapper>
        <SectionButton
          givemargintop="true"
          href={guidedToursSection.seeAllToursUrl}
          variant="outlined"
          fontSize={variables.typo.lg}
          fontcolor={variables.color.green}
        >
          <FaChevronRight />
          See All Guided Tours
        </SectionButton>
      </SectionWrapper>

      <SectionDivider
        fullHeight={variables.section.dividerHeight}
        bgColor={variables.color.darkGray}
      >
        Bike Rentals
      </SectionDivider>

      <SectionWrapper
        putPadding
        className="cell grid-x"
        minHeight="70rem"
      >
        <HomeWPBikeRentalContentColumnOneWrapper className="cell medium-6 grid-y go-right-animation">
          <HomeWPBikeRentalContentWrapper
            className="cell medium-6"
            textTitleColor={variables.color.green}
            titleSize={variables.typo['xxx-lg']}
            textPColor={variables.color.darkGray}
            textPSize="1.8rem"
          >
            <h4> Rent A Bike </h4>
            {
              bikeRentalsSection.points.map(point => (
                <p key={point}>
                  { point }
                </p>
              ))
            }
          </HomeWPBikeRentalContentWrapper>
          <div className="cell home-bike-rental__button-wrapper grid-x">
            <SectionButton
              className="cell auto"
              variant="contained"
              fontSize={variables.typo.md}
              fontcolor="white"
              bgcolor={variables.color.darkGray}
              onClick={() => navigate('/bike-rental')}
            >
              See All Bikes
            </SectionButton>
            <SectionButton
              className="cell auto"
              variant="outlined"
              fontSize={variables.typo.md}
              fontcolor={variables.color.darkGray}
              onClick={() => navigate('/checkout/bike-rental')}
            >
                Book Right Away
            </SectionButton>
          </div>
        </HomeWPBikeRentalContentColumnOneWrapper>
        <HomeBikeRentalBikeImageWrapper className="cell medium-6 hide-for-small-only">
          <HomeBikeRentalBikeImage
            src={bikeRentalsSection.imageBike}
            alt="home-adult-bike-img"
          />
        </HomeBikeRentalBikeImageWrapper>
      </SectionWrapper>

      <SectionDivider
        fullHeight={variables.section.dividerHeight}
        bgColor={variables.color.green}
      >
        Special Offers
      </SectionDivider>
      <SectionWrapper
        className="cell grid-x grid-padding-x"
        putPadding
      >
        <div className="cell auto hide-for-small-only" />
        <SpecialOffersContentWrapper
          className="cell auto grid-y"
          titleColor={variables.color.green}
        >
          <h2>
            { specialOffersSection.title }
          </h2>
          <p>
            { specialOffersSection.description }
          </p>
        </SpecialOffersContentWrapper>
      </SectionWrapper>
      <SectionWrapper
        putPadding
        className="cell grid-y"
        minHeight="35rem"
      >
        <HomeLocation locationData={locationSection} />
      </SectionWrapper>
    </DefaultLayout>
  );
};

const HomePage = ({ location }) => {
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
      query={HOME_QUERY}
      render={props => renderer(props, sliderItems, domain, state, actions)}
    />
  );
};

HomePage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default HomePage;
