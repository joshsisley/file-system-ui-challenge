export interface IFileNode {
  type: 'file' | 'folder';
  name: string;
  modified: string;
  children?: IFileNode[] | null;
  size: number | null;
  parent?: IFileNode;
}