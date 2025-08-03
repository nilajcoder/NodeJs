const formatError = (issues) => {
  return issues.map(item => {
    const err = {};
    err[item.path[0]] = item.message;
    return err;
  });
};

export { formatError };
