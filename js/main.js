function isToday(date) {
  const now = new Date();

  console.log(date.getMonth());
  return (
    date.getDate() === now.getDate() &&
    date.getMonth() === now.getMonth() &&
    date.getFullYear() === now.getFullYear()
  );
}

const dugmeProvere = document.querySelector('button');
const textProvere = document.querySelector('h2');

const trubaciPojaviTl = gsap.timeline();

trubaciPojaviTl.pause();
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

const isDjurdjevdanHandle = (djurdjevdan) => {
  if (djurdjevdan.includes(true)) {
    textProvere.innerHTML = 'Da, Jeste!!';
    trubaciPojaviTl.play();
    trubaciJiggleTl.play();
    audioDJ.play();
  } else {
    textProvere.innerHTML = 'Ne, Nije!!!';
    let audio = new Audio('audio/wompwomp.mp3');
    audio.play();
  }
};

dugmeProvere.addEventListener('click', () => {
  isDjurdjevdanHandle([
    isToday(new Date('2025-5-6')),
    isToday(new Date('2025-5-7')),
    isToday(new Date('2025-5-8')),
    isToday(new Date('2025-5-12')),
  ]);
});

let lav;
