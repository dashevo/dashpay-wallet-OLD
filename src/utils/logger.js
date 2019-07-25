// TODO: this is a temporary solution,
//       we need something more serious

const logger = {
  error: error => __DEV__ && console.warn(error),
  warn: error => __DEV__ && console.warn(error),
  debug: message => __DEV__ && console.debug(message),
};

export default logger;
