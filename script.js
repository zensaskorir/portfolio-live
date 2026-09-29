// Mobile menu toggle
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Scroll reveal for sections
  const sections = document.querySelectorAll("section");
  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top < triggerBottom) {
        sec.classList.add("visible");
      }
    });
  };
  window.addEventListener("scroll", revealOnScroll);
  window.addEventListener("load", revealOnScroll);

  // Dark Mode Toggle
  const toggleBtn = document.getElementById("theme-toggle");
  const body = document.body;
  const darkbtn =('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c68.8 0 131.3-27.2 177.3-71.4 7.3-7 9.4-17.9 5.3-27.1s-13.7-14.9-23.8-14.1c-4.9 .4-9.8 .6-14.8 .6-101.6 0-184-82.4-184-184 0-72.1 41.5-134.6 102.1-164.8 9.1-4.5 14.3-14.3 13.1-24.4S322.6 8.5 312.7 6.3C294.4 2.2 275.4 0 256 0z"/></svg>');
  const lightbtn =('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M448 256c0-106-86-192-192-192l0 384c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>');

  // Load saved theme
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    toggleBtn.innerHTML = lightbtn;
  }

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
    const isDark = body.classList.contains("dark");
    toggleBtn.innerHTML = isDark ? lightbtn : darkbtn;
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });


 const con = document.getElementById('contact-yes');
const element = document.querySelector('.contact-form');

con.addEventListener('click', () => {



        const htmlcontent = `
        <h2>Form</h2>

        <div class="cards">
            <div class="card">

                <p>Leave your Message and contacts here...</p>

                <form name="Incoming-Portfolio-Communications">
                    <input type="hidden"
                           name="Incoming-Portfolio-Communications"
                           value="Incoming-Portfolio-Communications" />

                    <div class="input-fields">
                        <input name="Name" type="text" placeholder="Name" required>
                        <input name="Email" type="email" placeholder="Email" autocomplete="email" required>
                        <input name="Phone-Number" type="text" placeholder="Phone Number" required>
                    </div>

                    <textarea name="Message"
                              id="message"
                              placeholder="Type your Message here..."
                              
                              maxlength="500"
                              required></textarea>

                    <div class="form-helper">
                        <label>If you are human, leave this blank:</label>
                        <input type="text" name="mobile_number">
                    </div>
                    <div class="form-submit-successful">Form Submitted Successfully</div>

                    <button type="submit" id="btn-send" class="btn">Send</button>
                </form>
                
            </div>
        </div>
    `;


    if (element.classList.contains('contact-form-d')) {
        con.innerText = 'No';
        element.innerHTML = htmlcontent;
        element.classList.toggle('contact-form-d');

        // script for data colection from the form to saving


	const scriptURL = 'https://script.google.com/macros/s/AKfycbzu6qxZXZNhEjGUgXIcQ-2nrMILwQmBmtsZ2sXkXk-j1PkPsfMVnjJv-wj9tLVW6Byr/exec'
	const form = document.forms['Incoming-Portfolio-Communications']

const successMessage = document.querySelector('.form-submit-successful');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form),
        mode: 'no-cors'
    })
    .then(() => {
        form.reset();

        const successMessage =
            document.querySelector('.form-submit-successful');

        successMessage.classList.add('show');

        setTimeout(() => {
            successMessage.classList.remove('show');
            con.innerText = 'Yes';
            element.classList.toggle('contact-form-d');
        }, 5000);
    })
    .catch(error => {
        console.error('Error!', error);
    });
});

    } else {
        con.innerText = 'Yes';
        element.classList.toggle('contact-form-d');
    }
});