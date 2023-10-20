// ----- General ----- //

const $ = (selector) => document.querySelector(selector)

// ----- Show image menu ----- //

$(".open-image-menu").addEventListener("click" , () => {
    $("aside").style.display = "block"
    $(".image-section").style.display = "block"
    $(".text-section").style.display = "none"
})

// ----- Show text menu ----- //

$(".open-text-menu").addEventListener("click" , () => {
    $("aside").style.display = "block"
    $(".text-section").style.display = "block"
    $(".image-section").style.display = "none"
})

// ----- Hide sidebar ----- //

$(".close-menu").addEventListener("click" , () => {
    $("aside").style.display = "none"
})

// ----- light-mode ----- //

$(".change-color-theme").addEventListener("click" , () => {
    const currentTheme = $("body").getAttribute("theme")
    if (currentTheme) {
        $("body").removeAttribute("theme" , "light-theme")
    } else {
        $("body").setAttribute("theme" , "light-theme")
    }
})

// ----- Enter top text ----- //

$("#top-text-input").addEventListener("input" , (e) => {
    $(".meme-top-text").innerText = `${e.target.value}`
})

// ----- Enter bottom text ----- //

$("#bottom-text-input").addEventListener("input" , (e) => {
    $(".meme-bottom-text").innerText = `${e.target.value}`
})

// ----- Image panel ----- //

//Upload an image

$("#url").addEventListener("input" , (e) => {
    $(".meme-image").style.backgroundImage = `url(${e.target.value})`
})

//Background Color

$(".input-color").addEventListener("input", (e) => {
    $(".meme-image").style.backgroundColor = e.target.value
})


//Background Blend

$("#filters").addEventListener("input", (e) => {
    $(".meme-image").style.backgroundBlendMode = e.target.value
})

//Filters

const filtersMeme = () => {
    $(".meme-image").style.filter = `brightness(${$("#brightness").value}) opacity(${$("#opacity").value}) contrast(${$("#contrast").value}%) blur(${$("#blur").value}px) grayscale(${$("#grayscale").value}%) sepia(${$("#sepia").value}%) hue-rotate(${$("#hue").value}deg) saturate(${$("#saturate").value}%) invert(${$("#invert").value})`
}

$("#brightness").addEventListener("input" , filtersMeme)
$("#opacity").addEventListener("input" , filtersMeme)
$("#contrast").addEventListener("input" , filtersMeme)
$("#blur").addEventListener("input" , filtersMeme)
$("#grayscale").addEventListener("input" , filtersMeme)
$("#sepia").addEventListener("input" , filtersMeme)
$("#hue").addEventListener("input" , filtersMeme)
$("#saturate").addEventListener("input" , filtersMeme)
$("#invert").addEventListener("input" , filtersMeme)

//Reset filters

$(".button-reset").addEventListener("click" , (e) => {
    $("#brightness").value = "1"
    $("#opacity").value = "1"
    $("#contrast").value = "100"
    $("#blur").value = "0"
    $("#grayscale").value = "0"
    $("#sepia").value = "0"
    $("#hue").value = "0"
    $("#saturate").value = "100"
    $("#invert").value = "0"
    $(".meme-image").style.filter = "none"
})