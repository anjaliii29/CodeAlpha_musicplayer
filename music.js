const audio = document.getElementById("audio");
const playButton = document.getElementById("play");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const progress = document.getElementById("progress");
const albumArt = document.getElementById("album-art");
const songTitle = document.getElementById("song-title");
const songs = [
    { title: "Song 1", src: "song1.mp3", album: "album1.jpg" },
    { title: "Song 2", src: "song2.mp3", album: "album2.jpg" },
    { title: "Song 3", src: "song3.mp3", album: "album3.jpg" }
];
let songIndex = 0;

function loadSong(index) {
    audio.src = songs[index].src;
    songTitle.textContent = songs[index].title;
    albumArt.src = songs[index].album;
}

playButton.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playButton.textContent = "⏸";
    } else {
        audio.pause();
        playButton.textContent = "▶";
    }
});

prevButton.addEventListener("click", () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songIndex);
    audio.play();
});

nextButton.addEventListener("click", () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songIndex);
    audio.play();
});

audio.addEventListener("timeupdate", () => {
    progress.value = (audio.currentTime / audio.duration) * 100;
});

progress.addEventListener("input", () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
});

loadSong(songIndex);
