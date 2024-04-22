const themeToggle = ()=>{
    // Select all elements that toggles the theme
    const themeToggleBtns = document.querySelectorAll('.theme-toggle');

    // State
    const theme = localStorage.getItem('theme');

    // on mount
    theme && document.body.classList.add(theme)
    
    const handleThemeToggle = ()=>{
        // Assign to the body the light mode
        document.body.classList.toggle('light-mode');
            if(document.body.classList.contains('light-mode')){
                localStorage.setItem('theme', 'light-mode');
            }else{
                // if light mode is currently on, remove light mode
                localStorage.removeItem('theme');
                document.body.removeAttribute('class')
            }
    }

    // Check if theme btn has been clicked and call method
    themeToggleBtns.forEach((toggle)=>{
        toggle.addEventListener('click',handleThemeToggle)
    })
}

export default themeToggle