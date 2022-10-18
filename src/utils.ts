import { BlockType } from "./types";
import { useRef, useState } from "react";

export interface UseBooleanActions {
  set: (val: boolean) => void;
  toggle: () => void;
  true: () => void;
  false: () => void;
}

export const useBoolean = (initial = false): [boolean, UseBooleanActions] => {
  const [value, setValue] = useState<boolean>(initial);

  const updateValue = useRef({
    set: (val: boolean) => setValue(Boolean(val)),
    toggle: () => setValue((val) => !val),
    true: () => setValue(true),
    false: () => setValue(false)
  });

  return [value, updateValue.current];
};

export const Reorder = (
  list: BlockType[] = [],
  startIndex: number,
  endIndex: number
) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export const getLastestId = (value: string): string => {
  const array = value.split("--");
  return array[array.length - 1];
};

export const updateBlockById = (
  id: string,
  obj: BlockType,
  block: BlockType
): BlockType => {
  const arr = [];
  arr.push(block);

  const updatedeBlocks = arr.map((k) =>
    k.id === id
      ? { ...k, ...obj }
      : { ...k, contentList: k.contentList ? updateBlockById(id, obj, k) : [] }
  );
  return updatedeBlocks[0] as BlockType;
};

export function findById(
  id: string,
  array: BlockType[]
): BlockType | undefined {
  let object;

  array.some(function f(a) {
    if (a.id === id) {
      object = a;
      return true;
    }
    if (Array.isArray(a?.contentList)) {
      return a?.contentList.some(f);
    }

    return undefined;
  });
  return object;
}
