let showNav = false
function toggleNavigationOnMobile() {
    const nav = document.getElementById('navigation--links')
    if (showNav) {
        nav.style.left = '100%'
    } else {
        nav.style.left = '0'
    }
    showNav = !showNav
}