import "./chips.css";

function Chips({ text = "Information design", color = "#3182CE" }) {
  return (
    <div className="chips" style={{ backgroundColor: `${color}` }}>
      {text}
    </div>
  );
}

export default Chips;
