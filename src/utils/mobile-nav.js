const mobileNav = () => {
    const headerBars = document.querySelector('.header-bars');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLink = document.querySelectorAll('.mobile-nav-link');

    let isMobileNavOpen = false;
    headerBars.addEventListener('click', () => {
        isMobileNavOpen = !isMobileNavOpen;
        if(isMobileNavOpen){
            mobileNav.style.display = 'flex';
            document.body.style.overflowY = 'hidden';
        }else{
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        }
    });

    mobileLink.forEach((link)=>{
        link.addEventListener('click', ()=>{
            isMobileNavOpen = false
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        })
    })
}

export default mobileNav