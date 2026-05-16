import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { portfolioContent } from '../data/portfolio';

function ContactModalPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const backgroundLocation = location.state?.backgroundLocation;
  const { contactModal } = portfolioContent;

  useEffect(() => {
    const scrollY = window.scrollY;
    const { body } = document;
    const previousOverflow = body.style.overflow;
    const previousPosition = body.style.position;
    const previousTop = body.style.top;
    const previousWidth = body.style.width;

    body.classList.add('body-scroll-locked');
    body.style.overflow = 'hidden';
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.width = '100%';

    return () => {
      body.classList.remove('body-scroll-locked');
      body.style.overflow = previousOverflow;
      body.style.position = previousPosition;
      body.style.top = previousTop;
      body.style.width = previousWidth;
      window.scrollTo(0, scrollY);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        navigate(backgroundLocation?.pathname || '/', { replace: !backgroundLocation });
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [backgroundLocation, navigate]);

  const closeTarget = backgroundLocation || '/';

  return (
    <div className="contact-modal-layer" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
      <Link
        aria-label={contactModal.closeLabel}
        className="contact-modal-backdrop"
        to={closeTarget}
        replace={!backgroundLocation}
      />

      <section className="contact-modal-panel">
        <div className="contact-modal-header">
          <div>
            <h1 id="contact-modal-title">{contactModal.title}</h1>
            <p>{contactModal.description}</p>
          </div>

          <Link
            aria-label={contactModal.closeLabel}
            className="contact-modal-close"
            to={closeTarget}
            replace={!backgroundLocation}
          >
            ×
          </Link>
        </div>

        <div className="contact-modal-grid">
          <div className="contact-modal-sidebar">
            <div className="contact-block">
              {contactModal.contactItems.map((item) => (
                <div className="contact-item" key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>

            <div className="contact-block">
              <h2>Lorem Ipsum</h2>
              <div className="contact-socials">
                {contactModal.socials.map((item) => (
                  <a href={item.href} key={item.label}>
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
            <div className="contact-form-heading">
              <h2>{contactModal.form.title}</h2>
            </div>

            <label className="contact-field">
              <span>Lorem</span>
              <input placeholder={contactModal.form.namePlaceholder} type="text" />
            </label>

            <label className="contact-field">
              <span>Ipsum</span>
              <input placeholder={contactModal.form.emailPlaceholder} type="email" />
            </label>

            <label className="contact-field">
              <span>Dolor</span>
              <textarea placeholder={contactModal.form.messagePlaceholder} rows="6" />
            </label>

            <button className="contact-submit" type="submit">
              {contactModal.form.submitLabel}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default ContactModalPage;
