# 📦 Guia: Opção 1 - APK na Pasta `client/public/`

Este guia explica como usar a **Opção 1** implementada na página: colocar seu arquivo APK diretamente na pasta `client/public/`.

---

## Como Funciona

1. Você coloca seu arquivo `.apk` na pasta `client/public/`
2. A página referencia o arquivo automaticamente
3. Quando o usuário clica em "Instalar", o navegador baixa o arquivo
4. Simples, rápido e sem necessidade de servidor externo

---

## Passo a Passo

### Passo 1: Localizar a Pasta `client/public/`

```
playstore_app_page/
├── client/
│   ├── public/              ← Pasta aqui
│   │   ├── app-example.apk  ← Seu APK vai aqui
│   │   └── index.html
│   └── src/
```

### Passo 2: Colocar Seu APK

**Opção A: Renomear o arquivo de exemplo**

Se você já tem um arquivo `app-example.apk` vazio na pasta, simplesmente:

1. Coloque seu arquivo APK real em `client/public/`
2. Nomeie como `app-example.apk` (ou outro nome)
3. Pronto!

**Opção B: Usar outro nome**

Se quiser usar um nome diferente (ex: `meu-app.apk`):

1. Coloque seu arquivo em `client/public/meu-app.apk`
2. Abra o arquivo `client/src/pages/Home.tsx`
3. Procure por (linha ~16):

```javascript
const COMPANY_CONFIG = {
  // ...
  apkDownloadUrl: "/app-example.apk",  // ← Altere aqui
};
```

4. Altere para:

```javascript
const COMPANY_CONFIG = {
  // ...
  apkDownloadUrl: "/meu-app.apk",  // ← Novo nome
};
```

5. Salve o arquivo

### Passo 3: Testar Localmente

1. Execute o servidor:
```bash
npm run dev
```

2. Acesse a página:
```
http://localhost:5173/?mobile=true
```

3. Clique em "Instalar"
4. O download deve começar automaticamente

---

## Estrutura Final

Após adicionar seu APK, a pasta `client/public/` deve ficar assim:

```
client/public/
├── app-example.apk         ← Seu APK aqui
├── index.html
└── (outros arquivos estáticos)
```

---

## Alterar o Nome do APK Baixado

Por padrão, o arquivo é baixado como `app.apk`. Se quiser alterar o nome:

Abra `client/src/pages/Home.tsx` e procure por (linha ~100):

```javascript
const handleDownload = () => {
  const link = document.createElement("a");
  link.href = COMPANY_CONFIG.apkDownloadUrl;
  link.download = "app.apk";  // ← Altere aqui
  // ...
};
```

Altere para:

```javascript
link.download = "meu-app-v1.0.apk";  // Novo nome
```

---

## Atualizar o APK

Quando quiser atualizar o APK:

1. **Opção A (Mesmo nome):**
   - Substitua o arquivo `client/public/app-example.apk` pelo novo
   - Salve e recarregue a página
   - Pronto!

2. **Opção B (Novo nome):**
   - Coloque o novo arquivo em `client/public/novo-app.apk`
   - Altere `apkDownloadUrl` em `Home.tsx`
   - Salve e recarregue

---

## Tamanho do Arquivo

**Importante:** Quanto maior o APK, maior será o tamanho do seu projeto.

| Tamanho do APK | Recomendação |
|---|---|
| < 10 MB | ✅ Ideal para Opção 1 |
| 10-50 MB | ✅ Bom para Opção 1 |
| 50-100 MB | ⚠️ Funciona, mas aumenta muito o projeto |
| > 100 MB | ❌ Considere usar Opção 3 (URL externa) |

---

## Troubleshooting

### ❌ Erro: "Arquivo não encontrado"

**Problema:** Clico em "Instalar" mas nada acontece

**Solução:**
1. Verifique se o arquivo está em `client/public/`
2. Verifique se o nome do arquivo está correto em `Home.tsx`
3. Certifique-se de que o caminho começa com `/` (ex: `/app-example.apk`)

### ❌ Download não inicia

**Problema:** Clico em "Instalar" mas o download não começa

**Solução:**
1. Abra o console do navegador (F12)
2. Verifique se há erros
3. Tente em outro navegador
4. Limpe o cache (Ctrl + Shift + Delete)

### ❌ Arquivo corrompido

**Problema:** O arquivo baixado não é válido

**Solução:**
1. Verifique se o arquivo APK original é válido
2. Tente fazer upload do arquivo em um gerenciador de arquivos
3. Certifique-se de que o arquivo não foi corrompido durante a cópia

---

## Próximos Passos

1. Coloque seu APK em `client/public/`
2. Altere `apkDownloadUrl` em `Home.tsx` se necessário
3. Teste o download localmente
4. Publique a página em um servidor (Vercel, Netlify, etc.)

---

## Resumo Rápido

| Ação | Onde | Como |
|---|---|---|
| Adicionar APK | `client/public/app-example.apk` | Copie seu arquivo |
| Alterar nome | `client/src/pages/Home.tsx` (linha 16) | Mude `apkDownloadUrl` |
| Alterar nome do download | `client/src/pages/Home.tsx` (linha 100) | Mude `link.download` |
| Testar | Terminal | `npm run dev` |
| Atualizar APK | `client/public/` | Substitua o arquivo |

---

## Dúvidas?

Consulte os outros tutoriais:
- `TUTORIAL_EXECUCAO_LOCAL.md` - Como rodar localmente
- `TUTORIAL_CUSTOMIZACAO.md` - Como personalizar a página
- `README_PT.md` - Documentação geral do projeto
