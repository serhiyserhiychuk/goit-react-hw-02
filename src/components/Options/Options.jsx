import css from "./Options.module.css";

const Options = (updateFeedback, totalFeedback) => {
  console.log(totalFeedback);
  return (
    <ul className={css.list}>
      <li>
        <button
          className={css.button}
          onClick={() => updateFeedback.updateFeedback("good")}
        >
          Good
        </button>
      </li>
      <li>
        <button
          className={css.button}
          onClick={() => updateFeedback.updateFeedback("neutral")}
        >
          Neutral
        </button>
      </li>
      <li>
        <button
          className={css.button}
          onClick={() => updateFeedback.updateFeedback("bad")}
        >
          Bad
        </button>
      </li>
      {totalFeedback && (
        <li>
          <button className={css.button}>Reset</button>
        </li>
      )}
    </ul>
  );
};

export default Options;
