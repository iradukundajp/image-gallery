import { imageGalleryData, dom } from '../data.js';
import { renderImages } from '../components/domUtils.js';

// Function to filter images based on search input
const filterImages = (searchTerm) => {
  const filteredImages = imageGalleryData.filter((image) =>
    image.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return filteredImages;
}

// Event handler for search input
export const handleSearchInput = (event) => {
  const searchTerm = event.target.value.trim();

  // Check if the search term has at 2 characters
  if (searchTerm.length > 2) {
    const filteredImages = filterImages(searchTerm);
    renderImages(filteredImages, dom.imagesContainer, dom.noImageFoundMessage, dom.imgsDom);
  } else {
    // If the search term is less than 2 characters, show all images
    renderImages(imageGalleryData, dom.imagesContainer, dom.noImageFoundMessage, dom.imgsDom);
  }
}

// Event handler for dom content loaded 
export const handleDOMContentLoaded = () => {
    // Initial render of all images
        renderImages(imageGalleryData, dom.imagesContainer, dom.noImageFoundMessage, dom.imgsDom);}