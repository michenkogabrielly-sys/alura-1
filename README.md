# 🎨 Monalisa Interativa - p5.js

Uma recriação interativa da famosa **Monalisa de Leonardo da Vinci** usando **p5.js**, com a característica principal de que **os olhos acompanham o movimento do cursor do mouse**.

## ✨ Características

- 👀 **Olhos interativos** que seguem o cursor do mouse em tempo real
- 🎭 **Cores originais** da obra clássica (paleta renascentista)
- 📱 **Design responsivo** que se adapta a diferentes tamanhos de tela
- 🖼️ **Renderização com p5.js** usando formas geométricas e curvas
- 🌈 **Sorriso famoso** da Monalisa implementado com bezier curves

## 📋 Arquivos

- **index.html** - Estrutura HTML e importação das bibliotecas
- **style.css** - Estilos visuais e layout responsivo
- **sketch.js** - Código p5.js com toda a lógica de desenho e interação

## 🚀 Como Usar

### Opção 1: Arquivo Local
1. Baixe os arquivos ou faça clone do repositório
2. Abra `index.html` em um navegador web

### Opção 2: Servidor Local
```bash
# Com Python 3
python -m http.server 8000

# Com Node.js e http-server
npx http-server
```
Então acesse: `http://localhost:8000`

### Opção 3: GitHub Pages
1. Vá para Settings → Pages
2. Selecione "Deploy from a branch"
3. Escolha `main` branch
4. Seu projeto estará disponível em: `https://seu-usuario.github.io/alura-1/`

## 🎯 Funcionalidades Principais

### Interação do Mouse
```javascript
let angle = atan2(mouseY - eyeY, mouseX - eyeX);
let irisOffsetX = cos(angle) * min(distance * 0.3, width * 0.02);
```

Os olhos calculam continuamente o ângulo em relação ao cursor e movem a íris proporcionalmente à distância.

### Cores Originais
```javascript
const colors = {
    skin: '#D4A574',      // Tom de pele renascentista
    eyeIris: '#6B4423',   // Castanho profundo
    lips: '#C85563',      // Vermelho rosado característico
    hair: '#4A3728',
    background: '#8B7355' // Tom sépia
};
```

## 📐 Estrutura do Código

- `setup()` - Inicializa o canvas
- `draw()` - Loop principal de renderização
- `drawMonalisa()` - Função principal que coordena o desenho
- `drawEye(eyeX, eyeY)` - Desenha olhos com interação do mouse
- `drawMouth()` - Implementa o famoso sorriso
- `windowResized()` - Gerencia responsividade

## 🎨 Customizações Possíveis

### Mudar Cores
Edite o objeto `colors` em `sketch.js`:
```javascript
const colors = {
    skin: '#SUA_COR_AQUI',
    lips: '#COR_LABIOS',
    // ...
};
```

### Ajustar Velocidade dos Olhos
Modifique o multiplicador em `drawEye()`:
```javascript
let irisOffsetX = cos(angle) * min(distance * 0.5, width * 0.02); // Aumente para mais sensível
```

### Mudar Tamanho do Canvas
Em `setup()`:
```javascript
canvasWidth = 800;   // Altere para seu tamanho desejado
canvasHeight = 900;
```

## 📚 Dependências

- **p5.js** (v1.7.0) - Carregado via CDN
- Nenhuma dependência local necessária

## 🌐 Compatibilidade

- ✅ Chrome, Firefox, Safari, Edge
- ✅ Dispositivos móveis e tablets
- ✅ Navegadores modernos (ES6+)

## 💡 Dicas de Desenvolvimento

1. **Debug**: Use `console.log()` para verificar valores do mouse
2. **Desenho**: Ajuste coordenadas em porcentagem de `width` e `height` para melhor escalabilidade
3. **Performance**: O código é otimizado para rodar em 60 FPS

## 📝 Licença

Livre para usar e modificar. Créditos à obra original de Leonardo da Vinci (1503-1519).

## 🤝 Contribuições

Sinta-se livre para:
- Reportar bugs
- Sugerir melhorias
- Fazer fork e contribuir
- Compartilhar suas variações

---

**Desenvolvido com ❤️ usando p5.js**