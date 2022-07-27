import { IFileNode } from '../../interfaces/FileNode';
import Icon from './Icon/index';
import Name from './Name/index';
import ModifiedDate from './ModifiedDate/index';
import Size from './Size/index';
import Header from './Header/index';

const RightPane = (initialNode: IFileNode) => {
  const el = document.createElement('div');
  el.setAttribute('data-test', 'right-pane');
  el.className = 'right-pane card m-3';

  // Append the header
  el.appendChild(Header());

  // Append the children rows
  document.addEventListener('openFolder', (e) => {
    const node = (e as CustomEvent<IFileNode>).detail;
    if (node.type === 'folder') {
      el.querySelectorAll(`[data-folder="true"]`).forEach((row) => {
        el.removeChild(row)
      });

      node.children.forEach((child) => {
        const gridRow = document.createElement('div');
        gridRow.className = 'grid';
        gridRow.setAttribute('data-folder', 'true');

        const iconEl = Icon(child);
        const nameEl = Name(child);
        const modifiedDateEl = ModifiedDate(child);
        const sizeEl = Size(child);

        if (child.type === 'folder') {
          gridRow.className += ' clickable';
          gridRow.addEventListener('click', (e: Event) => {
            e.stopPropagation();
            e.preventDefault();
            document.dispatchEvent(
              new CustomEvent('openFolder', { detail: child })
            );
          });
        }

        gridRow.appendChild(iconEl);
        gridRow.appendChild(nameEl);
        gridRow.appendChild(modifiedDateEl);
        gridRow.appendChild(sizeEl);

        el.appendChild(gridRow);
      });
    }
  });

  if (initialNode.type === 'folder') {
    document.dispatchEvent(
      new CustomEvent('openFolder', { detail: initialNode })
    );
  }

  return el;
};

export default RightPane;