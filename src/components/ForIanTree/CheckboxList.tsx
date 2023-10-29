import { useCallback } from "react";
import Checkbox from "../ForIanTree/Checkbox";
import { CheckboxState, ItemState } from "../../pages/Checkbox_Tree/IanTree";
import CheckboxComponent from "./CheckboxComponent";

export default function CheckboxList(props: {
  onClick: (id: number) => void;
  itemStates: ItemState[];
  regData: {
    id: number;
    name: string;
    parentId: number;
  }[];
}) {
  const { onClick, itemStates, regData } = props;
  const getStateForId = useCallback(
    (id: number) => {
      return itemStates.find((i) => i.id === id)!.state;
    },
    [itemStates]
  );
  const grandItem = regData.find((val) => !val.parentId);
  const grandItemState = getStateForId(grandItem!.id);
  const parentItems = regData.filter((i) => i.parentId === grandItem!.id);

  return (
    <>
      <div>
        <div>
          <Checkbox
            onClick={() => onClick(grandItem!.id)}
            isChecked={grandItemState === CheckboxState.CHECKED}
          />
          {grandItem!.name}
        </div>
        <CheckboxComponent
          parentItems={parentItems}
          getStateForId={getStateForId}
          onClick={onClick}
          regData={regData}
        />
      </div>
    </>
  );
}
