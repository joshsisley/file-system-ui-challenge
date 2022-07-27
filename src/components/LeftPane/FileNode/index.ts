import FileNodeName from './FileNodeName/index';
import FileNodeChildren from './FileNodeChildren/index';
import { IFileNode } from '../../../interfaces/FileNode';

const FileNode = (node: IFileNode) => {
  const root = document.createElement('div');

  // Return null if the node is not a folder
  if (node.type !== 'folder') {
    return null;
  }

  // Create File Node Name component and attach custom event listener
  const nameEl = FileNodeName(node);
  nameEl.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('click detected');
    const event = new CustomEvent('openFolder', { detail: node });
    document.dispatchEvent(event);
  });

  if (node.children) {
    const subfolders = node.children.filter((child) => child.type === 'folder');
    if (subfolders.length) {
      const expandIconEl = document.createElement('div');
      expandIconEl.className = 'expand';
      expandIconEl.innerHTML = `<i class="fa fa-chevron-right fa-sm" aria-hidden="true"></i>`;

      const childrenEl = FileNodeChildren(node);

      expandIconEl.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        expandIconEl.classList.toggle('open');
        childrenEl.classList.toggle('open');
      });

      const rowEl = document.createElement('div');
      rowEl.className = 'row';
      rowEl.appendChild(expandIconEl);
      rowEl.appendChild(nameEl);

      root.appendChild(rowEl);
      root.appendChild(childrenEl);
    } else {
      root.appendChild(nameEl);
    }
  }

  return root;
};

export default FileNode;