export default class Logger {
  constructor() {}

  info(msg: string): void {
    console.log(msg);
  }

  error(msg: string | any): void {
    console.error(msg);
  }
}
