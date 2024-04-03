// ***********************************
//Types of Events and Event Handlers
// ***********************************

const h1 = document.querySelector('h1');

const alertH1 = function(e){
  alert('Thank you for visiting our website')

  h1.removeEventListener('mouseenter', alertH1)
}

h1.addEventListener('mouseenter', alertH1);


// ****************************
//Passing Arguments to Event Handlers
// ****************************

const nav = document.querySelector('.main-nav');

nav.addEventListener('mouseover', function(e){
  if(e.target.classList.contains('main-nav-link')){
    const link = e.target;
    const siblings = link.closest('.main-nav').querySelectorAll('.main-nav-link');
    const logo = link.closest('.header').querySelector('.logo-img');

    siblings.forEach(function(el){
      if(el !== link){
        el.style.opacity = 0.5;
      }
      logo.style.opacity = 0.5;
    })
    
  }
})

nav.addEventListener('mouseout', function(e){
  if(e.target.classList.contains('main-nav-link')){
    const link = e.target;
    const siblings = link.closest('.main-nav').querySelectorAll('.main-nav-link');
    const logo = link.closest('.header').querySelector('.logo-img');

    siblings.forEach(function(el){
      if(el !== link){
        el.style.opacity = 1;
      }
      logo.style.opacity = 1;
    })
    
  }
})

 //Implementing color Navigation Only at IndexHtml
 const scrollPosition = window.scrollY;
 const IndexHtml = document.querySelector('.main-page')
 
 
 document.querySelector('.header').addEventListener('click', function(e){
    if (window.scrollY <= sectionFeature.offsetTop) {
     e.currentTarget.classList.toggle('headerStyle');
     document.querySelectorAll('.main-nav-link').forEach(function(el){
       if(header.classList.contains('headerStyle')){
         el.style.color = "#fff";
       }else{
         el.style.color = "#333";
       }
     })
   }
 });




// ****************************
//Implementing Smooth Scrolling
// *****************************

const btnScrollTo = document.querySelector('.scroll-to');
const sectionChairs = document.querySelector('#section-chairs');

btnScrollTo.addEventListener('click', function(e){
  const s1coords = sectionChairs.getBoundingClientRect();
  sectionChairs.scrollIntoView({ behavior: 'smooth' });
})


//// ************************************************
//Implementing a Sticky Navigation: The Scroll Event
//// ************************************************

const sectionFeature = document.querySelector('.section-feature')
const initialCoords = sectionFeature.getBoundingClientRect();

window.addEventListener('scroll', function(e){
  document.querySelectorAll('.main-nav-link').forEach(function (el){
    if (window.scrollY > sectionFeature.offsetTop) {
      header.classList.remove('headerStyle')
      header.classList.add('sticky');
      el.style.color = "#fff";
    } else {
      header.classList.remove('sticky');
      el.style.color = "#333";
    }
  })
        
})


// ***********************************************
//Event Delegation: Implementing Page Navigation
// ***********************************************
const header = document.querySelector('.header')
const links = document.querySelectorAll('.main-nav-link')

window.addEventListener('scroll', function(e){
  if(window.scrollY <= sectionFeature.offsetTop){
    document.querySelector('.header').addEventListener('click', function(e) {
        header.classList.toggle('headerStyle')
          document.querySelectorAll('.main-nav-link').forEach(function(el){
            if(header.classList.contains('headerStyle')){
              el.style.color = "#fff";
            }else{
              el.style.color = "#333";
            }
        }) 
    })   
  }else if(window.scrollY > sectionFeature.offsetTop){
    document.querySelector('.header').addEventListener('click', function(e) {
      header.classList.add('sticky')
        document.querySelectorAll('.main-nav-link').forEach(function(el){
          if(header.classList.contains('sticky')){
            el.style.color = "#fff";
          }
      }) 
  }) 

  }
})


//Implementing a Sticky Navigation: The Scroll Event

// const sectionAbout = document.querySelector('.section-about');
// const initiaLCoords = sectionAbout.getBoundingClientRect();

// window.addEventListener('scroll', function(e){
//   document.querySelectorAll('.main-nav-link').forEach(function (el){
//     if (window.scrollY > sectionFeature.offsetTop) {
//       header.classList.remove('header--active')
//       header.classList.add('sticky');
//       header.style.transparent = 0.5;
//       el.style.color = "#fff";
//     } else {
//       header.classList.remove('sticky');
//       el.style.color = "#333";
//     }
//   })
        
