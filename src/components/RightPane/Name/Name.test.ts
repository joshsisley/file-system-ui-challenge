import { IFileNode } from "../../../interfaces/FileNode";
import Name from "./index";

describe('Name', () => {
  it('should create an instance', () => {
    const folder: IFileNode = {
      type: 'folder',
      name: 'folder',
      modified: '',
      children: [{ type: 'file', name: 'file.txt', modified: '', children: null, size: null }],
      size: null
    };
    const nameEl = Name(folder);

    expect(nameEl).toBeTruthy();
  });
});