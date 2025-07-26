//--------------nav a--------------------

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.foreach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.foreach(links => {
                links.classlist.remove('active');
                document.querySelector('header nav a[href*= ' + id + '] ').classList.add('active');
            });
        };
    });
};

function handletalk(){
   var height = document.body.scrollHeight;
   window.scroll(0,height);
    

}


  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.2
  });

  // Target elements without changing HTML
  const sectionss = document.querySelectorAll('section, .about-info, .project-container, .contact form');

  sectionss.forEach(el => observer.observe(el));


