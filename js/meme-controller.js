'use strict'

function onInit() {
    onShowGallery()
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d')

    window.addEventListener('resize', function () {
        resizeCanvas()
        renderMeme()
    })
}

function resizeCanvas() {
    var elContainer = document.querySelector('#my-canvas');

    gCanvas.width = elContainer.offsetWidth
    gCanvas.height = elContainer.offsetWidth
}

function onType(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt;
    renderMeme()
}

function drawText(currLine) {
    var line = currLine
    var txt = line.txt
    var size = line.size
    var alignX = line.alignX
    var alignY = line.alignY

    var x = line.x
    var y = line.y

    gCtx.textAlign = alignX
    gCtx.fillStyle = line.color
    gCtx.strokeStyle = 'blue'
    gCtx.lineWidth = 2
    gCtx.font = `${size}px Montserrat-Regular`
    gCtx.textBaseline = alignY
    gCtx.fillText(txt, x, y)
    gCtx.strokeText(txt, x, y)
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
    renderMeme()
    showEditor()
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
    renderGallery()
    hideEditor()
    showGallery()
}

function hideEditor() {
    var elEditor = document.querySelector('.editor-container')
    elEditor.style.display = 'none'
}

function renderGallery() {
    var imgs = gImgs
    var strHtmls = imgs.map(function (img) {
        return `
        <div class="image-box"><img src="./images/${img.id}.jpg" alt="image${img.id}" id="${img.id}" 
            onclick="onSelectImg(this.id)"></div>
            `
    })

    var elWrapper = document.querySelector('.imgs-wrapper.grid')
    elWrapper.innerHTML = strHtmls.join('')
}

function showGallery() {
    var elGallery = document.querySelector('.gallery-container')
    elGallery.style.display = 'block'
}

function onAbout() {
    if (document.body.classList.contains('menu-open')) toggleMenu()

    // TODO: open about modal
}

function onMoveLineUp() {
    moveLineUp()
    renderMeme()
}

function onMoveLineDown() {
    moveLineDown()
    renderMeme()
}

function onIncreaseTxtSize() {
    increaseTxtSize()
    renderMeme()
}

function onDecreaseTxtSize() {
    decreaseTxtSize()
    renderMeme()
}

function OnChangeLineColor(color) {
    setLineColor(color)
    renderMeme()
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

