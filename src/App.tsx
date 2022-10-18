import { BlockType } from "./types";
import { useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { ItemMapper } from "./components/ItemMapper";
import { BLOCKS } from "./components/test.data";
import { Reorder } from "./utils";

export const getItem = (
  contentList: BlockType[] = [],
  keys: string[]
): BlockType | null => {
  const [key, ...restKeys] = keys;
  const block = contentList.find((block) => block.id === key);

  if (!block) {
    return null;
  }

  if (restKeys.length === 0) {
    return block;
  }

  return getItem(block.contentList, restKeys);
};

export const DragDropList = () => {
  const [blocks, setBlocks] = useState(BLOCKS);

  console.log("blocks", JSON.stringify(blocks));

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const currentIndex = result.source.index;
    const newIndex = result.destination.index;

    const itemIds = result.draggableId.split("--");
    const parentItemIds = itemIds.slice(0, -1);

    const itemData = getItem(blocks, itemIds);
    const parentItemData = getItem(blocks, parentItemIds);

    if (!itemData || !parentItemData) {
      return;
    }

    const newParentItemContentList = Reorder(
      parentItemData.contentList,
      currentIndex,
      newIndex
    );

    const newParentItemData = {
      ...parentItemData,
      contentList: [...newParentItemContentList]
    };

    console.log(
      "parentItemIds.slice(0, -1)",
      parentItemIds.slice(0, -1).reverse()
    );
    console.log("newParentItemData", newParentItemData);

    // UPDATE BLOCK
    // setBlocks
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <ItemMapper block={blocks[0]} blockNum="main" />
    </DragDropContext>
  );
};
