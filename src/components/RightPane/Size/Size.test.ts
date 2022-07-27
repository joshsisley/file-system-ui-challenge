import { IFileNode } from "../../../interfaces/FileNode";
import Size from "./index";

describe('Size', () => {
  it('should create an instance', () => {
    const folder: IFileNode = {
      type: 'folder',
      name: 'folder',
      modified: '',
      children: [{ type: 'file', name: 'file.txt', modified: '', children: null, size: null }],
      size: null
    };
    const sizeEl = Size(folder);

    expect(sizeEl).toBeTruthy();
  });
});