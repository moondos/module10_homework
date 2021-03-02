
  // Ищем кнопку, по нажатии на которую будет запрос
  const btnNode = document.querySelector('.button-switch');
  var play = false
  // Функция по переклбчению
  function playButton() {
    var circle = document.querySelector('.bi path:first-child');
    var fill = document.querySelector('.bi path:last-child');
    
    if (!play) {
      circle.style.display = "none";
      fill.style.display = "block";
      
      play=true;
    } 
    else {
      circle.style.display = "block";
      fill.style.display = "none";
      play=false;
    }
    console.log(play)
 }
  // Вешаем обработчик на кнопку для запроса, первичная проверка числа 
  btnNode.addEventListener('click', () => {
    // btnNode.classList.toggle('btn--magic');
    
    playButton()
  })