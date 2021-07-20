import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const MetaPropsType = {
  name: PropTypes.string,
  content: PropTypes.string,
  property: PropTypes.string,
};

type MetaProps = PropTypes.InferProps<typeof MetaPropsType>;

interface SeoProps {
  description?: string;
  lang?: string;
  meta?: MetaProps[];
  title?: string;
  string?: string;
}

const Seo: React.FC<SeoProps> = ({ description, lang, meta, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            social {
              github
            }
          }
        }
      }
    `,
  );
  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;
  const postSeo: MetaProps[] = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `github:card`,
      content: `summary`,
    },
    {
      name: `github:creator`,
      content: site.siteMetadata?.social?.github || ``,
    },
    {
      name: `github:title`,
      content: title,
    },
    {
      name: `github:description`,
      content: metaDescription,
    },
  ];

  const metaFromProps: MetaProps[] = meta
    ? meta.filter((tags) => {
        return !!tags;
      })
    : [];

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={postSeo.concat(metaFromProps)}
    />
  );
};

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Seo;
