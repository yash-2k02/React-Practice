import { createPortal } from 'react-dom';
import styles from './ErrorPortal.module.css'

export default function ErrorPortal({ message, closePortal }) {
  const dismissPortal = ()=>{
    closePortal(true)
  }
  return createPortal(
    <>
    <div className={styles.overlay}></div>
    <div className={styles.container}>
      <p className={styles.text}>{message}</p>
      <button className={styles.closeButton} onClick={dismissPortal}>OK</button>
    </div>
    </>,
    document.getElementById("portal-root")
  );
}
