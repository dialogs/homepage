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
