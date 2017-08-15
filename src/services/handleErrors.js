export default (response) => {
  if (!response.ok) {
    throw response;
  }
  return response;
};
