const testimonialForm = document.querySelector('#testimonial-create');
const testimonials = document.getElementById('testimonial-container');

testimonialForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const testimonial = e.target.elements['testimonial'].value;
  const yourName = e.target.elements["your-name"].value;

  if (!testimonial) return

  const creatingTestimonial = document.createElement("div")
  creatingTestimonial.classList.add("testimonial");

  const testimonialText = document.createElement("p")
  testimonialText.innerText = `"${testimonial}"`

  const yourNameText = document.createElement("p")
  yourNameText.innerText = yourName ? yourName : "Anonym"
  yourNameText.classList.add("customer-name")

  creatingTestimonial.appendChild(testimonialText)
  creatingTestimonial.appendChild(yourNameText)

  testimonials.appendChild(creatingTestimonial)

  e.target.elements['testimonial'].value = "";
  e.target.elements["your-name"].value = "";
})