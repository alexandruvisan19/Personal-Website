import { h } from "preact";
import { useState, useEffect } from "preact/hooks";

export default function TypeWritter() {
  const [currentText, setCurrentText] = useState("");
  const [typingComplete, setTypingComplete] = useState(false);
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);

  const arrayText = [
    "This is the text to display with typing effect.",
    "I'm a frontend developer!",
    "Testing a third phrase just in case!",
  ];

  const startNextSentence = () => {
    setCurrentSentenceIndex((prevIndex) => prevIndex + 1);
    setCurrentText("");
  };

  const startTypingEffect = () => {
    let index = 0;

    const additionInterval = setInterval(() => {
      if (index < arrayText[currentSentenceIndex].length) {
        setCurrentText(
          (prevText) => prevText + arrayText[currentSentenceIndex].charAt(index)
        );
        index++;
      } else {
        clearInterval(additionInterval);
        startCharacterSubtraction(index);
      }
    }, 100);
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
    }, 100);
  };

  useEffect(() => {
    if (currentSentenceIndex < arrayText.length) {
      console.log(currentSentenceIndex);
      startTypingEffect();
    }
  }, [currentSentenceIndex]);

  return (
    <div>
      {currentText}
      <span>|</span>
    </div>
  );
}
