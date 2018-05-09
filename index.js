const colors = require('colors/safe');

module.exports = (next, { socket }) => (...args) => {
  console.log(
    colors.yellow('namespace'), colors.green(socket.nsp.name),
    colors.red('-'),
    colors.yellow('event'), colors.green(socket.eventName),
    colors.red('-'),
    colors.yellow('id'), colors.green(socket.id)
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
