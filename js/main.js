
const hum = document.querySelector(".ham");
const nav = document.querySelector(".menu");
const tab_btns =  document.querySelectorAll('.controls button');
const tabs = document.querySelectorAll('.tab');
const ctls = document.querySelector(".my-test .controls");
const slideBar = document.querySelector(".indicator");
const slider= document.querySelector(".indicator img");
const menu_btns = document.querySelectorAll(".menu-btn")
const controls = document.querySelector(".controls");

ctls.style.bottom = "24%";


hum.addEventListener("click", ()=>{
    hum.classList.toggle("open");
    nav.classList.toggle("open");
    controls.classList.toggle("open")
})


$(document).on('ready',()=>{
   

    $('.slider').slick({
        arrows: true,
        infinite: true,
    speed: 700,
        fade: true,
        autoplay:true,
        autoplaySpeed:3000,
        cssEase: 'linear',
        nextArrow:".slickNext",
        prevArrow:".slickPrev"
      });



    $('.center').slick({
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 5,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:3000,
        arrows:true,
        infinite: true,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 5,
            }
          },
          {
            breakpoint: 801,
            settings: {
              slidesToShow: 4,
              centerMode:false,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 3,
            }
          }

        ]
        });

    
    $('.test').slick({
      centerMode: true,
      centerPadding: '0',
      slidesToShow: 6,
      slidesToScroll:1,
      autoplay:true,
      autoplaySpeed:3000,
      // arrows:true,
      infinite: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 801,
          settings: {
            slidesToShow: 4,
            centerMode:false,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 3,
          }
        }

      ]
            });


    $('.acoustic-slide').slick({
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:3000,
        arrows:true,
        infinite: true,
        nextArrow:".showNext1",
        prevArrow:".showPrev1",
        responsive: [
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 801,
            settings: {
              slidesToShow: 1,
              centerMode:false,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            }
          }

        ]
        });
    



        $('.show').slick({
            centerMode: true,
            centerPadding: '20px',
            slidesToShow: 3,
            slidesToScroll:1,
            autoplay:true,
            autoplaySpeed:3000,
            arrows:true,
            infinite: true,
            nextArrow:".showNext",
            prevArrow:".showPrev",
            responsive: [
              {
                breakpoint: 1025,
                settings: {
                  slidesToShow: 2,
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow:1,
                  centerMode:true,
                }
              },
              {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                }
              }
    
            ]
            });
 
});

// Slick End


for (let i = 0; i < menu_btns.length; i++) {
  menu_btns[i].addEventListener('click',e=>{
    let bd = document.querySelector("body")
    let xPos = 0
    if (bd.offsetWidth >768) {
      xPos = menu_btns[i].offsetLeft + (menu_btns[i].offsetWidth/2)
    } else{
      xPos = e.x 
    }

    slider.style.left = xPos + "px"
  });
}



// Tabs Script

let defa =  tab_btns[0]
tab_btns[0].classList.add('active-btn')
tabs[0].classList.add('active-tab')

for (let i = 0; i < tab_btns.length; i++) {
  tab_btns[i].addEventListener('click',()=>{
    tab_btns[i].classList.toggle('active-btn')
    defa.classList.toggle('active-btn')
    let blank= tab_btns[i].id.slice(0,-4)
    show_tab(document.querySelector(`.${blank}-tab`))
    ctls.style.bottom = "14%";
    defa = tab_btns[i]

   
  })

  
}

const show_tab = tab =>{
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove('active-tab')
  }
  tab.classList.add('active-tab')
}


// Tabs End








