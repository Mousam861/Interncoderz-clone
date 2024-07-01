var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

Shery.mouseFollower();

function loader() {
  var tl = gsap.timeline()
  tl.from(".loader h3", {
    x: 70,
    duration: 1,
    stagger: 0.2
  })
  tl.to(".loader h3", {
    x: "-70",
    duration: 1,
    stagger: 0.2,
    opacity: 0
  })
  tl.to(".loader", {
    opacity: 0
  })
  tl.to(".loader", {
    display: "none"
  })
}
loader();

function verify() {
  var verifyh4 = document.querySelector("#verify h4")
  const registeredIds = [
    { id: "CERT", name: "John Doe" },
    { id: "CERT-002", name: "Jane Doe",Domain:"Web Development" },
    { id: "CERT-003", name: "Bob Smith" },
    // add more registered IDs here
  ];

  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputId = document.querySelector("#input-id").value.trim();
    const foundId = registeredIds.find((id) => id.id === inputId);

    if (foundId) {
      verifyh4.innerHTML = (`Certificate ID ${inputId} is valid for ${foundId.name} in ${foundId.Domain} Internship`);
    } else {
      alert(`Certificate ID ${inputId} is not valid`);
    }
  });
}
verify();

