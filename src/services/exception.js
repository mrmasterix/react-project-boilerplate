import ActionCreator from './actionCreator';

export default async function (error) {
  try {
    await error.json().then((e) => {
      ActionCreator.fire('loading', false);
      throw {
        custom: true,
        status: e.data.errorCode,
        message: e.error.message,
        errors: e.errors || null,
      };
    });
  } catch (e) {
    throw {
      code: e.custom ? e.status : error.status,
      message: e.custom ? e.message : error.statusText,
      errors: e.custom ? e.errors : error.errors,
    };
  }
};
