/*------------------------------------------------------------------
Template Name: Maxfix – Digital Agency Portfolio HTML Template
Template URL: https://extraordinary-fairy-c25c85.netlify.app
Description: Maxfix is a next-generation HTML template converted from a premium Figma design, crafted for digital agencies, design studios, digital marketing agencies, personal portfolios, and creative professionals. It includes 14+ well-structured pages based on a 1770px grid system, featuring 2+ beautifully designed home pages. The codebase is clean, customizable, and organized for seamless editing and scalability across various business and personal website needs.
Author: UiBazar
Author URL: https://themeforest.net/user/kitdokan
Version: 1.0
-------------------------------------------------------------------

JS INDEX
===================

1. Preloader
2. Dynamically set BG
3. Services One Area
4. Testimonials One
5. Testimonials Two
6. Faq
7. Back to Top
8. Pricing Toggle Switch
9. Services Tab
10. Recent Work Filters
11. Services Details Slider
12. Desktop Menu
13. Responsive Menu
14. Video Area
15. Video Slider

------------------------------------------------------------------*/


"use strict";

/* =============================
* 1. Preloader
============================= */
document.addEventListener('DOMContentLoaded', function () {
  var preloader = document.querySelector(".preloader");

  if (!preloader) return;

  setTimeout(() => {
    preloader.style.display = "none";
  }, 500);
});

/* =============================
* 2. Dynamically set BG
============================= */
document.addEventListener('DOMContentLoaded', function () {
    const bgDivs = document.querySelectorAll('[data-bg-img]');
    if (bgDivs.length > 0) {
        bgDivs.forEach(div => {
            const bgImg = div.getAttribute('data-bg-img');
            if (bgImg) {
                div.style.background = `url(${bgImg})`;
                div.style.backgroundSize = 'cover';
                div.style.backgroundPosition = 'center';
                div.style.zIndex = '999';
            }
        });
    }
});

/* =============================
* 3. Services One Area
============================= */
document.addEventListener("DOMContentLoaded", function () {
  const toggleIcons = document.querySelectorAll(".services__item-toggle-icon");

  toggleIcons.forEach((icon) => {
    const item = icon.closest(".services__item");
    const content = item.querySelector(".services__item-content");

    // Initialize state if already active
    if (item.classList.contains("services__item--active")) {
      icon.classList.remove("fa-plus");
      icon.classList.add("fa-minus", "rotate");
      content.style.visibility = "visible";
      content.style.transform = "scaleY(1)";
      content.style.opacity = "1";
      content.style.height = "auto";
      content.style.padding = "2rem";
      content.style.marginBottom = "2rem";
    }

    icon.addEventListener("click", function () {
      const isActive = item.classList.contains("services__item--active");

      // Close all other items
      document.querySelectorAll(".services__item").forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains("services__item--active")) {
          const otherIcon = otherItem.querySelector(".services__item-toggle-icon");
          const otherContent = otherItem.querySelector(".services__item-content");

          otherIcon.classList.add("fa-plus");
          otherIcon.classList.remove("fa-minus", "rotate");

          otherContent.style.transform = "scaleY(0)";
          otherContent.style.opacity = "0";
          otherContent.style.height = "0";
          otherContent.style.padding = "0 2rem";
          otherContent.style.marginBottom = "0";

          setTimeout(() => {
            otherItem.classList.remove("services__item--active");
            otherContent.style.visibility = "hidden";
          }, 500);
        }
      });

      if (isActive) {
        // Close current
        icon.classList.add("fa-plus");
        icon.classList.remove("fa-minus", "rotate");

        content.style.transform = "scaleY(0)";
        content.style.opacity = "0";
        content.style.height = "0";
        content.style.padding = "0 2rem";
        content.style.marginBottom = "0";

        setTimeout(() => {
          item.classList.remove("services__item--active");
          content.style.visibility = "hidden";
        }, 500);
      } else {
        // Open current
        item.classList.add("services__item--active");

        icon.classList.remove("fa-plus");
        icon.classList.add("fa-minus", "rotate");

        content.style.visibility = "visible";
        content.style.height = "auto";
        content.style.padding = "2rem";
        content.style.marginBottom = "2rem";

        void content.offsetWidth;

        content.style.transform = "scaleY(1)";
        content.style.opacity = "1";
      }
    });
  });
});

