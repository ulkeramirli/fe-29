document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.querySelector('.search-button');
    const inputField = document.getElementById('input-value');
    const imagesWrapper = document.querySelector('.images-wrapper');
  
    searchButton.addEventListener('click', () => {
      const query = inputField.value;
      if (query) {
        fetchImages(query);
      }
    });
  
    async function fetchImages(query) {
      const apiKey = '45082527-6569081820c67a0a5f5b66d1b'; 
      const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(query)}`;
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayImages(data.hits);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    }
  
    function displayImages(images) {
      imagesWrapper.innerHTML = '';
      if (images.length === 0) {
        imagesWrapper.innerHTML = '<p class="not-found">No images found</p>';
        return;
      }
  
      images.forEach(image => {
        const imageBox = document.createElement('div');
        imageBox.classList.add('image-box');
  
        const img = document.createElement('img');
        img.src = image.webformatURL;
        img.alt = image.tags;
  
        const text = document.createElement('div');
        text.classList.add('text-box');
  
        const user = document.createElement('p');
        user.innerHTML = `<span>User :</span> <span>${image.user}</span>`;
  
        const link = document.createElement('a');
        link.href = image.pageURL;
        link.textContent = 'Go to page';
        link.target = '_blank';
  
        text.appendChild(user);
        text.appendChild(link);
  
        imageBox.appendChild(img);
        imageBox.appendChild(text);
        imagesWrapper.appendChild(imageBox);
      });
    }
  });
  