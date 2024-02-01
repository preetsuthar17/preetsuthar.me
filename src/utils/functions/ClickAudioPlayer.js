import { Howl } from "howler";

let isMuted = false;

const clickSound = new Howl({
  src: ["/click.mp3"],
  volume: 0.2,
});

const audioSources = ["/scream_1.mp3", "/scream_3.mp3"];

const screamSounds = audioSources.map(
  (source) =>
    new Howl({
      src: [source],
      volume: 0.5,
    })
);

export const playClickSound = () => {
  if (!isMuted) {
    clickSound.play();
  }
};

export const playRandomScream = () => {
  if (!isMuted) {
    const randomIndex = Math.floor(Math.random() * screamSounds.length);
    screamSounds[randomIndex].play();
  }
};

export const toggleMuteAll = () => {
  isMuted = !isMuted;
};
