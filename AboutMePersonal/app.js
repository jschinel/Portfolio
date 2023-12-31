/* Create a function called `$` for selecting an HTML element
--------------------------------------------------------------------- */
function $(cssSelector) {
    return document.querySelector(cssSelector)
}

/* All HTML elements we need to manipulate (in the order they appear in index.html)
--------------------------------------------------------------------- */
const modalMouseArea = $(".MouseExit")
const modalContainer = $('.modals')
const aboutMeBox = $('#Aboutme')
const socialBox = $('#Social')
const projectsBox = $('#Projects')
const aboutMeModal = $('#modalAboutMe')
const socialModal= $('#modalSocial')
const projectsModal= $('#modalProjects')
aboutMeModal.style.display = "none";
socialModal.style.display = "none";
projectsModal.style.display = "none";


/* THIS SECTION IS FOR THE NAVIGATION
--------------------------------------------------------------------- */

aboutMeBox.addEventListener('mouseenter', () =>
{
    aboutMeModal.style.display = "flex"
    socialModal.style.display = "none"
    projectsModal.style.display = "none"
    modalContainer.style.marginLeft= "0"
}
)
socialBox.addEventListener('mouseenter', () => 
{
    aboutMeModal.style.display = "none"
    socialModal.style.display = "flex"
    projectsModal.style.display = "none"
    modalContainer.style.marginLeft= "33.3dvw"
    if (window.matchMedia("(max-width: 1300px)").matches) 
    {
        modalContainer.style.marginLeft= "300px"
    }
})
projectsBox.addEventListener('mouseenter', () => 
{
    aboutMeModal.style.display = "none"
    socialModal.style.display = "none"
    projectsModal.style.display = "flex"
    modalContainer.style.marginLeft= "66.6dvw"
    if (window.matchMedia("(max-width: 1300px)").matches) 
    {
        modalContainer.style.marginLeft= "600px"
    }
})
modalMouseArea.addEventListener('mouseleave', () => 
{
    aboutMeModal.style.display = "none"
    socialModal.style.display = "none"
    projectsModal.style.display = "none"
})