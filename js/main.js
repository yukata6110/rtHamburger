
const btn = document.querySelector ('.p-sidebar__btnMenu');
const sidebarList = document.querySelector ('.js-sidebar');
const sidebarListBg = document.querySelector ('.js-sidebar__bg');



btn.addEventListener ('click', ()=> {
    btn.classList.toggle('js-btnMenu__open');
    sidebarList.classList.toggle('js-sidebar__open');
    sidebarListBg.classList.toggle('js-sidebar__openBg');
});

/*

if (window.matchMedia('(min-width:1280px)').matches){
    btn.removeEventListener ('click', ()=> {
        btn.classList.toggle('js-btnMenu__open');
        sidebarList.classList.toggle('js-sidebar__open');
        sidebarListBg.classList.toggle('js-sidebar__openBg');
    });
} else {
    btn.addEventListener ('click', ()=> {
        btn.classList.toggle('js-btnMenu__open');
        sidebarList.classList.toggle('js-sidebar__open');
        sidebarListBg.classList.toggle('js-sidebar__openBg');
    });

}
*/