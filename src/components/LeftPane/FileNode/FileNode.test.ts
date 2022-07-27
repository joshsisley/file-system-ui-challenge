import { IFileNode } from '../../../interfaces/FileNode';
import FileNode from './index';

describe('FileNode', () => {
  it('should return null if the node is not a folder', () => {
    const node: IFileNode = {
      type: 'file',
      name: 'file.txt',
      modified: '',
      children: null,
      size: null
    };
    const fileNode = FileNode(node);
    expect(fileNode).toBeNull();
  });

  it('should return a folder if the node is a folder', () => {
    const node: IFileNode = {
      type: 'folder',
      name: 'folder',
      modified: '',
      children: null,
      size: null
    };
    const fileNode = FileNode(node);
    expect(fileNode).toBeDefined();
  });
})