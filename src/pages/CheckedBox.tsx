import { Fragment, useState } from "react";
import CheckBoxRowChild from "../components/ForCheckBox/CheckBoxRowChild";
import CheckRowChildren from "../components/ForCheckBox/CheckRowChildren";

function CheckedBox() {
  // const CheckRegArray = [
  //   {
  //     reg: "第一作戰區",
  //     child: [
  //       { num: "11", checked: false },
  //       { num: "12", checked: false },
  //       { num: "13", checked: false },
  //       { num: "14", checked: false },
  //     ],
  //     checked: false,
  //   },
  //   {
  //     reg: "第二作戰區",
  //     child: [
  //       { num: "21", checked: false },
  //       { num: "22", checked: false },
  //       { num: "23", checked: false },
  //       { num: "24", checked: false },
  //       { num: "25", checked: false },
  //       { num: "26", checked: false },
  //     ],
  //     checked: false,
  //   },
  //   {
  //     reg: "第三作戰區",
  //     child: [
  //       { num: "31", checked: false },
  //       { num: "32", checked: false },
  //       { num: "33", checked: false },
  //       { num: "34", checked: false },
  //     ],
  //     checked: false,
  //   },
  // ];
  const firstReg = {
    reg: "第一作戰區",
    child: [
      { num: "11", checked: false },
      { num: "12", checked: false },
      { num: "13", checked: false },
      { num: "14", checked: false },
    ],
    checked: false,
  };
  const secondReg = {
    reg: "第二作戰區",
    child: [
      { num: "21", checked: false },
      { num: "22", checked: false },
      { num: "23", checked: false },
      { num: "24", checked: false },
      { num: "25", checked: false },
      { num: "26", checked: false },
    ],
    checked: false,
  };
  const thirdReg = {
    reg: "第三作戰區",
    child: [
      { num: "31", checked: false },
      { num: "32", checked: false },
      { num: "33", checked: false },
      { num: "34", checked: false },
    ],
    checked: false,
  };

  const [AllArray, setAllArray] = useState<string[]>([]);
  const hhh = [
    "11",
    "12",
    "13",
    "14",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "31",
    "32",
    "33",
    "34",
  ];
  const [firstArray, setFirstArray] = useState<string[]>([]);
  const [secondArray, setSecondArray] = useState<string[]>([]);
  const [thirdArray, setThirdArray] = useState<string[]>([]);

  const CheckAll = [
    { reg: "all", child: [{ num: "all", checked: false }], checked: false },
  ];

  const [allChecked, setAllChecked] = useState<string[]>([]);
  const [totalChecked, setTotalChecked] = useState<boolean>(false);
  const [ddd, setDDD] = useState<string[]>([]);

  const handleAllArray = () => {
    let ggg: string[][] = [];
    if (
      firstArray.length !== 0 ||
      secondArray.length !== 0 ||
      thirdArray.length !== 0
    ) {
      ggg = [...ggg, firstArray];
      ggg = [...ggg, secondArray];
      ggg = [...ggg, thirdArray];
    }

    // console.log(
    //   "ggg:",
    //   ggg
    //     .join()
    //     .split(",")
    //     .filter((v) => v)
    // );
    return ggg
      .join()
      .split(",")
      .filter((v) => v);
  };

  const handleToTalArray = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (totalChecked) {
      setAllChecked(hhh);
      setTotalChecked(false);
    } else {
      setAllChecked([]);
      setTotalChecked(true);
    }
  };

  console.log()

  return (
    <>
      <div>CheckedBox</div>
      <div>
        <input
          type="checkbox"
          value={CheckAll[0].child[0].num}
          checked={totalChecked}
          onChange={handleToTalArray}
        />
        <label htmlFor="">全部</label>
      </div>

      <CheckBoxRowChild
        row={firstReg}
        totalChecked={totalChecked}
        setDDD={setFirstArray}
        allChecked={allChecked}
      />
      <CheckBoxRowChild
        row={secondReg}
        totalChecked={totalChecked}
        setDDD={setSecondArray}
        allChecked={allChecked}
      />
      <CheckBoxRowChild
        row={thirdReg}
        totalChecked={totalChecked}
        setDDD={setThirdArray}
        allChecked={allChecked}
      />

      {/* map */}
      {/* {CheckRegArray.map((row, i) => {
        return (
          <Fragment key={`${i + 1}`}>
            <CheckBoxRowChild row={row} totalChecked={totalChecked} ddd={ddd} setDDD={setDDD}/>
          </Fragment>
        );
      })} */}

      {/* 41 42 */}
      {/* <div className="d-flex">
        {CheckSingle.map((row, i) => {
          return (
            <CheckRowChildren
              key={`${i + 1}`}
              value={row.reg}
              checked={
                totalChecked
                  ? true
                  : singleChecked.includes(row.reg)
                  ? true
                  : false
              }
              onChange={handleSingleChecked}
            />
          );
        })}
      </div> */}
    </>
  );
}

export default CheckedBox;
