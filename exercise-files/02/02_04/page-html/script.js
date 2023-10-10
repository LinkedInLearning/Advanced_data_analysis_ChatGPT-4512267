const inputText = document.getElementById('inputText');
const reverseButton = document.getElementById('reverseButton');
const output = document.getElementById('output');

reverseButton.addEventListener('click', function() {
    const text = inputText.value;
    const reversedText = text.split('').reverse().join('');
    output.textContent = reversedText;
});
