import styles from "./faqQuestions.module.css";
import { useState } from "react";
import { useFetchFaq } from "../../hooks/useFetchFaq";
import { RiArrowDownSLine } from "react-icons/ri";

const FaqQuestions = () => {
  const { faq } = useFetchFaq();
  const [isOpen, setIsOpen] = useState(null);

  /* Tager imod id'et fra den specifikke accordion */
  const toggleFaq = (id) => {
    setIsOpen((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className={styles.faq}>
      {faq.map((f) => (
        <div className={styles.faqContainer} key={f._id}>
          <div className={styles.question}>
            <p>{f.question}</p>
            <RiArrowDownSLine
              className={`${styles.arrowDown} ${
                isOpen === f._id ? styles.rotate : ""
              }`}
              onClick={() => toggleFaq(f._id)}
            />
          </div>
          {isOpen === f._id && (
            <div className={styles.answer}>
              <span></span>
              <p>{f.answer}</p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default FaqQuestions;
