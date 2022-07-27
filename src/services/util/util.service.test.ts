import { isDefined } from "./util.service";

describe('UtilService', () => {
  describe('#isDefined', () => {
    it('should return false if the item passed in is undefined', () => {
      const ans = isDefined(undefined);
      expect(ans).toBe(false);
    });

    it('should return false if the item passed in is null', () => {
      const ans = isDefined(null);
      expect(ans).toBe(false);
    });

    it('should return true if the item passed in is defined', () => {
      const ans = isDefined(1);
      expect(ans).toBe(true);
    });
  });
});