const validateParams = (params, requiredKeys = []) => {
    if (!params) {
      throw new Error(`${requiredKeys.join(", ")} is required`);
    }
    for (const key of requiredKeys) {
      if (!params[key]) {
        throw new Error(`${key} is required`);
      }
    }
    return true;
  };


  const validationService = { validateParams };
  export default validationService