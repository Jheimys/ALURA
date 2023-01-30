# 1. Conectando ao MongoDB

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

# 2.Schema

- Criar a pasta MODELS e arquivo.js
- modelo de schema de acordo com a documetação:

```
const eventSchema = new mongoose.Schema(
{ timestamp: Date },
{ discriminatorKey: 'kind' });
const Event = mongoose.model('Event', eventSchema);

export defalt Event
```

- importar arquivo para o app.js

#3.Controller

- Criar pasta controllers e arquivoController.js

- importar o arquivo do model.

- modelo a ser criado:

```
class arquiviController {
  ...
}

export defalt arquivo controller
```

#4.Rotas

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
