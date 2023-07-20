// Function to create the image box element
export const createImageBox = (image) => {
    const imageBox = document.createElement('div');
    imageBox.classList.add('image-box');
    imageBox.setAttribute('data-name', image.name.toLowerCase());
  
    const imgElement = document.createElement('img');
    imgElement.src = image.imagePath;
    imgElement.alt = image.name;
  
    const h6Element = document.createElement('h6');
    h6Element.textContent = image.name;
  
    imageBox.appendChild(imgElement);
    imageBox.appendChild(h6Element);
  
    return imageBox;
  }
  
  // Function to render the filtered images in the gallery
  export const renderImages = (images, imagesContainer, noImageFoundMessage, imgsDom) => {
    imagesContainer.innerHTML = '';
    imgsDom.length = 0;
  
    images.forEach((image) => {
      const imageBox = createImageBox(image);
      imagesContainer.appendChild(imageBox);
      imgsDom.push(imageBox);
    });
  
    // Show or hide the "No image found" message based on the search results
    if (images.length === 0) {
      noImageFoundMessage.style.display = 'block';
    } else {
      noImageFoundMessage.style.display = 'none';
    }
  }
  