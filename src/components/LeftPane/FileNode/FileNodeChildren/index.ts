import FileNode from '../../FileNode/index';
import { isDefined } from '../../../../services/util/util.service';
import { IFileNode } from '../../../../interfaces/FileNode';

const FileNodeChildren = (folder: IFileNode) => {
  const el = document.createElement('div');
  el.className = 'children';

  // If the folder has children, render them
  if (folder.children) {
    folder.children
      .map((child) => FileNode(child))
      .filter(isDefined)
      .forEach((child) => el.appendChild(child));
  }

  return el;
};

export default FileNodeChildren;