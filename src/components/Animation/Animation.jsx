import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedSentence = ({ sentence }) => {
  const [forward, setForward] = useState(true);

  // Use the useSpring hook to animate the opacity and transform of each character
  const { opacity, transform } = useSpring({
    opacity: forward ? 1 : 0,
    transform: `scale(${forward ? 1 : 0.5})`,
    // Set the config to control the duration of the animation
    config: { duration: 500 },
    // Callback for when the animation is finished
    onRest: () => setForward(!forward),
  });

  return (
    <animated.div style={{ opacity, transform }}>
      {sentence.split('').map((char, index) => (
        <span >{char}</span>
      ))}
    </animated.div>
  );
};

const Animation = () => {
  const sentence = 'Hello, React Spring!';

  return (
    <div>
      <h1>Animating Sentence</h1>
      <AnimatedSentence sentence={sentence} />
    </div>
  );
};

export default Animation;
