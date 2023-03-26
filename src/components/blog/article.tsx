// adapted from gatsbyjs/gatsby-start-blog: https://github.com/gatsbyjs/gatsby-starter-blog
import * as React from 'react';
import { Container } from '@mui/material';

interface ArticleProps {
  location: Location;
  title: string;
  children: React.ReactNode;
}

const startYear = 2020;

const Article: React.FC<ArticleProps> = ({ location, title, children }) => {
  return (
    <Container>
      <main>{children}</main>
      <footer>
        © {startYear} - {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </Container>
  );
};

export default Article;
