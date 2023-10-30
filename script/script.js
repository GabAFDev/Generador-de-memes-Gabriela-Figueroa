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


const changeTheme = () =>{
    
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

}

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

// ----- Text panel ----- //

//Enter text

const enterMemeText = (selector , text) => $(selector).innerText = `${text}`

// Text checked

const hideMemeText = (selector , evento) => {
    if (evento) {
        $(selector).style.display = "none"
    } else {
        $(selector).style.display = "block"
    }
}

//Change font

const changeFontFamily = (selector , font) => $(selector).style.fontFamily = font

//Change font size

const changeFontSize = (selector , size) => $(selector).style.fontSize = `${size}px`

//Change text align 

const changeTextAlign = (selector , alignment) => $(selector).style.textAlign = alignment

//Change text color 

const changeColor = (selector , color) => $(selector).style.color = color

//Change text background

const changeTextTransparency = (selector , evento) => {
    if (evento) {
        $(selector).style.backgroundColor = "transparent"
    } else {
        $(selector).style.backgroundColor = "#ffffff"
    }
}

//Change contour

const changeContour = (selector , shadow) => $(selector).style.textShadow = shadow

//Change space between text

const changeTextPadding = (selector , padding) => $(selector).style.padding = `${padding}px 50px`

//Change line height

const changeLineHeight = (selector , height) => $(selector).style.lineHeight = height

// ----- Download button ----- //

const downloadMeme = () => {
    domtoimage.toBlob($(".meme-container")).then((blob) => {
        saveAs(blob , "my-meme.png")
    })
}

const initializeProject = () => {
    // ----- EVENTOS ----- //

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

    $(".button-reset").addEventListener("click" , resetFilters) 

    // ----- Meme Text ----- //

    //Top Text

    $("#top-text-input").addEventListener("input" , (e) => {
        enterMemeText(".meme-top-text" ,e.target.value)
    })

    $("#no-top-text").addEventListener("input" , (e) => {
        hideMemeText(".meme-top-text" , e.target.checked)
    })

    //Bottom text

    $("#bottom-text-input").addEventListener("input" , (e) => {
        enterMemeText(".meme-bottom-text" ,e.target.value)
    })

    $("#no-bottom-text").addEventListener("input" , (e) => {
        hideMemeText(".meme-bottom-text" , e.target.checked)
    })

    // ----- Meme fonts ----- //

    //Family

    $("#font-family-selection").addEventListener("input" , (e) => {
        changeFontFamily(".meme-top-text" , e.target.value)
        changeFontFamily(".meme-bottom-text" , e.target.value)
    })

    //Size

    $("#font-size-selector").addEventListener ("input" , (e) => {
        changeFontSize(".meme-top-text" , e.target.value)
        changeFontSize(".meme-bottom-text" , e.target.value)
    })
    
    //Align

    $("#align-left").addEventListener ("click" , () => {
        changeTextAlign(".meme-top-text" , "left")
        changeTextAlign(".meme-bottom-text" , "left")
    })
    
    $("#align-center").addEventListener ("click" , () => {
        changeTextAlign(".meme-top-text" , "center")
        changeTextAlign(".meme-bottom-text" , "center")
    })
    
    $("#align-right").addEventListener ("click" , () => {
        changeTextAlign(".meme-top-text" , "right")
        changeTextAlign(".meme-bottom-text" , "right")
    })

    //Text color - background

    $("#text-color-input").addEventListener("input", (e) => {
        changeColor(".meme-top-text" , e.target.value)
        changeColor(".meme-bottom-text" , e.target.value)
    })
    
    $("#text-color-input").addEventListener("input", (e) => {
        colorValues("#text-color" , e.target.value)
    })

    $("#back-color-input").addEventListener("input", (e) => {
        changeBackgroungColor(".meme-top-text" , e.target.value)
        changeBackgroungColor(".meme-bottom-text" , e.target.value)
    })

    $("#background-text-color-options").addEventListener("input", (e) => {
        colorValues("#text-back-color" , e.target.value)
    })

    $("#no-back-check").addEventListener("input" , (e) => {
        changeTextTransparency(".meme-top-text" , e.target.checked)
        changeTextTransparency(".meme-bottom-text" , e.target.checked)
    })

    //Contouring

    $(".contour-none").addEventListener ("click" , () => {
        changeContour(".meme-top-text" , "none")
        changeContour(".meme-bottom-text" , "none")
    })
    
    $(".contour-light").addEventListener ("click" , () => {
        changeContour(".meme-top-text" , "#ffffff 2px 2px")
        changeContour(".meme-bottom-text" , "#ffffff 2px 2px")
    })
    
    $(".contour-dark").addEventListener ("click" , () => {
        changeContour(".meme-top-text" , "#000000 2px 2px")
        changeContour(".meme-bottom-text" , "#000000 2px 2px")
    })

    //Padding

    $("#space-between").addEventListener ("input" , (e) => {
        changeTextPadding(".meme-top-text" , e.target.value)
        changeTextPadding(".meme-bottom-text" , e.target.value)
    })

    //Line height

    $("#line-height").addEventListener("input" , (e) => {
        changeLineHeight(".meme-top-text" , e.target.value)
        changeLineHeight(".meme-bottom-text" , e.target.value)
    })

    //Download meme

    $("#download-button").addEventListener("click", downloadMeme)

    //Change Theme

    $(".change-color-theme").addEventListener("click" , changeTheme)
}

window.addEventListener("load" , initializeProject)