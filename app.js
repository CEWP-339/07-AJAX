const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {

  navigator.geolocation.getCurrentPosition(
    positionData => {
      setTimeout(() => {
        console.log(positionData);
      }, 2000); //2000 milliseconds = 2 seconds
    },
    error => {
      console.log(error);
    }
  );

  setTimeout(() => {
    console.log("Timer Done!");
  }, 0);

  console.log("Getting Position Data....");

}

button.addEventListener('click', trackUserHandler);

// let result = 0;
// for (let i = 0; i < 1000000000; i++) {
//   result += i;
// }
// console.log(result);