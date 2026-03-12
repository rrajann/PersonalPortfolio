import PropTypes from "prop-types";

export default function SectionBlock({ id, title, children }) {
  return (
    <section id={id} className="section-block notebook-page">
      <header className="entry-header">
        <h2>{title}</h2>
      </header>
      {children}
    </section>
  );
}

SectionBlock.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
