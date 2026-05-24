import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Button from '../Button';

describe('<Button>', () => {
  it('renders a native <button> by default', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('renders an anchor when href is supplied', () => {
    render(<Button href="https://example.com">Go</Button>);
    const a = screen.getByRole('link', { name: /go/i });
    expect(a).toBeInTheDocument();
    expect(a).toHaveAttribute('href', 'https://example.com');
  });

  it('renders a Router <Link> when `to` is supplied', () => {
    render(
      <MemoryRouter>
        <Button to="/services/customer-mapping">View service</Button>
      </MemoryRouter>,
    );
    const a = screen.getByRole('link', { name: /view service/i });
    expect(a).toBeInTheDocument();
    expect(a).toHaveAttribute('href', '/services/customer-mapping');
  });
});
