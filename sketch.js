// Monalisa Interativa - p5.js
// Os olhos acompanham o cursor do mouse

let canvasWidth = 600;
let canvasHeight = 700;
let containerElement;

// Cores originais da Monalisa (palette clássica)
const colors = {
    skin: '#D4A574',      // Tom de pele renascentista
    skinDark: '#A67C52',
    eyeWhite: '#F5F5DC',
    eyeIris: '#6B4423',   // Castanho profundo
    eyePupil: '#1a1a1a',
    hair: '#4A3728',
    hairLight: '#6B5A47',
    lips: '#C85563',      // Vermelho rosado característico
    background: '#8B7355' // Tom sépia do fundo original
};

function setup() {
    containerElement = document.getElementById('sketch-container');
    const maxWidth = containerElement.offsetWidth - 20;
    
    if (maxWidth < 600) {
        canvasWidth = maxWidth;
        canvasHeight = (canvasWidth / 600) * 700;
    }
    
    let canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent('sketch-container');
}

function draw() {
    background(colors.background);
    drawMonalisa();
}

function drawMonalisa() {
    push();
    drawHead();
    drawHair();
    drawNeckAndShoulders();
    drawEyes();
    drawNose();
    drawMouth();
    pop();
}

function drawHead() {
    fill(colors.skin);
    stroke(colors.skinDark);
    strokeWeight(2);
    ellipse(width / 2, height * 0.35, width * 0.35, height * 0.4);
}

function drawHair() {
    fill(colors.hair);
    noStroke();
    ellipse(width / 2, height * 0.25, width * 0.32, height * 0.25);
    
    fill(colors.hairLight);
    arc(width / 2, height * 0.22, width * 0.28, height * 0.2, PI, TWO_PI);
    
    fill(colors.hair);
    ellipse(width * 0.35, height * 0.35, width * 0.12, height * 0.3);
    ellipse(width * 0.65, height * 0.35, width * 0.12, height * 0.3);
}

function drawNeckAndShoulders() {
    fill(colors.skin);
    noStroke();
    rect(width * 0.42, height * 0.5, width * 0.16, height * 0.15);
    
    fill('#8B6F47');
    ellipse(width * 0.35, height * 0.62, width * 0.2, height * 0.15);
    ellipse(width * 0.65, height * 0.62, width * 0.2, height * 0.15);
    
    stroke('#5D4E37');
    strokeWeight(1);
    for (let i = 0; i < 3; i++) {
        curve(width * 0.3 + i * 10, height * 0.55, 
              width * 0.35 + i * 10, height * 0.6,
              width * 0.4 + i * 10, height * 0.65,
              width * 0.45 + i * 10, height * 0.7);
    }
}

function drawEyes() {
    drawEye(width * 0.38, height * 0.32);
    drawEye(width * 0.62, height * 0.32);
}

function drawEye(eyeX, eyeY) {
    push();
    
    fill(colors.eyeWhite);
    stroke(colors.skinDark);
    strokeWeight(1.5);
    ellipse(eyeX, eyeY, width * 0.08, height * 0.1);
    
    // ⭐ LINHA PRINCIPAL - OLHOS SEGUINDO O MOUSE
    let angle = atan2(mouseY - eyeY, mouseX - eyeX);
    let distance = dist(mouseX, mouseY, eyeX, eyeY);
    
    let irisOffsetX = cos(angle) * min(distance * 0.3, width * 0.02);
    let irisOffsetY = sin(angle) * min(distance * 0.3, height * 0.03);
    
    fill(colors.eyeIris);
    stroke(colors.eyePupil);
    strokeWeight(1);
    ellipse(eyeX + irisOffsetX, eyeY + irisOffsetY, width * 0.04, height * 0.055);
    
    fill(colors.eyePupil);
    noStroke();
    ellipse(eyeX + irisOffsetX * 0.7, eyeY + irisOffsetY * 0.7, width * 0.015, height * 0.02);
    
    fill(255);
    noStroke();
    ellipse(eyeX + irisOffsetX * 0.7 + width * 0.008, 
            eyeY + irisOffsetY * 0.7 - height * 0.01, 
            width * 0.008, height * 0.012);
    
    stroke(colors.hair);
    strokeWeight(2);
    noFill();
    arc(eyeX, eyeY - height * 0.06, width * 0.09, height * 0.04, PI, 0);
    
    pop();
}

function drawNose() {
    stroke(colors.skinDark);
    strokeWeight(1);
    noFill();
    line(width / 2, height * 0.32, width / 2, height * 0.42);
    
    fill(colors.skinDark);
    ellipse(width * 0.48, height * 0.42, width * 0.025, height * 0.03);
    ellipse(width * 0.52, height * 0.42, width * 0.025, height * 0.03);
}

function drawMouth() {
    push();
    
    stroke(colors.lips);
    strokeWeight(2.5);
    noFill();
    
    curve(width * 0.40, height * 0.48,
          width * 0.42, height * 0.48,
          width * 0.50, height * 0.52,
          width * 0.58, height * 0.48);
    
    curve(width * 0.40, height * 0.50,
          width * 0.42, height * 0.50,
          width * 0.50, height * 0.54,
          width * 0.58, height * 0.50);
    
    fill(colors.lips);
    stroke(colors.lips);
    strokeWeight(0.5);
    
    beginShape();
    curveVertex(width * 0.40, height * 0.49);
    curveVertex(width * 0.42, height * 0.48);
    curveVertex(width * 0.50, height * 0.52);
    curveVertex(width * 0.58, height * 0.48);
    curveVertex(width * 0.60, height * 0.50);
    curveVertex(width * 0.58, height * 0.51);
    curveVertex(width * 0.50, height * 0.54);
    curveVertex(width * 0.42, height * 0.50);
    curveVertex(width * 0.40, height * 0.50);
    endShape(CLOSE);
    
    pop();
}

function windowResized() {
    if (containerElement) {
        const maxWidth = containerElement.offsetWidth - 20;
        
        if (maxWidth < 600) {
            canvasWidth = maxWidth;
            canvasHeight = (canvasWidth / 600) * 700;
        } else {
            canvasWidth = 600;
            canvasHeight = 700;
        }
        
        resizeCanvas(canvasWidth, canvasHeight);
    }
}