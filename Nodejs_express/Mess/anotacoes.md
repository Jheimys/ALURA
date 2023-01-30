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
