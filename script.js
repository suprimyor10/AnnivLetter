function checkPassword() {
  const password = document.getElementById("password").value;
  const correctPassword = "ily";
  const bgMusic = document.getElementById("bgMusic");

  if (password === correctPassword) {
    // Play music automatically
    if (bgMusic) {
      bgMusic.play().catch(e => console.log("Music autoplay blocked:", e));
    }

    // Fade out and go to letter page
    const body = document.body;
    body.classList.add("fade-out");
    setTimeout(() => {
      window.location.href = "letter.html";
    }, 1000); // wait for fade animation
  } else {
    document.getElementById("error").innerText = "Wrong password 🥺";
  }
}

window.addEventListener("load", function() {

  // Floating hearts
  const heartsContainer = document.querySelector(".hearts");
  if (heartsContainer) {
    for (let i = 0; i < 25; i++) {
      const heart = document.createElement("span");
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = (5 + Math.random() * 5) + "s";
      heart.style.opacity = Math.random();
      heartsContainer.appendChild(heart);
    }
  }

  // Heart fireworks (mini bursts)
  function heartFireworks() {
    if (!heartsContainer) return;

    setInterval(() => {
      const heartCount = 5; // hearts per burst
      for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement("span");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.width = "15px";
        heart.style.height = "15px";
        heart.style.opacity = 1;
        heart.style.background = "red";
        heart.style.transform = "rotate(45deg)";
        heart.style.position = "absolute";
        heartsContainer.appendChild(heart);

        // animate heart like fireworks
        const xMove = (Math.random() - 0.5) * 200; // left/right
        const yMove = - (50 + Math.random() * 150); // upward

        heart.animate([
          { transform: `translate(0,0) rotate(45deg)`, opacity: 1 },
          { transform: `translate(${xMove}px, ${yMove}px) rotate(45deg)`, opacity: 0 }
        ], { duration: 1500, easing: "ease-out" });

        setTimeout(() => heart.remove(), 1500);
      }
    }, 1000); // every 1 second
  }

  heartFireworks(); // start the fireworks

  // Sparkle effect
  const letter = document.querySelector(".letter");
  if (letter) {
    setInterval(() => {
      const sparkle = document.createElement("div");
      sparkle.classList.add("sparkle");
      sparkle.style.left = Math.random() * letter.offsetWidth + "px";
      sparkle.style.top = Math.random() * letter.offsetHeight + "px";
      letter.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 1000);
    }, 300); // every 0.3s a new sparkle
  }

  // Typewriter
  const text = "Happy 2nd Anniversary my love ❤️ Thank you for 2 beautiful years. You are my best decision, my safe place, and my forever.";
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      const el = document.getElementById("typewriter");
      if (el) {
        el.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 90);
      }
    }
  }

  typeWriter();

});