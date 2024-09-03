document.addEventListener('DOMContentLoaded', () => {
    const sentenceContainer = document.getElementById('sentence-container');
    let currentAudio = null;

    const sentences = [
        { text: "Her existence had been kept hidden from everyone.", audio: '/scene03/audio/001.mp3', newline: true },
        { text: "However, some of the people who knew about her said that she was a weapon.", audio: '/scene03/audio/002.mp3', newline: true },
        { text: "She would fight if you ordered her to.", audio: '/scene03/audio/003.mp3', newline: false },
        { text: "She just looked like a human.", audio: '/scene03/audio/004.mp3', newline: true },
        { text: "She was just a tool without a heart.", audio: '/scene03/audio/004.mp3', newline: true },
        { text: "Lieutenant Hodgins, this way.", audio: '/scene03/audio/005.mp3', newline: true },
        { text: "Yeah, sorry.", audio: '/scene03/audio/006.mp3', newline: false },
        { text: "Violet,", audio: '/scene03/audio/007.mp3', newline: false },
        { text: "are you okay?", audio: '/scene03/audio/008.mp3', newline: false },
        { text: "Are you hurt?", audio: '/scene03/audio/009.mp3', newline: true },
        { text: "The major?", audio: '/scene03/audio/010.mp3', newline: false },
        { text: "Where is Major Gilbert?", audio: '/scene03/audio/011.mp3', newline: true },
        { text: "He is not here.", audio: '/scene03/audio/012.mp3', newline: true },
        { text: "Where is he?", audio: '/scene03/audio/013.mp3', newline: false },
        { text: "Did he return home already?", audio: '/scene03/audio/014.mp3', newline: true },
        { text: "How are his injuries doing, anyway?", audio: '/scene03/audio/015.mp3', newline: false },
        { text: "I know they were pretty severe.", audio: '/scene03/audio/016.mp3', newline: true },
        { text: "Tell me, is the major actually alive?", audio: '/scene03/audio/017.mp3', newline: true },
        { text: "Well, he is..", audio: '/scene03/audio/018.mp3', newline: true },
        { text: "You are being discharged from the hospital.", audio: '/scene03/audio/019.mp3', newline: true },
        { text: "Lieutenant Hodgins came all this way to pick you up, you know?", audio: '/scene03/audio/020.mp3', newline: true },
        { text: "Uh, yeah, that's right.", audio: '/scene03/audio/021.mp3', newline: true },
        { text: "Excuse me, Lieutenant Hodgins.", audio: '/scene03/audio/022.mp3', newline: true },
        { text: "Violet, relax.", audio: '/scene03/audio/023.mp3', newline: true },
        { text: "I had forgotten that you were a lieutenant. I apologize, sir.", audio: '/scene03/audio/024.mp3', newline: true },
        { text: "It's okay. Here, sit down.", audio: '/scene03/audio/025.mp3', newline: false },
        { text: "Anyway, I was wondering if you actually remember me.", audio: '/scene03/audio/026.mp3', newline: true },
        { text: "Yes, we have met twice before.", audio: '/scene03/audio/027.mp3', newline: false },
        { text: "During the training, and the night before the battle.", audio: '/scene03/audio/028.mp3', newline: true },
        { text: "Yeah, you are right.", audio: '/scene03/audio/029.mp3', newline: false },
        { text: "What were you doing?", audio: '/scene03/audio/030.mp3', newline: true },
        { text: "I was writing a report to Major Gilbert.", audio: '/scene03/audio/031.mp3', newline: true },
        { text: "They said that writing words down would help to improve my condition a great deal.", audio: '/scene03/audio/032.mp3', newline: true },
        { text: "So, how is the major?", audio: '/scene03/audio/033.mp3', newline: true },
        { text: "Uh..", audio: '/scene03/audio/034.mp3', newline: false },
        { text: "Don't worry, Violet.", audio: '/scene03/audio/034.mp3', newline: false },
        { text: "He is the one who asked me to come here for you.", audio: '/scene03/audio/035.mp3', newline: true },
        { text: "So then, that means that he is fine.", audio: '/scene03/audio/036.mp3', newline: false },
        { text: "The doctor told me that we won the war.", audio: '/scene03/audio/037.mp3', newline: false },
        { text: "What post is he assigned to now?", audio: '/scene03/audio/038.mp3', newline: false },
        { text: "When will I be able to join him?", audio: '/scene03/audio/039.mp3', newline: true },
        { text: "First, get changed.", audio: '/scene03/audio/040.mp3', newline: false },
        { text: "I'll have them send the car in the meantime.", audio: '/scene03/audio/041.mp3', newline: true }
    ];

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

    function playAudio(audioSrc) {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
        currentAudio = new Audio(audioSrc);
        currentAudio.play();
    }

    displaySentences(sentences);
});
