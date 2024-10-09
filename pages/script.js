// Select all accordion headers
const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((header) => {
  header.addEventListener("click", function () {
    // Get the parent element (accordion item)
    const accordionItem = this.parentElement;

    // Toggle the active class to show or hide the content
    accordionItem.classList.toggle("active");

    // Close other open accordions (optional)
    document.querySelectorAll(".accordion-item").forEach((item) => {
      if (item !== accordionItem) {
        item.classList.remove("active");
      }
    });
  });
});
