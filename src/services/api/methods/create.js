import endpoints from '../../../constants/endpoints';

export default (endpointKey, methodKey) => function CreateMethod(data) {
  const endpointObject = endpoints[endpointKey][methodKey];
  return this.request({
    ...endpointObject,
    data,
  });
};
