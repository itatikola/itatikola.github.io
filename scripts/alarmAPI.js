/* create new bubble 

const docBody = document.querySelector('body');
const newBubble = document.createElement('div');
newBubble.setAttribute('class', 'bubble');
docBody.appendChild(newBubble);

// create bubble elements
const button = document.createElement('button');
button.textContent = 'Set Alarm';
button.id = 'set-alarm';
const output = document.createElement('div');
output.id = 'output';
newBubble.append(button, output);*/

const name = document.querySelector("#name");
const delay = document.querySelector("#delay");
const button = document.querySelector("#set-alarm");
const output = document.querySelector("#output");

function alarm(person, delay) {
    return new Promise((resolve, reject) => {
      if (delay < 0) {
        throw new Error("Alarm delay must not be negative");
      }
      setTimeout(() => {
        resolve(`Wake up, ${person}!`);
      }, delay);

      console.log('inside returned Promise from alarm');
    });
}  

// 'synchronizing' asynchronous function using await
/*
button.addEventListener("click", async () => {
    console.log('before await');

    try {
        output.textContent = await alarm(name.value, delay.value);
        console.log('await successful'); 
    } catch (error) {
        output.textContent = `Couldn't set alarm: ${error}`;
        console.log('await unsuccessful');
    }

    console.log('after await');
}); */

button.addEventListener("click", () => {
    console.log('before alarm call');
    alarm(name.value, delay.value)
        .then((message) => output.textContent = message)
        .catch((error) => output.textContent = `Couldn't set alarm: ${error}`);
    console.log('after alarm call');
});