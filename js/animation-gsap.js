/*------------------------------------------------------------------
Template Name: ArtGallery – Digital Agency Portfolio HTML Template
Template URL: https://extraordinary-fairy-c25c85.netlify.app
Description: ArtGallery is a next-generation HTML template converted from a premium Figma design, crafted for digital agencies, design studios, digital marketing agencies, personal portfolios, and creative professionals. It includes 14+ well-structured pages based on a 1770px grid system, featuring 2+ beautifully designed home pages. The codebase is clean, customizable, and organized for seamless editing and scalability across various business and personal website needs.
Author: UiBazar
Author URL: https://themeforest.net/user/kitdokan
Version: 1.0
-------------------------------------------------------------------

ANIMATION INDEX
===================

1. Shared Helper Functions
2. Header One Area
3. About One Area
4. Fact Area
5. Services One Area
6. Process Area
7. Recent Work Area
8. Brand Logos Area
9. Testimonials One Area
10. Blog Area
11. FAQ Area
12. Hero Two Area
13. Avatar Card Shared Animation
14. About Two Area
15. Portfolio Area
16. Services Two Area
17. Brands Area
18. Testimonials Two Area
19. Team One Area
20. Pricing Area
21. Insights Area
22. Breadcrumbs Area
23. Hero/About Area
24. About/About Area
25. Why Choose Area
26. Awards Area
27. Portfolio Details Hero
28. Portfolio Details
29. Video Area
30. Services Details Hero
31. Services Details
32. Contact Area
33. Blog Details
34. Smooth Scroll / Lenis

------------------------------------------------------------------*/


