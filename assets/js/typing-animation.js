document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('writing-text');
    const fullText = textElement.textContent; // Get the full text
    textElement.textContent = ''; // Clear the text initially

    let index = 0;

    function writeText() {
        if (index < fullText.length) {
            // Append one letter at a time
            textElement.textContent += fullText.charAt(index);
            index++;
            setTimeout(writeText, 150); // Adjust speed of typing here (150ms per character)
        } else {
            // Set opacity to 1 after all characters are written
            textElement.style.opacity = '1';
        }
    }

    writeText(); // Start the writing animation
});
