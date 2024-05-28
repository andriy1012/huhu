const accordion = document.querySelector('.accordion');
const items = accordion.querySelectorAll('li');

items.forEach((item) => {
    const input = item.querySelector('input');
    const label = item.querySelector('label');
    const content = item.querySelector('.content');
  
    input.addEventListener('click', () => {
      if (input.checked) {
        content.style.maxHeight = '400px';
        content.style.padding = '10px 10px 20px';
        label.querySelector('::before').textContent = '+';
      }
      else{
        content.style.maxHeight = '0px';
        content.style.padding = '0px 0px 0px'; 
      }
      
    });
  });