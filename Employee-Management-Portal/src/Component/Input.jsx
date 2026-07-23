import "../Styles/Input.css";
function Input({
    type = "text",
    placeholder,
    value,
    onChange,
    name,
    id,
    className = "",
    disabled = false,
    required=false,
}) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
            id={id}
            className={`input ${className}`}
            disabled={disabled}
            required={required}
        />
    );
}
export default Input;