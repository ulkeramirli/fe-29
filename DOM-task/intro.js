// Документ завершил загрузку (но не зависимые от него ресурсы).

document.addEventListener("DOMContentLoaded", function() {
    const audioList = [
        { src: "./assets/audio/adele-set-fire-to-the-rain (1).mp3", title: "Set Fire to the Rain", img: "./assets/image/adele.jpeg" },
        { src: "./assets/audio/adele.hello.mp3",title: "Hello",img: "./assets/image/adele.jpeg" },
        { src: "./assets/audio/adele-easy-on-me.mp3", title: "Easy on Me", img: "./assets/image/adele.jpeg"},
        { src: "./assets/audio/adele_-_rolling-in-the-deep.mp3", title: "Rolling in the Deep", img: "./assets/image/adele.jpeg"},
        { src: "./assets/audio/adele_-_someone-like-you.mp3", title: "Someone Like You", img: "./assets/image/adele.jpeg"}
    ];

    let currentIndex = 0;

    const audioElement = new Audio(audioList[currentIndex]);
    const playPauseButton = document.getElementById("play-pause");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    const songTitle = document.getElementById("song-title");
    const songImage = document.getElementById("img");

    // chtobi zagruzit pesnu 

    function loadSong(index) {
        audioElement.src = audioList[index].src;
        songTitle.textContent = `Adele: ${audioList[index].title}`;
        songImage.src = audioList[index].img;
       
    }

    // dla vospr/pauzi pesni

    function playPauseSong() {
        if (audioElement.paused) {
            audioElement.play();
            playPauseButton.textContent = "⏸️";
        } else {
            audioElement.pause();
            playPauseButton.textContent = "▶️";
        }
    }

// sleduyushaya

    function playNextSong() {
        currentIndex = (currentIndex + 1) % audioList.length;
        loadSong(currentIndex);
        audioElement.play();
        playPauseButton.textContent = "⏸️";
    }
// chtobi predidushiye pesni vosproizvodilis

    function playPrevSong() {
        currentIndex = (currentIndex - 1 + audioList.length) % audioList.length;
        loadSong(currentIndex);
        audioElement.play();
        playPauseButton.textContent = "▶️";
    }

    playPauseButton.addEventListener("click", playPauseSong);
    nextButton.addEventListener("click", playNextSong);
    prevButton.addEventListener("click", playPrevSong);

    loadSong(currentIndex);
});