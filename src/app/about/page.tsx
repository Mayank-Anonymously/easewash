import React from 'react';
import TopNavBar from '@/components/TopNavBar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <main>
      <TopNavBar />
      <div className="container py-5 mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-10 mt-5">
            <h1 className="font-headline fw-extrabold text-primary mb-4" style={{ fontSize: '3.5rem' }}>About EaseWash</h1>
            <p className="font-body fs-4 text-secondary mb-5">Driven by "The Art of Fabric Care," we redefine the laundry experience in the Tri-city area.</p>
            
            <div className="row gy-5">
              <div className="col-md-6">
                <h3 className="font-headline fw-bold text-primary mb-3">Our Mission</h3>
                <p className="font-body text-on-surface-variant leading-relaxed">To provide premium, stress-free garment care through liquid precision. We believe that clean clothes aren't just a chore—they are a foundation for confidence and comfort.</p>
              </div>
              <div className="col-md-6">
                <h3 className="font-headline fw-bold text-primary mb-3">Why EaseWash?</h3>
                <p className="font-body text-on-surface-variant leading-relaxed">We combine traditional care with modern technology. From professional sorting to steam ironing, every garment is treated as unique. Our 24-hour return policy ensures you never have to wait for freshness.</p>
              </div>
            </div>

            <div className="mt-5 p-5 bg-surface-container-low rounded-xl">
              <h2 className="font-headline fw-bold text-primary mb-4">Serving the Tri-city with Pride</h2>
              <p className="font-body text-on-surface-variant leading-relaxed mb-0">Established with a vision to serve KHARAR, CHANDIGARH, and MOHALI, EaseWash has quickly become the region's trusted laundry partner. We take pride in our rapid fleet and our clinical attention to detail.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
