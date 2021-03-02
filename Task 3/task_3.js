
const wsUri = "wss://echo.websocket.org/";
const inpMessage = document.querySelector('.inp_message');
const windowMessage = document.querySelector('.window_chat');
const btnSend = document.querySelector('.btn_send');
const btnGeo = document.querySelector('.btn_geolocation');

// Adding message to the chat area
function writeToScreen(message, classSpecific) {
  let newMessage = document.createElement("p");
  newMessage.classList.add('window__message');
  newMessage.classList.add(classSpecific);
  newMessage.textContent = message;
  return newMessage
}

// Connect to the server
let websocket = new WebSocket(wsUri);

websocket.onopen = () => {
  alert('Соединение с Echo установлено!');
};

websocket.onclose = () => {
  alert('Произошло разъединение с сервером!');
};

websocket.onmessage = function(evt) {
  console.log(evt.data);
  if (evt.data.indexOf('www.openstreetmap.org') <1) {
    windowMessage.appendChild(writeToScreen(evt.data, 'window__message-echo'));
  };
  windowMessage.scrollTop = windowMessage.scrollHeight;
};

websocket.onerror = () => {
  alert('Ошибка соединения!');
};

// Send button
btnSend.addEventListener('click', () => {
  websocket.send(inpMessage.value);
  windowMessage.appendChild(writeToScreen(inpMessage.value, 'window__message-send'));
  windowMessage.scrollTop = windowMessage.scrollHeight;
  inpMessage.value = '';
});

//Geolocation button
btnGeo.addEventListener('click', () => {
  if ("geolocation" in navigator) {
    console.log('геолокация поддерживается');

    navigator.geolocation.getCurrentPosition((position) => {
      const { coords } = position;

      const mapLink = document.createElement('a');
      mapLink.href = `https://www.openstreetmap.org/#map=18/${coords.latitude}/${coords.longitude}`;
      mapLink.textContent = 'Гео-локация';
      mapLink.target = '_blank'
      mapLink.classList.add('window__message');
      mapLink.classList.add('window__message-send');
      websocket.send(mapLink);
      windowMessage.appendChild(mapLink);
      
  });
  }
  else {
    console.log('геолокация не поддерживается');
  }

});