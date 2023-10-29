type checkboxProps = {
  isChecked?: boolean;
  isIndeterminate?: boolean;
  onClick?: () => void;
};

const Checkbox: React.FC<checkboxProps> = ({
  isChecked = false,
  onClick = () => {},
}) => {
  return (
    <input type="checkbox" checked={isChecked} onClick={onClick} readOnly />
  );
};

export default Checkbox;
