import { Link } from 'react-router-dom';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type Variant = 'primary' | 'accent' | 'ghost';

interface BaseProps {
  variant?: Variant;
  /** Extra Tailwind classes appended to the variant. */
  className?: string;
  children: ReactNode;
}

type ButtonProps = BaseProps & ComponentPropsWithoutRef<'button'> & { href?: never; to?: never };
type AnchorProps = BaseProps & ComponentPropsWithoutRef<'a'> & { href: string; to?: never };
type LinkProps = BaseProps & { to: string; href?: never };

/**
 * Shared button — renders as a `<button>`, `<a>` or React Router `<Link>`
 * depending on which prop is supplied. Three variants:
 *   primary  → dark green fill, paper text (default)
 *   accent   → amber fill
 *   ghost    → transparent / outlined
 *
 * The `on-dark` parent context flips ghost+primary to the inverted scheme
 * (see the in-component logic below — variants are explicit, no DOM trick).
 */
export default function Button(props: ButtonProps | AnchorProps | LinkProps) {
  const { variant = 'primary', className = '', children, ...rest } = props as BaseProps & {
    href?: string;
    to?: string;
  } & Record<string, unknown>;

  const base =
    'inline-flex items-center gap-2.5 px-6 py-[15px] font-sans text-[13.5px] font-medium ' +
    'tracking-[0.04em] uppercase border cursor-pointer transition-colors duration-150 ' +
    'no-underline';

  const variants: Record<Variant, string> = {
    primary: 'bg-ink text-paper border-ink hover:bg-accent hover:border-accent',
    accent: 'bg-accent text-paper border-accent hover:bg-accent-deep hover:border-accent-deep',
    ghost: 'bg-transparent text-ink border-ink hover:bg-ink hover:text-paper',
  };

  const cls = `${base} ${variants[variant]} ${className}`;

  // React Router Link
  if ('to' in rest && rest.to) {
    return (
      <Link to={rest.to as string} className={cls}>
        {children}
      </Link>
    );
  }

  // Anchor
  if ('href' in rest && rest.href) {
    return (
      <a {...(rest as ComponentPropsWithoutRef<'a'>)} className={cls}>
        {children}
      </a>
    );
  }

  // Native button
  return (
    <button {...(rest as ComponentPropsWithoutRef<'button'>)} className={cls}>
      {children}
    </button>
  );
}
