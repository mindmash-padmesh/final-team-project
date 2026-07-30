import "../Styles/Button.css";
function Button({
  text,
  children,
  title,
    onClick,
    type = "button",
    className = "",
    disabled=false,
}) {
    return (
      <button
        type={type}
        title={title}
        className={`button ${className}`}
        onClick={onClick}
        disabled={disabled}
      >
        {children||text}
      </button>
    );
}
export default Button;