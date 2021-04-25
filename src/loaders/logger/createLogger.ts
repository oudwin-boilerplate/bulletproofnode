interface Logger {
  info(msg: string): void;
  error(msg: string): void;
}

export default (): Logger => {
  return Object.freeze({
    info,
    error,
  });

  function info(msg: string): void {
    console.log(msg);
  }

  function error(msg: string): void {
    console.error(msg);
  }
};
