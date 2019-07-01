import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  FaQuestionCircle,
  FaExclamation,
} from 'react-icons/fa';
import { graphql, StaticQuery } from 'gatsby';
import AboutLayout from '../../components/layouts/about';
import Seo from '../../components/shared/head/seo';
import {
  SectionWrapper,
  ColumnTitle,
  PointWrapper,
  LabelContainer,
  PointersContainer,
  RowVerticalWrapper,
} from '../../components/pages/about/faq-styled';

const FAQ_CONTENT_QUERY = graphql`{
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
    aboutFaqContent {
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
            }
            content{
                faqSection{
                    title
                    points{
                        label
                        content
                    }
                }
                disclaimerSection{
                    title
                    rows{
                        title
                        content
                    }
                }
                termsSection {
                    title
                    points {
                        label
                        content
                    }
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
            }
            content{
                faqSection{
                    title
                    points{
                        label
                        content
                    }
                }
                disclaimerSection{
                    title
                    rows{
                        title
                        content
                    }
                }
                termsSection {
                    title
                    points {
                        label
                        content
                    }
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
            }
            content{
                faqSection{
                    title
                    points{
                        label
                        content
                    }
                }
                disclaimerSection{
                    title
                    rows{
                        title
                        content
                    }
                }
                termsSection {
                    title
                    points {
                        label
                        content
                    }
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
            }
            content{
                faqSection{
                    title
                    points{
                        label
                        content
                    }
                }
                disclaimerSection{
                    title
                    rows{
                        title
                        content
                    }
                }
                termsSection {
                    title
                    points {
                        label
                        content
                    }
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
            }
            content{
                faqSection{
                    title
                    points{
                        label
                        content
                    }
                }
                disclaimerSection{
                    title
                    rows{
                        title
                        content
                    }
                }
                termsSection {
                    title
                    points {
                        label
                        content
                    }
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
            }
            content{
                faqSection{
                    title
                    points{
                        label
                        content
                    }
                }
                disclaimerSection{
                    title
                    rows{
                        title
                        content
                    }
                }
                termsSection {
                    title
                    points {
                        label
                        content
                    }
                }
            }
        }
    }
}`;

const renderer = ({ siteGeneralInfoContent, aboutFaqContent }, domain) => {
  const footerData = siteGeneralInfoContent[domain];
  const { content, metaData } = aboutFaqContent[domain];

  return (
    <AboutLayout
      pageTitle="Customer Service"
      footerData={footerData}
    >
      <Seo
        title={metaData.title}
        description={metaData.description}
        facebook={metaData.facebookProperty}
        google={metaData.googleProperty}
      />
      <SectionWrapper className="grid-x grid-padding-x">
        <div className="cell medium-6">
          <ColumnTitle>
            { content.disclaimerSection.title }
          </ColumnTitle>
          {
            content.disclaimerSection.rows.map(row => (
              <RowVerticalWrapper key={row.title} className="grid-y">
                <LabelContainer className="cell">
                  <span>
                    <FaExclamation />
                    { row.title }
                  </span>
                </LabelContainer>
                <PointersContainer className="cell grid-y">
                  {
                    row.content.map(item => (
                      <p key={item} className="cell">
                        { item }
                      </p>
                    ))
                  }
                </PointersContainer>
              </RowVerticalWrapper>
            ))
          }
        </div>
        <div className="cell medium-6">
          <ColumnTitle>
            { content.faqSection.title }
          </ColumnTitle>
          <div className="grid-y">
            {
              content.faqSection.points.map(point => (
                <PointWrapper key={point.label} className="cell grid-x grid-margin-x">
                  <LabelContainer className="cell medium-5">
                    <span>
                      <FaQuestionCircle />
                      {point.label}
                    </span>
                  </LabelContainer>
                  <PointersContainer className="cell medium-7 grid-y">
                    {
                      point.content.map(item => (
                        <p key={item} className="cell auto">
                          { item }
                        </p>
                      ))
                    }
                  </PointersContainer>
                </PointWrapper>
              ))
            }
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper className="grid-x grid-padding-x">
        <div className="cell medium-12">
          <ColumnTitle>
            { content.termsSection.title }
          </ColumnTitle>
          {
            content.termsSection.points.map(point => (
              <RowVerticalWrapper key={point.label} className="grid-y">
                <LabelContainer className="cell">
                  <span>
                    <FaExclamation />
                    { point.label }
                  </span>
                </LabelContainer>
                <PointersContainer className="cell grid-y">
                  <p className="cell">
                    { point.content }
                  </p>
                </PointersContainer>
              </RowVerticalWrapper>
            ))
          }
        </div>
      </SectionWrapper>
    </AboutLayout>
  );
};

const FAQPage = ({ location }) => {
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

  return (<StaticQuery query={FAQ_CONTENT_QUERY} render={props => renderer(props, domain)} />);
};

FAQPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default FAQPage;
