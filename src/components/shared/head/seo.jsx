import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import faviconImg from '../../../images/favicons/favicon.ico';

// transformKey due to "_" from GraphQL
const transformKeyCol = (key) => {
  const keyArr = key.split('');
  keyArr.splice(2, 1, ':');
  return keyArr.join('');
};

const Seo = ({
  title, description, facebook, google,
}) => (
  <Helmet>
    <link rel="icon" type="image/png" href={faviconImg} />
    <title>
      { title }
    </title>
    <meta name="description" content={description} />
    <meta name="author" content="https://github.com/gabytabs" />
    {
      _.map(facebook, (val, key) => (
        <meta
          key={key}
          property={transformKeyCol(key)}
          content={val}
        />
      ))
    }
    {
      _.map(google, (val, key) => (
        <meta
          key={key}
          property={transformKeyCol(key)}
          content={val}
        />
      ))
    }
  </Helmet>
);

Seo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  facebook: PropTypes.object,
  google: PropTypes.object,
};
Seo.defaultProps = {
  facebook: null,
  google: null,
};

export default Seo;
