const colors = require('colors/safe');

module.exports = (next, socket) => (...args) => {
  console.log(
    colors.yellow('namespace'), colors.green(socket.nsp.name),
    colors.yellow('event'), colors.green(socket.eventName)
  );

  for (let [index, arg] of args.entries()) {
    console.log(
      colors.yellow(`argument ${index + 1}`),
      arg
    );
  }

  console.log(colors.red('===='));

  next();
}
