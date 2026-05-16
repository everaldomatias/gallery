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
        <a className="sidebar-brand" href="#top">
          {brandLabel}
        </a>

        <nav className="sidebar-nav">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              className={item.isActive ? 'active' : ''}
              href={item.href}
              onClick={onClose}
            >
              {item.label}
            </a>
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
