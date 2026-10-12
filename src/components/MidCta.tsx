import Button from './Button';

/** Mid-page call to action. */
export default function MidCta() {
  return (
    <section className="bg-muted py-16 border-y border-border">
      <div className="container-x">
        <div className="grid gap-x-16 gap-y-8 items-center [grid-template-columns:repeat(auto-fit,minmax(min(360px,100%),1fr))]">
          <div>
            <p className="eyebrow">Take the next step</p>
            <h2 className="h2">Ready to see what your data can do?</h2>
          </div>
          <div className="flex flex-col items-start gap-4">
            <p className="text-muted-foreground">
              Tell us your challenge. Our analysts will scope a solution and respond within 48
              hours.
            </p>
            <Button to="/#contact" large>
              Request a consultation
            </Button>
            <p className="text-sm leading-normal text-muted-foreground">
              No commitment required. We start with understanding the problem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
