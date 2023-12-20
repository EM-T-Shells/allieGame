 // Get the canvas and context
 const canvas = document.getElementById('gameCanvas');
 const ctx = canvas.getContext('2d');

 // Character variables
 let femaleX = 50;
 let femaleY = canvas.height - 200;
 let maleX = canvas.width - 200;
 let maleY = canvas.height - 200;

 // Flag to check if characters are hugging
 let isHugging = false;

 // Load images
 const femaleImage = new Image();
 femaleImage.src = 'images/femaleChar.png';  // Replace with your image file

 const maleImage = new Image();
 maleImage.src = 'images/maleChar.png';  // Replace with your image file

 // Listen for arrow key press
 document.addEventListener('keydown', moveFemale);

 function moveFemale(event) {
     if (event.key === 'ArrowRight' && !isHugging) {
         femaleX += 10;

         // Check if female character reaches the male character
         if (femaleX == maleX - 120) {
             // Female character reaches the male character, hugging begins
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

     // Draw male character
     if (isHugging) {
         ctx.drawImage(maleImage, maleX, maleY, 150, 150);
     }

     // Draw female character
     ctx.drawImage(femaleImage, femaleX, femaleY, 150, 150);

     // If characters are hugging, display the message
     if (isHugging) {
         ctx.fillStyle = 'black';
         ctx.font = '20px Arial';
         ctx.fillText('I LOVE YOU. MERRY CHRISTMAS', canvas.width / 2 - 150, canvas.height / 2);
     }
 }

 // Initial draw
//  drawCharacters();