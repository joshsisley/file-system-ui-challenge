import FileNode from './FileNode/index';
import { IFileNode } from '../../interfaces/FileNode';

const LeftPane = (root: IFileNode) => {
  const el = document.createElement('div');
  el.setAttribute('data-test', 'left-pane');
  el.className = 'left-pane';

  if (root.type !== 'folder') {
    return null;
  }

  const fileNode = FileNode(root);
  if (fileNode) {
    el.appendChild(fileNode);
  }

  return el;
};

export default LeftPane;