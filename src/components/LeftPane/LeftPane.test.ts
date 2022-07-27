import { IFileNode } from '../../interfaces/FileNode';
import * as DataService from '../../services/data/data.service';
import LeftPane from './index';

describe('LeftPane', () => {
  it('should render if the root type is folder', () => {
    const fileTree = DataService.getFileTree();

    const leftPane = LeftPane(fileTree);
    expect(leftPane).toBeDefined();
  });

  it('should return null if the root type is file', () => {
    const fileTree: IFileNode = { type: 'file', name: 'test.txt', modified: '', children: null, size: null };

    const leftPane = LeftPane(fileTree);
    expect(leftPane).toBeDefined();
  });
});