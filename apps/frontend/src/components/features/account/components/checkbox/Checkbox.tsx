import * as style from "./checkbox.css";

interface CheckboxProps {
  type: string;
  name: string;
  id: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

const Checkbox = ({
  type,
  name,
  id,
  checked,
  onChange,
  label,
}: CheckboxProps) => {
  return (
    <div className={style.checkboxWrapper}>
      <input
        type={type}
        className={style.checkbox}
        name={name}
        id={id}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Checkbox;
