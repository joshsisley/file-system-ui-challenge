export interface FileNode {
  type: 'file' | 'folder';
  name: string;
  modified: string;
  children: FileNode[] | null;
  size: number | null;
}