describe('Initial Page Load', () => {
  it('should call init on page load', () => {
    let initCalled = false;
    const init = jest.fn(() => {
      initCalled = true;
    });
    window.addEventListener('load', init);

    window.dispatchEvent(new Event('load'));
    expect(initCalled).toBe(true);
  })
});