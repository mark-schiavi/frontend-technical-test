beforeAll(() => {
  HTMLDialogElement.prototype.showModal = function showModal() {};
  HTMLDialogElement.prototype.close = function close() {};
});
