import { IFileNode } from "../../../interfaces/FileNode";

const Name = ({ name, type }: IFileNode) => {
  const el = document.createElement('div');
  el.className = 'col col-2';
  el.textContent = name;

  return el;
};

export default Name;