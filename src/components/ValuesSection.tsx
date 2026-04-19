import React from 'react';

export default function ValuesSection() {
  return (
    <section className="bg-surface-container-low py-5">
      <div className="container" style={{ maxWidth: '1280px' }}>
        <div className="row justify-content-between align-items-center gy-4 px-3">
          <div className="col-md-auto d-flex align-items-center gap-3">
            <span className="material-symbols-outlined text-secondary" style={{ fontSize: '2.5rem' }}>bolt</span>
            <span className="font-headline fs-2 fw-bold text-primary">Fast</span>
          </div>
          <div className="col-md-auto d-flex align-items-center gap-3">
            <span className="material-symbols-outlined text-secondary" style={{ fontSize: '2.5rem' }}>sanitizer</span>
            <span className="font-headline fs-2 fw-bold text-primary">Clean</span>
          </div>
          <div className="col-md-auto d-flex align-items-center gap-3">
            <span className="material-symbols-outlined text-secondary" style={{ fontSize: '2.5rem' }}>verified</span>
            <span className="font-headline fs-2 fw-bold text-primary">Reliable</span>
          </div>
        </div>
      </div>
    </section>
  );
}
