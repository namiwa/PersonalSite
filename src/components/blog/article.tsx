// adapted from gatsbyjs/gatsby-start-blog: https://github.com/gatsbyjs/gatsby-starter-blog
import * as React from 'react';
import { Link } from 'gatsby';

interface ArticleProps {
  location: Location;
  title: string;
  children: React.ReactNode;
}

const Article: React.FC<ArticleProps> = ({ location, title, children }) => {
  const rootPath = `/`;
  const isRootPath = location.pathname === rootPath;
  let header;

  if (isRootPath) {
    header = <Link to="/">{title}</Link>;
  } else {
    header = <Link to="/">{title}</Link>;
  }

  return (
    <>
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </>
  );
};

export default Article;
