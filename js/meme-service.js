'use strict'

// var gKeywords = {'happy': 12,'funny puk': 1}
var gImgs = [
    { id: 1, url: './images/1.jpg', keywords: ['Dushbag', 'Small hands'] },
    { id: 2, url: './images/2.jpg', keywords: [''] },
    { id: 3, url: './images/3.jpg', keywords: [''] },
    { id: 4, url: './images/4.jpg', keywords: [''] },
    { id: 5, url: './images/5.jpg', keywords: [''] },
    { id: 6, url: './images/6.jpg', keywords: [''] },
    { id: 7, url: './images/7.jpg', keywords: [''] },
    { id: 8, url: './images/8.jpg', keywords: [''] },
    { id: 9, url: './images/9.jpg', keywords: [''] },
    { id: 10, url: './images/10.jpg', keywords: [''] },
    { id: 11, url: './images/11.jpg', keywords: [''] },
    { id: 12, url: './images/12.jpg', keywords: [''] },
    { id: 13, url: './images/13.jpg', keywords: [''] },
    { id: 14, url: './images/14.jpg', keywords: [''] },
    { id: 15, url: './images/15.jpg', keywords: [''] },
    { id: 16, url: './images/16.jpg', keywords: [''] },
    { id: 17, url: './images/17.jpg', keywords: [''] },
    { id: 18, url: './images/18.jpg', keywords: [''] }
];

// var gImgs = [
//     {id: 1, url: `./images/1.jpg`, keywords: ['Dushbag', 'Small hands']},
//     {id: 2, url: `./images/2.jpg`, keywords: ['']}
// ]

var gMeme = {
    selectedImgId: 2,
    selectedLineIdx: 0,
    lines: [{
        x: 450 / 2,
        y: 0, txt: '',
        size: 60,
        alignX: 'center',
        alignY: 'top',
        color: '#00FF00'
    }]
}

var gCanvas;
var gCtx;
// var gFillColor = '#0000ff'
// var gStrokeColor = '#ff0000'
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

function setLineColor(color) {

    gMeme.lines[gCurrLineIdx].color = color
    console.log('color set to:', color);
}

function moveLineUp() {
    gMeme.lines[gMeme.selectedLineIdx].y -= 20
}

function moveLineDown() {
    gMeme.lines[gMeme.selectedLineIdx].y += 20
}

function increaseTxtSize() {
    gMeme.lines[gMeme.selectedLineIdx].size += 4
}

function decreaseTxtSize() {
    gMeme.lines[gMeme.selectedLineIdx].size -= 4
}