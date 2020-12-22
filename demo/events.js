const EventEmitter = require('events');

// const emitter = new EventEmitter();

// emitter.on('some event', data => {
//   console.log('value>>>', data)
// });

// emitter.emit('some event', 'Im event');
// setTimeout(() => emitter.emit('some event', {a: 2}), 500);

class Dispatcher extends EventEmitter {
  subscribe(eventName, cb) {
    console.log('[Subscribe]');
    this.on(eventName, cb);

  }
  dispatch(eventName, data) {
    console.log('[Dispatching]');
    this.emit(eventName, data)
  }

}

const disp = new Dispatcher();
disp.subscribe('click', (data) => {
  console.log('data>>>', data)
});
disp.dispatch('click', {as: 13});