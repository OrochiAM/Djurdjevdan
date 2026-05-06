function isTodayDjurdjevdan(date) {
  const now = new Date();

  return (
    (now.getDate() == 6 && now.getMonth() == 4) ||
    (now.getDate() == 7 && now.getMonth() == 4) ||
    (now.getDate() == 8 && now.getMonth() == 4)
  );
}

const prasici = document.querySelectorAll('.prase');

function handlePost() {
  const year = new Date().getFullYear();
  const danDjurdjevdan = new Date(`${year}-05-06`).getDay();

  if (danDjurdjevdan == 3 || danDjurdjevdan == 5) {
    prasici[0].src = 'images/riba.png';
    prasici[1].src = 'images/riba.png';
  }
}

const dugmeProvere = document.querySelector('button');
const textProvere = document.querySelector('h2');

const trubaciPojaviTl = gsap.timeline({ paused: true });

trubaciPojaviTl
  .to('.trubaci', { bottom: 0, duration: 3 })
  .to('.prase', { bottom: -70, duration: 3 }, '<')
  .to('.cestitka', { bottom: 30, duration: 3 });

const trubaciJiggleTl = gsap.timeline({ repeat: -1, delay: 3 });

trubaciJiggleTl.pause();
trubaciJiggleTl
  .to('.trubaciJ', { x: '+=30', y: '+=30' })
  .to('.trubaciJ', { x: '-=30', y: '-=30' })
  .to('.trubaciJ', { x: '-=30', y: '+=30' })
  .to('.trubaciJ', { x: '+=30', y: '-=30' });

let audioDJ = new Audio('audio/djurdjevdan.mp3');
let wompwomp = new Audio('audio/wompwomp.mp3');

const isDjurdjevdanHandle = (djurdjevdan) => {
  if (isTodayDjurdjevdan()) {
    textProvere.innerHTML = 'Da, Jeste!!';

    handlePost();

    trubaciPojaviTl.play();
    trubaciJiggleTl.play();

    audioDJ.play();
  } else {
    textProvere.innerHTML = 'Ne, Nije!!!';
    wompwomp.play();
  }
};

dugmeProvere.addEventListener('click', isDjurdjevdanHandle);

let lav = document.querySelector('.lavL');
