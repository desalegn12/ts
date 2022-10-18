import { Box, Collapse, HStack, Icon, IconButton } from "@chakra-ui/react";
import { useBoolean } from "../utils";
import { BlockType } from "../types";
import React from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

export const DropdownItem = ({
  icon,
  isDragging,
  block,
  children
}: {
  icon?: React.ReactNode;
  isDragging?: boolean;
  block: BlockType;
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useBoolean();

  return (
    <Box
      borderRadius="md"
      userSelect="none"
      padding={4}
      backgroundColor={isDragging ? "gray.50" : "bg-surface"}
      borderWidth={1}
      borderColor="gray.200"
      boxShadow={isDragging ? "md" : "xs"}
    >
      <HStack alignItems="start">
        {icon}
        <Box width="100%">
          <HStack justifyContent="space-between">
            <Box>{block.name}</Box>
            {isOpen ? (
              <IconButton
                size="sm"
                aria-label="Hide"
                onClick={() => setIsOpen.toggle()}
                icon={<Icon as={BsChevronUp} boxSize="4" color="gray.700" />}
              />
            ) : (
              <IconButton
                size="sm"
                aria-label="Show"
                onClick={() => setIsOpen.toggle()}
                icon={<Icon as={BsChevronDown} boxSize="4" color="gray.700" />}
              />
            )}
          </HStack>
          <Collapse in={isOpen} animateOpacity>
            {children}
          </Collapse>
        </Box>
      </HStack>
    </Box>
  );
};
