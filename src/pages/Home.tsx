import Seo from '../components/Seo';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import About from '../components/About';
import MidCta from '../components/MidCta';
import Services from '../components/Services';
import WhyGeoSpec from '../components/WhyGeoSpec';
import Process from '../components/Process';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

/**
 * Home page — composed from sectional components in the standard order.
 */
export default function Home() {
  return (
    <>
      <Seo
        title="GeoSpec Solutions"
        description="GeoSpec Solutions delivers advanced geospatial intelligence, satellite analytics and spatial data services to organisations across Africa."
        path="/"
      />
      <Nav />
      <Hero />
      <About />
      <MidCta />
      <Services />
      <WhyGeoSpec />
      <Process />
      <Contact />
      <Footer />
    </>
  );
}
