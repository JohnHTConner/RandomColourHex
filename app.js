const colors = ["Black", "White", "Red", "Blue", "Green", "Purple", "Pink", "Yellow", "Brown", "Orange"];

const btn = document.getElementById('btn');
const color = document.querySelector('.colour')

btn.addEventListener('click', function(){
    // generate random number, and change background colour from colors array
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    });

// Used to retrieve the random number, and round it to nearest whole number so it matches array
function getRandomNumber(){
    return Math.floor (Math.random()*colors.length);
};

