let icons = document.getElementsByTagName('box-icon')
icons = Array.from(icons)

icons.map(icon=>{
        icon.addEventListener('click', () => {
            icon.classList.toggle('active')
        })
})

