import { Howl } from "howler";

let isMuted = false;

const sound = new Howl({
  src: ["/click.mp3"],
  volume: 0.5,
});

export const playClickSound = () => {
  if (!isMuted) {
    sound.play();
  }
};

const audioSources = ["/scream_1.mp3", "/scream_3.mp3"];

function getRandomAudioSource() {
  const randomIndex = Math.floor(Math.random() * audioSources.length);
  return audioSources[randomIndex];
}

export const playRandomScream = () => {
  if (!isMuted) {
    const randomSound = new Howl({
      src: [getRandomAudioSource()],
      volume: 0.5,
    });

    randomSound.play();
  }
};

export const toggleMuteAll = () => {
  isMuted = !isMuted;
};
