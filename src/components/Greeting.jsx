import { useState } from "preact/hooks";
import Typewriter from "typewriter-effect";

export default function Greeting({ messages }) {
  return (
    <div>
      <Typewriter
        options={{
          strings: ["Hello", "World"],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
}
