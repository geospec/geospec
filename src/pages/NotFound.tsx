import Seo from '../components/Seo';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Button from '../components/Button';

/**
 * 404 page — same chrome as the rest of the site.
 */
export default function NotFound() {
  return (
    <>
      <Seo
        title="Not found"
        description="The page you were looking for does not exist."
      />
      <Nav mode="solid-dark" />
      <section className="min-h-[70vh] flex items-center justify-center bg-paper py-32">
        <div className="mx-auto max-w-wrap px-7 md:px-9 lg:px-14 text-center">
          <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-accent font-semibold mb-4">
            404 · Page not found
          </p>
          <h1
            className="font-sans font-semibold uppercase text-ink m-0 mb-7 text-balance text-[36px] md:text-[56px]"
            style={{ lineHeight: 1, letterSpacing: '-0.025em' }}
          >
            No page at{' '}
            <span className="font-serif italic font-normal text-accent">that address</span>.
          </h1>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button to="/" variant="accent">
              Take me home →
            </Button>
            <Button to="/#services" variant="ghost">
              Browse services
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
