import React from 'react';
import classnames from 'classnames';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { Section } from '../Section/Section';
import { StaticQuery, graphql } from 'gatsby';
import ImageFormatted from '../ImageFormatted';

import Img from 'gatsby-image';

import './CompanyPictures.css';
export function CompanyPictures() {
  return (
    <StaticQuery
      query={graphql`
        query {
          images: allFile(
            filter: { relativePath: { regex: "images//company/" } }
            sort: { fields: relativePath }
          ) {
            edges {
              node {
                relativePath
                name
                childImageSharp {
                  sizes(maxWidth: 600) {
                    ...GatsbyImageSharpSizes
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        console.log(data);
        const images = data.images.edges.map((img) => (
          <div key={img.node.name} className="picture__wrapper">
            <ImageFormatted
              key={img.node.name}
              src={'/' + img.node.relativePath}
              altLangId="alt_jobs_company"
            />
          </div>
        ));
        return <div className="company__wrapper">{images}</div>;
      }}
    />
  );
}
