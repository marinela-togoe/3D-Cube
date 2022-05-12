let x = 0, bool = false, interval;


const rotate = () => {
  const cubes = document.querySelectorAll(".cube");
  Array.from(cubes).forEach(cube => cube.style.transform = `rotateY(${x}deg)`);
};

const changePlayPause = () => {
  const i = document.querySelector(".play-pause i");
  const cls = i.classList;
  console.log(cls);
}

const playPause = () => {
  if(!bool) {
    interval = setInterval(() => {
      x -= 90;
      rotate();
    }, 2000);
    bool = true;
  } else {
    clearInterval(interval);
    bool = false;
  };

};

document.querySelector(".left-arrow").addEventListener("click", () => {
  x += 90;
  rotate();
});

document.querySelector(".left-arrow").addEventListener("mouseover", () => {
  x += 25;
  rotate();
});

document.querySelector(".left-arrow").addEventListener("mouseout", () => {
  x -= 25;
  rotate();
});

document.querySelector(".right-arrow").addEventListener("click", () => {
  x -= 90;
  rotate();
});

document.querySelector(".right-arrow").addEventListener("mouseover", () => {
  x -= 25;
  rotate();
});

document.querySelector(".right-arrow").addEventListener("mouseout", () => {
  x += 25;
  rotate();
});

document.querySelector(".play-pause").addEventListener("click", () => {
    playPause();
    changePlayPause();
});
