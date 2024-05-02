import React, { useState } from "react";

export default function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function StepChange() {
    return count === -1 || count === 1 ? "day" : "days";
  }

  function TheStepButtons() {
    return (
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onInput={(e) => setStep(Number(e.target.value))}
        />
        <span>Step: {step} </span>
      </div>
    );
  }

  function TheCountButtons() {
    return (
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
    );
  }

  function UpdateDate() {
    return (
      <div>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count + " " + StepChange()} from today is `
            : `${Math.abs(count) + " " + StepChange()}  ago was `}
        </span>

        <span>{date.toDateString()}</span>
      </div>
    );
  }

  function TheResetButton() {
    return count !== 0 || step !== 1 ? (
      <div>
        <button
          onClick={() => {
            setStep(1);
            setCount(0);
          }}
        >
          Reset
        </button>
      </div>
    ) : null;
  }

  return (
    <>
      <TheStepButtons />
      <TheCountButtons />
      <UpdateDate />
      <TheResetButton />
    </>
  );
}
