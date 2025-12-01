# 📥 Guia: Configurar Download de APK

Este guia explica as diferentes formas de configurar o download do APK na página.

---

## 3 Formas de Configurar o Download do APK

### 1️⃣ Upload Local (Recomendado para Testes)

**Como funciona:** O usuário faz upload do arquivo APK diretamente na página.

#### Passo 1: Deixar a URL vazia

Abra `client/src/pages/Home.tsx` e certifique-se de que:

```javascript
const COMPANY_CONFIG = {
  // ...
  apkDownloadUrl: "",  // ← Deixe vazio
  // ...
};
```

#### Passo 2: Usar o Campo de Upload

Quando a página carregar, você verá:

```
Gerenciar APK:
[Selecionar arquivo...]
```

#### Passo 3: Fazer Upload

1. Clique no campo de upload
2. Selecione seu arquivo `.apk`
3. Clique em "Instalar"
4. O download começará automaticamente

**Vantagens:**
- ✅ Funciona imediatamente
- ✅ Não requer servidor externo
- ✅ Perfeito para testes

**Desvantagens:**
- ❌ Arquivo é armazenado apenas na memória do navegador
- ❌ Perdido ao recarregar a página
- ❌ Não funciona para múltiplos usuários

---

### 2️⃣ URL Remota (Recomendado para Produção)

**Como funciona:** O APK fica armazenado em um servidor externo e é baixado via URL.

#### Passo 1: Hospedar o APK

Você precisa de um servidor para armazenar o arquivo. Opções:

**A. Google Drive (Gratuito)**

1. Faça upload do APK para o Google Drive
2. Clique com botão direito → Compartilhar
3. Copie o ID do arquivo da URL:
   ```
   https://drive.google.com/file/d/AQUI_ESTA_O_ID/view
   ```
4. Use esta URL:
   ```
   https://drive.google.com/uc?export=download&id=AQUI_ESTA_O_ID
   ```

**B. Dropbox (Gratuito)**

1. Faça upload do APK para o Dropbox
2. Clique com botão direito → Copiar link
3. Altere o final da URL de `dl=0` para `dl=1`
4. Exemplo:
   ```
   https://www.dropbox.com/s/seu-arquivo.apk?dl=1
   ```

**C. Seu Próprio Servidor**

Se você tem um servidor web (Apache, Nginx, etc.):

1. Coloque o arquivo APK em uma pasta acessível
2. Use a URL completa:
   ```
   https://seu-servidor.com/apps/meu-app.apk
   ```

**D. Serviços de Hospedagem (Pagos)**

- AWS S3
- Microsoft Azure
- DigitalOcean
- Firebase Storage

#### Passo 2: Adicionar URL ao COMPANY_CONFIG

Abra `client/src/pages/Home.tsx`:

```javascript
const COMPANY_CONFIG = {
  // ...
  apkDownloadUrl: "https://drive.google.com/uc?export=download&id=SEU_ID",
  // ...
};
```

#### Passo 3: Testar

1. Salve o arquivo
2. Recarregue a página
3. Clique em "Instalar"
4. O download deve começar automaticamente

**Vantagens:**
- ✅ Funciona para múltiplos usuários
- ✅ Arquivo permanente
- ✅ Ideal para produção
- ✅ Sem limite de downloads

**Desvantagens:**
- ❌ Requer servidor externo
- ❌ Pode ter limite de downloads (Google Drive, Dropbox)

---

### 3️⃣ Upload Híbrido (Melhor dos Dois Mundos)

**Como funciona:** Permite tanto upload local quanto URL remota.

#### Passo 1: Configurar Ambas as Opções

```javascript
const COMPANY_CONFIG = {
  // ...
  apkDownloadUrl: "https://seu-servidor.com/app.apk",  // URL remota
  // ...
};
```

#### Passo 2: Como Funciona

- Se `apkDownloadUrl` estiver preenchida: usa a URL remota
- Se estiver vazia: permite upload local
- Se o usuário fizer upload: sobrescreve a URL

#### Passo 3: Lógica do Download

O código verifica nesta ordem:

```javascript
const handleDownload = () => {
  if (apkUrl) {
    // 1. Se tem URL remota, baixa dela
    window.location.href = apkUrl;
  } else if (apkFile) {
    // 2. Se tem arquivo local, baixa dele
    const url = URL.createObjectURL(apkFile);
    // ... download
  } else {
    // 3. Se nenhum dos dois, mostra erro
    alert("Nenhum APK configurado");
  }
};
```

