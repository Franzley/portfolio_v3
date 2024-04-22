const mobileNav = () => {
    // select element through its class name
    const headerBars = document.querySelector('.header-bars');
    const mobileNav = document.querySelector('.mobile-nav');
    // select all elements under class name
    const mobileLink = document.querySelectorAll('.mobile-nav-link');

    // Initialize mobile navigation menu as not active
    let isMobileNavOpen = false;

    headerBars.addEventListener('click', () => {
        // Set the mobile navigation menu status to the opposite of its current state
        isMobileNavOpen = !isMobileNavOpen;

        // if state is active
        if(isMobileNavOpen){
            mobileNav.style.display = 'flex';
            document.body.style.overflowY = 'hidden';
        }else{
            // if state is not active
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        }
    });

    // Close mobile navigation menu once menu item is clicked
    mobileLink.forEach((link)=>{
        link.addEventListener('click', ()=>{
            isMobileNavOpen = false
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        })
    })
}

export default mobileNav