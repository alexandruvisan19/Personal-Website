import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';

export default function TypeWritter({ sentences, options }) {
  const [currentText, setCurrentText] = useState('');
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [visibleCaret, setVisibleCaret] = useState(false);
  const {
    writeSpeed,
    deleteSpeed,
    pauseSpeed,
    caretSpeed,
    isInfinite,
    startText,
  } = options;
  const [hasStartText, setHasStartText] = useState(startText);

  const startNextSentence = () => {
    setCurrentSentenceIndex(prevIndex => prevIndex + 1);
    setCurrentText('');
  };

  const startTypingEffect = () => {
    let index = 0;

    if (hasStartText) {
      index = sentences[currentSentenceIndex].length - 1;
      setCurrentText(sentences[0]);
    }

    const additionInterval = setInterval(() => {
      if (
        index < sentences[currentSentenceIndex].length &&
        !hasStartText
      ) {
        setCurrentText(
          prevText =>
            prevText + sentences[currentSentenceIndex].charAt(index),
        );
        index++;
      } else {
        clearInterval(additionInterval);
        setTimeout(
          () => startCharacterSubtraction(index),
          pauseSpeed,
        );
        setHasStartText(false);
      }
    }, writeSpeed);
  };

  const startCharacterSubtraction = index => {
    if (currentSentenceIndex === sentences.length - 1 && isInfinite) {
      return;
    }

    const substractInterval = setInterval(() => {
      if (index >= 0) {
        setCurrentText(prevText => prevText.slice(0, index));
        index--;
      } else {
        clearInterval(substractInterval);
        startNextSentence();
      }
    }, deleteSpeed);
  };

  useEffect(() => {
    if (currentSentenceIndex < sentences.length) {
      setTimeout(
        () => {
          startTypingEffect();
        },
        hasStartText ? 0 : pauseSpeed,
      );
    }

    if (currentSentenceIndex === sentences.length) {
      setCurrentSentenceIndex(0);
    }
  }, [currentSentenceIndex]);

  useEffect(() => {
    const caretInterval = setInterval(() => {
      if (
        currentSentenceIndex === sentences.length - 1 &&
        isInfinite
      ) {
        setVisibleCaret(false);
        return;
      }

      setVisibleCaret(prevCaret => !prevCaret);
    }, caretSpeed);

    return () => {
      clearInterval(caretInterval);
    };
  }, [currentSentenceIndex]);

  return (
    <>
      <p className='text-5xl leading-tight mt-3 mb-3'>
        <i>{hasStartText ? sentences[0] : currentText}</i>
        {visibleCaret ? (
          <span>|</span>
        ) : (
          <span className='inline-block w-0 sm:ml-3 ml-0'>
            &nbsp;
          </span>
        )}
      </p>
    </>
  );
}
