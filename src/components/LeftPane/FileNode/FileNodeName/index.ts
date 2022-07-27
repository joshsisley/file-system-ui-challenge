import { IFileNode } from '../../../../interfaces/FileNode';

const FileNodeName = (node: IFileNode) => {
  const el = document.createElement('a');
  el.className = 'name';
  el.setAttribute('data-test', 'file-node-name');
  el.innerHTML = `
    <i class="fa fa-folder-open fa-lg" aria-hidden="true"></i>
    <span>${node.name}</span>
  `;

  return el;
};

export default FileNodeName;