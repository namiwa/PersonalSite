// adapted from gatsbyjs/gatsby-starter-blog: https://github.com/gatsbyjs/gatsby-starter-blog
import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';

import Bio from './bio';
import Article from './article';
import Seo from './seo';

interface InternalDataProp {
  previous: {
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
    };
  };
  next: {
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
    };
  };
  site: {
    siteMetadata?: {
      title: string;
    };
  };
  markdownRemark: {
    id: string;
    excerpt: string;
    html: string;
    frontmatter: {
      title: string;
      date: string;
      description: string;
      featuredImage?: {
        childImageSharp: {
          fluid: FluidObject;
        };
      };
    };
  };
}

interface BlogTemplateProps {
  data: InternalDataProp;
  location: Location;
}

const FeaturedImage = ({ data }: { data?: FluidObject }) => {
  return data ? <Img fluid={data} alt="Blog Cover Image" /> : null;
};

const BlogTemplate: React.FC<BlogTemplateProps> = ({ data, location }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const featuredImgFluid =
    post.frontmatter.featuredImage?.childImageSharp.fluid;
  const { previous, next } = data;

  return (
    <Article location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
          <FeaturedImage data={featuredImgFluid} />
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
          style={{ textAlign: 'justify', textJustify: 'inter-word' }}
        />
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={'/blogs' + previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={'/blogs' + next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Article>
  );
};

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;

export default BlogTemplate;
