// adapted from gatsbyjs/gatsby-start-blog: https://github.com/gatsbyjs/gatsby-starter-blog
import * as React from 'react';

import ButtonAppBar from '../layout/appbar';

import './blog_style.css';
import './normalize.css';

interface ArticleProps {
  location: Location;
  title: string;
  children: React.ReactNode;
}

const Article: React.FC<ArticleProps> = ({ location, title, children }) => {
  return (
    <>
      <ButtonAppBar />
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
