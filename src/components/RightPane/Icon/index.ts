import { IFileNode } from '../../../interfaces/FileNode';

const Icon = ({ type }: IFileNode) => {
  const el = document.createElement('div');
  el.classList.add('col');
  const iconType = type === 'folder' ? 'fa-folder-open' : 'fa-file';
  el.innerHTML = `<i class="fa ${iconType} fa-lg" aria-hidden="true"></i>`;

  return el;
};

export default Icon;