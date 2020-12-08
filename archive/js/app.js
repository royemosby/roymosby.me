const proj = $('.reflection').attr('id')
$('.projToggle').attr('data-open', proj)

// append #markdown-toc to #projectNav, add Foundation details
$('#markdown-toc').detach().appendTo('#projectNav')
$('#markdown-toc').addClass('vertical menu accordion-menu')
$('#markdown-toc').attr('data-accordion-menu', '')

// need to id sub-menu items "menu vertical nested"
// https://foundation.zurb.com/sites/docs/accordion-menu.html

$('#markdown-toc > li').addClass('projectHeading')
$('.projectHeading > ul').addClass('menu vertical nested')

// anchor fix for #projectNav links + fixed header
const shiftWindow = function () {
  scrollBy(0, -60)
}
if (location.hash) shiftWindow()
window.addEventListener('hashchange', shiftWindow)

$(document).foundation()
