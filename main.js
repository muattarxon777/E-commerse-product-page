const modifiers = {
  siteHeaderCartModalOpen: 'site-header__cart-modal--open',
  ImgThumbnailActive: 'img-showcase__thumbnail--active',
  lightboxOpen: 'lightbox--open'
};

// SHopping cart modal
const elSiteHeaderCartLink = document.querySelector('.js-site-header__cart-link');
const elSiteHeaderCartModal = document.querySelector('.site-header__cart-modal');

if (elSiteHeaderCartLink) {
  elSiteHeaderCartLink.addEventListener('click', function (evt) {
    evt.preventDefault();

    elSiteHeaderCartModal.classList.toggle(modifiers.siteHeaderCartModalOpen);
  });
}

// Image showcase
const elProductPageGallery = document.querySelector('.product-page__gallery');
const elImgShowcaseActiveImg = elProductPageGallery.querySelector('.img-showcase__active-img');
const elsImgShowcaseThumbnailButton = elProductPageGallery.querySelectorAll('.js-showcase-thumbnail-button');
const elsImgThumbnail = elProductPageGallery.querySelectorAll('.img-showcase__thumbnail');

elsImgShowcaseThumbnailButton.forEach(function (elButton){
  elButton.addEventListener('click', function () {
    // Remove activates
    elsImgThumbnail.forEach(function (elImgThumbnail) {
      elImgThumbnail.classList.remove(modifiers.ImgThumbnailActive);
    });

    // Add activates
    elButton.parentElement.classList.add(modifiers.ImgThumbnailActive);

    // Set active img src
    elImgShowcaseActiveImg.src = elButton.dataset.imgShowcaseBig;
    elImgShowcaseActiveImg.srcset = `${elButton.dataset.imgShowcaseBig} 1x ,
    ${elButton.dataset.imgShowcaseRetina} 2x`
  });
});

// Lighbox
const elLightbox = document.querySelector('.lightbox');
const elLightboxToggler = document.querySelector('.js-lightbox-toggler');
const elLightboxClose = document.querySelector('.js-lightbox-close');

if (elLightboxToggler) {
  elLightboxToggler.addEventListener('click', function () {
    elLightbox.classList.add(modifiers.lightboxOpen);
  });
};

if (elLightboxClose) {
  elLightboxClose.addEventListener('click', function () {
    elLightbox.classList.remove(modifiers.lightboxOpen);
  });
};

// Thumbnail click
const elImgLightboxActiveImg = elLightbox.querySelector('.img-showcase__active-img');
const elsImgLightboxThumbnailButton = elLightbox.querySelectorAll('.js-lightbox-thumbnail-button');
const elsLightboxImgThumbnail = elLightbox.querySelectorAll('.img-showcase__thumbnail');

elsImgLightboxThumbnailButton.forEach(function (elButton) {
  elButton.addEventListener('click', function () {
    // Remove activates
    elsLightboxImgThumbnail.forEach(function (elImgThumbnail) {
      elImgThumbnail.classList.remove(modifiers.ImgThumbnailActive);
    });

    // Add activates
    elButton.parentElement.classList.add(modifiers.ImgThumbnailActive);

    // Set active img src
    elImgLightboxActiveImg.src = elButton.dataset.imgShowcaseBig;
    elImgLightboxActiveImg.srcset = `${elButton.dataset.imgShowcaseBig} 1x ,
    ${elButton.dataset.imgShowcaseRetina} 2x`
  });
});

// Lightbox control
const elLightboxControlPrev = elLightbox.querySelector('.js-lightbox-control-prev');
const elLightboxControlNext = elLightbox.querySelector('.js-lightbox-control-next');

if (elLightboxControlNext) {
  elLightboxControlNext.addEventListener('click', function () {
    const elActiveItem = elLightbox.querySelector('.img-showcase__thumbnail--active');
    elActiveItem.classList.remove(modifiers.ImgThumbnailActive);

    let elNextActiveItem;

    if (elActiveItem.nextElementSibling === null) {
      elNextActiveItem = elsLightboxImgThumbnail[0];
    } else {
      elNextActiveItem = elActiveItem.nextElementSibling;
    }

    elNextActiveItem.classList.add(modifiers.ImgThumbnailActive);

    // Set active img src
    elImgLightboxActiveImg.src = elNextActiveItem.children[0].dataset.imgShowcaseBig;
    elImgLightboxActiveImg.srcset = `${elNextActiveItem.children[0].dataset.imgShowcaseBig} 1x ,
    ${elNextActiveItem.children[0].dataset.imgShowcaseRetina} 2x`
  });
}

if (elLightboxControlPrev) {
  elLightboxControlPrev.addEventListener('click', function () {
    const elActiveItem = elLightbox.querySelector('.img-showcase__thumbnail--active');
    elActiveItem.classList.remove(modifiers.ImgThumbnailActive);

    let elPrevActiveItem;

    if (elActiveItem.previousElementSibling === null) {
      elPrevActiveItem = elsLightboxImgThumbnail[3];
    } else {
      elPrevActiveItem = elActiveItem.previousElementSibling;
    }

    elPrevActiveItem.classList.add(modifiers.ImgThumbnailActive);

    // Set active img src
    elImgLightboxActiveImg.src = elPrevActiveItem.children[0].dataset.imgShowcaseBig;
    elImgLightboxActiveImg.srcset = `${elPrevActiveItem.children[0].dataset.imgShowcaseBig} 1x ,
    ${elPrevActiveItem.children[0].dataset.imgShowcaseRetina} 2x`
  });
}

// Increment-Decrement
const elDecrementButton = document.querySelector('.js-decrement-button');
const elIncrementButton = document.querySelector('.js-increment-button');
const elProductPageInfoNumber = document.querySelector('.product-page-info__number');

if (elIncrementButton) {
  elIncrementButton.addEventListener('click', function () {
    elProductPageInfoNumber.textContent = parseInt(elProductPageInfoNumber.textContent, 10) + 1;
  });
}
if (elDecrementButton) {
  elDecrementButton.addEventListener('click', function () {
    const qty = parseInt(elProductPageInfoNumber.textContent, 10);

    if (qty > 0) {
      elProductPageInfoNumber.textContent = qty - 1;
    }
  });
}