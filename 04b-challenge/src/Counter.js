import React, { useState } from "react";
import { addDays, subDays, format } from "date-fns";

export default function Counter() {
  const [today, setToday] = useState(new Date());
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setStep((s) => s + 1);
  };

  const handleDecrement = () => {
    step > 0 && setStep((s) => s - 1);
  };

  const handleCountIncrement = () => {
    setCount((c) => c + step);
    setToday(addDays(today, step));
  };

  const handleCountDecrement = () => {
    setCount((c) => c - step);

    setToday(subDays(today, step));
  };

  function StepChange() {
    return count === -1 || count === 1 ? "day" : "days";
  }

  function TheStepButtons() {
    return (
      <div>
        <button onClick={handleDecrement}>-</button>
        <span>Step: {step} </span>
        <button onClick={handleIncrement}>+</button>
      </div>
    );
  }

  function TheCountButtons() {
    return (
      <div>
        <button onClick={handleCountDecrement}>-</button>
        <span>Count: {count} </span>
        <button onClick={handleCountIncrement}>+</button>
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

        <span>{format(today, "EE MMMM d yyyy").replace(/,/g, "")}</span>
      </div>
    );
  }

  return (
    <>
      <TheStepButtons />
      <TheCountButtons />
      <UpdateDate />
    </>
  );
}
