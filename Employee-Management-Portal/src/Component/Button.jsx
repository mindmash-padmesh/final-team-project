import "../Styles/Button.css";
function Button({
    text,
    onClick,
    type = "button",
    className = "",
    disabled=false,
}) {
    return (
      <button
        type={type}
        className={`button ${className}`}
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </button>
    );
}
export default Button;