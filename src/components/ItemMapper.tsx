import { Box } from "@chakra-ui/react";
import { BlockType, BlockTypeEnum } from "../types";
import { ItemGroup } from "./ItemGroup";

export const ItemMapper = ({
  block,
  blockNum
}: {
  block: BlockType;
  blockNum: string | number;
}) => {
  if (block.type === BlockTypeEnum.GROUP) {
    return <ItemGroup block={block} blockNum={blockNum} />;
  }

  if (block.type === BlockTypeEnum.TEXT) {
    return <Box>Value = {block.title}</Box>;
  }

  return null;
};
