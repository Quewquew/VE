document.addEventListener('DOMContentLoaded', () => {
    const sentenceContainer = document.getElementById('sentence-container');
    let currentAudio = null; // 現在再生中の音声を保持する変数

    // センテンスと音声ファイルのマッピング
    const sentences = [
        { text: "Major Gilbert.", audio: '/scene02/audio/001.mp3', newline: true },
        { text: "I've been in the hospital for one hundred and twenty days now.", audio: '/scene02/audio/002.mp3', newline: true },
        { text: "My strength has almost recovered.", audio: '/scene02/audio/003.mp3', newline: true },
        { text: "Movement is still a little difficult,", audio: '/scene02/audio/004.mp3', newline: true },
        { text: "but I can perform my duties.", audio: '/scene02/audio/005.mp3', newline: true },
        { text: "Please let me return to my post soon.", audio: '/scene02/audio/006.mp3', newline: true }
    ];

    // センテンスを表示し、音声を再生する関数
    function displaySentences(sentences) {
        sentences.forEach((sentence, index) => {
            const span = document.createElement('span');
            span.textContent = sentence.text;
            span.style.cursor = 'pointer';
            sentenceContainer.appendChild(span);

            // センテンスをクリックしたら音声を再生
            span.addEventListener('click', () => {
                playAudio(sentence.audio);
            });

            // 改行が必要な場合は改行を挿入
            if (sentence.newline) {
                sentenceContainer.appendChild(document.createElement('br'));
                sentenceContainer.appendChild(document.createElement('br')); // 空行を追加
            } else {
                span.textContent += " "; // スペースを追加
            }
        });
    }

    // 音声を再生する関数
    function playAudio(audioSrc) {
        if (currentAudio) {
            currentAudio.pause(); // 現在再生中の音声を停止
            currentAudio.currentTime = 0; // 再生位置をリセット
        }

        currentAudio = new Audio(audioSrc); // 新しい音声を設定
        currentAudio.play();
    }

    // センテンスを表示
    displaySentences(sentences);
});
