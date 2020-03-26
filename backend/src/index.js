const express = require('express');   // express é um pacote
const cors = require('cors');
const routes = require('./routes');  //  './' informa que é um arquivo

const app = express();

app.use(cors());  // dentro de cors se pode passae o parametro origin com o endereco de acessso da aplicação
app.use(express.json());
app.use(routes);

app.listen(3333); // node roda na porta localhost 3333 (definido por mim)