/* =============================
* 4. Testimonials One
============================= */
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll('.testimonial-card');
  const cardList = document.querySelector('.testimonials__list');

  if(!cardList || cards) return;

  cards.forEach((card, index) => {
    const isLastCard = index === cards.length - 1;

    card.addEventListener('mouseenter', () => {
      cardList.style.marginTop = '-7.5rem';
      cardList.style.transition = 'margin-top 0.6s ease';

      if (isLastCard) {
        card.style.transform = 'translateY(0)';
      }
    });

    card.addEventListener('mouseleave', () => {
      cardList.style.marginTop = '0';
      cardList.style.transition = 'margin-top 0.6s ease';

      if (isLastCard && window.innerWidth >= 1190) {
        card.style.transform = 'translateY(-150px)';
      } else if (isLastCard) {
        card.style.transform = 'translateY(0)';
      }
    });

    if (isLastCard && window.innerWidth >= 1190) {
        card.style.transform = 'translateY(-150px)';
      }
  });

  window.addEventListener('resize', () => {
    const lastCard = cards[cards.length - 1];

    if (window.innerWidth >= 1190) {
      lastCard.style.transform = 'translateY(-150px)';
    } else {
      lastCard.style.transform = 'translateY(0)';
    } 
  });
});

/* =============================
* 5. Testimonials Two
============================= */
document.addEventListener("DOMContentLoaded", function () {
  const toggleIcons = document.querySelectorAll(".testimonials__item-toggle-icon");

  toggleIcons.forEach((icon) => {
    const item = icon.closest(".testimonials__item");
    const content = item.querySelector(".testimonials__item-content");

    // Initialize active state
    if (item.classList.contains("testimonials__item--active")) {
      icon.classList.add("rotate");

      content.style.visibility = "visible";
      content.style.transform = "scaleY(1)";
      content.style.opacity = "1";
      content.style.height = "auto";
      content.style.padding = "2rem";
      content.style.marginBottom = "2rem";
    }

    icon.addEventListener("click", function () {
      const isActive = item.classList.contains("testimonials__item--active");

      // Close all other active items
      document.querySelectorAll(".testimonials__item").forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains("testimonials__item--active")) {
          const otherIcon = otherItem.querySelector(".testimonials__item-toggle-icon");
          const otherContent = otherItem.querySelector(".testimonials__item-content");

          otherIcon.classList.remove("rotate");

          otherContent.style.transform = "scaleY(0)";
          otherContent.style.opacity = "0";
          otherContent.style.height = "0";
          otherContent.style.padding = "0 2rem";
          otherContent.style.marginBottom = "0";

          setTimeout(() => {
            otherItem.classList.remove("testimonials__item--active");
            otherContent.style.visibility = "hidden";
          }, 500);
        }
      });

      if (isActive) {
        icon.classList.remove("rotate");

        content.style.transform = "scaleY(0)";
        content.style.opacity = "0";
        content.style.height = "0";
        content.style.padding = "0 2rem";
        content.style.marginBottom = "0";

        setTimeout(() => {
          item.classList.remove("testimonials__item--active");
          content.style.visibility = "hidden";
        }, 500);
      } else {
        item.classList.add("testimonials__item--active");
        icon.classList.add("rotate");

        content.style.visibility = "visible";
        content.style.height = "auto";
        content.style.padding = "2rem";
        content.style.marginBottom = "2rem";

        void content.offsetWidth;

        content.style.transform = "scaleY(1)";
        content.style.opacity = "1";
      }
    });
  });
});

