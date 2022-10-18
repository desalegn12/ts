import { BlockType, BlockTypeEnum } from "../types";

export const BLOCKS: BlockType[] = [
  {
    id: "main",
    name: "items",
    type: BlockTypeEnum.GROUP,
    title: "Items",
    contentList: [
      {
        id: "abc-1",
        name: "Item 1",
        type: BlockTypeEnum.GROUP,
        title: "Item 1 title",
        contentList: [
          {
            id: "abc-1-1",
            name: "Item 1-1",
            title: "Item 1-1 title",
            type: BlockTypeEnum.GROUP,
            contentList: [
              {
                id: "abc-1-1-1",
                name: "Item 1-1-1",
                title: "Item 1-1-1 title",
                type: BlockTypeEnum.TEXT,
                value: "",
                required: false,
                attributes: []
              },
              {
                id: "abc-1-1-2",
                name: "Item 1-1-2",
                title: "Item 1-1-2 title",
                type: BlockTypeEnum.TEXT,
                value: "",
                required: false,
                attributes: []
              }
            ]
          },
          {
            id: "abc-1-2",
            name: "Item 1-2",
            title: "Item 1-2 title",
            type: BlockTypeEnum.GROUP,
            contentList: [
              {
                id: "abc-1-2-1",
                name: "Item 1-2-1",
                title: "Item 1-2-1 title",
                type: BlockTypeEnum.TEXT,
                value: "",
                required: false,
                attributes: []
              },
              {
                id: "abc-1-2-2",
                name: "Item 1-2-2",
                title: "Item 1-2-2 title",
                type: BlockTypeEnum.TEXT,
                value: "",
                required: false,
                attributes: []
              }
            ]
          }
        ]
      },
      {
        id: "abc-2",
        name: "Item 2",
        title: "Item 2 title",
        type: BlockTypeEnum.GROUP,
        contentList: [
          {
            id: "abc-2-1",
            name: "Item 2-1",
            title: "Item 2-1 title",
            type: BlockTypeEnum.GROUP,
            contentList: [
              {
                type: BlockTypeEnum.TEXT,
                id: "abc-2-1-1",
                name: "Item 2-1-1",
                title: "Item 2-1-1 title",
                value: "",
                required: false,
                attributes: []
              },
              {
                type: BlockTypeEnum.TEXT,
                id: "abc-2-1-2",
                name: "Item 2-1-2",
                title: "Item 2-1-2 title",
                value: "",
                required: false,
                attributes: []
              }
            ]
          },
          {
            id: "abc-2-2",
            name: "Item 2-2",
            title: "Item 2-2 title",
            type: BlockTypeEnum.GROUP,
            contentList: [
              {
                type: BlockTypeEnum.TEXT,
                id: "abc-2-2-1",
                name: "Item 2-2-1",
                title: "Item 2-2-1 title",
                value: "",
                required: false,
                attributes: []
              },
              {
                type: BlockTypeEnum.TEXT,
                id: "abc-2-2-2",
                name: "Item 2-2-2",
                title: "Item 2-2-2 title",
                value: "",
                required: false,
                attributes: []
              }
            ]
          }
        ]
      }
    ]
  }
];
