const music = new Audio("audio/01.mp3");
// music.play();

const songs = [
  {
    id: 1,
    songName: `BRO Title Song <br />
        <div class="subtitle">BRO</div>`,
    poster: "img/1.webp",
  },
  {
    id: 2,
    songName: `Ranjha <br />
        <div class="subtitle">Shershaah</div>`,
    poster: "img/2.webp",
  },
  {
    id: 3,
    songName: `Apna Bana Le Piya<br />
        <div class="subtitle">Bhediya</div>`,
    poster: "img/3.webp",
  },
  {
    id: 4,
    songName: `Jalsa Title Song <br />
        <div class="subtitle">Jalsa</div>`,
    poster: "img/4.webp",
  },
  {
    id: 5,
    songName: `Kurradu Baboi <br />
        <div class="subtitle">F3</div>`,
    poster: "img/5.webp",
  },
  {
    id: 6,
    songName: `Nachde Ne Saare <br />
        <div class="subtitle">Baar Baar Dekho</div>`,
    poster: "img/6.webp",
  },
  {
    id: 7,
    songName: `Choopultho <br />
        <div class="subtitle">Radha</div>`,
    poster: "img/7.webp",
  },
  {
    id: 8,
    songName: `Odiyamma <br />
        <div class="subtitle">Hi Nanna</div>`,
    poster: "img/8.webp",
  },
  {
    id: 9,
    songName: `Chitti Ne Navvante <br />
        <div class="subtitle">Jaathi Rathnalu</div>`,
    poster: "img/9.webp",
  },
  {
    id: 10,
    songName: `Hukum <br />
        <div class="subtitle">Jailer</div>`,
    poster: "img/10.webp",
  },
  {
    id: 11,
    songName: `Kurchi Madathapetti <br />
        <div class="subtitle">Guntur Kaaram</div>`,
    poster: "img/11.webp",
  },
  {
    id: 12,
    songName: `Netha Cheera <br />
        <div class="subtitle">Katamarayudu</div>`,
    poster: "img/12.webp",
  },
  {
    id: 13,
    songName: `Jhoom Jhoom re <br />
        <div class="subtitle">Spy</div>`,
    poster: "img/13.webp",
  },
  {
    id: 14,
    songName: `Ra Reddy <br />
        <div class="subtitle">Macharla Niyojakavargam</div>`,
    poster: "img/14.webp",
  },
  {
    id: 15,
    songName: `Jawan Title Track <br />
        <div class="subtitle">Jawan</div>`,
    poster: "img/15.webp",
  },
  {
    id: 16,
    songName: `Pakka Local <br />
        <div class="subtitle">Janatha Garage</div>`,
    poster: "img/16.webp",
  },
  {
    id: 17,
    songName: `Tauba Tauba <br />
        <div class="subtitle">Sardar Gabbar Singh</div>`,
    poster: "img/17.webp",
  },
  {
    id: 18,
    songName: `1 2 3 4 Get On The Dance Floor <br />
        <div class="subtitle">Chennai Express</div>`,
    poster: "img/18.webp",
  },
  {
    id: 19,
    songName: `Tu Khiladi Main Anadi <br />
        <div class="subtitle">Selfie</div>`,
    poster: "img/19.webp",
  },
  {
    id: 20,
    songName: `Chittiya kalayan Re <br />
        <div class="subtitle">Roy</div>`,
    poster: "img/20.webp",
  },
  {
    id: 21,
    songName: `Sooraj Dooba Hain<br />
        <div class="subtitle">Roy</div>`,
    poster: "img/21.webp",
  },
  {
    id: 22,
    songName: `Kalaavathi Kalaavathi<br />
        <div class="subtitle">Sarkaru Vari Paata</div>`,
    poster: "img/22.webp",
  },
  {
    id: 23,
    songName: `Laage Laage <br />
        <div class="subtitle">Katamarayudu</div>`,
    poster: "img/23.webp",
  },
];

Array.from(document.getElementsByClassName("songItem")).forEach((e, i) => {
  e.getElementsByTagName("img")[0].src = songs[i].poster;
  e.getElementsByTagName("h5")[0].innerHTML = songs[i].songName;
});

let masterPlay = document.getElementById("masterPlay");
let wave = document.getElementById("wave");

masterPlay.addEventListener("click", () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    wave.classList.add("active1");
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
  } else {
    music.pause();
    wave.classList.remove("active1");
    masterPlay.classList.add("bi-play-fill");
    masterPlay.classList.remove("bi-pause-fill");
  }
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("playlistplay")).forEach((el) => {
    el.classList.add("bi-play-circle-fill");
    el.classList.remove("bi-pause-circle-fill");
  });
};

const makeAllBackground = () => {
  Array.from(document.getElementsByClassName("songItem")).forEach((el) => {
    el.style.background = "rgb(105, 105, 105, .0)";
  });
};

let index = 0;
let poster_master_play = document.getElementById("poster_master_play");
let download_music = document.getElementById("download_music");
let title = document.getElementById("title");

