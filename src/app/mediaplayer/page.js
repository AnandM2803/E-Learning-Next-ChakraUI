'use client'

import 'plyr/dist/plyr.css';
import Plyr from 'plyr';
import { useEffect, useRef } from 'react';

function VideoPlayer() {
  const videoRef = useRef(null);
  const playerRef = useRef(null); // Ref for storing Plyr instance

  useEffect(() => {
    if (videoRef.current && !playerRef.current) {
      console.log('Video element found, initializing Plyr.');

      // Initialize Plyr
      playerRef.current = new Plyr(videoRef.current, {
        controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen']
      });

      console.log('Plyr initialized:', playerRef.current);

      // Cleanup function to destroy Plyr instance
      return () => {
        console.log('Destroying Plyr instance.');
        if (playerRef.current) {
          playerRef.current.destroy();
        }
      };
    } else {
      console.warn('Video element not found or Plyr already initialized.');
    }
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <p>Video Player Component</p>
      <video ref={videoRef} width="500" height="400" controls style={{ border: '1px solid #000' }}>
        <source src="https://drive.google.com/uc?export=view&id=1HJScBlfWEOYsTKm-mYtDCWJLTzRWExlY" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;
