const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// Registrando um listener para o evento 'start'
eventEmitter.on('start', () => { 
    console.log('durante')
})

console.log('antes');
eventEmitter.emit('start'); // Dispara o evento 'start'
console.log('depois');  