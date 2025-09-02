const video1 = document.getElementById("projectVideo1");
const video2 = document.getElementById("projectVideo2");
const video3 = document.getElementById("projectVideo3");

// Sidebar elements //
const sideBar = document.querySelector(".sidebar");
const menu = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");

const hoverSign = document.querySelector(".hover-sign");

const videoList = [video1, video2, video3];

videoList.forEach(function (video) {
  video.addEventListener("mouseover", function () {
    video.play();
    hoverSign.classList.add("active");
  });
  video.addEventListener("mouseout", function () {
    video.pause();
    hoverSign.classList.remove("active");
  });
});

// Sidebar elements //
menu.addEventListener("click", function () {
  sideBar.classList.remove("close-sidebar");
  sideBar.classList.add("open-sidebar");
});

closeIcon.addEventListener("click", function () {
  sideBar.classList.remove("open-sidebar");
  sideBar.classList.add("close-sidebar");
});

// Contact form handling
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.querySelector(".contact-box");

  if (contactForm) {
    contactForm.addEventListener("submit", async function (e) {
      e.preventDefault(); // stop default redirect

      // Basic validation
      const inputs = this.querySelectorAll(
        "input[required], textarea[required]"
      );
      let isValid = true;

      inputs.forEach((input) => {
        if (!input.value.trim()) {
          isValid = false;
          input.style.borderColor = "#ff5f56";
        } else {
          input.style.borderColor = "rgba(114, 161, 222, 0.3)";
        }
      });

      if (!isValid) {
        alert("Please fill in all required fields.");
        return;
      }

      // Show loading state
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML =
        '<i class="bx bx-loader-alt bx-spin"></i> Sending...';
      submitBtn.disabled = true;

      try {
        const response = await fetch(this.action, {
          method: this.method,
          body: new FormData(this),
          headers: { Accept: "application/json" },
        });

        if (response.ok) {
          window.location.href = "thank-you.html"; // redirect instead of alert
        } else {
          alert("❌ Oops! Something went wrong.");
        }
      } catch (error) {
        alert("⚠️ Network error. Please try again later.");
      } finally {
        // Reset button state
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }
    });
  }
});

// chatbot

// fetch("chat.html")
//   .then((res) => res.text())
//   .then((data) => {
//     document.getElementById("chat-container").innerHTML = data;
//   });

// footer

const backToTop = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
