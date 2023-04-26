import "./Switcher.scss";

const Switcher = () => {
  return (
    <div className="switcher">
      <label>
        <input type="radio" name="numeral-system" value="hex" />
        HEX
      </label>
      <label>
        <input type="radio" name="numeral-system" value="dec" defaultChecked />
        DEC
      </label>
      <label>
        <input type="radio" name="numeral-system" value="bin" />
        BIN
      </label>
    </div>
  );
};

export default Switcher;
