import styles from "./faqQuestions.module.css";
import { useState } from "react";
import { useFetchFaq } from "../../hooks/useFetchFaq";
import { RiArrowDownSLine } from "react-icons/ri";

const FaqQuestions = () => {
  const { faq } = useFetchFaq();

  const [isOpen, setIsOpen] = useState(false);

  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className={styles.faq}>
      {faq.map((f) => (
        <div className={styles.faqContainer} key={f._id}>
          <div className={styles.question}>
            <p>{f.question}</p>
            <RiArrowDownSLine
              className={styles.arrowDown}
              onClick={toggleFaq}
            />
          </div>
          {isOpen && (
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
