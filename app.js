const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const mainRouter = require('./src/routers/mainRouter')
const loginRouter = require('./src/routers/loginRouter')

// Configura o servidor para ler a extensão ejs
app.set('view engine', 'ejs')
// Configura para exibir os arquivos estáticos da pasta public "nao precisamos mais colocar o caminho completo"
app.use(express.static(path.join(__dirname, 'public')));
// Configura para exibir os arquivos estáticos da pasta views "nao precisamos mais colocar o caminho completo"
app.set('views', path.join(__dirname, 'src', 'views'));

// Iniciamos a primeira rota da homePage
app.use('/', mainRouter);
app.use('/login', loginRouter);

app.listen(port, () => console.log(`Este servitor esta rodando na porta ${port}` ))