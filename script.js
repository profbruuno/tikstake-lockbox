// Animate cards on scroll-in using Intersection Observer
document.addEventListener("DOMContentLoaded", function () {
  // Animate cards
  const cards = document.querySelectorAll('.card');
  const observer = new window.IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    },
    { threshold: 0.12 }
  );
  cards.forEach((card) => observer.observe(card));

  // Hamburger menu
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-links');
  menuToggle.addEventListener('click', function (e) {
    e.stopPropagation();
    navMenu.classList.toggle('open');
    menuToggle.classList.toggle('open');
  });

  // Close mobile menu on outside click
  document.addEventListener('click', function (e) {
    if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
      navMenu.classList.remove('open');
      menuToggle.classList.remove('open');
    }
  });
  document.querySelectorAll('.nav-links > li > a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      menuToggle.classList.remove('open');
    });
  });

  // Dropdown (click for mobile)
  document.querySelectorAll('.dropdown').forEach(drop => {
    const toggle = drop.querySelector('.dropdown-toggle');
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelectorAll('.dropdown').forEach(d => {
        if (d !== drop) d.classList.remove('open');
      });
      drop.classList.toggle('open');
    });
  });
  document.addEventListener('click', function(e) {
    document.querySelectorAll('.dropdown').forEach(drop => {
      if (!drop.contains(e.target)) drop.classList.remove('open');
    });
  });

  // Active nav link
  const menuLinks = document.querySelectorAll('.nav-links > li > a');
  menuLinks.forEach(link => {
    link.addEventListener('click', function () {
      menuLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Asset lock modal
  const assetCards = document.querySelectorAll('.asset-card');
  const lockModal = document.getElementById('lock-modal');
  const assetNameSpan = document.getElementById('asset-name');
  assetCards.forEach(card => {
    card.addEventListener('click', function() {
      assetNameSpan.textContent = card.querySelector('p').textContent;
      lockModal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  });

  // Close modals
  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', function() {
      btn.closest('.modal').style.display = 'none';
      document.body.style.overflow = '';
    });
  });
  window.addEventListener('keydown', function(e) {
    if (e.key === "Escape") {
      document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
      document.body.style.overflow = '';
    }
  });

  // Lock form
  const lockForm = document.getElementById('lock-form');
  lockForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const fd = new FormData(lockForm);
    const duration = fd.get('duration');
    const txhash = fd.get('txhash');
    const email = fd.get('email');
    const kin = fd.get('kin');
    const kinemail = fd.get('kinemail');
    const asset = assetNameSpan.textContent;
    const proofimg = lockForm.proofimg.files[0] ? lockForm.proofimg.files[0].name : "(image attached)";
    document.getElementById('lock-modal').style.display = 'none';
    document.body.style.overflow = '';
    const receipt = `
      <strong>Asset:</strong> ${asset}<br>
      <strong>Duration:</strong> ${duration} ${duration === "6" ? "months" : "years"}<br>
      <strong>Transaction Hash:</strong> ${txhash}<br>
      <strong>Email:</strong> ${email}<br>
      <strong>Proof Image:</strong> ${proofimg}<br>
      <strong>Next of Kin:</strong> ${kin} (${kinemail})<br>
      <strong>Receipt ID:</strong> #TSK${Date.now().toString().slice(-6)}<br>
      <em>Thank you for trusting TikStake. Keep this receipt for your records.</em>
    `;
    document.getElementById('receipt-details').innerHTML = receipt;
    document.getElementById('receipt-modal').style.display = 'flex';
    lockForm.reset();
  });

  // White paper modal
  const whitepaperLink = document.getElementById('whitepaper-link');
  const whitepaperModal = document.getElementById('whitepaper-modal');
  if (whitepaperLink && whitepaperModal) {
    whitepaperLink.addEventListener('click', function(e) {
      e.preventDefault();
      whitepaperModal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
    whitepaperModal.querySelector('.modal-close').addEventListener('click', function() {
      whitepaperModal.style.display = 'none';
      document.body.style.overflow = '';
    });
  }
});