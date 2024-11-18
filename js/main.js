
const btn = document.querySelector ('.js-btn-menu');
const sidebarList = document.querySelector ('.js-sidebar');
const sidebarListBg = document.querySelector ('.js-sidebar__bg');

btn.addEventListener ('click', ()=> {
    btn.classList.toggle('js-btn-menu__open');
    sidebarList.classList.toggle('js-sidebar__open');
    sidebarListBg.classList.toggle('js-sidebar__openBg');
});

window.addEventListener('resize', ()=>{
    btn.classList.remove('js-btn-menu__open');
    sidebarList.classList.remove('js-sidebar__open');
    sidebarListBg.classList.remove('js-sidebar__openBg');
})

