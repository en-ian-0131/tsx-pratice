export default function CheckRowChildren(props: {
  value?: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}) {
  const { value, onChange, checked } = props;

  return (
    <div>
      <input
        type="checkbox"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor="">{value}</label>
    </div>
  );
}

