function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: "en" },
    "google_translate_element"
  );
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


jQuery(".tab-row a").each(function () {
  jQuery(this).on("click", function (event) {
    event.preventDefault();
    var currentId = jQuery(this).attr("href");
    setTimeout(() => {
      jQuery("html, body").animate(
        {
          scrollTop: jQuery(currentId).offset().top - 50,
        },
        0
      );
    }, 0);
  });
});


$(window).scroll(function () {
  var s = $(window).scrollTop(),
    d = $(document).height(),
    c = $(window).height();
  scrollPercent = (s / (d - c)) * 100;
  var position = scrollPercent;

  $("#progressbar").attr("value", position);
});

// ----- Tooltip ----- 
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// Anchor tag opens corres
const accList = document.querySelectorAll(".accordion");
const accAnchorList = document.querySelectorAll(".acc-anchor");

accAnchorList.forEach(anchor => anchor.addEventListener("click", (e) => {

  const targetId = e.currentTarget.href.split('#')[1]; // Extract id from href
  const targetAccordion = document.getElementById(targetId); // Find accordion by id

  if (targetAccordion) {
    setTimeout(()=> {
      targetAccordion.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */
    var panel = targetAccordion.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
    }, 500);
    
  }
}));

