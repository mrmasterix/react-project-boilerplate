export default state => ({
  ...state.Layout,
  isLoading: state.isLoading,
  info: {
    name: 'Layout',
  },
});