/* =============================
* 6. Faq
============================= */
document.querySelectorAll('.faq__toggle').forEach(toggle => {
  toggle.addEventListener('click', function () {
    const item = this.closest('.faq__item');
    const answer = item.querySelector('.faq__answer');
    const isActive = item.classList.contains('faq__item--active');

    // Collapse all items first
    document.querySelectorAll('.faq__item').forEach(i => {
      const a = i.querySelector('.faq__answer');
      a.style.height = '0px';
      i.classList.remove('faq__item--active');
    });

    if (!isActive) {
      item.classList.add('faq__item--active');
      answer.style.height = answer.scrollHeight + 'px';

      answer.addEventListener('transitionend', () => {
        if (item.classList.contains('faq__item--active')) {
          answer.style.height = 'auto';
        }
      }, { once: true });
    }
  });
});

/* =============================
* 7. Back to Top
============================= */
document.addEventListener("DOMContentLoaded", function () {
  const scrollBtn = document.querySelector(".footer__scroll-top");

  scrollBtn.addEventListener("click", function () {
    const duration = 1000;  
    const start = window.pageYOffset;
    const startTime = performance.now();

    function scrollStep(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);  
      const ease = 1 - Math.pow(1 - progress, 3);  

      window.scrollTo(0, start * (1 - ease));

      if (progress < 1) {
        requestAnimationFrame(scrollStep);
      }
    }

    requestAnimationFrame(scrollStep);
  });
});

/* =============================
* 8. Pricing Toggle Switch
============================= */
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtns = document.querySelectorAll('.pricing__toggle-btn');
  const prices = document.querySelectorAll('.pricing__price');

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      toggleBtns.forEach(b => b.classList.remove('pricing__toggle-btn--active'));
      btn.classList.add('pricing__toggle-btn--active');

      const period = btn.dataset.period;

      prices.forEach(price => {
        price.textContent = `$${parseFloat(price.dataset[period]).toFixed(2)}`;
      });
    });
  });
});

/* =============================
* 9. Services Tab
============================= */
 document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".services__tab");
    const contents = document.querySelectorAll(".services__content");

    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));

        tab.classList.add("active");
        const target = tab.getAttribute("data-tab");
        document.querySelector(`.services__content[data-content="${target}"]`).classList.add("active");
      });
    });
});

/* =============================
* 10. Recent Work Filters
============================= */
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".recent-work__filters li");
  const cards = document.querySelectorAll(".work-card");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");

      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove("filter-active"));
      button.classList.add("filter-active");

      // Filter cards
      cards.forEach(card => {
        const categories = card.getAttribute("data-category").split(" ");
        if (filter === "all" || categories.includes(filter)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});

/* =============================
* 11. Services Details Slider
============================= */
document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector('.hero__slider')) {
    const serviceSlider = new Swiper('.hero__slider', {
      loop: true,
      navigation: {
        nextEl: '.hero__slider-button-next',
        prevEl: '.hero__slider-button-prev',
      },
    });
  }
});

/* =============================
* 12. Desktop Menu
============================= */
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMobile = document.getElementById('closeMobile');

  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.add('mobile-menu--open');
  });

  closeMobile.addEventListener('click', () => {
    mobileMenu.classList.remove('mobile-menu--open');
  });
});

/* =============================
* 13. Responsive Menu
============================= */
document.querySelectorAll('.mobile-menu__list .menu-item-has-children > a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const parent = link.parentElement;
    parent.classList.toggle('open');
  });
});


/* =============================
* 14. Video Area
============================= */
const lightbox = GLightbox({
  type: 'video',
  source: 'youtube',  
  autoplayVideos: true,
});

/* =============================
* 15. Video Slider
============================= */
document.addEventListener("DOMContentLoaded", function () {
  const videoSlider = new Swiper('.custom-slider', {
    loop: true,
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },
    effect: 'fade',
    fadeEffect: { crossFade: true },
  });
});











