import { IFileNode } from "../../../interfaces/FileNode";
import Icon from "./index";

describe('Icon', () => {
  it('should create an instance', () => {
    const folder: IFileNode = {
      type: 'folder',
      name: 'folder',
      modified: '',
      children: [{ type: 'file', name: 'file.txt', modified: '', children: null, size: null }],
      size: null
    };
    const iconEl = Icon(folder);

    expect(iconEl).toBeTruthy();
  });
});