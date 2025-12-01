# 🎨 Tutorial: Personalizar a Página Play Store

Este guia mostra como customizar todos os elementos principais da página com seu próprio branding e informações.

---

## 1. Alterar Nome da Store e App

### Localização do Arquivo

Abra: `client/src/pages/Home.tsx`

### Procure por (linha ~7):

```javascript
const COMPANY_CONFIG = {
  storeName: "StoreApp",           // ← Nome da sua loja
  appName: "Meu Aplicativo",        // ← Nome do seu app
  appDescription: "App Oficial da Empresa",  // ← Descrição
  // ... resto da configuração
};
```

### Exemplo de Customização:

```javascript
const COMPANY_CONFIG = {
  storeName: "Minha Loja",
  appName: "Meu App Incrível",
  appDescription: "App Oficial da Minha Empresa",
  // ...
};
```

**Resultado:** Os textos serão atualizados automaticamente em toda a página!

---

## 2. Alterar Ícone do App

### Opção A: Usar Gradiente Personalizado

No mesmo arquivo `COMPANY_CONFIG`, altere `appIcon`:

```javascript
const COMPANY_CONFIG = {
  // ...
  appIcon: "bg-gradient-to-br from-purple-400 to-pink-600",
  // ...
};
```

### Gradientes Disponíveis (Tailwind CSS):

```
from-blue-400 to-cyan-500      (Azul para Ciano)
from-purple-400 to-pink-600    (Roxo para Rosa)
from-green-400 to-emerald-600  (Verde para Esmeralda)
from-orange-400 to-red-600     (Laranja para Vermelho)
from-indigo-400 to-blue-600    (Índigo para Azul)
```

### Opção B: Usar Imagem de Logo

Se quiser usar uma imagem em vez de gradiente:

1. Coloque sua imagem em: `client/public/logo.png`
2. Altere o código do ícone (linha ~81):

```javascript
// Antes:
<div className={`w-24 h-24 ${COMPANY_CONFIG.appIcon} rounded-3xl shadow-lg flex-shrink-0`}></div>

// Depois:
<img src="/logo.png" alt="App Icon" className="w-24 h-24 rounded-3xl shadow-lg flex-shrink-0" />
```

---

## 3. Alterar Rating, Downloads e Classificação Etária

No `COMPANY_CONFIG`:

```javascript
const COMPANY_CONFIG = {
  // ...
  appRating: 4.8,           // Nota de 0 a 5
  appDownloads: "12 mil+",  // Texto de downloads
  appAgeRating: "12+",      // Classificação etária
  appTags: "Contém anúncios · Compras no app",  // Tags do app
  // ...
};
```

### Exemplos:

```javascript
appRating: 4.5,
appDownloads: "1 milhão+",
appAgeRating: "Livre",
appTags: "Sem anúncios · Sem compras",
```

---

## 4. Configurar Download do APK (Opção 1)

A página está configurada para usar a **Opção 1** - APK estático na pasta `client/public/`.

### Como funciona:

1. Coloque seu arquivo `.apk` em: `client/public/app-example.apk`
2. No `COMPANY_CONFIG`, configure o caminho:

```javascript
const COMPANY_CONFIG = {
  // ...
  apkDownloadUrl: "/app-example.apk",
  // ...
};
```

### Se quiser usar outro nome:

1. Coloque o arquivo em: `client/public/seu-app.apk`
2. Altere `apkDownloadUrl`:

```javascript
const COMPANY_CONFIG = {
  // ...
  apkDownloadUrl: "/seu-app.apk",
  // ...
};
```

**Consulte `GUIA_OPCAO_1_APK.md` para mais detalhes.**

---

## 5. Personalizar Descrição "Sobre este App"

Localize a seção "Sobre este app" (linha ~360):

```javascript
<section className="bg-white px-4 py-6 border-b border-gray-200">
  <h2 className="text-lg font-bold text-gray-900 mb-3">Sobre este app</h2>
  <p className="text-sm text-gray-700 leading-relaxed">
    Este é um aplicativo de exemplo que demonstra...
  </p>
```

Altere o texto para sua descrição:

```javascript
<p className="text-sm text-gray-700 leading-relaxed">
  Nosso aplicativo oferece as melhores funcionalidades para sua necessidade. 
  Com interface intuitiva e desempenho otimizado, você terá a melhor experiência.
</p>
```

---

## 6. Alterar Reviews/Avaliações

Localize o array `reviews` (linha ~19):

```javascript
const reviews = [
  {
    id: 1,
    author: "Thiago Jesus",
    rating: 1,
    date: "4 de setembro de 2025",
    text: "O aplicativo ainda apresenta...",
    helpful: 33,
  },
  // ... mais reviews
];
```

### Adicionar Nova Avaliação:

