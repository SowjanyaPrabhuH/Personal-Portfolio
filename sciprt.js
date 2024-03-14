document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the last selected category from sessionStorage
    const lastCategory = sessionStorage.getItem('filterCategory');
    if (lastCategory) {
      filterImages(lastCategory);
    }
  });

  function filterImages(category) {
    const allImages = document.querySelectorAll(".image div");
    allImages.forEach((imageSet) => {
      if (imageSet.classList.contains(category)) {
        imageSet.style.display = "block";
      } else {
        imageSet.style.display = "none";
      }
    });

    // Store the selected category in sessionStorage
    sessionStorage.setItem('filterCategory', category);
  }

  function showAll() {
    const allImages = document.querySelectorAll(".image div");
    allImages.forEach((imageSet) => {
      imageSet.style.display = "block";
    });

    // Clear the stored category from sessionStorage
    sessionStorage.removeItem('filterCategory');
  }

