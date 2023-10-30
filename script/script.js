// ----- General ----- //

const $ = (selector) => document.querySelector(selector)

// Aside panel

const showPanel = () => {
    $("aside").style.display = "block"
}

//Show image menu

const showImageSection = () => {
    $(".image-section").style.display = "block"
    $(".text-section").style.display = "none"
}

//Show text menu

const showTextSection = () => {
    $(".text-section").style.display = "block"
    $(".image-section").style.display = "none"
}

//Hide sidebar

const hideAsideMenu = () => {
    $("aside").style.display = "none"
}

// Change theme

$(".change-color-theme").addEventListener("click" , () => {
    const currentTheme = $("body").getAttribute("theme")
    if (currentTheme) {
        $("body").removeAttribute("theme" , "light-theme")
    } else {
        $("body").setAttribute("theme" , "light-theme")
    }
    if (currentTheme === "light-theme") {
        $(".change-color-theme").innerHTML = `<i class="fa-solid fa-circle-half-stroke" id="mode"></i>
        Modo Claro`
    } else {
        $(".change-color-theme").innerHTML = `<i class="fa-solid fa-circle-half-stroke" id="mode"></i>
        Modo Oscuro`
    }
})

// ----- Image panel ----- //

//Upload an image

const changeMemeImage = (e) => {
    $(".meme-image").style.backgroundImage = `url(${e.target.value})`
}

//Background Color functions 

const changeBackgroungColor = (selector , color) => $(selector).style.backgroundColor = color

// Show color values

const colorValues = (selector , colorNames) => $(selector).innerText = colorNames

//Background Blend

const changeBackgroungBlend = (selector , filter) => $(selector).style.backgroundBlendMode = filter

//Filters

const filtersMeme = () => {
    $(".meme-image").style.filter = `brightness(${$("#brightness").value}) opacity(${$("#opacity").value}) contrast(${$("#contrast").value}%) blur(${$("#blur").value}px) grayscale(${$("#grayscale").value}%) sepia(${$("#sepia").value}%) hue-rotate(${$("#hue").value}deg) saturate(${$("#saturate").value}%) invert(${$("#invert").value})`
}

//Reset filters

const resetFilters = () => {
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
}

$(".button-reset").addEventListener("click" , resetFilters)

// ----- Text panel ----- //

//Enter top text

$("#top-text-input").addEventListener("input" , (e) => {
    $(".meme-top-text").innerText = `${e.target.value}`
})

$("#no-top-text").addEventListener("input" , (e) => {
    if (e.target.checked) {
        $(".meme-top-text").style.display = "none"
    } else {
        $(".meme-top-text").style.display = "block"
    }
})

//Enter bottom text

$("#bottom-text-input").addEventListener("input" , (e) => {
    $(".meme-bottom-text").innerText = `${e.target.value}`
})

$("#no-bottom-text").addEventListener("input" , (e) => {
    if (e.target.checked) {
        $(".meme-bottom-text").style.display = "none"
    } else {
        $(".meme-bottom-text").style.display = "block"
    }
})

//Change font

$("#font-family-selection").addEventListener("input" , (e) => {
    $(".meme-top-text").style.fontFamily = e.target.value
})

$("#font-family-selection").addEventListener("input" , (e) => {
    $(".meme-bottom-text").style.fontFamily = e.target.value
})

//Change font size

$("#font-size-selector").addEventListener ("input" , (e) => {
    $(".meme-top-text").style.fontSize = `${e.target.value}px`
})

$("#font-size-selector").addEventListener ("input" , (e) => {
    $(".meme-bottom-text").style.fontSize = `${e.target.value}px`
})

//Change text align 

$("#align-left").addEventListener ("click" , () => {
    $(".meme-top-text").style.justifyContent = "left"
})

$("#align-center").addEventListener ("click" , () => {
    $(".meme-top-text").style.justifyContent = "center"
})

$("#align-right").addEventListener ("click" , () => {
    $(".meme-top-text").style.justifyContent = "right"
})

$("#align-left").addEventListener ("click" , () => {
    $(".meme-bottom-text").style.justifyContent = "left"
})

$("#align-center").addEventListener ("click" , () => {
    $(".meme-bottom-text").style.justifyContent = "center"
})

$("#align-right").addEventListener ("click" , () => {
    $(".meme-bottom-text").style.justifyContent = "right"
})

//Change text color 

$("#text-color-input").addEventListener("input", (e) => {
    $(".meme-top-text").style.color = e.target.value
})

