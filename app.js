const seond_hand = document.querySelector(".second-hand");
const minute_hand = document.querySelector(".minute-hand");
const hour_hand = document.querySelector(".hour-hand");
function setdate() {
  const time = new Date();
  const seconds = time.getSeconds();
  const seconddeg = 6 * seconds;
  seond_hand.style.transform = `rotate(${seconddeg}deg)`;
  const min = time.getMinutes();
  const mindeg = 6 * min;
  minute_hand.style.transform = `rotate(${mindeg}deg)`;
  const hour = time.getHours();
  const hourdeg = 30 * hour + min / 2;
  hour_hand.style.transform = `rotate(${hourdeg}deg)`;
}
setInterval(setdate, 1000);
setdate();
