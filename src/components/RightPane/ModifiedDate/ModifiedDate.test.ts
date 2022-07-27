import { IFileNode } from "../../../interfaces/FileNode";
import ModifiedDate from "./index";

describe('ModifiedDate', () => {
  it('should create an instance', () => {
    const folder: IFileNode = {
      type: 'folder',
      name: 'folder',
      modified: '',
      children: [{ type: 'file', name: 'file.txt', modified: '', children: null, size: null }],
      size: null
    };
    const dateEl = ModifiedDate(folder);

    expect(dateEl).toBeTruthy();
  });
});