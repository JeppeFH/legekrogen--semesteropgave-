import { useState, useEffect, useRef } from "react";
import styles from "./memberSubscription.module.css";
import Modal from "../modal/Modal";
import Loading from "../loading/Loading";
import Button from "../button/Button";
import { Link } from "react-router-dom";

const MemberSubsciption = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);

  /* UseState til hvis mail allerede er tilmeldt */
  const [alreadyMemberError, setAlreadyMemberError] = useState(false);

  /* useState value for hvert input-felt */
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [textValue, setTextValue] = useState("");

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = async (e) => {
    /* preventdefault sørger for at siden ikke reloader ved submit */
    e.preventDefault();
    setAlreadyMemberError(false);

    try {
      setIsLoading(true);
      const response = await fetch("https://legekrogen.webmcdm.dk/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: emailValue,
          name: nameValue,
          message: textValue,
        }),
      });

      const result = await response.json();
      if (result.created) {
        openModal();
      } else if (result.message === "Subscriber kan ikke oprettes") {
        setAlreadyMemberError(true);
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Fejl ved tilmelding:", error.message);
      setIsLoading(false);
    }
  };

  return (
    <>
      {" "}
      <section className={styles.formContainer}>
        {isLoading ? (
          <Loading />
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="name"
              placeholder="Fulde navn"
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
              required
              ref={inputRef}
            />
            <input
              type="email"
              placeholder="Email"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
              required
              ref={inputRef}
            />
            <textarea
              placeholder="Hvem køber du legetøj til?"
              value={textValue}
              onChange={(e) => setTextValue(e.target.value)}
              required
              ref={inputRef}
            />
            <Button
              className={styles.applicationBtn}
              buttonText="BLIV MEDLEM NU!"
              type="submit"
            />

            {alreadyMemberError && <p>*Email er allerede tilmeldt.</p>}
          </form>
        )}

        {isModalOpen && (
          <Modal onClose={closeModal}>
            <div className={styles.applyMessage}>
              <div className={styles.applyMessageOverlay}>
                <h2>Tak! {nameValue}</h2>
                <p>
                  Vi ser så glade for at du vil være en <br />
                  del af vores kundeklub. {nameValue}
                </p>

                <p>
                  Tag et kig i din indbakke. Vi har <br /> givet dig fri fragt
                  på din første <br />
                  ordre.
                </p>

                <Link to="/">
                  <Button buttonText="TIL FORSIDEN" />
                </Link>
              </div>
            </div>
          </Modal>
        )}
      </section>
    </>
  );
};

export default MemberSubsciption;
