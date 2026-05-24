import Seo from '../components/Seo';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import CoordStrip from '../components/CoordStrip';
import About from '../components/About';
import MidCta from '../components/MidCta';
import Services from '../components/Services';
import WhyGeoSpec from '../components/WhyGeoSpec';
import TechStack from '../components/TechStack';
import FinalCta from '../components/FinalCta';
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
      <CoordStrip />
      <About />
      <MidCta />
      <Services />
      <WhyGeoSpec />
      <TechStack />
      <FinalCta />
      <Contact />
      <Footer />
    </>
  );
}
