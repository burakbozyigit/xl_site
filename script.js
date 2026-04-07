document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-card');
  const lightbox = document.getElementById('lightbox');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxVisual = document.getElementById('lightboxVisual');
  const lightboxTag = document.getElementById('lightboxTag');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxText = document.getElementById('lightboxText');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      const filter = button.dataset.filter;
      galleryItems.forEach(item => {
        const match = filter === 'all' || item.dataset.category === filter;
        item.style.display = match ? '' : 'none';
      });
    });
  });

  if (lightbox && lightboxVisual && lightboxTag && lightboxTitle && lightboxText) {
    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const skinClass = [...item.classList].find(cls => cls.startsWith('gallery-skin-')) || 'gallery-skin-1';
        lightboxVisual.className = `lightbox-visual ${skinClass}`;
        lightboxTag.textContent = item.dataset.category;
        lightboxTitle.textContent = item.dataset.title;
        lightboxText.textContent = item.dataset.text;
        lightbox.classList.add('open');
        lightbox.setAttribute('aria-hidden', 'false');
      });
    });

    function closeLightbox() {
      lightbox.classList.remove('open');
      lightbox.setAttribute('aria-hidden', 'true');
    }

    lightboxClose?.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
    });
  }
});
