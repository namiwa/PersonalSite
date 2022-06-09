import * as React from 'react';
import * as PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { Container, Typography, Grid } from '@material-ui/core';

import { StylessLink } from '../utils';

const FrontmatterPropTypes = {
  frontmatter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }),
};

const NodePropTypes = {
  node: PropTypes.shape(FrontmatterPropTypes),
};

const BlogLinkPropType = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape(NodePropTypes)),
    }),
  }).isRequired,
};

type NodeType = PropTypes.InferProps<typeof NodePropTypes>;
type BlogLinkType = PropTypes.InferProps<typeof BlogLinkPropType>;

const BlogsListComp: React.FC<BlogLinkType> = ({ data }) => {
  const edges = data.allMarkdownRemark?.edges
    ? data.allMarkdownRemark?.edges
    : [];

  const TitlesList: React.FC<NodeType> = ({ node }) => {
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

// Always test query from dev graphql query
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
