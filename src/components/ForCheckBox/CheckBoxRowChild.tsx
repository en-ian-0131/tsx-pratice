import { useEffect, useState } from "react";
import CheckRowChildren from "./CheckRowChildren";

function CheckBoxRowChild(props: {
  row: {
    reg: string;
    checked: boolean;
    child: {
      num: string;
      checked: boolean;
    }[];
  };
  totalChecked?: boolean;
  setDDD?: React.Dispatch<React.SetStateAction<string[]>>;
  allChecked: string[];
}) {
  const { row, setDDD, totalChecked, allChecked } = props;
  const [regState, setRegState] = useState(row);

  const [cityChecked, setCityChecked] = useState<string[]>([]);

  const handleSingleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (cityChecked.includes(e.target.value)) {
      setCityChecked(cityChecked.filter((row) => row !== e.target.value));
    } else {
      setCityChecked([...cityChecked, e.target.value]);
    }
  };

  const handleAllChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setCityChecked(row.child.map((row) => row.num));
    } else {
      setCityChecked([]);
    }

    setRegState((item) => {
      return { ...item, checked: e.target.checked };
    });
  };

  useEffect(() => {
    setDDD!(cityChecked);
  }, [cityChecked]);

  return (
    <>
      <div className="d-flex">
        <CheckRowChildren
          value={regState.reg}
          checked={
            totalChecked ? true : cityChecked.length === row.child.length
          }
          onChange={handleAllChecked}
        />

        {row.child.map((val, i) => {
          return (
            <CheckRowChildren
              key={`${i + 1}`}
              value={val.num}
              checked={
                totalChecked
                  ? allChecked.includes(val.num)
                    ? true
                    : false
                  : cityChecked.includes(val.num)
                  ? true
                  : false
              }
              onChange={handleSingleChecked}
            />
          );
        })}
      </div>
    </>
  );
}

export default CheckBoxRowChild;
