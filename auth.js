console.log("🔥 Auth.js loaded");

window.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;

      if (!email || !password) {
        alert("Please enter both email and password.");
        return;
      }

      try {
        const auth = firebase.auth();
        await auth.signInWithEmailAndPassword(email, password);

        // 🔁 Redirect immediately without alert
        window.location.href = "dashboard.html";
      } catch (error) {
        alert("Login Failed: " + error.message);
      }
    });
  } else {
    console.warn("⚠️ Login form not found");
  }
});
