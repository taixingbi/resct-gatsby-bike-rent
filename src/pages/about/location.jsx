import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { graphql, StaticQuery } from 'gatsby';
import AboutLayout from '../../components/layouts/about';
import Seo from '../../components/shared/head/seo';
import {
  SectionWrapper,
  ColumnTitle,
  ColumnSubtitle,
  ColumnMapWrapper,
  SectionTitle,
} from '../../components/pages/about/location-styled';

const LOCATION_CONTENT_QUERY = graphql`
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
        aboutLocationContent {
            brooklynbridgebikerent{
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
                content{
                    title
                    description
                    currentStore {
                        title
                        address
                        phone
                        iframe
                    }
                    otherStores {
                        title
                        address
                        phone
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
                content{
                    title
                    description
                    currentStore {
                        title
                        address
                        phone
                        iframe
                    }
                    otherStores {
                        title
                        address
                        phone
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
                content{
                    title
                    description
                    currentStore {
                        title
                        address
                        phone
                        iframe
                    }
                    otherStores {
                        title
                        address
                        phone
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
                content{
                    title
                    description
                    currentStore {
                        title
                        address
                        phone
                        iframe
                    }
                    otherStores {
                        title
                        address
                        phone
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
                content{
                    title
                    description
                    currentStore {
                        title
                        address
                        phone
                        iframe
                    }
                    otherStores {
                        title
                        address
                        phone
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
                content{
                    title
                    description
                    currentStore {
                        title
                        address
                        phone
                        iframe
                    }
                    otherStores {
                        title
                        address
                        phone
                    }
                }
            }
        }
    }
`;

const renderer = ({ siteGeneralInfoContent, aboutLocationContent }, domain) => {
  const footerData = siteGeneralInfoContent[domain];
  const { content, metaData } = aboutLocationContent[domain];

  return (
    <AboutLayout
      pageTitle="Location"
      footerData={footerData}
    >
      <Seo
        title={metaData.title}
        description={metaData.description}
        facebook={metaData.facebookProperty}
        google={metaData.googleProperty}
      />
      <SectionWrapper className="grid-y">
        <SectionTitle className="cell">
            This Store is located:
        </SectionTitle>
        <ColumnTitle className="cell">
          { content.currentStore.title }
        </ColumnTitle>
        <ColumnSubtitle bold className="cell">
          { content.currentStore.address }
        </ColumnSubtitle>
        <ColumnSubtitle className="cell">
          { content.currentStore.phone }
        </ColumnSubtitle>
        <ColumnMapWrapper
          className="cell"
          dangerouslySetInnerHTML={{ __html: content.currentStore.iframe }}
        />
        <ColumnSubtitle className="cell">
          { content.description }
        </ColumnSubtitle>
      </SectionWrapper>
      <SectionWrapper className="grid-y">
        <SectionTitle className="cell">
            Here is a list of all of our locations:
        </SectionTitle>
        <div className="cell grid-x grid-margin-x grid-margin-y">
          {
            _.map(content.otherStores, store => (
              <div key={store.title} className="cell medium-6 small-12 grid-y">
                <ColumnTitle className="cell">
                  { store.title }
                </ColumnTitle>
                <ColumnSubtitle bold className="cell">
                  { store.address }
                </ColumnSubtitle>
                <ColumnSubtitle className="cell">
                  { store.phone }
                </ColumnSubtitle>
              </div>
            ))
          }
        </div>
      </SectionWrapper>
    </AboutLayout>
  );
};

const LocationPage = ({ location }) => {
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
    <StaticQuery query={LOCATION_CONTENT_QUERY} render={props => renderer(props, domain)} />
  );
};

LocationPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default LocationPage;