```javascript
const reviews = [
  // ... reviews existentes
  {
    id: 4,
    author: "Seu Nome",
    rating: 5,
    date: "25 de novembro de 2025",
    text: "Excelente aplicativo! Recomendo para todos!",
    helpful: 100,
  },
];
```

### Campos:
- `id`: Número único
- `author`: Nome do avaliador
- `rating`: Nota de 1 a 5 (estrelas)
- `date`: Data da avaliação
- `text`: Texto da avaliação
- `helpful`: Número de pessoas que acharam útil

---

## 7. Alterar Cores da Página

### Cores Principais (Tailwind CSS):

A página usa as seguintes cores principais:

- **Verde**: Botão "Instalar", links, destaques
- **Cinza**: Texto, bordas, backgrounds
- **Amarelo**: Estrelas de rating

### Alterar Cor do Botão "Instalar":

Procure por (linha ~287):

```javascript
className="w-full bg-green-600 hover:bg-green-700 ..."
```

Altere para:

```javascript
className="w-full bg-blue-600 hover:bg-blue-700 ..."
```

### Cores Disponíveis:

```
bg-blue-600      (Azul)
bg-purple-600    (Roxo)
bg-pink-600      (Rosa)
bg-red-600       (Vermelho)
bg-orange-600    (Laranja)
bg-green-600     (Verde - padrão)
bg-indigo-600    (Índigo)
```

---

## 8. Alterar Rodapé

Localize a seção `<footer>` (linha ~620):

```javascript
<footer className="bg-white border-t border-gray-200 px-4 py-6 text-center text-xs text-gray-600 pb-32">
  <div className="space-y-4">
    <div className="space-y-2">
      <p className="font-medium text-gray-900">StoreApp</p>
      <p>Sobre a StoreApp</p>
      <p>Play Pass</p>
      {/* ... mais links */}
    </div>
  </div>
</footer>
```

Altere os textos e links conforme necessário:

```javascript
<p className="font-medium text-gray-900">Minha Loja</p>
<p>Sobre Nós</p>
<p>Contato</p>
<p>Política de Privacidade</p>
```

---

## 9. Alterar Tempo de Carregamento do Skeleton

Se quiser que o loading skeleton apareça por mais ou menos tempo, procure por (linha ~64):

```javascript
useEffect(() => {
  const timer = setTimeout(() => {
    setIsLoading(false);
  }, 1500);  // ← Tempo em milissegundos
  return () => clearTimeout(timer);
}, []);
```

Altere `1500` para:
- `1000` = 1 segundo
- `2000` = 2 segundos
- `3000` = 3 segundos

---

## 10. Alterar Screenshots do Carrossel

Localize o array `screenshots` (linha ~95):

```javascript
const screenshots = [
  { id: 1, color: "bg-pink-100" },
  { id: 2, color: "bg-blue-100" },
  { id: 3, color: "bg-green-100" },
  { id: 4, color: "bg-purple-100" },
];
```

Para adicionar imagens reais em vez de cores:

1. Coloque as imagens em `client/public/screenshots/`
2. Altere o código:

```javascript
const screenshots = [
  { id: 1, image: "/screenshots/screenshot1.png" },
  { id: 2, image: "/screenshots/screenshot2.png" },
  // ...
];
```

3. Altere o renderizador (linha ~390):

```javascript
{screenshots.map((screenshot) => (
  <img 
    key={screenshot.id}
    src={screenshot.image}
    alt={`Screenshot ${screenshot.id}`}
    className="flex-shrink-0 w-40 h-72 rounded-2xl shadow-md snap-center object-cover"
  />
))}
```

---

## 11. Salvar e Testar

Após fazer qualquer alteração:

1. **Salve o arquivo** (Ctrl + S)
2. **A página recarregará automaticamente** (hot-reload)
3. **Atualize o navegador** se necessário (F5)

---

## Resumo das Alterações Principais

| O que alterar | Onde encontrar | Linha aproximada |
|---|---|---|
| Nome da loja/app | `COMPANY_CONFIG` | ~7 |
| Ícone do app | `COMPANY_CONFIG.appIcon` | ~11 |
| Rating/Downloads | `COMPANY_CONFIG` | ~12-14 |
| URL do APK | `COMPANY_CONFIG.apkDownloadUrl` | ~16 |
| Descrição do app | Seção "Sobre este app" | ~360 |
| Reviews | Array `reviews` | ~19 |
| Cor do botão | Classe `bg-green-600` | ~287 |
| Rodapé | Tag `<footer>` | ~620 |

---

## Próximos Passos

- Teste todas as alterações localmente
- Veja `GUIA_UPLOAD_APK.md` para configurar o download do APK
- Consulte `README.md` para mais informações

---

## Dúvidas?

Se tiver dúvidas sobre como alterar algo específico, verifique os comentários no código ou consulte a documentação do Tailwind CSS em https://tailwindcss.com/
