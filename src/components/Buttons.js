import react from "react";

const Buttons = ({ type, value, func, text }) => {
  return (
    <>
      <button
        className="btn btn-primary"
        type={type}
        value={value}
        onClick={func}
      >
        {text}
      </button>
    </>
  );
};

export default Buttons;
