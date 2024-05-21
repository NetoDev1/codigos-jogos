
function toggleDescription(manchete) {
  var description = manchete.querySelector('.mainCategoryCardDescription');
  var button = manchete.querySelector('.mancheteButton');
  
  
  manchete.classList.toggle('expanded');

  if (description.style.display === 'none' || description.style.display === '') {
    description.style.display = 'block';
    button.textContent = 'Ver Menos';
  } else {
    description.style.display = 'none';
    button.textContent = 'Ver Mais';
  }
}


document.addEventListener('DOMContentLoaded', function () {
  var manchetes = document.querySelectorAll('.categoryCard');
  manchetes.forEach(function (manchete) {
    var button = document.createElement('button');
    button.textContent = 'Ver Mais';
    button.className = 'mancheteButton';
    button.addEventListener('click', function () {
      toggleDescription(manchete);
    });
    manchete.appendChild(button);
  });
});
