import "./Field.scss";

export const Field = ({ id, type, content, value, onChange }) => {
  const autocompleteMap = {
    email: "email",
    password:
      id === "password" || id === "rep-password"
        ? "new-password"
        : "current-password",
  };

  return (
    <label className="form-label button-text" htmlFor={id}>
      <input
        className="button-text"
        id={id}
        type={type}
        placeholder=""
        value={value}
        onChange={onChange}
        autoComplete={autocompleteMap[type] || "off"}
        required
      />
      <span>{content}</span>
    </label>
  );
};

export const CheckBox = ({ id, content, checked, onChange }) => (
  <label className="form-checkbox" htmlFor={id}>
    <input id={id} type="checkbox" checked={checked} onChange={onChange} />
    <span className="button-text button-text--orange">{content}</span>
  </label>
);
