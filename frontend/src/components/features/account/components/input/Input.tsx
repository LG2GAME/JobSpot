import * as style from "./input.css";

interface InputProps {
  type: string;
  placeholder: string;
  name: string;
  id: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  isInvalid?: boolean;
}

const Input = ({
  type,
  placeholder,
  name,
  id,
  value,
  onChange,
  label,
  isInvalid,
}: InputProps) => {
  return (
    <div className={style.inputWrapper}>
      <input
        type={type}
        className={style.input({ invalid: isInvalid })}
        placeholder={placeholder}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={id} className={style.label({ invalid: isInvalid })}>
        {label}
      </label>
    </div>
  );
};

export default Input;
