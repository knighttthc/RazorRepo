let SelectorDev = document.getElementById("Developer")
let Dev = document.getElementById("DeveloperValue")
let SelectorEd = document.getElementById("Editor")
let Ed = document.getElementById("EditorValue")

CambiarValores()
function CambiarValores() {
    Dev.value = SelectorDev.options[SelectorDev.selectedIndex].value
    Ed.value = SelectorEd.options[SelectorEd.selectedIndex].value
}