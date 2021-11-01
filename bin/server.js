// Criando APIs com NodeJs

const  app = require('../src/app');
const debug = require('debug')('nodestrserver:'); // Debug já instanciado
const http = require('http');

// Criar aplicação

const port = normalizePort(process.env.PORT ||'3000'); //chamar função normalizePort
app.set ('port', port); // setar porta
 
// App criada, agora vamos ao servidor

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
console.log('API rodando na porta ' + port);


// Criar função de normalização de porta 

function normalizePort(val) {
    const port = parseInt(val, 10);

    if(isNaN(port)){
        return val;
    }

    if(port >= 0) {
        return port;
    }

    return false;
}


function onError(error){ // recebe o erro do servidor
    if (error.syscall !== 'listen'){
        throw error;
    } 

    const bind = typeof port === 'string' ?
    'Pipe' + port :
    'Port' + port;

    switch (error.code) {
        case 'EACCES': // Erro de permissão
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE': // Erro de endereço em uso
            Console.error(bind + 'is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening(){ // Pegar as informações do servidor e startar. Uso do Debug
    const addr = server. address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug ('Listening on '+ bind);
}
