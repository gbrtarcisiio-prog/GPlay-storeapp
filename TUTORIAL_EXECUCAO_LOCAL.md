# 📱 Tutorial: Executar a Página Play Store Localmente

## Pré-requisitos

Antes de começar, certifique-se de ter instalado em seu computador:

- **Node.js** (versão 18 ou superior) - [Download](https://nodejs.org/)
- **npm** ou **pnpm** (gerenciador de pacotes)
- **Git** (opcional, para clonar repositórios)

### Verificar se Node.js está instalado

Abra o terminal/prompt de comando e execute:

```bash
node --version
npm --version
```

Se ambos retornarem versões, você está pronto para continuar!

---

## Passo 1: Extrair os Arquivos

1. Extraia o arquivo `playstore_app_page.zip` em uma pasta de sua escolha
2. Navegue até a pasta extraída no terminal:

```bash
cd caminho/para/playstore_app_page
```

---

## Passo 2: Instalar Dependências

Execute o comando para instalar todas as dependências do projeto:

```bash
npm install
```

Ou, se estiver usando pnpm:

```bash
pnpm install
```

Este processo pode levar alguns minutos na primeira execução.

---

## Passo 3: Iniciar o Servidor de Desenvolvimento

Após a instalação, inicie o servidor local:

```bash
npm run dev
```

Ou com pnpm:

```bash
pnpm dev
```

Você verá uma mensagem similar a:

```
  ➜  Local:   http://localhost:5173/
  ➜  Network: http://192.168.x.x:5173/
```

---

## Passo 4: Acessar a Página

### No seu computador:

1. Abra um navegador (Chrome, Firefox, Safari, Edge)
2. Acesse: `http://localhost:5173/?mobile=true`

**Nota:** O parâmetro `?mobile=true` força a visualização em modo mobile. Sem ele, você verá a mensagem de "Apenas para dispositivos móveis" em telas largas.

### Em outro dispositivo (smartphone/tablet):

1. Encontre o IP da sua máquina (mostrado na mensagem do servidor)
2. No dispositivo móvel, acesse: `http://SEU_IP:5173/?mobile=true`

---

## Passo 5: Adicionar Seu APK

**Importante:** A página está configurada para usar a **Opção 1** - APK estático na pasta `client/public/`.

### Como adicionar seu APK:

1. Coloque seu arquivo `.apk` em: `client/public/app-example.apk`
2. Se quiser usar outro nome:
   - Coloque o arquivo em `client/public/seu-app.apk`
   - Abra `client/src/pages/Home.tsx`
   - Procure por `COMPANY_CONFIG` (linha ~16)
   - Altere `apkDownloadUrl`:

```javascript
const COMPANY_CONFIG = {
  // ...
  apkDownloadUrl: "/seu-app.apk",  // Caminho relativo
};
```

3. Salve e a página recarregará automaticamente

---

## Passo 6: Testar o Download

1. Acesse `http://localhost:5173/?mobile=true`
2. Clique em "Instalar"
3. O arquivo deve ser baixado automaticamente

**Nota:** Se o arquivo não existir, o download falhará. Certifique-se de que o arquivo `.apk` está em `client/public/`

---

## Passo 7: Parar o Servidor

Para parar o servidor de desenvolvimento, pressione `Ctrl + C` no terminal.

---

## Troubleshooting

### ❌ Erro: "npm: command not found"

**Solução:** Node.js não está instalado ou não está no PATH. Reinstale o Node.js do site oficial.

### ❌ Porta 5173 já está em uso

**Solução:** Use uma porta diferente:

```bash
npm run dev -- --port 3000
```

### ❌ Página não carrega

**Solução:** 
1. Verifique se o servidor está rodando
2. Limpe o cache do navegador (Ctrl + Shift + Delete)
3. Tente acessar `http://localhost:5173/?mobile=true` novamente

### ❌ Mudanças não aparecem na página

**Solução:** O servidor tem hot-reload automático. Se as mudanças não aparecerem:
1. Salve o arquivo
2. Aguarde alguns segundos
3. Recarregue a página (F5 ou Ctrl + R)

---

## Próximos Passos

- Veja o arquivo `TUTORIAL_CUSTOMIZACAO.md` para personalizar a página
- Consulte `GUIA_UPLOAD_APK.md` para configurar o download de APK
- Leia `README.md` para mais informações sobre o projeto

---

## Suporte

Se encontrar problemas:

1. Verifique se todas as dependências foram instaladas corretamente
2. Tente deletar a pasta `node_modules` e executar `npm install` novamente
3. Verifique se está usando uma versão recente do Node.js
