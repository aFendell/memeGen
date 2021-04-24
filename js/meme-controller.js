'use strict'

function onInit() {
    console.log('Let\'s meme!');
    // onShowEditor()
    onShowGallery()
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d')
    renderMeme()

    window.addEventListener('resize', function(){
        // gCanvas.width = window.innerWidth
        // gCanvas.height = window.innerHeight
        // console.log('resizin canvas w, h:',gCanvas.width, gCanvas.height);
        resizeCanvas()
        renderMeme()
    })
}

function resizeCanvas() {
    var elContainer = document.querySelector('#my-canvas');
    // Note: changing the canvas dimension this way clears the canvas
    gCanvas.width = elContainer.offsetWidth
    gCanvas.height = elContainer.offsetWidth
}

function onType(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt;
    renderMeme()
}

function drawText(currLine) {
    var line = currLine
    // var currLine = gMeme.lines[gMeme.selectedLineIdx]
    var txt = line.txt
    var size = line.size
    var alignX = line.alignX
    var alignY = line.alignY

    var x = line.x
    var y = line.y

    gCtx.textAlign = alignX
    gCtx.fillStyle = gFillColor
    // gCtx.strokeStyle = gStrokeColor
    gCtx.lineWidth = 5
    gCtx.font = `${size}px Ariel`
    gCtx.textBaseline = alignY
    gCtx.fillText(txt, x, y)
    // gCtx.strokeText(txt, x, y);
}

function renderMeme() {
    var img = new Image()
    img.src = `images/${gMeme.selectedImgId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        gMeme.lines.forEach(drawText)
    }
}

function onSelectImg(id) {
    gMeme.selectedImgId = id
    onShowEditor()
}

function onShowEditor() {
    if (document.body.classList.contains('menu-open')) toggleMenu()
    hideGallery()
    showEditor()
    renderMeme()
}

function hideGallery() {
    var elGallery = document.querySelector('.gallery-container')
    elGallery.style.display = 'none'
}

function showEditor() {
    var elEditor = document.querySelector('.editor-container')
    elEditor.style.display = 'block'
}

function onShowGallery() {
    if (document.body.classList.contains('menu-open')) toggleMenu()
    hideEditor()
    showGallery()
}

function hideEditor() {
    var elEditor = document.querySelector('.editor-container')
    elEditor.style.display = 'none'
}

function showGallery() {
    var elGallery = document.querySelector('.gallery-container')
    elGallery.style.display = 'block'
}

function onAbout() {
    if (document.body.classList.contains('menu-open')) toggleMenu()

    // TODO: open about modal
}

function onAddNewLine() {
    createNewLine()
}

function onSwitchLine() {
    changeLineIdx()
}

function toggleMenu() {
    document.body.classList.toggle('menu-open')
}


   // if (alignX === 'left') var x = 0;
    // else if (alignX === 'center') var x = gCanvas.width / 2
    // else if (alignX === 'right') var x = gCanvas.width

    // if (alignY === 'top') var y = 0
    // else if (alignY === 'middle') var y = gCanvas.height / 2

///////////////////////////////////////////////////////

    // function drawImg() {

//     var img = new Image()
//     img.src = `images/${gMeme.selectedImgId}.jpg`;
//     img.onload = () => {
//         gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
//         drawText()
//     }
// }