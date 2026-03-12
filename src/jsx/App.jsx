import PropTypes from "prop-types";
import "../css/App.css";
import SectionBlock from "./components/SectionBlock";
import {
  BUILT_SYSTEMS,
  CURRENT_FOCUS,
  EXTERNAL_LINKS,
  NAV_LINKS,
  POSITIONING,
  PROFILE,
  RABBIT_HOLES,
  RABBIT_HOLES_SECTION,
} from "../constants/landingContent";

function ExternalLink({ label, href, external = false }) {
  return (
    <a
      href={href}
      className="pill-link"
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {label}
    </a>
  );
}

ExternalLink.propTypes = {
  external: PropTypes.bool,
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default function App() {
  return (
    <div className="app">
      <div className="page-gradient" />
      <div className="shell">
        <header className="top-bar">
          <a href="#" className="wordmark">
            {PROFILE.name}
          </a>
          <nav>
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>
        </header>

        <main>
          <section className="hero notebook-page">
            <p className="entry-date hero-date">
              Last updated {PROFILE.lastUpdated} | {PROFILE.location}
            </p>
            <h1>{PROFILE.name}</h1>
            <p className="hero-role">{PROFILE.role}</p>
            <p className="hero-context">{PROFILE.context}</p>
            <div className="link-row">
              {EXTERNAL_LINKS.map((link) => (
                <ExternalLink key={link.label} {...link} />
              ))}
            </div>
          </section>

          <SectionBlock id="about" title={POSITIONING.title}>
            <p>{POSITIONING.paragraph}</p>
          </SectionBlock>

          <SectionBlock id="work" title={CURRENT_FOCUS.title}>
            <p className="section-subtitle">
              <a href={CURRENT_FOCUS.companyUrl} target="_blank" rel="noreferrer">
                {CURRENT_FOCUS.company}
              </a>
            </p>
            {CURRENT_FOCUS.paragraphs.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </SectionBlock>

          <SectionBlock id="rabbit-holes" title={RABBIT_HOLES_SECTION.title}>
            <div className="rabbit-hole-list">
              {RABBIT_HOLES.map((hole) => (
                <p key={hole.text}>
                  {hole.href ? (
                    <a href={hole.href} target="_blank" rel="noreferrer">
                      {hole.text}
                    </a>
                  ) : (
                    hole.text
                  )}
                </p>
              ))}
            </div>
          </SectionBlock>

          <SectionBlock id="built" title={BUILT_SYSTEMS.title}>
            <div className="built-grid">
              {BUILT_SYSTEMS.items.map((item) => (
                <article key={item.name} className="built-card">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </SectionBlock>
        </main>
      </div>
    </div>
  );
}
