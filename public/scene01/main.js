document.addEventListener('DOMContentLoaded', () => {
    const sentenceContainer = document.getElementById('sentence-container');
    const sentences = [
        { text: "What's the matter?", audio: 'audio/001.mp3', newline: true },
        { text: "It's your eyes.", audio: 'audio/002.mp3', newline: false },
        { text: "It's the same color as your eyes.", audio: 'audio/003.mp3', newline: true },
        { text: "The way I felt when I saw this,", audio: 'audio/004.mp3', newline: false },
        { text: "this feeling..", audio: 'audio/005.mp3', newline: false },
        { text: "What is it called?", audio: 'audio/006.mp3', newline: true }
    ];

    let currentAudio = null;

    function playAudio(audioSrc) {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
        currentAudio = new Audio(audioSrc);
        currentAudio.play();
    }

    function displaySentences(sentences) {
        sentences.forEach((sentence) => {
            const span = document.createElement('span');
            span.textContent = sentence.text;
            span.style.cursor = 'pointer';
            sentenceContainer.appendChild(span);

            span.addEventListener('click', () => {
                playAudio(sentence.audio);
            });

            if (sentence.newline) {
                sentenceContainer.appendChild(document.createElement('br'));
                sentenceContainer.appendChild(document.createElement('br'));
            } else {
                span.textContent += " ";
            }
        });
    }

    displaySentences(sentences);
});
