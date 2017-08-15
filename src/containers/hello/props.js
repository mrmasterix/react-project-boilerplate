export default state => ({
  ...state.Hello,
  isLoading: state.isLoading,
  info: {
    name: 'Hello',
    pageClass: '-page_hello',
  },
});
