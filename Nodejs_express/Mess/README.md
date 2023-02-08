# NODEJS COM EXPRESS

# 1 Estrutura básica

1- Criar pasta **_SRC_** e arquivo **_server.js_**

2- instalar os pacotes:

- express
- mongoose
- nodemon

3 - configurar package.json

- "type": "module"
- "dev": "nodemon server.js"

4 - Dentro da pasta **_SRC_** criar as pastas

- **_models_**
- **_controllers_**
- **_routes_**
- **_config_**
- Arquivo **_app.js_**

# 2 - App.js

### Estrutura básica:

```
import express from "express"

const app = express()

export default app
```

# 3 - Server.js

### Estrutura básica

```
import app from './src/app.js'
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
})
```

# 4. Conectando ao MongoDB

- Instalar mongoose.
- Dentro da pasta SRC criar a pasta CONFIG e o arquivo dbConect.js.
- Em dbConnect.js:
  - importar mongoose
  - Criar a conexão do mongoose com BD: ` mongoose.connect()`
  - Criar a variável "db"
  - Exportar db para o app.js
  - Em app.js:
    - db.on() para prever erro
    - db.once() p/ abrir conexão.

# 5.Schema

- Criar a pasta MODELS e arquivo.js
- importar o mongoose.
- modelo de schema de acordo com a documetação:

```
const eventSchema = new mongoose.Schema(
{ timestamp: Date },
{ discriminatorKey: 'kind' });
const Event = mongoose.model('Event', eventSchema);

export defalt Event
```

- importar arquivo para o controllers.js

# 6.Controller

- Criar pasta controllers e arquivoController.js

- importar o arquivo do model.

- modelo a ser criado:

```
class arquiviController {
  ...
}

export defalt arquivo controller
```

# 7.Rotas

- Criar a pasta routes
- importar o express
- importar arquivoController
- usar o modelo:

```
const router = express.Router()

router
    .verbo("/livros", LivroController.listarLivros)


export default router
```

- Criar o arquivo de index dentro de routes para organizar as rotas.
- Em index.js

  - importar express
  - importar as rotas
  - importar o arquivo index.js p/ app.js e chamar o routes(app)

  # 8.Os códigos de status HTTP mais comuns

- 100, indica que a solicitação foi recebida.
- **200**, indica sucesso da solicitação.
- 301, indica que uma página foi movida para outro endereço.
- 302, indica que uma página foi movida temporariamente.
- **400**, indica que a solicitação está incorreta.
- 403, indica que o acesso é proibido.
- 404, indica que a página não foi encontrada.
- 410, indica que o recurso não está mais disponível.
- **500**, indica um erro interno do servidor.
