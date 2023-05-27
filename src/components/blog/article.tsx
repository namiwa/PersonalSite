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
        Khairul Iman © {startYear} - {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
        All content posted are my own personal thoughts and opinion, and do not
        represent any associated employers or organisations unless otherwise
        stated.
      </footer>
    </Container>
  );
};

export default Article;
