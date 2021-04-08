document.addEventListener("DOMContentLoaded",function () {
  document.querySelector("#navbarToggle").addEventListener("blur",function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      var myCollapse = document.querySelector("#collapsable-nav");
      var bsCollapse = new bootstrap.Collapse(myCollapse, 'hide');
    }
  });

  // In Firefox and Safari, the click event doesn't retain the focus
  // on the clicked button. Therefore, the blur event will not fire on
  // user clicking somewhere else in the page and the blur event handler
  // which is set up above will not be called.
  // Solution: force focus on the element that the click event fired on
  document.querySelector("#collapsable-nav").addEventListener("click",function (event) {
    document.querySelector(event.target.nodeName).focus();
  });
});

(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
 const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#header-nav .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    let flag_1 = false;
    let flag_2 = false;
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      let parent = navbarlink.parentElement.parentElement.parentElement;
      if (parent.classList.contains('dropdown')) {
        flag_1 = true;
      }
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        if (flag_1 == true) {  
          parent.classList.add('active')
      }
      navbarlink.classList.add('active')
      } else {
        if (flag_1) {
          let c = parent.children[2].children;
          for (var i = 0; i < c.length; i++) {
            if(c[i].children[0].classList.contains('active')){
              flag_2 = true;
            }
          }
          if (!flag_2) {
            parent.classList.remove('active');
          }
          flag_2 = false;
          flag_1 = false;
        }
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)
  
  /**
   * Scrolls to an element with header offset
   */
  /*const scrollto = (el) => {
    let header = select('#header');
    let offset = header.offsetHeight;
    console.log(offset);

    if (!header.classList.contains('header-scrolled')) {
      offset -= 20
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }*/

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY < 600) {
        backtotop.classList.add('hide')
      } else {
        backtotop.classList.remove('hide')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  /*on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)*/

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  /*on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)*/

  /**
   * Scroll with ofset on page load with hash links in the url
   
  window.addEventListener('load', () => {
    console.log(window.location.hash);
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
  });*/

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 3,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    }
  });

  /**
   * Porfolio i
  /**
   * Initiate portfolio lightbox 
   
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})();






// On page load (before images or CSS)
(function (global){

var dc = {};
var evnt = {
  "Evnt1" : "snippets/events/event1-snippet.html",
  "Evnt2" : "snippets/events/event2-snippet.html"
};
var blg = {
    "Blog1" : "snippets/blogs/blog1-snippet.html"
};
var BlogsHtml = "snippets/blogs-snippet.html";
var EventsHtml = "snippets/events-snippet.html"
  
document.addEventListener("DOMContentLoaded", function (event) {
  loadcontent("#blogs",BlogsHtml);
  loadcontent("#events",EventsHtml);
});

loadcontent = function (selector,string) {
  $ajaxUtils.sendGetRequest(
  string,
  function (responseText) {
    document.querySelector(selector)
      .innerHTML = responseText;
  },
  false);
}

dc.loadallevents = function(element){
  loadcontent("#events",EventsHtml);
}

dc.loadallblogs = function(element){
  loadcontent("#blogs",BlogsHtml);
}

dc.loadevent = function(element){
  var id = element.parentElement.parentElement.id;
  loadcontent("#events",evnt[id]);
  var x = ".event-details";

  function wait(selector,callback){
    var timer = setInterval(function(){
      var x = document.querySelector(selector);
      if (x.length < 1) {
          return;
      }
      clearInterval(timer);
      callback();
    },100);
  }
  wait(x,function(){
    new Swiper('.event-details-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });
  });
};

dc.loadblog = function(element) {
  var id = element.parentElement.parentElement.id;
  loadcontent("#blogs",blg[id]);
};


global.$dc = dc;
})(window);


