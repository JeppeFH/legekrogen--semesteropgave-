import { useState, useEffect, useRef } from "react";
import styles from "./newsletter.module.css";
import Modal from "../modal/Modal";
import Loading from "../loading/Loading";
import Button from "../button/Button";

const Newsletter = () => {
  const [inputValue, setInputValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    /* preventdefault sørger for at siden ikke reloader ved submit */
    e.preventDefault();

    try {
      setIsLoading(true);

      const response = await fetch(
        "https://api-medieskolerne.vercel.app/emails",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: inputValue }),
        }
      );

      const result = await response.json();
      openModal();
      setInputValue("");
      setIsLoading(false);
    } catch (error) {
      console.error("Fejl ved tilmelding:", error.message);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="email"
            placeholder="Email"
            value={inputValue}
            onChange={handleInputChange}
            required
            ref={inputRef}
          />
          <Button
            className={styles.newsletterBtn}
            buttonText="Tilmeld"
            type="submit"
          />
        </form>
      )}

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <h2>Tak for din tilmelding!</h2>
          <p>Vi sender dig en bekræftelsesmail på {inputValue}</p>
        </Modal>
      )}
    </>
  );
};

export default Newsletter;