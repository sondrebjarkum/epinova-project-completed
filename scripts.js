

document.addEventListener('DOMContentLoaded', function(event) {

    const navigation = document.getElementById('navigation-links');
    
    //handles hamburgermenu animation by toggling "is-active"-class
    document.querySelector(".hamburger").onclick = function() {
        this.classList.toggle('is-active');
        navigation.classList.toggle('menu-active');
    }

    //lifted from https://stackoverflow.com/questions/42799048/fade-a-pseudo-element-on-scroll-js-or-jquery
    // Cache selectors
    let topMenu = $("#nav"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
    let item = $($(this).attr("href"));
    if (item.length) { return item; }
    });

    // Bind to scroll
    $(window).scroll(function(){
    console.log("scroll");
    // Get container scroll position
    let fromTop = $(this).scrollTop()+topMenuHeight;

    // Get id of current scroll item
    let cur = scrollItems.map(function(){
        if ($(this).offset().top < fromTop)
        return this;
    });
    // Get the id of the current element
    cur = cur[cur.length-1];
    let id = cur && cur.length ? cur[0].id : "";
    // Set/remove active class
    menuItems
        .parent().removeClass("is-active-link")
        .end().filter("[href='#"+id+"']").parent().addClass("is-active-link");
    });

})



//shrink header
window.onscroll = function() {
    //when scroll detected, run function
    scrollFunction() 
}; 
      
function scrollFunction() {
    //checks if viewport width is larger than 770px, if so 
    //shrink header, else it's mobile view and no shrinkage needed
    if(window.innerWidth >= 770){
        if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90){
            document.getElementById("header").classList.add('shrink-header');
            document.getElementById("logo").classList.add('shrink-logo');
        }  
        else { 
            document.getElementById("header").classList.remove('shrink-header');
            document.getElementById("logo").classList.remove('shrink-logo');
        }
    }
} 