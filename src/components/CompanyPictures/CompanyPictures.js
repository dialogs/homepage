import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import ImageFormatted from '../ImageFormatted';
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
                  sizes(maxWidth: 400) {
                    ...GatsbyImageSharpSizes
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        return (
          <div className="company__wrapper">
            {data.images.edges.map((image) => (
              <div key={image.node.name} className="picture__wrapper">
                <ImageFormatted
                  key={image.node.name}
                  src={'/' + image.node.relativePath}
                  altLangId="alt_jobs_company"
                />
              </div>
            ))}
          </div>
        );
      }}
    />
  );
}