$("#text-color-input").addEventListener("input", (e) => {
    $(".meme-bottom-text").style.color = e.target.value
})

$("#text-color-input").addEventListener("input", (e) => {
    $("#text-color").innerText = e.target.value
})

//Change text background color 

$("#back-color-input").addEventListener("input", (e) => {
    $(".meme-top-text").style.backgroundColor = e.target.value
})

$("#back-color-input").addEventListener("input", (e) => {
    $(".meme-bottom-text").style.backgroundColor = e.target.value
})

$("#background-text-color-options").addEventListener("input", (e) => {
    $("#text-back-color").innerText = e.target.value
})

$("#no-back-check").addEventListener("input" , (e) => {
    if (e.target.checked) {
        $(".meme-top-text").style.backgroundColor = "transparent"
    } else {
        $(".meme-top-text").style.backgroundColor = "#ffffff"
    }
})

$("#no-back-check").addEventListener("input" , (e) => {
    if (e.target.checked) {
        $(".meme-bottom-text").style.backgroundColor = "transparent"
    } else {
        $(".meme-bottom-text").style.backgroundColor = "#ffffff"
    }
})

//Change contour

$(".contour-none").addEventListener ("click" , () => {
    $(".meme-top-text").style.textShadow = "none"
})

$(".contour-light").addEventListener ("click" , () => {
    $(".meme-top-text").style.textShadow = "#ffffff 2px 2px"
})

$(".contour-dark").addEventListener ("click" , () => {
    $(".meme-top-text").style.textShadow = "#000000 2px 2px"
})

$(".contour-none").addEventListener ("click" , () => {
    $(".meme-bottom-text").style.textShadow = "none"
})

$(".contour-light").addEventListener ("click" , () => {
    $(".meme-bottom-text").style.textShadow = "#ffffff 2px 2px"
})

$(".contour-dark").addEventListener ("click" , () => {
    $(".meme-bottom-text").style.textShadow = "#000000 2px 2px"
})

//Change space between text

$("#space-between").addEventListener ("input" , (e) => {
    $(".meme-top-text").style.padding = `${e.target.value}px 50px`
})

$("#space-between").addEventListener ("input" , (e) => {
    $(".meme-bottom-text").style.padding = `${e.target.value}px 50px`
})

//Change line height

$("#line-height").addEventListener("input" , (e) => {
    $(".meme-top-text").style.lineHeight = e.target.value
})

$("#line-height").addEventListener("input" , (e) => {
    $(".meme-bottom-text").style.lineHeight = e.target.value
})

// ----- Download button ----- //

const downloadMeme = () => {
    domtoimage.toBlob($(".meme-container")).then((blob) => {
        saveAs(blob , "my-meme.png")
    })
}

$("#download-button").addEventListener("click", downloadMeme)

const initializeProject = () => {
    // ----- Eventos ----- //

    // ----- Aside menu ----- //

    // Open aside menus

    $(".open-image-menu").addEventListener("click" , () => {
        showPanel()
        showImageSection()
    })

    $(".open-text-menu").addEventListener("click" , () => {
        showPanel()
        showTextSection()
    })

    // Close aside menus

    $(".close-menu").addEventListener("click" , () => {
        hideAsideMenu()
    })

    // -----Meme image-----//

    $("#url").addEventListener("input" , changeMemeImage)

    // -----Meme background-----//
    
    //Color

    $(".input-color").addEventListener("input", (e) => {
        changeBackgroungColor(".meme-image" , e.target.value)
    })

    $(".input-color").addEventListener("input", (e) => {
        colorValues("#input-color-value" , e.target.value)
    })

    //Blend

    $("#filters").addEventListener("input", (e) => {
        changeBackgroungBlend(".meme-image" , e.target.value)
    })

    //-----Image Filters-----//

    $("#brightness").addEventListener("input" , filtersMeme)
    $("#opacity").addEventListener("input" , filtersMeme)
    $("#contrast").addEventListener("input" , filtersMeme)
    $("#blur").addEventListener("input" , filtersMeme)
    $("#grayscale").addEventListener("input" , filtersMeme)
    $("#sepia").addEventListener("input" , filtersMeme)
    $("#hue").addEventListener("input" , filtersMeme)
    $("#saturate").addEventListener("input" , filtersMeme)
    $("#invert").addEventListener("input" , filtersMeme)
}

window.addEventListener("load" , initializeProject)