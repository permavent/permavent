/* ============================================
   PERMA-VENT PROPERTY PROTECTION
   Main JavaScript
   ============================================ */

(function () {
  'use strict';

  // ---- Mobile Navigation Toggle ----
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navToggle.classList.toggle('is-open');
      navLinks.classList.toggle('is-open');
    });

    // Close mobile nav when a link is clicked
    navLinks.querySelectorAll('.nav__link').forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.classList.remove('is-open');
        navLinks.classList.remove('is-open');
      });
    });
  }

  // ---- FAQ Accordion ----
  document.querySelectorAll('.faq-question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.faq-item');
      var isOpen = item.classList.contains('is-open');

      // Close all other items
      document.querySelectorAll('.faq-item.is-open').forEach(function (openItem) {
        openItem.classList.remove('is-open');
      });

      // Toggle current
      if (!isOpen) {
        item.classList.add('is-open');
      }
    });
  });

  // ---- Scroll Reveal Animation ----
  var revealElements = document.querySelectorAll(
    '.glass-card, .pillar, .problem-card, .step, .testimonial-card, .cost-card, .stat-block, .warranty-cert, .form-card'
  );

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    revealElements.forEach(function (el) {
      el.classList.add('reveal');
      observer.observe(el);
    });
  }

  // ---- Quote Form Handler ----
  var quoteForm = document.getElementById('quoteForm');
  if (quoteForm) {
    quoteForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var submitBtn = quoteForm.querySelector('button[type="submit"]');
      var originalText = submitBtn.textContent;

      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      // Simulate form submission (replace with actual endpoint)
      setTimeout(function () {
        submitBtn.textContent = 'Quote Request Received';
        submitBtn.style.background = 'var(--green-ok)';
        submitBtn.style.color = 'var(--white)';

        // Show success message
        var successMsg = document.createElement('p');
        successMsg.style.cssText =
          'text-align:center;color:var(--green-ok);font-weight:500;margin-top:1rem;font-size:14px;';
        successMsg.textContent =
          'Thank you. We will send your per-vent-stack quote within 48 hours.';
        quoteForm.appendChild(successMsg);
      }, 800);
    });
  }

  // ---- Nav Background on Scroll ----
  var nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 20) {
        nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)';
      } else {
        nav.style.boxShadow = 'none';
      }
    });
  }
})();
