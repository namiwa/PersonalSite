import * as React from 'react';
import * as PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { Container } from '@material-ui/core';

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
          <StylessLink to={'/' + frontmatter.path}>
            <u>
              {frontmatter.title}
              {'- '}
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
          <h1 className="">Blog Posts</h1>
          <br />
          <p> These are the links to all blog posts found on this site! </p>
          <ul>
            {edges &&
              edges.map((val, ind) => {
                return <TitlesList node={val?.node} key={ind} />;
              })}
          </ul>
        </header>
      </Container>
    </>
  );
};

// Always test query from dev graphql query
const query = graphql`
  query BlogsListQuery {
    allMarkdownRemark(filter: {}) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            path
            category
          }
        }
      }
    }
  }
`;

export default function BlogsList(props: React.ReactNode) {
  return (
    <StaticQuery
      query={query}
      render={(data) => <BlogsListComp data={data} {...props} />}
    />
  );
}
