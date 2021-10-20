let header = document.querySelector('#page-header')
header.style.textAlign = "left"

let dogImages = document.querySelectorAll('.dog-image')
for(let i = 0; i < dogImages.length; i++){
    dogImages[i].style.borderRadius = '50px'
    dogImages[i].style.transform = "rotate(180deg)"
}

let row1 = document.querySelector('.row')
row1.style.borderStyle = "solid"
row1.style.borderColor = "teal"

let column1 = document.querySelector('.column')
column1.style.fontFamily = "Helvetica"
column1.style.backgroundColor = "coral"

let footer = document.querySelector('.footer')
footer.style.backgroundColor = "blue"
footer.style.color = "red"
// Select some elements...