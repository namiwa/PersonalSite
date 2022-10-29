import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Container, Typography, Grid } from '@mui/material';
import { ImageDataLike } from 'gatsby-plugin-image';

import { StylessLink } from '../utils';

type ImageData = {
  childImageSharp: ImageDataLike;
};

type FrontmatterTypes = {
  title: string;
  date: string;
  path: string;
  category: string;
  featuredImage?: ImageData;
};

type NodeTypes = {
  node: {
    frontmatter?: FrontmatterTypes;
  };
};

type BlogLinkType = {
  data: {
    allMarkdownRemark: {
      edges: NodeTypes[];
    };
  };
};

const BlogsListComp = ({ data }: BlogLinkType) => {
  const edges = data.allMarkdownRemark?.edges
    ? data.allMarkdownRemark?.edges
    : [];

  const TitlesList = ({ node }: NodeTypes) => {
    const frontmatter = node?.frontmatter;
    if (frontmatter) {
      return (
        <li>
          <StylessLink to={'/blogs/' + frontmatter.path}>
            <u>
              {frontmatter.title}
              {' - '}
              {frontmatter.date}
            </u>
          </StylessLink>
        </li>
      );
    } else {
      return <></>;
    }
  };

  return (
    <>
      <Container>
        <header>
          <br />
          <Typography variant="h3" align="center">
            Blog Posts
          </Typography>
          <br />
          <Typography variant="h6" align="center">
            These are the links to all blog posts found on this site!
          </Typography>
          <br />
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography>
              {edges &&
                edges.map((val, ind) => {
                  return <TitlesList node={val?.node} key={ind} />;
                })}
            </Typography>
          </Grid>
        </header>
      </Container>
    </>
  );
};

// can convert to variable to asc/desc --> even add search
const query = graphql`
  query BlogsListQuery {
    allMarkdownRemark(
      filter: {}
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "DD MMMM YYYY")
            title
            path
            category
          }
        }
      }
    }
  }
`;

export default function BlogsList(props: any) {
  return (
    <StaticQuery
      query={query}
      render={(data) => <BlogsListComp data={data} {...props} />}
    />
  );
}
