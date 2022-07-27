import { IFileNode } from '../../interfaces/FileNode';
import * as DataService from '../../services/data/data.service';
import RightPane from './index';

describe('RightPane', () => {
  it('should render if the root type is folder', () => {
    const fileTree = DataService.getFileTree();

    const rightPane = RightPane(fileTree);
    expect(rightPane).toBeDefined();
    // Sets the header
    expect(rightPane.getElementsByClassName('file-list-header').length).toBe(1);
    // Check number of files on load
    expect(rightPane.querySelectorAll(`[data-folder="true"]`).length).toBe(4);
  });
});