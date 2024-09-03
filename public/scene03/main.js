document.addEventListener('DOMContentLoaded', () => {
    const sentenceContainer = document.getElementById('sentence-container');
    let currentAudio = null; // Variable to keep track of the currently playing audio

    // Sentence and audio file mapping
    const sentences = [
        { text: "Her existence had been kept hidden from everyone.", audio: 'audio/001.mp3', newline: true },
        { text: "However, some of the people who knew about her said that she was a weapon.", audio: 'audio/002.mp3', newline: true },
        { text: "She would fight if you ordered her to.", audio: 'audio/003.mp3', newline: false },
        { text: "She just looked like a human.", audio: 'audio/003.mp3', newline: false },
        { text: "She was just a tool without a heart.", audio: 'audio/004.mp3', newline: true },
        { text: "Lieutenant Hodgins, this way.", audio: 'audio/005.mp3', newline: true },
        { text: "Yeah, sorry.", audio: 'audio/006.mp3', newline: true },
        { text: "Violet,", audio: 'audio/007.mp3', newline: false },
        { text: "are you okay?", audio: 'audio/008.mp3', newline: false },
        { text: "Are you hurt?", audio: 'audio/009.mp3', newline: true },
        { text: "The major?", audio: 'audio/010.mp3', newline: false },
        { text: "Where is Major Gilbert?", audio: 'audio/011.mp3', newline: true },
        { text: "He is not here.", audio: 'audio/012.mp3', newline: true },
        { text: "Where is he?", audio: 'audio/013.mp3', newline: false },
        { text: "Did he return home already?", audio: 'audio/014.mp3', newline: true },
        { text: "How are his injuries doing, anyway?", audio: 'audio/015.mp3', newline: false },
        { text: "I know they were pretty severe.", audio: 'audio/016.mp3', newline: true },
        { text: "Tell me, is the major actually alive?", audio: 'audio/017.mp3', newline: true },
        { text: "Well, he is..", audio: 'audio/018.mp3', newline: true },
        { text: "You are being discharged from the hospital.", audio: 'audio/019.mp3', newline: true },
        { text: "Lieutenant Hodgins came all this way to pick you up, you know?", audio: 'audio/020.mp3', newline: true },
        { text: "Uh, yeah, that's right.", audio: 'audio/021.mp3', newline: true },
        { text: "Excuse me, Lieutenant Hodgins.", audio: 'audio/022.mp3', newline: true },
        { text: "Violet, relax.", audio: 'audio/023.mp3', newline: true },
        { text: "I had forgotten that you were a lieutenant. I apologize, sir.", audio: 'audio/024.mp3', newline: true },
        { text: "It's okay. Here, sit down.", audio: 'audio/025.mp3', newline: false },
        { text: "Anyway, I was wondering if you actually remember me.", audio: 'audio/026.mp3', newline: true },
        { text: "Yes, we have met twice before.", audio: 'audio/027.mp3', newline: false },
        { text: "During the training, and the night before the battle.", audio: 'audio/028.mp3', newline: true },
        { text: "Yeah, you are right.", audio: 'audio/029.mp3', newline: true },
        { text: "What were you doing?", audio: 'audio/030.mp3', newline: true },
        { text: "I was writing a report to Major Gilbert.", audio: 'audio/031.mp3', newline: true },
        { text: "They said that writing words down would help to improve my condition a great deal.", audio: 'audio/032.mp3', newline: true },
        { text: "So, how is the major?", audio: 'audio/033.mp3', newline: true },
        { text: "Uh..", audio: 'audio/034.mp3', newline: false },
        { text: "Don't worry, Violet.", audio: 'audio/034.mp3', newline: false },
        { text: "He is the one who asked me to come here for you.", audio: 'audio/035.mp3', newline: true },
        { text: "So then, that means that he is fine.", audio: 'audio/036.mp3', newline: true },
        { text: "The doctor told me that we won the war.", audio: 'audio/037.mp3', newline: false },
        { text: "What post is he assigned to now?", audio: 'audio/038.mp3', newline: false },
        { text: "When will I be able to join him?", audio: 'audio/039.mp3', newline: true },
        { text: "First, get changed.", audio: 'audio/040.mp3', newline: false },
        { text: "I'll have them send the car in the meantime.", audio: 'audio/041.mp3', newline: true }
    ];

    // Function to display sentences and play corresponding audio
    function displaySentences(sentences) {
        sentences.forEach((sentence, index) => {
            const span = document.createElement('span');
            span.textContent = sentence.text;
            span.style.cursor = 'pointer';
            sentenceContainer.appendChild(span);

            // Play audio on sentence click
            span.addEventListener('click', () => {
                playAudio(sentence.audio);
            });

            // Insert line breaks where needed
            if (sentence.newline) {
                sentenceContainer.appendChild(document.createElement('br'));
            } else {
                span.textContent += " "; // Add space between sentences
            }
        });
    }

    // Function to play audio
    function playAudio(audioSrc) {
        if (currentAudio) {
            currentAudio.pause(); // Stop currently playing audio
            currentAudio.currentTime = 0; // Reset audio position
        }

        currentAudio = new Audio(audioSrc); // Set new audio source
        currentAudio.play();
    }

    // Display sentences
    displaySentences(sentences);
});
