import { dom } from '../data.js';
import { handleSearchInput, handleDOMContentLoaded } from '../handlers/eventHandlers.js';

// Event listener for search input
dom.input.addEventListener('input', handleSearchInput);

// Event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);