import { IFileNode } from '../../../../interfaces/FileNode';
import FileNodeName from './index';

describe('FileNodeName', () => {
  it('should render correctly', () => {
    const folder: IFileNode = {
      type: 'folder',
      name: 'folder',
      modified: '',
      children: [{ type: 'file', name: 'file.txt', modified: '', children: null, size: null }],
      size: null
    };

    const fileNodeName = FileNodeName(folder);
    expect(fileNodeName).toBeDefined();
  });
});