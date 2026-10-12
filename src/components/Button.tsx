import { Link } from 'react-router-dom';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type Variant = 'default' | 'outline' | 'ghost';

interface BaseProps {
  variant?: Variant;
  /** Large (40px) button. */
  large?: boolean;
  /** Extra classes appended to the variant. */
  className?: string;
  children: ReactNode;
}

type ButtonProps = BaseProps & ComponentPropsWithoutRef<'button'> & { href?: never; to?: never };
type AnchorProps = BaseProps & ComponentPropsWithoutRef<'a'> & { href: string; to?: never };
type LinkProps = BaseProps & { to: string; href?: never };

/**
 * Shared button. Renders a `<button>`, `<a>` or React Router `<Link>`
 * depending on which prop is supplied. Variants follow the design system:
 *   default  → solid primary (forest green; gold on inverse)
 *   outline  → bordered, background fill
 *   ghost    → transparent, accent on hover
 */
export default function Button(props: ButtonProps | AnchorProps | LinkProps) {
  const {
    variant = 'default',
    large = false,
    className = '',
    children,
    ...rest
  } = props as BaseProps & { href?: string; to?: string } & Record<string, unknown>;

  const cls = `btn btn-${variant}${large ? ' btn-lg' : ''} ${className}`.trim();

  if ('to' in rest && rest.to) {
    return (
      <Link to={rest.to as string} className={cls}>
        {children}
      </Link>
    );
  }

  if ('href' in rest && rest.href) {
    return (
      <a {...(rest as ComponentPropsWithoutRef<'a'>)} className={cls}>
        {children}
      </a>
    );
  }

  return (
    <button {...(rest as ComponentPropsWithoutRef<'button'>)} className={cls}>
      {children}
    </button>
  );
}
