// adapted from gatsbyjs/gatsby-start-blog: https://github.com/gatsbyjs/gatsby-starter-blog
import * as React from 'react';
import { Container } from '@material-ui/core';

import ButtonAppBar from '../layout/appbar';

interface ArticleProps {
  location: Location;
  title: string;
  children: React.ReactNode;
}

const Article: React.FC<ArticleProps> = ({ location, title, children }) => {
  return (
    <>
      <ButtonAppBar />
      <Container>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </Container>
    </>
  );
};

export default Article;
