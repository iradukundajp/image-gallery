import { imageGalleryData, dom } from '../data.js';
import { renderImages } from '../components/domUtils.js';

// Event handler for dom content loaded 
export const handleDOMContentLoaded = () => {
    // Initial render of all images
    renderImages(imageGalleryData, 
        dom.imagesContainer, 
        dom.noImageFoundMessage, 
        dom.imgsDom);}