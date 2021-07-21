// adapted from gatsbyjs/gatsby-starter-blog: https://github.com/gatsbyjs/gatsby-starter-blog
import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import './blog_style.css';
import './normalize.css';

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
