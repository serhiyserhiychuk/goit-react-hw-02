const Options = (updateFeedback) => {
  return (
    <ul>
      <li>
        <button onClick={() => updateFeedback("good")}>Good</button>
      </li>
      <li>
        <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      </li>
      <li>
        <button onClick={() => updateFeedback("bad")}>Bad</button>
      </li>
    </ul>
  );
};

export default Options;
