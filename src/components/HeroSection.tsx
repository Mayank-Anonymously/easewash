import React from 'react';

export default function HeroSection() {
  return (
    <section className="position-relative overflow-hidden pt-5 pb-5">
      {/* Aqueous Mesh Decoration */}
      <div className="aqueous-mesh" style={{ top: '-5rem', left: '-5rem' }}></div>
      <div className="aqueous-mesh" style={{ top: '50%', right: '-10rem' }}></div>
      
      <div className="container" style={{ maxWidth: '1280px', marginTop: '6rem' }}>
        <div className="row align-items-center gy-5">
          <div className="col-lg-6">
            <div className="d-inline-flex align-items-center gap-2 px-3 py-2 bg-info bg-opacity-10 text-secondary rounded-pill border border-info border-opacity-25 mb-4">
              <span className="fs-6 fw-bold tracking-widest text-uppercase" style={{ fontSize: '12px' }}>Fresh clothes, zero stress</span>
            </div>
            <h1 className="font-headline fw-bolder text-primary tracking-tight" style={{ fontSize: 'calc(2.5rem + 2vw)', lineHeight: '1.1' }}>
              Tired of laundry? <br />
              <span className="text-secondary">We've got you covered!</span>
            </h1>
            <p className="text-on-surface-variant fs-5 mt-4 mb-4" style={{ maxWidth: '600px', lineHeight: '1.7' }}>
              Experience Liquid Precision in garment care. Professional washing, crisp ironing, and rapid delivery right to your doorstep in the Tri-city area.
            </p>
            <div className="d-flex flex-wrap align-items-center gap-3 pt-2">
              <a 
                href="https://wa.me/918307380058" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn signature-gradient text-on-primary px-5 py-3 rounded-xl fw-bold fs-5 shadow-xl hover-scale-102 transition-transform border-0 text-decoration-none"
              >
                Start Booking
              </a>
              <div className="d-flex align-items-center gap-3 px-3">
                <div className="d-flex">
                  <img
                    className="rounded-circle border border-2 border-white"
                    alt="customer 1"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzv4Clafqz7ccAEQeO3Xa8GxV2YkQn7IkGQj3jP_u6vqbKvj7NjQwU_UyDPp8hkRAlennXor8uVayw76g_xo3td9UPzbogzjAz8QbG_dTa3IOUa00krp74uQ7NCobuVnD8FjkKwrxflX9PxjuSqCv6QzjwsdHs6TNEmRNCGTmHKvxKzPzWLaE5ZAexYCUrWiSBDwJkbh95H9ZyCjQL04zqTtOQ5dxUqFxZQSeYiJAyS1MAGw21AxTOK8eBhY5YHi-KJQkCpsnU1_aT"
                    style={{ width: '40px', height: '40px', objectFit: 'cover', marginLeft: '0px' }}
                  />
                  <img
                    className="rounded-circle border border-2 border-white"
                    alt="customer 2"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB65Fo9Avp4xYipqP-09Fu1OF-HVnmu411VHJUO3qN8WkChmxFqWGeTuYi65VH0JroEGGL8ZQOgpXw8_oYm6Tjdh07NxwsVlBu3Yh4gxFmUHirf51kPCpU48Exl_2w72tbHwnJXcd-BlE8-_vnFb3dA9enDBNhp_G00N18evAsaxmQ5mszgfNrzZbZxbcWJQV53J1G2tUfntIqKoNI2HZ8culuginWj0snwDyoSbgAS1U2z313Q0Kya2AruNIWAkqR_r3jwHdaiKHsa"
                    style={{ width: '40px', height: '40px', objectFit: 'cover', marginLeft: '-10px' }}
                  />
                  <img
                    className="rounded-circle border border-2 border-white"
                    alt="customer 3"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmtSzvnWJN2n-micTv3OfQYnty_6RqFqvTobhVZ8pU0VYNjb_iL-SyLqXkwQSmHB_BpDv0-60e-Exojl2W5mYB4D2psZBCPAjrWUn9Pj4E5NK0ubMV1e3TzBNzYTQiYojd2h4SuP5Lx8K2TbYLw8pcZ5qCnDAUxyHUcV0B7PzaC6_OfQ02H1_OmN2Eya29t3o_dl0pMcWrTzXHjVbJDSqe2Jmoii5O3au1EAMlgy0zxE-8dq1Yjb-_Qj6gPfUeAeeG8XetOFiLIlo2"
                    style={{ width: '40px', height: '40px', objectFit: 'cover', marginLeft: '-10px' }}
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6 position-relative mt-5 mt-lg-0">
            <div className="position-absolute bg-info bg-opacity-10 rounded-xl" style={{ top: '-1rem', left: '-1rem', right: '-1rem', bottom: '-1rem', transform: 'rotate(-2deg)' }}></div>
            <img
              className="position-relative rounded-xl shadow-2xl w-100"
              alt="clean laundry"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfZMOLT2OZ2ppQaoF-XKYkZOGDu-9oO4oWnybNG2se5EHqvk0MyH0H_liWSAOWf9fgO_M2WOZA2rqkODHt2bshBdH8uzvU_sBJ98c5wR63HS_JMZFuXo_p_k-AXK6NYGDIMB9deRYW29ybe6mjWjP-xPJD_DCqyHmdARPojfbxHgd9eeJVRJX_bOkRt50jDldXQEkHGHxu6q_y8y8z86xdsK9DWLDS_gKwd-h-sW4kopUUt_vjhWUntwlxW67mvW1MKkXDoazQJ99m"
              style={{ height: '500px', objectFit: 'cover', zIndex: 10 }}
            />
            <div className="position-absolute bg-white p-3 rounded-3 shadow-xl d-none d-md-block" style={{ bottom: '-1.5rem', left: '-1.5rem', zIndex: 20 }}>
              <div className="d-flex align-items-center gap-3">
                <div className="bg-info bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center text-secondary" style={{ width: '48px', height: '48px' }}>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                </div>
                <div>
                  <p className="mb-0 text-on-surface-variant fw-bold text-uppercase tracking-tighter" style={{ fontSize: '10px' }}>Fast Delivery</p>
                  <p className="mb-0 text-primary fw-bolder">24-Hour Return</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
