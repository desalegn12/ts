import { DragHandleIcon } from "@chakra-ui/icons";
import { Icon, VStack } from "@chakra-ui/react";
import { BlockType, BlockTypeEnum } from "../types";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { DropdownItem } from "./DropdownItem";
import { ItemMapper } from "./ItemMapper";

export const ItemGroup = ({
  block,
  blockNum
}: {
  block: BlockType;
  blockNum: string | number;
}) => {
  if (block.type !== BlockTypeEnum.GROUP) {
    return null;
  }

  const typeId = blockNum;
  const droppableId = `droppable-${typeId}`;

  return (
    <Droppable droppableId={droppableId} type={`${typeId}`}>
      {(provided, snapshot) => (
        <div ref={provided.innerRef}>
          <VStack
            alignItems="start"
            display="block"
            borderRadius="md"
            padding={4}
            spacing={4}
            backgroundColor={snapshot.isDraggingOver ? "gray.200" : "gray.100"}
            marginTop="16px"
          >
            {block.contentList.map((innerBlock, index) => (
              <Draggable
                key={`${typeId}--${innerBlock.id}`}
                draggableId={`${typeId}--${innerBlock.id}`}
                index={index}
              >
                {(provided, snapshot) => (
                  <div ref={provided.innerRef} {...provided.draggableProps}>
                    <DropdownItem
                      block={innerBlock}
                      isDragging={snapshot.isDragging}
                      icon={
                        <span {...provided.dragHandleProps}>
                          <Icon
                            as={DragHandleIcon}
                            boxSize="3"
                            color="gray.600"
                          />
                        </span>
                      }
                    >
                      <ItemMapper
                        block={innerBlock}
                        blockNum={`${typeId}--${innerBlock.id}`}
                      />
                    </DropdownItem>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </VStack>
        </div>
      )}
    </Droppable>
  );
};
