import css from './FeedbackOptions.module.css'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <div>
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onLeaveFeedback(option)}
          className={css.feedbackBtn}
        >
          {option}
        </button>
      ))}
    </div>
  );