Array.from(document.getElementsByClassName("playlistplay")).forEach((e) => {
  e.addEventListener("click", (el) => {
    index = el.target.id;
    // console.log(index);
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.webp`;
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");

    download_music.href = `audio/${index}.mp3`;

    let songTitles = songs.filter((els) => {
      return els.id == index;
    });

    songTitles.forEach((elss) => {
      let { songName } = elss;
      title.innerHTML = songName;
      download_music.setAttribute("download", songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName("songItem"))[
      index - 1
    ].style.background = "rgb(105, 105, 105, .1)";
    makeAllPlays();
    el.target.classList.remove("bi-play-circle-fill");
    el.target.classList.add("bi-pause-circle-fill");
    wave.classList.add("active1");
  });
});

let currentStart = document.getElementById("currentStart");
let currentEnd = document.getElementById("currentEnd");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName("dot")[0];

music.addEventListener("timeupdate", () => {
  let music_curr = music.currentTime;
  let music_dur = music.duration;
  // console.log(music_curr);
  let min1 = Math.floor(music_dur / 60);
  let sec1 = Math.floor(music_dur % 60);

  // console.log(min1);
  // console.log(sec1);
  if (sec1 < 10) {
    sec1 = `0${sec1}`;
  }
  currentEnd.innerText = `${min1}:${sec1}`;

  let min2 = Math.floor(music_curr / 60);
  let sec2 = Math.floor(music_curr % 60);

  if (sec2 < 10) {
    sec2 = `0${sec2}`;
  }

  currentStart.innerText = `${min2}:${sec2}`;

  let progressBar = parseInt((music_curr / music_dur) * 100);
  seek.value = progressBar;
  // console.log(seek.value);
  let seekbar = seek.value;
  bar2.style.width = `${seekbar}%`;
  dot.style.left = `${seekbar}%`;
});

seek.addEventListener("change", () => {
  music.currentTime = (seek.value * music.duration) / 100;
});

let vol_icon = document.getElementById("vol_icon");
let vol = document.getElementById("vol");
let vol_bar = document.getElementsByClassName("vol_bar")[0];
let vol_dot = document.getElementById("vol_dot");

vol.addEventListener("change", () => {
  if (vol.value == 0) {
    vol_icon.classList.remove("bi-volume-up-fill");
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.add("bi-volume-off-fill");
  }
  if (vol.value > 0) {
    vol_icon.classList.remove("bi-volume-up-fill");
    vol_icon.classList.add("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-off-fill");
  }
  if (vol.value > 50) {
    vol_icon.classList.add("bi-volume-up-fill");
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-off-fill");
  }
  let vol_a = vol.value;
  vol_bar.style.width = `${vol_a}%`;
  vol_dot.style.left = `${vol_a}%`;
  music.volume = vol_a / 100;
});

let back = document.getElementById("back");
let next = document.getElementById("next");

back.addEventListener("click", () => {
  index -= 1;
  if (index < 1) {
    index = Array.from(document.getElementsByClassName("songItem")).length;
  }
  music.src = `audio/${index}.mp3`;
  poster_master_play.src = `img/${index}.webp`;
  music.play();
  masterPlay.classList.remove("bi-play-fill");
  masterPlay.classList.add("bi-pause-fill");

  let songTitles = songs.filter((els) => {
    return els.id == index;
  });

  songTitles.forEach((elss) => {
    let { songName } = elss;
    title.innerHTML = songName;
  });
  makeAllBackground();
  Array.from(document.getElementsByClassName("songItem"))[
    index - 1
  ].style.background = "rgb(105, 105, 105, .1)";
  makeAllPlays();
  el.target.classList.remove("bi-play-circle-fill");
  el.target.classList.add("bi-pause-circle-fill");
  wave.classList.add("active1");
});

next.addEventListener("click", () => {
  index++;
  if (index > Array.from(document.getElementsByClassName("songItem")).length) {
    index = 1;
  }
  music.src = `audio/${index}.mp3`;
  poster_master_play.src = `img/${index}.webp`;
  music.play();
  masterPlay.classList.remove("bi-play-fill");
  masterPlay.classList.add("bi-pause-fill");

  let songTitles = songs.filter((els) => {
    return els.id == index;
  });

  songTitles.forEach((elss) => {
    let { songName } = elss;
    title.innerHTML = songName;
  });
  makeAllBackground();
  Array.from(document.getElementsByClassName("songItem"))[
    index - 1
  ].style.background = "rgb(105, 105, 105, .1)";
  makeAllPlays();
  el.target.classList.remove("bi-play-circle-fill");
  el.target.classList.add("bi-pause-circle-fill");
  wave.classList.add("active1");
});

let pop_song_left = document.getElementById("pop_song_left");
let pop_song_right = document.getElementById("pop_song_right");
let pop_song = document.getElementsByClassName("pop_song")[0];

pop_song_right.addEventListener("click", () => {
  pop_song.scrollLeft += 330;
});
pop_song_left.addEventListener("click", () => {
  pop_song.scrollLeft -= 330;
});

let pop_art_left = document.getElementById("pop_art_left");
let pop_art_right = document.getElementById("pop_art_right");
let item = document.getElementsByClassName("item")[0];

pop_art_right.addEventListener("click", () => {
  item.scrollLeft += 330;
});
pop_art_left.addEventListener("click", () => {
  item.scrollLeft -= 330;
});
