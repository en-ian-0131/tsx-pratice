import { useCallback, useEffect, useState } from "react";
import CheckboxList from "../../components/ForIanTree/CheckboxList";

export enum CheckboxState {
  UNCHECKED,
  CHECKED,
}

export type ItemState = {
  id: number;
  state: CheckboxState;
};

export default function Tree(props: {
  regData: {
    id: number;
    name: string;
    parentId: number;
  }[];
}) {
  const { regData } = props;
  const defaultItemStates: ItemState[] = regData.map((i) => ({
    id: i.id,
    state: CheckboxState.UNCHECKED,
  }));
  const [itemStates, setItemStates] = useState<ItemState[]>(defaultItemStates);
  let getItems: string[] = [];

  const updateItemStates = (
    oldState: ItemState[],
    regData: {
      id: number;
      name: string;
      parentId: number;
    }[],
    clickedId: number //點到誰
  ) => {
    const newState = oldState.map((i) => ({ ...i })); //全部的{}

    const getItemState = (id: number) => {
      return newState.find((i) => i.id === id)!.state;
    };

    const updateParent = (id: number) => {
      const item = regData.find((i) => i.id === id);
      const parent = regData.find((i) => i.id === item!.parentId);
      if (!parent) return;
      const childIds = regData
        .filter((i) => i.parentId === parent.id)
        .map((i) => i.id);
      const childStates = childIds.map((childId) => getItemState(childId));
      if (
        childStates.length ===
        childStates.filter((s) => s === CheckboxState.CHECKED).length
      ) {
        newState.find((i) => i.id === parent.id)!.state = CheckboxState.CHECKED;
      } else if (
        childStates.length ===
        childStates.filter((s) => s === CheckboxState.UNCHECKED).length
      ) {
        newState.find((i) => i.id === parent.id)!.state =
          CheckboxState.UNCHECKED;
      } else {
        newState.find((i) => i.id === parent.id)!.state =
          CheckboxState.UNCHECKED;
      }
      updateParent(parent.id);
    };

    const setUnchecked = (id: number) => {
      newState.find((i) => i.id === id)!.state = CheckboxState.UNCHECKED;
      regData
        .filter((i) => i.parentId === id)
        .map((i) => i.id)
        .forEach((childId) => setUnchecked(childId));
      updateParent(id);
    };

    const setChecked = (id: number) => {
      newState.find((i) => i.id === id)!.state = CheckboxState.CHECKED;
      regData
        .filter((i) => i.parentId === id)
        .map((i) => i.id)
        .forEach((childId) => setChecked(childId));
      updateParent(id);
    };

    // actual logic
    const itemState = getItemState(clickedId);
    if (itemState === CheckboxState.CHECKED) {
      setUnchecked(clickedId);
    } else {
      setChecked(clickedId);
    }
    return newState;
  };

  const clickHandler = useCallback(
    (id: number) => {
      setItemStates(updateItemStates(itemStates, regData, id));
    },
    [itemStates]
  );

  getItems = itemStates
    .filter((val) => val.state === 1)
    .map((val) => val.id.toString());
  console.log("getItems:", getItems.join());

  return (
    <CheckboxList
      onClick={clickHandler}
      itemStates={itemStates}
      regData={regData}
    />
  );
}
