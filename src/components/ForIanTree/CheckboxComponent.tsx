import { CheckboxState } from "../../pages/Checkbox_Tree/IanTree";
import Checkbox from "./Checkbox";

export default function CheckboxComponent(props: {
  parentItems: {
    id: number;
    name: string;
    parentId: number;
  }[];
  itemsId?: number[];
  onClick?: (id: number) => void;
  getStateForId: (id: number) => CheckboxState;
  regData?: {
    id: number;
    name: string;
    parentId: number;
  }[];
}) {
  const { regData, onClick, getStateForId, parentItems } = props;
  const getChildNodes = (parentId: number) => {
    const nodeItems = regData?.filter((i) => i.parentId === parentId);
    if (!nodeItems?.length) return null;
    return (
      <CheckboxComponent
        itemsId={nodeItems.map((i) => i.id)}
        parentItems={nodeItems.map((i) => i)}
        onClick={onClick}
        getStateForId={getStateForId}
      />
    );
  };

  return (
    <>
      {parentItems.map((row) => {
        const checkboxState = getStateForId(row.id);
        return (
          <div className="d-flex" key={`${row.id}`}>
            {row.name === "" ? null : (
              <Checkbox
                onClick={() => onClick!(row.id)}
                isChecked={checkboxState === CheckboxState.CHECKED}
              />
            )}
            {row.name}
            {getChildNodes!(row.id)}
          </div>
        );
      })}
    </>
  );
}
