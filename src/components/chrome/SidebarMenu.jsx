import { Link, useLocation } from 'react-router-dom';

function SidebarMenu({
  brandLabel,
  contactHref,
  contactLabel,
  isOpen,
  navigationItems,
  onClose,
  onToggle,
  phoneHref,
  phoneLabel,
}) {
  const location = useLocation();

  return (
    <header className="page-head">
      {isOpen && (
        <button
          aria-label="Lorem ipsum"
          className="menu-backdrop"
          onClick={onClose}
          type="button"
        />
      )}

      <button
        aria-controls="sidebar-menu"
        aria-expanded={isOpen}
        aria-label="Lorem ipsum"
        className={isOpen ? 'menu-toggle active' : 'menu-toggle'}
        onClick={onToggle}
        type="button"
      >
        <span />
        <span />
        <span />
      </button>

      <aside className={isOpen ? 'sidebar-menu open' : 'sidebar-menu'} id="sidebar-menu">
        <Link className="sidebar-brand" onClick={onClose} to="/">
          {brandLabel}
        </Link>

        <nav className="sidebar-nav">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              className={item.isActive ? 'active' : ''}
              state={item.href === '/contact' ? { backgroundLocation: location } : undefined}
              to={item.href}
              onClick={onClose}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="sidebar-footer">
          <a href={phoneHref}>{phoneLabel}</a>
          <a href={contactHref}>{contactLabel}</a>
        </div>
      </aside>
    </header>
  );
}

export default SidebarMenu;
