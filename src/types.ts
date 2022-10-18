export enum BlockTypeEnum {
  TEXT = "text",
  IMAGE = "image",
  FILE = "file",
  REPEATER = "repeater",
  GROUP = "group",
  TEXTAREA = "textarea",
  EDITOR = "editor"
}

type CommonContentType = {
  id: string;
  name: string;
  title: string;
  type: BlockTypeEnum;
  contentList?: BlockType[];
};

type attributesType = {
  [key: string]: any;
};

export interface ImageContentType extends CommonContentType {
  type: BlockTypeEnum.IMAGE;
}

export interface TextContentType extends CommonContentType {
  type: BlockTypeEnum.TEXT;
  value: string;
  required: boolean;
  attributes: attributesType[];
}

export interface FileContentType extends CommonContentType {
  type: BlockTypeEnum.FILE;
}

export interface RepeaterContentType extends CommonContentType {
  type: BlockTypeEnum.REPEATER;
}

export interface GroupContentType extends CommonContentType {
  type: BlockTypeEnum.GROUP;
  contentList: BlockType[];
}

export interface TextareaContentType extends CommonContentType {
  type: BlockTypeEnum.TEXTAREA;
}

export interface EditorContentType extends CommonContentType {
  type: BlockTypeEnum.EDITOR;
}

export type BlockType =
  | ImageContentType
  | TextContentType
  | FileContentType
  | RepeaterContentType
  | GroupContentType
  | TextareaContentType
  | EditorContentType;
