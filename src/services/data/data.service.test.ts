import * as DataService from "./data.service";

describe('DataService', () => {
  describe('#getFileTree', () => {
    it('should return a file tree', () => {
      const fileTree = DataService.getFileTree();
      expect(fileTree).toBeDefined();
      expect(fileTree.type).toBe('folder');
      expect(fileTree.name).toBe('Files');
    });
  });
});