import { h } from "preact";
import { useState, useEffect } from "preact/hooks";

export default function TypeWritter({ sentences, options }) {
  const [currentText, setCurrentText] = useState("");
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [visibleCaret, setVisibleCaret] = useState(false);
  const { writeSpeed, deleteSpeed, pauseSpeed } = options;

  const startNextSentence = () => {
    setCurrentSentenceIndex((prevIndex) => prevIndex + 1);
    setCurrentText("");
  };

  const startTypingEffect = () => {
    let index = 0;

    const additionInterval = setInterval(() => {
      if (index < sentences[currentSentenceIndex].length) {
        setCurrentText(
          (prevText) => prevText + sentences[currentSentenceIndex].charAt(index)
        );
        index++;
      } else {
        clearInterval(additionInterval);
        setTimeout(() => startCharacterSubtraction(index), pauseSpeed);
      }
    }, writeSpeed);
  };

  const startCharacterSubtraction = (index) => {
    const substractInterval = setInterval(() => {
      if (index >= 0) {
        setCurrentText((prevText) => prevText.slice(0, index));
        index--;
      } else {
        clearInterval(substractInterval);
        startNextSentence();
      }
    }, deleteSpeed);
  };

  useEffect(() => {
    if (currentSentenceIndex < sentences.length) {
      setTimeout(() => {
        startTypingEffect();
      }, pauseSpeed);
    }

    if (currentSentenceIndex === sentences.length) {
      setCurrentSentenceIndex(0);
    }
  }, [currentSentenceIndex]);

  useEffect(() => {
    const caretInterval = setInterval(() => {
      setVisibleCaret((prevCaret) => !prevCaret);
    }, 500);

    return () => {
      clearInterval(caretInterval);
    };
  }, []);

  return (
    <>
      <span className="text-blue-700 dark:text-sky-500 font-bold">
        {currentText}
        {visibleCaret ? <span>|</span> : <span>&nbsp;</span>}
      </span>
      <span>.</span>
    </>
  );
}