---

## Exemplo Prático Completo

### Cenário: Usar Google Drive

#### 1. Preparar o APK

```
Arquivo: meu-app.apk
Tamanho: 50 MB
```

#### 2. Fazer Upload no Google Drive

1. Acesse https://drive.google.com
2. Clique em "Novo" → "Upload de arquivo"
3. Selecione `meu-app.apk`
4. Aguarde o upload terminar

#### 3. Obter o Link de Download

1. Clique com botão direito no arquivo
2. Selecione "Compartilhar"
3. Copie o link compartilhável
4. Extraia o ID da URL:
   ```
   https://drive.google.com/file/d/1a2b3c4d5e6f7g8h9i0j/view
                                    ↑ Este é o ID
   ```

#### 4. Configurar na Página

Abra `client/src/pages/Home.tsx`:

```javascript
const COMPANY_CONFIG = {
  storeName: "StoreApp",
  appName: "Meu Aplicativo",
  appDescription: "App Oficial da Empresa",
  appIcon: "bg-gradient-to-br from-blue-400 to-cyan-500",
  appRating: 4.8,
  appDownloads: "12 mil+",
  appAgeRating: "12+",
  appTags: "Contém anúncios · Compras no app",
  apkDownloadUrl: "https://drive.google.com/uc?export=download&id=1a2b3c4d5e6f7g8h9i0j",
};
```

#### 5. Testar

1. Salve o arquivo
2. Acesse `http://localhost:5173/?mobile=true`
3. Clique em "Instalar"
4. O download deve começar

---

## Troubleshooting

### ❌ Download não funciona

**Problema:** Clico em "Instalar" mas nada acontece

**Soluções:**
1. Verifique se a URL está correta
2. Teste a URL no navegador diretamente
3. Verifique se o arquivo existe no servidor
4. Verifique o console do navegador (F12) para erros

### ❌ "Acesso Negado" no Google Drive

**Problema:** Erro ao tentar baixar do Google Drive

**Solução:**
1. Certifique-se de que o link está compartilhado publicamente
2. Use o formato correto: `https://drive.google.com/uc?export=download&id=ID`
3. Não use `dl=0`, use `dl=1` para Dropbox

### ❌ Arquivo muito grande

**Problema:** Arquivo APK é muito grande (>100 MB)

**Soluções:**
1. Comprima o APK se possível
2. Use um servidor CDN para distribuição rápida
3. Considere usar AWS S3 ou similar

### ❌ Limite de Downloads Excedido

**Problema:** Google Drive/Dropbox diz que limite foi excedido

**Soluções:**
1. Use um servidor próprio
2. Use AWS S3 ou similar
3. Distribua o link de forma mais controlada

---

## Melhores Práticas

### ✅ Segurança

1. **Sempre use HTTPS** (não HTTP)
   ```
   ✅ https://seu-servidor.com/app.apk
   ❌ http://seu-servidor.com/app.apk
   ```

2. **Valide o arquivo** antes de fazer upload
   - Certifique-se de que é um APK válido
   - Verifique a assinatura digital

3. **Mantenha backup** do arquivo original

### ✅ Performance

1. **Use CDN** para distribuição rápida
2. **Comprima o APK** se possível
3. **Teste o download** regularmente

### ✅ Manutenção

1. **Atualize regularmente** o APK
2. **Mantenha versões antigas** por um tempo
3. **Monitore downloads** para detectar problemas

---

## Resumo das Opções

| Opção | Setup | Permanência | Múltiplos Usuários | Melhor Para |
|---|---|---|---|---|
| **Upload Local** | Fácil | Sessão | Não | Testes |
| **Google Drive** | Médio | Permanente | Sim | Pequenos projetos |
| **Seu Servidor** | Difícil | Permanente | Sim | Produção |
| **AWS S3** | Médio | Permanente | Sim | Grande escala |

---

## Próximos Passos

1. Escolha a opção que melhor se adequa ao seu caso
2. Configure a URL ou use o upload local
3. Teste o download
4. Consulte `TUTORIAL_CUSTOMIZACAO.md` para outras personalizações

---

## Suporte

Se tiver dúvidas sobre como hospedar o APK, consulte:
- Google Drive: https://support.google.com/drive
- Dropbox: https://www.dropbox.com/help
- AWS S3: https://aws.amazon.com/s3/