// })









// ***********************************************
//Building a Tabbed Component for Testimonial
// ***********************************************

const testimonialBtnContainer = document.querySelector('.operation-testimonial-btn-container');
const testimonialBtn = document.querySelectorAll('.testimonial-btn');
const testimonialContent = document.querySelectorAll('.operation-testimonial-content');

testimonialBtnContainer.addEventListener('click', function(e){
  const clicked = e.target.closest('.testimonial-btn')
  if(!clicked) return;

  testimonialBtn.forEach(function (b){
    b.classList.remove('testimonial-btn--active')
  });
  testimonialContent.forEach(function (c){
    c.classList.remove('operation-testimonial-content--active')
  });
  clicked.classList.add('testimonial-btn--active')


  document.querySelector(`.operation-testimonial-content--${clicked.dataset.tab}`).classList.add('operation-testimonial-content--active')
})



// ***********************************************
//Event Delegation: Implementing Page Navigation
// ***********************************************

document.querySelector('.main-nav-list').
addEventListener('click', function(e){
  e.preventDefault();
  if(e.target.classList.contains('main-nav-link')){
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: 'smooth'})
  }

})
// *************************
//Incrementing Counter
// *************************
const counters = document.querySelectorAll('.counter');

counters.forEach( function (counter) {
  counter.innerHTML = '0';
  
  const updateCounter = function() {
    const target = +counter.getAttribute('data-target');
    console.log(target)
    const c = +counter.innerHTML

    const increment = target / 500;

    if(c < target){
      counter.innerHTML = `${Math.ceil(c + increment)}`
      setTimeout(updateCounter, 1)
    }else{
      counter.innerHTML = target;
    }
  }

  updateCounter()
})
// *************************
//Process buttons
// *************************

const tabsContainer = document.querySelector('.operations-tabs-container');
const tabs = document.querySelectorAll('.operations-tab');
const contents = document.querySelectorAll('.operation-content')

tabsContainer.addEventListener('click', function(e){
  const clicked = e.target.closest('.operations-tab');
  console.log(clicked.dataset.tab)


  if(!clicked)return;

  tabs.forEach( function(t){
    t.classList.remove('tab-active')
  })

  clicked.classList.add('tab-active')

  contents.forEach(function(c){
    c.classList.remove('active')
  })

  document.querySelector(`.operation-content--${clicked.dataset.tab}`).
  classList.add('active')
 
  
})
// ******************
// Expanding images
//******************* */

const gallery = document.querySelector('.gallery');
const panels = document.querySelectorAll('.panel');

gallery.addEventListener('click', function(e){
  const photo = e.target.closest('.panel')
  console.log(photo)
  panels.forEach(function(i){
    i.classList.remove('active')
  })
  photo.classList.add('active')
})
const galleryContainer = document.querySelector('.gallery-container');
const slides = document.querySelectorAll('.slide');

galleryContainer.addEventListener('click', function(e){
  const photo = e.target.closest('.slide')
  console.log(photo)
  slides.forEach(function(i){
    i.classList.remove('active')
  })
  photo.classList.add('active')
})
// button

const btnGallery = document.querySelector('.btn-gallery');
const galleries = document.querySelectorAll('.gallery')

btnGallery.addEventListener('click', function(e){
  galleries.forEach(function(g){
    g.classList.toggle('gallery-active')
  
  })
    
});

    

// ***********************************************
//Event Delegation: Implementing Page Navigation FOOTER
// ***********************************************

document.querySelector('.footes-list').
addEventListener('click', function(e){
  e.preventDefault();

  if(e.target.classList.contains('list-link')){
    const id = e.target.getAttribute('href')
    console.log(id)
    document.querySelector(id).scrollIntoView({ behavior: "smooth"})
  }
})


document.querySelector('.footer-list').
addEventListener('click', function(e){
  e.preventDefault();

  if(e.target.classList.contains('list-link')){
    const id = e.target.getAttribute('href')
    console.log(id)
    document.querySelector(id).scrollIntoView({ behavior: "smooth"})
  }
})

















