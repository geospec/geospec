import { useParams } from 'react-router-dom';
import Seo from '../components/Seo';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ServiceHero from '../components/ServiceHero';
import ServiceBody from '../components/ServiceBody';
import ServiceFaq from '../components/ServiceFaq';
import ServiceCta from '../components/ServiceCta';
import { getServiceBySlug } from '../data/services';
import NotFound from './NotFound';

/**
 * /services/:slug — renders the service detail layout for whatever slug
 * matched in the URL. Falls through to NotFound if the slug doesn't
 * match a known service.
 */
export default function ServiceDetail() {
  const { slug = '' } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug);

  if (!service) {
    return <NotFound />;
  }

  return (
    <>
      <Seo
        title={service.name}
        description={service.lede}
        path={`/services/${service.slug}`}
      />
      <Nav mode="solid-dark" />
      <ServiceHero service={service} />
      <ServiceBody service={service} />
      <ServiceFaq service={service} />
      <ServiceCta slug={service.slug} />
      <Footer />
    </>
  );
}
