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


window.addEventListener("scroll", onScroll);
function onScroll(event) {
	let scrollPos =
		document.documentElement.scrollTop || document.body.scrollTop;
	document
		.querySelectorAll("#navbarSupportedContent a")
		.forEach(function (currLink) {
			let refElementSelector = currLink.getAttribute("href");
			let refElement = document.querySelector(refElementSelector);
			if (
				refElement &&
				refElement.offsetTop - 200 <= scrollPos &&
				refElement.offsetTop + refElement.offsetHeight > scrollPos
			) {
				document
					.querySelectorAll("#navbarSupportedContent ul li a")
					.forEach((link) => {
						link.classList.remove("active");
					});
				currLink.classList.add("active");
			} else {
				currLink.classList.remove("active");
			}
		});
}

window.addEventListener("scroll", function () {
	let s = window.scrollY;
	let d = document.documentElement.scrollHeight || document.body.scrollHeight;
	let c = window.innerHeight;
	let scrollPercent = (s / (d - c)) * 100;
	let position = scrollPercent;

	document.querySelector("#progressbar").value = position;
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

