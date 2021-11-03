import {useEffect, useRef} from 'react';

type VideoPlayerProps = {
  poster: string,
  isPlaying: boolean;
  src: string;
}

const PREVIEW_DELAY = 1000;

function Player({poster, isPlaying, src}:VideoPlayerProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    if (videoRef.current && isPlaying) {
      timeoutId = setTimeout(() => {
        videoRef.current?.play();
      }, PREVIEW_DELAY);
    }

    if (videoRef.current && !isPlaying) {
      videoRef.current.load();
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isPlaying, videoRef]);
  // eslint-disable-next-line no-console
  console.log(src);

  return (
    <video
      ref={videoRef}
      poster={poster}
      src={src}
      width="280"
      height="175"
      muted
    />
  );
}

export default Player;
