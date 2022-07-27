import { IFileNode } from "../../../interfaces/FileNode";
import { formatBytes } from "../../../services/util/util.service";

const RowSize = (node: IFileNode) => {
  const el = document.createElement('div');
  el.setAttribute('data-testid', 'row-size');
  el.textContent = formatBytes(node.size);

  return el;
};

export default RowSize;