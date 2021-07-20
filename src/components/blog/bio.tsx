// adapted from gatsbyjs/gatsby-starter-blog: https://github.com/gatsbyjs/gatsby-starter-blog
import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import namiwa from '../../images/namiwa.png';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            github
          }
        }
      }
    }
  `);

  const author = data.siteMetadata?.author;
  const social = data.SiteMetadata?.social;

  return (
    <>
      <img src={namiwa as string} alt={'cover_image'} />
      {author?.name && (
        <p>
          Written by <strong>{author.name}</strong> {author?.summary || null}
          {` `}
          <a href={`https://github.com/${social?.github || ``}`}>
            {' '}
            Follow them on GitHub!
          </a>
        </p>
      )}
    </>
  );
};

export default Bio;
