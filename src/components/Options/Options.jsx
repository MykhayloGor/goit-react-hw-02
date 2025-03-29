import s from "./Options.module.css";

const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
  return (
    <div className={s.options}>
      <div className={s.buttonContainer}>
        <button className={s.button} onClick={() => updateFeedback("good")}>
          Good
        </button>
        <button className={s.button} onClick={() => updateFeedback("neutral")}>
          Neutral
        </button>
        <button className={s.button} onClick={() => updateFeedback("bad")}>
          Bad
        </button>
        {totalFeedback > 0 && (
          <button className={s.button} onClick={resetFeedback}>
            Reset
          </button>
        )}
      </div>
    </div>
  );
};

export default Options;
