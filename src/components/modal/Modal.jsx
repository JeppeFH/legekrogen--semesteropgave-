import styles from "./modal.module.css";

const Modal = ({ children, onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Modal;
