import { IFileNode } from '../../../interfaces/FileNode';

const ModifiedDate = ({ modified }: IFileNode) => {
  const el = document.createElement('div');
  el.className = 'col col-2';
  const date = new Date(modified);
  el.textContent = `${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`;

  return el;
};

export default ModifiedDate;