import { IFileNode } from "../../interfaces/FileNode";

const tree: IFileNode = {
  type: 'folder',
  name: 'Files',
  modified: '2022-07-26T06:00:00.000Z',
  size: null,
  children: [
    {
      type: 'folder',
      name: 'Documents',
      modified: '2022-07-13T06:00:00.000Z',
      size: null,
      children: [
        {
          type: 'folder',
          name: 'Targaryens',
          modified: '2022-07-13T06:00:00.000Z',
          size: null,
          children: [
            {
              type: 'folder',
              name: 'Secret',
              modified: '2022-07-13T06:00:00.000Z',
              size: null,
              children: [
                {
                  type: 'file',
                  name: 'JSnow.pdf',
                  modified: '2022-07-13T06:00:00.000Z',
                  size: 13444,
                  children: null
                }
              ]
            },
            {
              type: 'file',
              name: 'Aerys.txt',
              modified: '2022-07-26T06:00:00.000Z',
              size: 13999,
              children: null
            },
            {
              type: 'file',
              name: 'Rhaenys.txt',
              modified: '2022-07-20T06:00:00.000Z',
              size: 15644,
              children: null
            }
          ]
        }
      ]
    },
    {
      type: 'folder',
      name: 'Khaleesi\'s Dragons',
      modified: '2022-07-22T06:00:00.000Z',
      size: null,
      children: [
        {
          type: 'file',
          name: 'Drogon.txt',
          modified: '2022-07-22T06:00:00.000Z',
          size: 14566,
          children: null
        },
        {
          type: 'file',
          name: 'Rhaegal.txt',
          modified: '2022-07-22T06:00:00.000Z',
          size: 14566,
          children: null
        },
        {
          type: 'file',
          name: 'Viserion.txt',
          modified: '2022-07-22T06:00:00.000Z',
          size: 14566,
          children: null
        }
      ]
    },
    {
      type: 'folder',
      name: 'Kings Landing',
      modified: '2022-07-26T06:00:00.000Z',
      size: null,
      children: [
        {
          type: 'file',
          name: 'IronThrone.pdf',
          modified: '2022-07-26T06:00:10.000Z',
          size: 76623,
          children: null
        },
      ]
    },
    {
      type: 'file',
      name: 'RedWedding.txt',
      modified: '2022-07-26T06:00:00.000Z',
      size: 83442,
      children: null
    }
  ]
}

export const getFileTree = (): IFileNode => tree;