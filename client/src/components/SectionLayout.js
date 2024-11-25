import React from 'react';

const SectionLayout = ({ title, summary }) => (
  <section className="section-layout-wrapper" >
    <div className="section-layout" data-aos="fade-up">
      <h2 className="section-title">{title}</h2>
      <p className="section-summary">{summary}</p>
    </div>
  </section>
);

export default SectionLayout;