// Get the canvas and context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Flag to check if characters are hugging
let findGift = false;

// Load images
const femaleImage = new Image();
femaleImage.src = 'images/femaleChar.png';
femaleImage.onload = drawCharacters;

const maleImage = new Image();
maleImage.src = 'images/maleChar.png';

const giftImage = new Image();
giftImage.src = 'images/gift.png';
giftImage.onload = drawCharacters;

const heartImage = new Image();
heartImage.src = 'images/heartImage.png';

// Character variables
let femaleX = 50;
let femaleY = canvas.height - 200;
let maleX = canvas.width - 200;
let maleY = canvas.height - 200;
let giftX = canvas.width - 200;
let giftY = canvas.height - 200;

// Draw characters on the canvas
function drawCharacters() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw female character
    ctx.drawImage(femaleImage, femaleX, femaleY, 120, 120);

    // Draw gift or male character based on the game state
    if (!findGift) {
        ctx.drawImage(giftImage, giftX, giftY, 100, 100);
    } else {
        // Draw male character
        setInterval(function () { 
            ctx.drawImage(maleImage, maleX, maleY, 150, 150);
        }, 5000);   
    }

    // If characters are hugging, display the message
    if (findGift) {
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('YOU FOUND YOUR PRESENT! PRESS UP TO OPEN IT!', canvas.width / 24, canvas.height / 8);
    }
}

function openGift(event) {
    if (event.key === 'ArrowUp' && findGift && !isHugging) {
        // Transition from gift to male character
        isHugging = true; // Assuming you want to show the hugging animation

        // Move both characters to the middle of the canvas
        femaleX = canvas.width / 2 - 75;
        maleX = canvas.width / 2 - 75;
        maleY = canvas.height / 2 - 75;

        // Draw the characters
        drawCharacters();

        // Display heart image and final message after a delay
        setTimeout(function () {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(heartImage, canvas.width / 2 - 50, canvas.height / 2 - 50, 100, 100);
            ctx.fillStyle = 'black';
            ctx.font = '30px Arial';
            ctx.fillText('MERRY XMAS!', canvas.width / 4, canvas.height / 2);
        }, 2000); // Adjust the delay as needed
    }
}

function moveFemale(event) {
    if (event.key === 'ArrowRight' && !findGift) {
        femaleX += 10;

        // Check if female character reaches the male character
        if (femaleX == giftX - 120) {
            // Female character reaches the male character, set findGift to true
            findGift = true;
        }

        // Draw the characters
        drawCharacters();
    }
}

// Listen for arrow key press
document.addEventListener('keydown', moveFemale);
document.addEventListener('keydown', openGift);
