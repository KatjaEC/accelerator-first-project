import { VIDEO_LINK } from './constants';

const videoWrapper = document.querySelector('.about__video-wrapper');
const videoLink = videoWrapper.querySelector('.about__video-link');
const videoImage = videoWrapper.querySelector('.about__video-image');
const playButton = videoWrapper.querySelector('.about__video-button');

const onPlayButtonClick = () => {
  setTimeout(() => {
    videoLink.style.display = 'none';
    videoImage.style.display = 'none';
    playButton.style.display = 'none';
  }, 500);
};

const initVideo = () => {
  videoWrapper.insertAdjacentHTML('afterbegin', VIDEO_LINK);
  videoLink.removeAttribute('href');
  onPlayButtonClick();
  playButton.removeEventListener('click', initVideo);
  videoLink.removeEventListener('click', initVideo);
};

const onVideoInitialization = () => {
  if (videoWrapper) {
    playButton.addEventListener('click', initVideo);
    videoLink.addEventListener('click', initVideo);
  }
};

export { onVideoInitialization };
