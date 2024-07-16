import styles from "./VideoBackground.module.css";

const VideoBackground = () => {
  return (
    <div className={styles.videoContainer}>
      <video className={styles.video} autoPlay loop muted>
        <source src="/assets/img/login-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.content}>{/* Your content goes here */}</div>
    </div>
  );
};

export default VideoBackground;
