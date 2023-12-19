// Get the canvas and context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Character variables
let femaleX = 50;
let femaleY = canvas.height - 50;
let maleX = canvas.width - 100;
let maleY = canvas.height - 50;

// Heart position
const heartX = canvas.width - 50;
const heartY = canvas.height - 50;

// Flag to check if characters are hugging
let isHugging = false;

// Listen for arrow key press
document.addEventListener('keydown', moveFemale);

function moveFemale(event) {
    if (event.key === 'ArrowRight' && !isHugging) {
        femaleX += 10;

        // Check if female character reaches the heart
        if (femaleX > heartX) {
            // Female character reaches the heart, male character appears
            isHugging = true;
        }

        // Draw the characters
        drawCharacters();
    }
}

// Draw characters on the canvas
function drawCharacters() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw female character
    ctx.fillStyle = 'black';
    ctx.fillRect(femaleX, femaleY, 20, 20);

    // Draw male character
    if (isHugging) {
        ctx.fillRect(maleX, maleY, 20, 20);
    }

    // Draw heart
    ctx.fillStyle = 'red';
    ctx.fillRect(heartX, heartY, 20, 20);

    // If characters are hugging, display the message
    if (isHugging) {
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('I LOVE YOU. MERRY CHRISTMAS', canvas.width / 2 - 150, canvas.height / 2);
    }
}

// Initial draw
drawCharacters();
