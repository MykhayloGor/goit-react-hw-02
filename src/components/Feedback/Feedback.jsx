import s from "./Feedback.module.css";

const Feedback = ({ good, neutral, bad, totalFeedback, positiveFeedback }) => {
  return (
    <div className={s.feedback}>
      <div>
        <p className={s.stat}>Good: {good}</p>
        <p className={s.stat}>Neutral: {neutral}</p>
        <p className={s.stat}>Bad: {bad}</p>
        <p className={s.stat}>Total: {totalFeedback}</p>
        <p className={s.stat}>Positive: {positiveFeedback}%</p>
      </div>
    </div>
  );
};

export default Feedback;
