var owl = $('#slider_1');
owl.owlCarousel({
    items:4, 
  // items change number for slider display on desktop
  
    loop:true,
    margin:0,
  navigation: true,
    autoplay: true,
    autoplayHoverPause:true,
    smartSpeed: 800,
    autoplayTimeout:3000,
    rtl:true,
    nav: true,
    navElement: "dots",
    navText:[`<i class="fa-solid fa-chevron-right"></i>` , `<i class="fa-solid fa-chevron-left"></i>`],
    paginationSpeed : 800,
    dots: false,  
    dotsEach:true,
    responsive:{
        0:{
            items: 1,
        },
        600:{
            items: 1,
        },
        1100:{
            items: 1,
        },
        1200:{
            items:1
        }
    }
});


// Preview

function Show_all_catt() {
    let all_catt = document.querySelector(".all_catt");
    let all_Sup_catt = document.querySelector(".all_Sup_catt");

    all_catt.classList.toggle("Show_all_catt")
    all_catt.classList.remove("hide_all_sup_catt")
    all_Sup_catt.classList.remove("Show_all_sup_catt")

}

function Show_all_sup_catt() {
    let all_Sup_catt = document.querySelector(".all_Sup_catt");
    let all_catt = document.querySelector(".all_catt");

    all_Sup_catt.classList.add("Show_all_sup_catt")
    all_catt.classList.add("hide_all_sup_catt")
}

function remove_all_sup_catt() {
    let allll = document.querySelector(".allll");
    let daasdaacxx = document.querySelector(".daasdaacxx");

    allll.classList.add("Show_allll")
    daasdaacxx.classList.add("hide_all_sup_catt")
}