import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { ImageDataLike } from 'gatsby-plugin-image';

import { InternalLinks } from '../utils';
import { useResumePath } from '../routes/resume/resumeButton';
import { Link } from '../links';
import * as Icons from '../icons';

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
    {
      href: 'https://github.com/namiwa',
      title: 'GitHub',
      icon: Icons.GithubIcon,
    },
    {
      href: 'https://linkedin.com/in/namiwa',
      title: 'LinkedIn',
      icon: Icons.LinkedinIcon,
    },
  ];

  linksList.push({ href: resumePath, title: 'Resume', icon: Icons.ResumeIcon });
  return linksList;
};

const BlogsListComp = ({ data }: BlogLinkType) => {
  const edges = data.allMarkdownRemark?.edges
    ? data.allMarkdownRemark?.edges
    : [];

  return (
    <div className="container mx-auto px-40 pt-40">
      <div>
        Hi! Welcome to my blog! My name is Khairul Iman, and I am a software
        engineer based in Singapore! Currently I am{' '}
        <Link to="https://github.com/namiwa/learningcompiler">
          {'building Lox compilers in Java and C'}
        </Link>
        , and hopefully learn{' '}
        <Link to="https://github.com/namiwa/learningcompiler/tree/main/cpp-game-engine">
          {'some graphics development in C++ with OpenGL :D'}
        </Link>
      </div>
      <AnchorList />
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
        <InternalLinks to={'/blogs/' + frontmatter.path}>
          <u>
            {frontmatter.title}
            {' - '}
            {frontmatter.date}
          </u>
        </InternalLinks>
      </li>
    );
  } else {
    return null;
  }
};

const AnchorList = () => {
  const links = useAnchorLists();
  console.log(links);
  return (
    <div className="grid grid-cols-3 pl-20 py-5 gap-3">
      {links.map(({ href, icon, title }) => (
        <div key={href} title={title}>
          <Link to={href}>
            <img src={icon.default} alt={title} />
          </Link>
        </div>
      ))}
    </div>
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
