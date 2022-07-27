import { IFileNode } from '../../interfaces/FileNode';

const RightPane = (initialNode: IFileNode) => {
  const el = document.createElement('div');
  el.setAttribute('data-test', 'right-pane');
  el.className = 'right-pane';

  return el;
};

export default RightPane;