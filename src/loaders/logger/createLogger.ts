import ApiError from '../../errors/ApiError';

interface Logger {
  info(msg: string): void;
  error(msg: ApiError | Error): void;
}

export default (): Logger => {
  return Object.freeze({
    info,
    error,
  });

  function info(msg: string): void {
    console.log(msg);
  }

  function error(msg: ApiError | Error): void {
    console.error(msg);
  }
};
