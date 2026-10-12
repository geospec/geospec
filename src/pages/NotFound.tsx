import Seo from '../components/Seo';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Button from '../components/Button';

/** 404 page with the same chrome as the rest of the site. */
export default function NotFound() {
  return (
    <>
      <Seo title="Not found" description="The page you were looking for does not exist." />
      <Nav />
      <section className="min-h-[70vh] flex items-center bg-background section-y">
        <div className="container-x">
          <p className="eyebrow">404 · Page not found</p>
          <h1
            className="mt-3 max-w-[680px] font-bold"
            style={{ fontSize: 'clamp(2rem, 4.2vw, 3.25rem)', lineHeight: 1.1, letterSpacing: '-0.03em' }}
          >
            There is no page at <span className="text-primary">that address</span>
          </h1>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/" large>
              Take me home
            </Button>
            <Button to="/#services" variant="outline" large>
              Browse services
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
