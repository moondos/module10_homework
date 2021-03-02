
  // Ищем кнопку, по нажатии на которую будет запрос
  const btnNode = document.querySelector('.button-size');

  // Вешаем обработчик на кнопку для запроса, первичная проверка числа 
  btnNode.addEventListener('click', () => {
    // btnNode.classList.toggle('btn--magic');
    let width = window.screen.width;
    let height = window.screen.height;

    return alert(`Ширина экрана - ${width}px, высота экрана - ${height}px`)
  })