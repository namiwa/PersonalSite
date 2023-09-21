import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { ImageDataLike } from 'gatsby-plugin-image';

import { StylessLink } from '../utils';
import { useResumePath } from '../routes/resume/resumeButton';

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

const useAnchorLists = () => {
  const resumePath = useResumePath();
  const linksList = [
    { href: 'https://github.com/namiwa', title: 'GitHub' },
    { href: 'https://linkedin.com/in/namiwa', title: 'LinkedIn' },
    { href: 'https://www.kaggle.com/namiwa/', title: 'Kaggle' },
    { href: 'https://devpost.com/namiwa', title: 'Devpost' },
  ];

  linksList.push({ href: resumePath, title: 'Resume' });
  return linksList;
};

const BlogsListComp = ({ data }: BlogLinkType) => {
  const edges = data.allMarkdownRemark?.edges
    ? data.allMarkdownRemark?.edges
    : [];

  return (
    <div>
      <br />
      <div>Khairul Iman</div>
      <br />
      <div>a.k.a. namiwa</div>
      <br />
      <div>
        A software developer based in Singapore, currently learning Rust &
        Flutter for side projects!
      </div>
      <div>Links</div>
      <AnchorList />
      <br />
      <div>Posts</div>
      <br />
      <div>
        {edges &&
          edges.map((val, ind) => {
            return <TitlesList node={val?.node} key={ind} />;
          })}
      </div>
    </div>
  );
};

// can convert to variable to asc/desc --> even add search
const query = graphql`
  query BlogsListQuery {
    allMarkdownRemark(filter: {}, sort: { frontmatter: { date: DESC } }) {
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
    return null;
  }
};

const AnchorList = () => {
  const links = useAnchorLists();
  return (
    <ul>
      {links.map(({ href, title }, ind) => (
        <li key={href}>
          <a href={href}>{title}</a>
        </li>
      ))}
    </ul>
  );
};

export default function BlogsList(props: any) {
  return (
    <StaticQuery
      query={query}
      render={(data) => <BlogsListComp data={data} {...props} />}
    />
  );
}
