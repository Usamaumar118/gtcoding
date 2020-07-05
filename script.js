let navBtn = document.querySelector('.nav__icon')
let navbar = document.querySelector('.nav')

navBtn.addEventListener('click', openNav)

function openNav(e) {
    e.preventDefault()
    navbar.classList.toggle('nav__visible')
}

//OPEN SEARCH BAR

let searchBtn = document.querySelector('.search-icon')
let searchBar = document.querySelector('.nav__search')


searchBtn.addEventListener('click', showSearchBar)

function showSearchBar(e){
    e.preventDefault()
    searchBar.classList.toggle('nav__search--visible')

}

