const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

document.getElementById("experimentTwo").addEventListener("click", () => {
    customName.focus(); 
});

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

let storyText = `It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.`;
let insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
let insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
let insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;
    let xItem, yItem, zItem; 
    newStory = newStory.replaceAll(":insertx:", randomValueFromArray(insertX)); 
    newStory = newStory.replaceAll(":inserty:", randomValueFromArray(insertY)); 
    newStory = newStory.replaceAll(":insertz:", randomValueFromArray(insertZ)); 

    if(customName.value !== '') {
        newStory = newStory.replaceAll("Bob", customName.value); 
    }

    if(document.getElementById("uk").checked) {
        const weight = Math.round(300);
        const temperature =  Math.round(94);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';

    customName.value = ""; 
    customName.focus(); 
}