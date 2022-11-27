import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Container, Typography, Grid } from '@mui/material';
import { ImageDataLike } from 'gatsby-plugin-image';

import { StylessLink } from '../utils';
import { styled } from '@mui/system';

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

const StyledRootContainer = styled(Container)({
  marginTop: 20,
  marginBottm: 20,
  marginLeft: 224,
  marginRight: 224,
});

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
    <StyledRootContainer>
      <br />
      <Typography variant="h2">Khairul Iman</Typography>
      <br />
      <Typography variant="h3">a.k.a. namiwa</Typography>
      <br />
      <Typography paragraph>
        A software developer based in Singapore, currently learning Rust &
        Flutter for side projects!
      </Typography>
      <br />
      <Typography variant="h4">Posts</Typography>
      <br />
      <Grid
        container
        direction="column"
        justifyContent="left"
        alignItems="left"
      >
        <Typography>
          {edges &&
            edges.map((val, ind) => {
              return <TitlesList node={val?.node} key={ind} />;
            })}
        </Typography>
      </Grid>
    </StyledRootContainer>
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
