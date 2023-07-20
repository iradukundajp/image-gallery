import { dom } from '../data.js';
import { handleSearchInput} from '../handlers/searchHandler.js';

// Event listener for search input
dom.input.addEventListener('input', handleSearchInput);