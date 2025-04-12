function handleMarquee() {
  // Get all marquees on page
  const marquees = document.querySelectorAll(".marquee");

  marquees.forEach((marquee) => {
    const container = marquee.querySelector(".marquee-items");
    let clone = container.cloneNode(true);
    marquee.appendChild(clone);
    if (marquee.dataset.direction == "right") {
      marquee.style.flexDirection = "row-reverse";
      container.classList.add("scroll-r2l");
      clone.classList.add("scroll-r2l");
    } else {
      container.classList.add("scroll-l2r");
      clone.classList.add("scroll-l2r");
    }

    if (marquee.dataset.pause == "true") {
      marquee.onmouseover = (e) => {
        container.classList.add("paused");
        clone.classList.add("paused");
      };
      marquee.onmouseout = (e) => {
        container.classList.remove("paused");
        clone.classList.remove("paused");
      };
    }
  });
}
handleMarquee();
