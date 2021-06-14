// $(document).ready(function(){
//   //Take your div into one js variable
//   var div = $("#divToShowHide");
//   //Take the current position (vertical position from top) of your div in the variable
//   var pos = div.position();
//   //Now when scroll event trigger do following
//   $(window).scroll(function () {
//    var windowpos = $(window).scrollTop();
//    //Now if you scroll more than 100 pixels vertically change the class to AfterScroll
//    // I am taking 100px scroll, you can take whatever you need
//    if (windowpos >= (pos.top - 100)) {
//      div.addClass("afterScroll");
//    }
//    //If scroll is less than 100px, remove the class AfterScroll so that your content will be hidden again 
//    else {
//      s.removeClass("afterScroll");
//    }
//    //Note: If you want the content should be shown always once you scroll and do not want to hide it again when go to top agian, no need to write the else part
//  });
// });

// let listItems =[...document.querySelectorAll('li')];

// let options = {
//     rootMargin: '-10%',
//     threshold: 0.0
// }

// let observer = new IntersectionObserver(showItem, options);

// function showItem(entries){
//     entries.forEach(entry => {
//         if(entry.isIntersecting) {
//             entry.target.children[0].classList.Add('active');
//         }
//     });
// }

// listItems.forEach(item => {
//     observer.observe(item);
// })

// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       const square = entry.target.querySelector('.progress-line');
  
//       if (entry.isIntersecting) {
//         square.classList.add('progress-line-animation');
//         return; // if we added the class, exit the function
//       }
  
//       // We're not intersecting, so remove the class!
//       square.classList.remove('progress-line-animation');
//     });
//   });
  
//   observer.observe(document.querySelector('.bar-wrapper'));

// $(window).scroll(function () {
//     if ($(window).scrollTop() >= 50) {
//     $('.navbar').css('background','red');
//     } else {
//     $('.navbar').css('background','transparent');
//     }
//     });

// $(window).scroll(function() {
//     if ($(document).scrollTop() > 50) {
//       $('navbar').addClass('var(--clr-bg)');
//     } else {
//       $('navbar').addClass('transparent');
//     }
//   });

// let progress = document.getElementById('progressbar');

// let totalHeight = document.body.scrollHeight - window.innerHeight;
// window.onscroll = function() {
//     let progressHeight = (window.pageYOffset / totalHeight) * 100;

//     progress.style.height =progressHeight + "%";
// }

const header = document.querySelector(".navbar");
const sectionOne = document.querySelector(".intro")

const sectionOneOptions = {
    rootMargin: "-300px 0px 0px 0px"
};

const sectionOneObserver =new IntersectionObserver( function(entries, sectionOneObserver) {
entries.forEach(entry => {
    if(!entry.isIntersecting) {
        header.classList.add('nav-scrolled');
    } else {
        header.classList.remove('nav-scrolled');
    }
})
}, 
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

// PROGRESS BAR

const progress = document.querySelector(".experience");
const sectionTwo = document.querySelector(".switch")

const sectionTwoOptions = {
    rootMargin: "-30px 0px 0px 0px"
};

const sectionTwoObserver =new IntersectionObserver( function(entries, sectionTwoObserver) {
entries.forEach(entry => {
    if(!entry.isIntersecting) {
        progress.classList.add('progress-scrolled');
    } else {
        progress.classList.remove('progress-scrolled');
    }
})
}, 
sectionTwoOptions);

sectionTwoObserver.observe(sectionTwo);