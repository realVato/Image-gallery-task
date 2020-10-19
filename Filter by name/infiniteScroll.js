const firstCol = document.getElementById('col-0')
const secondCol = document.getElementById('col-1')

const imgClass = 'img-thumbnail'
let imgSrc = 'img.jpg'


// First column
function loadImages(numImages = 10) {
    let i = 0
    while(i < numImages) {
        const newDiv = document.createElement('div')
        firstCol.appendChild(newDiv)
        const img = document.createElement('img')
        img.srcset = imgSrc
        img.className = imgClass
        newDiv.appendChild(img)
        i++
        console.log(newDiv)
    }
}

// Second column
function loadImages1(numImages = 10) {
    let i = 0
    while(i < numImages) {
        const newDiv = document.createElement('div')
        secondCol.appendChild(newDiv)
        const img = document.createElement('img')
        img.srcset = imgSrc
        img.className = imgClass
        newDiv.appendChild(img)
        i++
    }
}

loadImages()
loadImages1()


