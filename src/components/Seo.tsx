import { Helmet } from 'react-helmet-async';

interface Props {
  title: string;
  description: string;
  /** Canonical URL path, e.g. `/services/customer-mapping`. */
  path?: string;
}

const SITE_NAME = 'GeoSpec Solutions';
const ORIGIN = 'https://geospecsolutions.com'; // adjust when domain is live

/**
 * Per-page SEO + Open Graph meta. Render at the top of each page.
 */
export default function Seo({ title, description, path = '/' }: Props) {
  const fullTitle = title === SITE_NAME ? title : `${title} — ${SITE_NAME}`;
  const url = `${ORIGIN}${path}`;
  const image = `${ORIGIN}/assets/geospec-logo.png`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
