'use strict'

// var gKeywords = {'happy': 12,'funny puk': 1}
// var gImgs = [{id: 1, url: 'img/popo.jpg', keywords: ['Dushbag']}];
var gMeme = {
    selectedImgId: 2,
    selectedLineIdx: 0,
    lines: [
        { x: 450 / 2, y: 0, txt: '', size: 60, alignX: 'center', alignY: 'top', color: 'red' }
    ]
}
var gCanvas;
var gCtx;
var gFillColor = '#0000ff'
var gStrokeColor = '#ff0000'
var gCurrLineIdx = 0

function createNewLine() {
    var newLine = { x: gCanvas.width / 2, y: gCanvas.height / 2, txt: '', size: 60, alignX: 'center', alignY: 'middle', color: 'green' }
    gMeme.lines.push(newLine)
    gMeme.selectedLineIdx++
}

function changeLineIdx() {
    console.log('change line idx');
    if (gMeme.lines.length === 1) return

    if (gMeme.selectedLineIdx === 0) var diff = 1
    if (gMeme.selectedLineIdx === gMeme.lines.length - 1) var diff = -1

    gMeme.selectedLineIdx = gMeme.selectedLineIdx + diff
    console.log('current line idx', gMeme.selectedLineIdx);
}

function moveLineUp() {
    gMeme.lines[gMeme.selectedLineIdx].y -= 20
    renderMeme()
}

function moveLineDown() {
    gMeme.lines[gMeme.selectedLineIdx].y += 20
    renderMeme()
}

function increaseTxtSize() {
    gMeme.lines[gMeme.selectedLineIdx].size += 4
    renderMeme()
}

function decreaseTxtSize() {
    gMeme.lines[gMeme.selectedLineIdx].size -= 4
    renderMeme()
}