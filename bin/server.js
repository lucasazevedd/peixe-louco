// Importa os módulos necessários
const app = require('../src/app');
const http = require('http'); // Módulo HTTP nativo do Node.js para criar um servidor
const debug = require('debug')('nodestr:server'); // Módulo para depuração (debugging)


// Normaliza a porta vinda das variáveis de ambiente ou usa a porta 3000
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

// Inicia o servidor e faz com que ele escute na porta definida
server.listen(port);
server.on('error', onError); // Registra a função de tratamento de erros do servidor
server.on('listening', onListening); // Registra a função de callback para quando o servidor começar a escutar

console.log('Rodando na porta ' + port); // Mensagem de confirmação de que o servidor está rodando

// Função para normalizar a porta
function normalizePort(val) {
    const port = parseInt(val, 10); // Converte o valor da porta para um número inteiro

    if (isNaN(port)) { // Se a porta não for um número
        return val; // Retorna o valor original
    }
    if (port >= 0) { // Se a porta for um número positivo
        return port; // Retorna a porta como número
    }
    return false; // Se a porta for um número negativo, retorna falso
}

// Função de tratamento de erro para o servidor HTTP
function onError(error) {
    if (error.syscall !== 'listen') { // Verifica se o erro está relacionado com o comando 'listen'
        throw error; // Lança o erro se não estiver relacionado com 'listen'
    }

    const bind = typeof port === 'string' // Define se a porta é uma string ou um número
        ? 'Pipe ' + port
        : 'Port ' + port;

    // Manuseio de erros específicos com mensagens amigáveis
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requer privilégios elevados');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' já está em uso');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

// Função de callback quando o servidor começa a escutar
function onListening() {
    const addr = server.address(); // Obtém o endereço do servidor
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind); // Mensagem de depuração indicando que o servidor está escutando
}
