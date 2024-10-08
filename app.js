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
    { id: "AH/WD/24/224", name: "Afrith Hussain Z",Domain:"Web Development" },
    { id: "CERT-003", name: "Bob Smith" },
    { id: "AK/WD/24/116", name: "Ashish Kumar",Domain:"Web Development" },
    { id: "RA/FD/24/215", name: "Rankaja prince ambarambhai",Domain:"Full Stack Development" },
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

