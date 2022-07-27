import { IFileNode } from "../../../../interfaces/FileNode";
import FileNodeChildren from "./index";

describe('FileNodeChildren', () => {
  it('should render the children of a folder', () => {
    const folder: IFileNode = {
      type: 'folder',
      name: 'folder',
      modified: '',
      children: [{ type: 'file', name: 'file.txt', modified: '', children: null, size: null }],
      size: null
    };

    const fileNodeChildren = FileNodeChildren(folder);
    expect(fileNodeChildren).toBeDefined();
  });
});