"use strict";

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // =============================
  // 1. Shared Helper Functions
  // =============================
  function animateRepeatedly(selector, fromVars, toVars) {
    ScrollTrigger.create({
      trigger: selector,
      start: "top 90%",
      onEnter: () => gsap.fromTo(selector, fromVars, toVars),
      onEnterBack: () => gsap.fromTo(selector, fromVars, toVars)
    });
  }

  function animateOnScroll(target, vars) {
    ScrollTrigger.create({
      trigger: target,
      start: "top 90%",
      onEnter: () => gsap.fromTo(target, vars.from, vars.to),
      onEnterBack: () => gsap.fromTo(target, vars.from, vars.to)
    });
  }
  function animateGroupItems(selector, fromVars, toVars, delayEach = 0) {
    document.querySelectorAll(selector).forEach((el, i) => {
      // Set initial state to prevent jump
      gsap.set(el, fromVars);

      ScrollTrigger.create({
        trigger: el,
        start: "top 90%",
        onEnter: () => {
          gsap.set(el, fromVars); // reset before animating again
          gsap.to(el, { ...toVars, delay: i * delayEach });
        },
        onEnterBack: () => {
          gsap.set(el, fromVars); // reset before animating again
          gsap.to(el, { ...toVars, delay: i * delayEach });
        },
      });
    });
  }

  function fadeUpRepeat(selector, delay = 0, yValue = 60, duration = 1.6, ease = "power1.out") {
    ScrollTrigger.create({
      trigger: selector,
      start: "top 90%",
      onEnter: () =>
        gsap.fromTo(selector, { y: yValue, opacity: 0 }, { y: 0, opacity: 1, duration, ease, delay }),
      onEnterBack: () =>
        gsap.fromTo(selector, { y: yValue, opacity: 0 }, { y: 0, opacity: 1, duration, ease, delay }),
    });
  }

  // =============================
  // 2. Header One Area
  // =============================
  function initHeroAnimations() {
    const section = document.querySelector(".rl-hero--one");
    if (!section) return;

    animateRepeatedly(".rl-hero__image--left", { x: -120, opacity: 0 }, { x: 0, opacity: 1, duration: 1.6, ease: "power4.out" });
    animateRepeatedly(".rl-hero__brand", { y: -60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.6, ease: "power4.out" });
    animateRepeatedly(".rl-hero__video-icon-wrap", { scale: 0.4, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.6, ease: "power4.out" });
    animateRepeatedly(".rl-hero__stats", { x: 80, opacity: 0 }, { x: 0, opacity: 1, duration: 1.6, ease: "power4.out" });
    animateRepeatedly(".rl-hero__tagline", { scale: 0.8, opacity: 0, transformOrigin: "left center" }, { scale: 1, opacity: 1, duration: 1.6, ease: "power4.out" });
    animateRepeatedly(".rl-hero__text", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.6, ease: "power4.out" });

    ScrollTrigger.create({
      trigger: ".rl-hero__arrow",
      start: "top 90%",
      onEnter: () => {
        gsap.fromTo(".rl-hero__arrow", { y: 20, opacity: 0 }, {
          y: 0, opacity: 1, duration: 1.6, ease: "power4.out",
          onComplete: () => {
            gsap.to(".rl-hero__arrow", {
              y: 30,
              repeat: -1,
              yoyo: true,
              duration: 1.2,
              ease: "sine.inOut"
            });
          }
        });
      },
      onEnterBack: () => {
        gsap.fromTo(".rl-hero__arrow", { y: 20, opacity: 0 }, {
          y: 0, opacity: 1, duration: 1.6, ease: "power4.out",
          onComplete: () => {
            gsap.to(".rl-hero__arrow", {
              y: 30,
              repeat: -1,
              yoyo: true,
              duration: 1.2,
              ease: "sine.inOut"
            });
          }
        });
      }
    });

    animateRepeatedly(".rl-hero__image--right", { x: 120, opacity: 0 }, { x: 0, opacity: 1, duration: 1.6, ease: "power4.out" });
    animateRepeatedly(".rl-hero__line", { scaleY: 0, opacity: 0, transformOrigin: "top center" }, { scaleY: 1, opacity: 1, duration: 1.6, ease: "power4.out", stagger: 0.3 });
  }

  // =============================
  // 3. About One Area
  // =============================
  function initAboutAnimations() {
    const ease = "power4.out";
    const duration = 2.2;

    const section = document.querySelector(".rl-about--one");
    if (!section) return;

    if (document.querySelector(".rl-about__subtitle-wrap")) {
      animateOnScroll(".rl-about__subtitle-wrap", {
        from: { y: -30, opacity: 0 },
        to: { y: 0, opacity: 1, duration, ease }
      });
    }

    if (document.querySelector(".rl-about__title")) {
      animateOnScroll(".rl-about__title", {
        from: { y: 50, opacity: 0 },
        to: { y: 0, opacity: 1, duration, ease }
      });
    }

    if (document.querySelector(".rl-about__desc")) {
      animateOnScroll(".rl-about__desc", {
        from: { x: -100, opacity: 0 },
        to: { x: 0, opacity: 1, duration, ease }
      });
    }

    if (document.querySelector(".rl-about__testimonial")) {
      animateOnScroll(".rl-about__testimonial", {
        from: { x: -60, opacity: 0 },
        to: { x: 0, opacity: 1, duration, ease }
      });
    }

    if (document.querySelector(".rl-about__image--left")) {
      animateOnScroll(".rl-about__image--left", {
        from: { x: -150, opacity: 0 },
        to: { x: 0, opacity: 1, duration, ease }
      });
    }

    if (document.querySelector(".rl-about__image--right")) {
      animateOnScroll(".rl-about__image--right", {
        from: { x: 150, opacity: 0 },
        to: { x: 0, opacity: 1, duration, ease }
      });
    }

    if (document.querySelector(".rl-about__button")) {
      animateOnScroll(".rl-about__button", {
        from: { y: 40, scale: 0.8, opacity: 0 },
        to: {
          y: 0,
          scale: 1,
          opacity: 1,
          duration,
          ease,
          onComplete: () => {
            gsap.to(".rl-about__button", {
              scale: 1.05,
              repeat: -1,
              yoyo: true,
              duration: 1.8,
              ease: "sine.inOut"
            });
          }
        }
      });
    }

    if (document.querySelector(".rl-about__hand")) {
      animateOnScroll(".rl-about__hand", {
        from: { y: 30, opacity: 0 },
        to: {
          y: 0,
          opacity: 1,
          duration,
          ease,
          onComplete: () => {
            gsap.to(".rl-about__hand", {
              y: 10,
              repeat: -1,
              yoyo: true,
              duration: 2.4,
              ease: "sine.inOut"
            });
          }
        }
      });
    }
  }

  // =============================
  // 4. Fact Area
  // =============================
  function initFactAnimations() {
    const section = document.querySelector(".rl-fact");
    if (!section) return;

    const factItems = document.querySelectorAll(".rl-fact__item");
    if (factItems.length === 0) return;

    animateGroupItems(
      ".rl-fact__item",
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, ease: "power4.out" },
      0.1
    );
  }

  // =============================
  // 5. Services One Area
  // =============================
  function initServicesAnimations() {
    const duration = 2.1;
    const ease = "power4.out";

    const section = document.querySelector(".rl-services--one");
    if (!section) return;

    if (document.querySelector(".rl-services__subtitle-wrap")) {
      animateRepeatedly(".rl-services__subtitle-wrap", { y: -40, opacity: 0 }, { y: 0, opacity: 1, duration, ease });
    }

    if (document.querySelector(".rl-services__title")) {
      animateRepeatedly(".rl-services__title", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration, ease });
    }

    if (document.querySelector(".rl-services__btn")) {
      animateRepeatedly(".rl-services__btn", { opacity: 0 }, { opacity: 1, duration, ease });
    }

    if (document.querySelector(".rl-services__desc")) {
      animateRepeatedly(".rl-services__desc", { x: -60, opacity: 0 }, { x: 0, opacity: 1, duration, ease });
    }

    if (document.querySelector(".rl-services__image")) {
      animateRepeatedly(".rl-services__image", { x: 60, opacity: 0 }, { x: 0, opacity: 1, duration, ease });
    }

    const serviceItems = document.querySelectorAll(".rl-services__item");
    if (serviceItems.length) {
      animateGroupItems(".rl-services__item",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration, ease },
        0.05
      );
    }
  }

  // =============================
  // 6. Process Area
  // =============================
  function initProcessAnimations() {
    const duration = 2.2;
    const ease = "power4.out";

    const section = document.querySelector(".rl-process");
    if (!section) return;

    if (document.querySelector(".rl-process__subtitle-wrap")) {
      animateRepeatedly(".rl-process__subtitle-wrap", { y: -40, opacity: 0 }, { y: 0, opacity: 1, duration, ease });
    }

    if (document.querySelector(".rl-process__title")) {
      animateRepeatedly(".rl-process__title", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration, ease });
    }

    if (document.querySelector(".rl-process__btn")) {
      animateRepeatedly(".rl-process__btn", { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration, ease });
    }

    const steps = document.querySelectorAll(".rl-process__step");
    if (steps.length) {
      animateGroupItems(
        ".rl-process__step",
        { y: 150, opacity: 0 },
        { y: 0, opacity: 1, duration:1.5, ease },
        0.1
      );
    }
  }

  // =============================
  // 7. Recent Work Area
  // =============================
  function initRecentWorkAnimations() {
    const ease = "power4.out";

    const section = document.querySelector(".rl-recent-works");
    if (!section) return;

    if (document.querySelector(".rl-recent-works__title-wrap")) {
      animateGroupItems(
        ".rl-recent-works__title-wrap",
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 2, ease }
      );
    }

    if (document.querySelector(".rl-recent-work__filters")) {
      animateOnScroll(".rl-recent-work__filters", {
        from: { y: 40, opacity: 0 },
        to: { y: 0, opacity: 1, duration: 1.8, ease },
      });
    }

    if (document.querySelector(".rl-recent-work__filter-item")) {
      animateGroupItems(
        ".rl-recent-work__filter-item",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease },
        0.1
      );
    }

    if (document.querySelector(".rl-work-card")) {
      animateGroupItems(
        ".rl-work-card",
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.8, ease },
        0.1
      );
    }

    if (document.querySelector(".rl-recent-works__cta")) {
      animateGroupItems(
        ".rl-recent-works__cta",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 2, ease }
      );
    }
  }

  // =============================
  // 8. Brand Logos Area
  // =============================
  function initBrandLogoAnimations() {
    const section = document.querySelector(".rl-brand-logos");
    if (!section) return;

    if (document.querySelector(".rl-brand-logos__title")) {
      animateRepeatedly(
        ".rl-brand-logos__title",
        { y: -40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.6, ease: "power4.out" }
      );
    }

    const grid = document.querySelector(".rl-brand-logos__grid");
    const items = document.querySelectorAll(".rl-brand-logos__item");

    if (grid && items.length) {
      ScrollTrigger.create({
        trigger: grid,
        start: "top 90%",
        onEnter: () => {
          gsap.fromTo(
            ".rl-brand-logos__item",
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.5, ease: "power4.out", stagger: 0.2 }
          );
        },
        onEnterBack: () => {
          gsap.fromTo(
            ".rl-brand-logos__item",
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.5, ease: "power4.out", stagger: 0.2 }
          );
        }
      });
    }
  }

  // =============================
  // 9. Testimonials One Area
  // =============================
  function initTestimonialAnimations() {
    const section = document.querySelector(".rl-testimonials--one");
    if (!section) return;

    const titleWrap = document.querySelector(".rl-testimonials__title-wrap");
    const label = document.querySelector(".rl-testimonials__label");
    const title = document.querySelector(".rl-testimonials__title");
    const button = document.querySelector(".rl-testimonials__button");

    if (titleWrap && (label || title || button)) {
      gsap.fromTo(
        [label, title, button].filter(Boolean),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.6,
          ease: "power4.out",
          stagger: 0.25,
          scrollTrigger: {
            trigger: titleWrap,
            start: "top 90%",
            toggleActions: "play none none reset"
          }
        }
      );
    }

    const cards = document.querySelectorAll(".rl-testimonial-card");
    if (cards.length) {
      cards.forEach((card, i) => {
        animateRepeatedly(
          card,
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.6, ease: "power4.out", delay: i * 0.2 }
        );
      });
    }
  }

  // =============================
  // 10. Blog Area
  // =============================
  function initBlogAnimations() {
    const duration = 2.2;
    const ease = "power4.out";

    const section = document.querySelector(".rl-blog");
    if (!section) return;

    if (document.querySelector(".rl-blog__subtitle-wrap")) {
      fadeUpRepeat(".rl-blog__subtitle-wrap", 0);
    }

    if (document.querySelector(".rl-blog__heading")) {
      fadeUpRepeat(".rl-blog__heading", 0.1);
    }

    if (document.querySelector(".rl-blog__btn")) {
      fadeUpRepeat(".rl-blog__btn", 0.2);
    }

    const blogItems = document.querySelectorAll(".rl-blog__item");
    if (blogItems.length) {
      animateGroupItems(
        ".rl-blog__item",
        { y: 150, opacity: 0 },
        { y: 0, opacity: 1, duration:1.5, ease },
        0.1
      );
    }
  }

  // =============================
  // 11. FAQ Area
  // =============================
  function initFaqAnimations() {
    const section = document.querySelector(".rl-faq");
    if (!section) return;

    const title = document.querySelector(".rl-faq__title");
    const subtitle = document.querySelector(".rl-faq__subtitle");
    const button = document.querySelector(".rl-faq__button");
    const sidebar = document.querySelector(".rl-faq__sidebar");

    if (sidebar && (title || subtitle || button)) {
      gsap.fromTo(
        [title, subtitle, button].filter(Boolean),
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.6,
          ease: "power4.out",
          stagger: 0.25,
          scrollTrigger: {
            trigger: sidebar,
            start: "top 90%",
            toggleActions: "play none none reset"
          }
        }
      );
    }

    const faqItems = document.querySelectorAll(".rl-faq__item");
    if (faqItems.length) {
      faqItems.forEach((item, index) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top 95%",
          onEnter: () => {
            gsap.fromTo(
              item,
              { y: 70, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 1.5,
                ease: "power4.out",
                delay: index * 0.1
              }
            );
          },
          onEnterBack: () => {
            gsap.fromTo(
              item,
              { y: 80, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 1.5,
                ease: "power4.out",
                delay: index * 0.1
              }
            );
          }
        });
      });
    }
  }

  // =============================
  // 12. Hero Two Area
  // =============================
  function initHeroTwoAnimations() {
    const ease = "power4.out";
    const duration = 1.6;

    const section = document.querySelector(".rl-hero--two");
    if (!section) return;

    const animateIfExists = (selector, from, to) => {
      if (document.querySelector(selector)) {
        animateRepeatedly(selector, from, to);
      }
    };

    animateIfExists(".rl-hero__title-text", { y: -60, opacity: 0 }, { y: 0, opacity: 1, duration, ease });
    animateIfExists(".rl-hero__image", { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration, ease });
    animateIfExists(".rl-hero__bg-img", { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration, ease });
    animateIfExists(".rl-hero__video-thumb", { scale: 0.7, opacity: 0 }, { scale: 1, opacity: 1, duration, ease });
    animateIfExists(".rl-hero__subtitle", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration, ease });

    const videoIcon = document.querySelector(".rl-hero__video-icon");
    if (videoIcon) {
      gsap.to(videoIcon, {
        scale: 1.2,
        repeat: -1,
        yoyo: true,
        duration: 1.6,
        ease: "sine.inOut"
      });
    }

    const btn = document.querySelector(".rl-hero__btn");
    if (btn) {
      ScrollTrigger.create({
        trigger: btn,
        start: "top 90%",
        onEnter: () => animateHeroBtn(btn),
        onEnterBack: () => animateHeroBtn(btn)
      });
    }

    function animateHeroBtn(target) {
      gsap.fromTo(target,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration,
          ease,
          onComplete: () => {
            gsap.to(target, {
              scale: 1.05,
              repeat: -1,
              yoyo: true,
              duration: 1.8,
              ease: "sine.inOut"
            });
          }
        }
      );
    }
  }

  // =============================
  // 13. Avatar Card Shared Animation
  // =============================
  function initAvatarCardAnimations() {
    const duration = 1.6;
    const ease = "power4.out";

    const section = document.querySelector(".rl-avatar-card");
    if (!section) return;

    animateRepeatedly(".rl-avatar-card", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration, ease });
    animateRepeatedly(".rl-avatars", { y: -60, opacity: 0 }, { y: 0, opacity: 1, duration, ease });
    animateRepeatedly(".rl-avatar-stat", { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration, ease });
    animateRepeatedly(".rl-avatar-text", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration, ease });
  }

  // =============================
  // 14. About Two Area
  // =============================
  function initAboutTwoAnimations() {
    const ease = "power4.out";
    const duration = 2;

    const section = document.querySelector(".rl-about--two");
    if (!section) return;

    animateOnScroll(".rl-about--two .rl-about__title", {
      from: { y: 50, opacity: 0 },
      to: { y: 0, opacity: 1, duration, ease }
    });

    animateGroupItems(".rl-about--two .rl-about__item", 
      { y: 60, opacity: 0 }, 
      { y: 0, opacity: 1, duration, ease },
      0.15
    );

    animateGroupItems(".rl-about--two .rl-about__item-line", 
      { scaleX: 0, opacity: 0, transformOrigin: "left" },
      { scaleX: 1, opacity: 1, duration: 1.2, ease },
      0.15
    );

    animateOnScroll(".rl-about--two .rl-about__image img", {
      from: { x: 120, opacity: 0 },
      to: { x: 0, opacity: 1, duration, ease }
    });
  }

  // =============================
  // 15. Portfolio Area
  // =============================
  function initPortfolioOneAnimations() {
    const ease = "power4.out";
    const duration = 2;

    const section = document.querySelector(".portfolio--one");
    if (!section) return;

    animateOnScroll(".rl-portfolio--one .rl-portfolio__title", {
      from: { y: 60, opacity: 0 },
      to: { y: 0, opacity: 1, duration, ease }
    });

    animateOnScroll(".rl-portfolio--one .rl-portfolio__year", {
      from: { scale: 0.8, opacity: 0, y: 40 },
      to: { scale: 1, opacity: 1, y: 0, duration: 1.6, ease }
    });

    animateGroupItems(".rl-portfolio--one .rl-portfolio__item", 
      { y: 80, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.6, ease }, 
      0.15
    );

    animateOnScroll(".rl-portfolio--one .rl-portfolio__btn", {
      from: { y: 40, opacity: 0, scale: 0.9 },
      to: {
        y: 0, opacity: 1, scale: 1, duration: 1.6, ease,
        onComplete: () => {
          gsap.to(".rl-portfolio--one .rl-portfolio__btn", {
            y: 6,
            repeat: -1,
            yoyo: true,
            duration: 2,
            ease: "sine.inOut"
          });
        }
      }
    });
  }

  // =============================
  // 16. Services Two Area
  // =============================
  function initServicesTwoAnimations() {
    const ease = "power4.out";
    const duration = 1.8;

    const section = document.querySelector(".rl-services--two");
    if (!section) return;

    animateOnScroll(".rl-services--two .rl-services__text", {
      from: { y: 60, opacity: 0 },
      to: { y: 0, opacity: 1, duration, ease }
    });

    gsap.to(".rl-services--two .rl-services__title", {
      backgroundPosition: "200% center",
      ease: "none",
      duration: 20,
      repeat: -1
    });

    animateGroupItems(".rl-services--two .rl-services__tab",
      { x: -40, opacity: 0 },
      { x: 0, opacity: 1, duration, ease },
      0.1
    );

    animateOnScroll(".rl-services--two .rl-services__content img", {
      from: { scale: 0.85, opacity: 0 },
      to: { scale: 1, opacity: 1, duration, ease }
    });

    animateOnScroll(".rl-services--two .rl-services__content.active .rl-services__details-text", {
      from: { y: 40, opacity: 0 },
      to: { y: 0, opacity: 1, duration, ease }
    });

    animateGroupItems(".rl-services--two .rl-services__content.active .rl-services__tag",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration, ease },
      0.05
    );
  }

  // =============================
  // 17. Brands Area
  // =============================
  function initBrandsAnimations() {
    const ease = "power4.out";
    const duration = 1.6;

    const section = document.querySelector(".rl-brands");
    if (!section) return;

    animateOnScroll(".rl-brands .rl-brands__title", {
      from: { y: 40, opacity: 0 },
      to: { y: 0, opacity: 1, duration, ease }
    });

    animateGroupItems(".rl-brands .rl-brands__item", 
      { y: 30, scale: 0.9, opacity: 0 }, 
      { y: 0, scale: 1, opacity: 1, duration, ease }, 
      0.1
    );
  }

  // =============================
  // 18. Testimonials Two Area
  // =============================
  function initTestimonialsAnimations() {
    const ease = "power4.out";
    const duration = 2;

    const section = document.querySelector(".rl-testimonials--two");
    if (!section) return;

    animateOnScroll(".rl-testimonials--two .rl-testimonials__subtitle-wrap", {
      from: { y: -40, opacity: 0 },
      to: { y: 0, opacity: 1, duration, ease },
    });

    animateOnScroll(".rl-testimonials--two .rl-testimonials__title", {
      from: { y: 50, opacity: 0 },
      to: { y: 0, opacity: 1, duration, ease },
    });

    animateGroupItems(
      ".rl-testimonials--two .rl-testimonials__item",
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration, ease },
      0.15
    );
  }

  // =============================
  // 19. Team One Area
  // =============================
  function initTeamAnimations() {
    const ease = "power4.out";
    const duration = 1.8;

    const section = document.querySelector(".rl-team--one");
    if (!section) return;

    if(document.querySelector(".rl-team--one .rl-team__title")){
      animateOnScroll(".rl-team--one .rl-team__title", {
        from: { y: 100, opacity: 0 },
        to: { y: 0, opacity: 1, duration, ease },
      });
    }

    if(document.querySelector(".rl-team--one .rl-team__text-group")){
      animateOnScroll(".rl-team--one .rl-team__text-group", {
        from: { y: 120, opacity: 0 },
        to: { y: 0, opacity: 1, duration, ease, delay: 0.2 },
      });
    }

    animateGroupItems(
      ".rl-team--one .rl-team__member",
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration, ease },
      0.2
    );
  }

  // =============================
  // 20. Pricing Area
  // =============================
  function initPricingAnimations() {
    const ease = "power4.out";
    const duration = 1.6;

    const section = document.querySelector(".rl-pricing");
    if (!section) return;

    animateOnScroll(".rl-pricing .rl-pricing__title", {
      from: { y: 40, opacity: 0 },
      to: { y: 0, opacity: 1, duration, ease },
    });

    animateOnScroll(".rl-pricing .rl-pricing__toggle", {
      from: { y: 40, opacity: 0 },
      to: { y: 0, opacity: 1, duration, ease, delay: 0.1 },
    });

    animateGroupItems(
      ".rl-pricing .rl-pricing__card",
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration, ease },
      0.2
    );
  }

  // =============================
  // 21. Insights Area
  // =============================
  function initInsightsAnimations() {
    const ease = "power4.out";
    const duration = 1.6;

    const section = document.querySelector(".rl-insights");
    if (!section) return;

    if(document.querySelector(".rl-insights .rl-insights__subtitle-wrap")){
      animateOnScroll(".rl-insights .rl-insights__subtitle-wrap", {
        from: { y: -60, opacity: 0 },
        to: { y: 0, opacity: 1, duration, ease },
      });
    }

    animateOnScroll(".rl-insights .rl-insights__title", {
      from: { y: 60, opacity: 0 },
      to: { y: 0, opacity: 1, duration, ease, delay: 0.1 },
    });

    animateGroupItems(
      ".rl-insights .rl-insight-card",
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration, ease },
      0.2
    );

    const element = document.querySelector(".rl-insights__pagination");
    if (!element) return;

    animateOnScroll(".rl-insights__pagination", {
      from: { y: 70, opacity: 0 },
      to: { y: 0, opacity: 1, duration: 1.2, delay: 0.30, ease: "power4.out" },
    });

    animateGroupItems(".rl-pagination__list",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" },
      0.1
    );
  }

  // =============================
  // 22. Breadcrumbs Area
  // =============================
  function initBreadcrumbsAnimation() {
    const ease = "power4.out";
    const duration = 1.6;

    const section = document.querySelector(".rl-breadcrumbs");
    if (!section) return;

    animateOnScroll(".rl-breadcrumbs .rl-breadcrumbs__nav", {
      from: { y: -30, opacity: 0 },
      to: { y: 0, opacity: 1, duration, ease },
    });

    animateOnScroll(".rl-breadcrumbs .rl-breadcrumbs__title", {
      from: { y: 30, opacity: 0 },
      to: { y: 0, opacity: 1, duration, ease, delay: 0.1 },
    });

    animateOnScroll(".rl-breadcrumbs .rl-breadcrumbs__container-custom", {
      from: { y: 60, opacity: 0 },
      to: { y: 0, opacity: 1, duration, ease, delay: 0.2 },
    });
  }

  // =============================
  // 23. Hero/About Area

  // =============================
  function initAboutHeroAnimations() {
    const ease = "power4.out";
    const duration = 1.8;

    const section = document.querySelector(".rl-hero--about");
    if (!section) return;

    animateOnScroll(".rl-hero--about .rl-hero__title", {
      from: { y: 100, opacity: 0 },
      to: { y: 0, opacity: 1, duration, ease }
    });

    animateGroupItems(".rl-hero--about .rl-hero__btn", 
      { y: 40, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.6, ease }, 
      0.1
    );

    animateOnScroll(".rl-hero--about .rl-hero__desc", {
      from: { y: 60, opacity: 0 },
      to: { y: 0, opacity: 1, duration: 1.6, ease }
    });

    animateOnScroll(".rl-hero--about .rl-hero__img", {
      from: { y: 100, opacity: 0, scale: 0.95 },
      to: { y: 0, opacity: 1, scale: 1, duration: 2, ease }
    });
  }  
  
  // =============================
  // 24. About/About Area
  // =============================
  function initAboutAboutAnimation() {
    const section = document.querySelector(".rl-about--about");
    if (!section) return;

    gsap.registerPlugin(ScrollTrigger);

    animateOnScroll(".rl-about--about .rl-about__subtitle-wrap", {
      from: { y: 40, opacity: 0 },
      to: { y: 0, opacity: 1, duration: 1.4, ease: "power4.out" },
    });

    animateOnScroll(".rl-about--about .rl-about__title-wrap", {
      from: { y: 60, opacity: 0 },
      to: { y: 0, opacity: 1, duration: 1.6, ease: "power4.out" },
    });

    animateGroupItems(".rl-about--about .rl-about__image-wrap",
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.6, ease: "power4.out" },
      0.15
    );

    animateGroupItems(".rl-about--about .rl-about__item",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.4, ease: "power4.out" },
      0.2
    );
  }
  
  // =============================
  // 25. Why Choose Area
  // =============================
  function initWhyChooseUsAnimation() {
    const section = document.querySelector(".rl-why-choose");
    if (!section) return;

    gsap.registerPlugin(ScrollTrigger);

    if(document.querySelector(".rl-why-choose__subtitle-wrap")){
      animateOnScroll(".rl-why-choose__subtitle-wrap", {
        from: { y: 60, opacity: 0 },
        to: { y: 0, opacity: 1, duration: 1.4, ease: "power4.out" }
      });
    }

    animateOnScroll(".rl-why-choose__title", {
      from: { y: 70, opacity: 0 },
      to: { y: 0, opacity: 1, duration: 1.4, ease: "power4.out" }
    });

    animateOnScroll(".rl-why-choose__btn", {
      from: { y: 50, opacity: 0 },
      to: { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" }
    });

    animateGroupItems(".rl-why-choose__item",
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power4.out" },
      0.15
    );

    animateOnScroll(".rl-why-choose__image", {
      from: { scale: 0.9, opacity: 0 },
      to: { scale: 1, opacity: 1, duration: 1.6, ease: "power4.out" }
    });
  }

  // =============================
  // 26. Awards Area
  // =============================
  function initAwardsAnimation() {
    const section = document.querySelector(".awards");
    if (!section) return;

    gsap.registerPlugin(ScrollTrigger);

    animateOnScroll(".rl-awards__title", {
      from: { y: 50, opacity: 0 },
      to: { y: 0, opacity: 1, duration: 1.4, ease: "power4.out" }
    });

    const rows = document.querySelectorAll(".rl-awards__row");
    rows.forEach((row, i) => {
      gsap.fromTo(row, 
        { y: 40, opacity: 0 }, 
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          delay: i * 0.1,
          scrollTrigger: {
            trigger: row,
            start: "top 90%",
            toggleActions: "play none none reset"
          }
        }
      );
    });

    gsap.fromTo(".rl-awards__image img",
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".rl-awards__table",
          start: "top 85%",
          toggleActions: "play none none reset"
        }
      }
    );
  }

  // =============================
  // 27. Portfolio Details Hero
  // =============================
  function initPortfolioHeroDetailsAnimation() {
    const section = document.querySelector(".rl-portfolio-hero--details");
    if (!section) return;

    gsap.registerPlugin(ScrollTrigger);

    animateOnScroll(".rl-portfolio-hero--details .rl-portfolio-hero__title", {
      from: { y: 60, opacity: 0 },
      to: { y: 0, opacity: 1, duration: 1.3, ease: "power4.out" }
    });

    animateOnScroll(".rl-portfolio-hero--details .rl-portfolio-hero__desc", {
      from: { y: 60, opacity: 0 },
      to: { y: 0, opacity: 1, duration: 1.4, ease: "power4.out", delay: 0.1 }
    });

    gsap.fromTo(".rl-portfolio-hero--details .rl-portfolio-hero__info-item",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.1,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".rl-portfolio-hero--details .rl-portfolio-hero__info-list",
          start: "top 90%",
          toggleActions: "play none none reset"
        }
      }
    );

    animateOnScroll(".rl-portfolio-hero--details .rl-portfolio-hero__image", {
      from: { scale: 0.94, opacity: 0 },
      to: { scale: 1, opacity: 1, duration: 1.3, ease: "power3.out", delay: 0.2 }
    });
  }
  
  // =============================
  // 28. Portfolio Details
  // =============================
  function initPortfolioDetailsAnimation() {
    const section = document.querySelector(".rl-portfolio-details");
    if (!section) return;

    animateOnScroll(".rl-portfolio-details__author-desc", {
      from: { y: 60, opacity: 0 },
      to: { y: 0, opacity: 1, duration: 1.1, ease: "power3.out" },
    });

    animateOnScroll(".rl-portfolio-details__author", {
      from: { y: 50, opacity: 0 },
      to: { y: 0, opacity: 1, duration: 1.1, delay: 0.1, ease: "power3.out" },
    });

    animateOnScroll(".rl-portfolio-details__summary", {
      from: { y: 60, opacity: 0 },
      to: { y: 0, opacity: 1, duration: 1.2, delay: 0.15, ease: "power3.out" },
    });

    animateOnScroll(".rl-portfolio-details__cover-image", {
      from: { scale: 0.8, opacity: 0 },
      to: { scale: 1, opacity: 1, duration: 1.3, ease: "power4.out" },
    });

    gsap.utils.toArray(".rl-portfolio-details__text-block").forEach((block, i) => {
      const subtitle = block.querySelector(".rl-portfolio-details__subtitle-wrap");
      const title = block.querySelector(".rl-portfolio-details__title");
      const paragraphs = block.querySelectorAll(".rl-portfolio-details__text");

      animateOnScroll(subtitle, {
        from: { y: 60, opacity: 0 },
        to: { y: 0, opacity: 1, duration: 1, delay: 0.1 * i, ease: "power2.out" },
      });

      animateOnScroll(title, {
        from: { y: 60, opacity: 0 },
        to: { y: 0, opacity: 1, duration: 1, delay: 0.15 + 0.1 * i, ease: "power2.out" },
      });

      paragraphs.forEach((p, j) => {
        animateOnScroll(p, {
          from: { y: 60, opacity: 0 },
          to: { y: 0, opacity: 1, duration: 1, delay: 0.2 + 0.1 * j, ease: "power2.out" },
        });
      });
    });

    gsap.utils.toArray(".rl-portfolio-details__image-group").forEach((group, i) => {
      const images = group.querySelectorAll(".rl-portfolio-details__image");

      images.forEach((img, j) => {
        animateOnScroll(img, {
          from: { y: 40, opacity: 0 },
          to: { y: 0, opacity: 1, duration: 1.3, delay: 0.1 * j, ease: "power2.out" },
        });
      });
    });
  }

  // =============================
  // 29. Video Area
  //==============================
  function initVideoAreaAnimation() {
    const section = document.querySelector(".rl-video-area");
    if (!section) return;

    animateOnScroll(".rl-video-area__thumb-wrapper", {
      from: { scale: 0.92, opacity: 0 },
      to: { scale: 1, opacity: 1, duration: 1.2, ease: "power3.out" },
    });

    gsap.fromTo(
      ".rl-video-area__play-btn",
      { scale: 1 },
      {
        scale: 1.15,
        duration: 1.2,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      }
    );
  }
  
  // =============================
  // 30. Services Details Hero
  // =============================
  function heroServicesDetailsAnimation() {
    const section = document.querySelector(".rl-hero--services-details");
    if (!section) return;

    animateOnScroll(".rl-hero--services-details .rl-hero__content", {
      from: { opacity: 0, y: 40 },
      to: { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" },
    });

    gsap.utils.toArray(".rl-hero--services-details .rl-hero__tag").forEach((tag, index) => {
      gsap.from(tag, {
        scrollTrigger: {
          trigger: tag,
          start: "top 90%",
        },
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: index * 0.1,
        ease: "power3.out",
      });
    });

    animateOnScroll(".rl-hero--services-details .rl-hero__slider", {
      from: { scale: 0.95, opacity: 0 },
      to: { scale: 1, opacity: 1, duration: 1.2, ease: "power3.out" },
    });
  }

  // =============================
  // 31. Services Details
  // =============================
  function initServicesDetailsAnimations(){
    const section = document.querySelector(".rl-service-details");
    if (!section) return;

    animateOnScroll(".rl-service-details__title", {
      from: { y: 60, opacity: 0 },
      to: { y: 0, opacity: 1, duration: 1.2, delay: 0.15, ease: "power4.out" },
    });

    animateOnScroll(".rl-service-details__desc", {
      from: { y: 50, opacity: 0 },
      to: { y: 0, opacity: 1, duration: 1.2, delay: 0.15, ease: "power4.out" },
    });

    animateOnScroll(".rl-service-details__list", {
      from: { y: 40, opacity: 0 },
      to: { y: 0, opacity: 1, duration: 1.2, delay: 0.15, ease: "power4.out" },
    });

    animateGroupItems(".rl-service-details__list-item",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" },
      0.1
    );

  }

  // =============================
  // 32. Contact Area
  // =============================
  function initContactAreaAnimations(){
    const section = document.querySelector(".rl-contact-info");
    if (!section) return;

    animateGroupItems(".rl-contact-info__item",
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" },
      0.1
    );
    animateOnScroll(".rl-map__location", {
      from: { scale: 0.9, opacity: 0 },
      to: { scale: 1, opacity: 1, duration: 1.6, ease: "power4.out" }
    });
  }

  // =============================
  // 33. Blog Details
  // =============================
  function initBlogDetailsAnimations() {
    const section = document.querySelector(".rl-blog--details");
    if (!section) return;

    fadeUpRepeat(".rl-blog__category", 0);
    fadeUpRepeat(".rl-blog__info", 0.1);
    fadeUpRepeat(".rl-blog__title", 0.2);
    fadeUpRepeat(".rl-blog__meta", 0.3);

    animateOnScroll(".rl-blog__image img", {
      from: { scale: 0.5, opacity: 0 },
      to: { scale: 1, opacity: 1, duration: 1.6, ease: "power4.out" },
    });

    animateGroupItems(".rl-blog__text", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.6, ease: "power4.out" }, 0.05);

    animateGroupItems(".rl-blog__subtitle", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, ease: "power4.out" }, 0.1);

    animateOnScroll(".rl-blog__quote", {
      from: { x: -60, opacity: 0 },
      to: { x: 0, opacity: 1, duration: 1.6, ease: "power4.out" },
    });

    animateGroupItems(".rl-blog__gallery-item", { y: 70, opacity: 0 }, { y: 0, opacity: 1, duration: 1.6, ease: "power4.out" }, 0.1);
    animateOnScroll(".rl-blog__gallery--wide img", {
      from: { scale: 1.5, opacity: 0 },
      to: { scale: 1, opacity: 1, duration: 1.8, ease: "power4.out" },
    });

    fadeUpRepeat(".rl-blog__tags-share", 0.2);
    fadeUpRepeat(".rl-blog__author-box", 0.3);

    fadeUpRepeat(".rl-blog__navigation", 0.3);
    fadeUpRepeat(".rl-blog__comment-form", 0.4);
  }

  // =============================
  // Initialize All Sections
  // =============================
  initHeroAnimations();
  initAboutAnimations();
  initFactAnimations();
  initServicesAnimations();
  initProcessAnimations();
  initRecentWorkAnimations();
  initBrandLogoAnimations();
  initTestimonialAnimations();
  initBlogAnimations();
  initFaqAnimations();
  initHeroTwoAnimations();
  initAvatarCardAnimations();
  initAboutTwoAnimations();
  initPortfolioOneAnimations();
  initServicesTwoAnimations();
  initBrandsAnimations();
  initTestimonialsAnimations();
  initTeamAnimations();
  initPricingAnimations();
  initInsightsAnimations();
  initBreadcrumbsAnimation();
  initAboutHeroAnimations();
  initAboutAboutAnimation();
  initWhyChooseUsAnimation();
  initAwardsAnimation();
  initPortfolioHeroDetailsAnimation();
  initPortfolioDetailsAnimation();
  initVideoAreaAnimation();
  heroServicesDetailsAnimation();
  initServicesDetailsAnimations();
  initContactAreaAnimations();
  initBlogDetailsAnimations();
});

/* =============================
* 34. Smooth Scroll / Lenis
============================= */
const lenis = new Lenis()
lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})
gsap.ticker.lagSmoothing(0);




