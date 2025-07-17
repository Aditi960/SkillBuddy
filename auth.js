console.log("🔥 Auth.js loaded");

const auth = firebase.auth();

window.addEventListener("DOMContentLoaded", () => {

  // ✅ LOGIN
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
        await auth.signInWithEmailAndPassword(email, password);
        alert("✅ Login successful");
        setTimeout(() => {
          window.location.href = "dashboard.html";
        }, 1000);
      } catch (error) {
        alert("Login Failed: " + error.message);
      }
    });
  }

  // ✅ SIGNUP
  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
    signupForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;
      const repassword = document.getElementById("repassword").value;

      if (!name || !email || !password || !repassword) {
        alert("Please fill in all fields.");
        return;
      }

      if (password !== repassword) {
        alert("Passwords do not match.");
        return;
      }

      try {
        // 👤 Create new user
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        const uid = userCredential.user.uid;

        // 🗂️ Store user details in Firestore
        await db.collection("users").doc(uid).set({
          name: name,
          email: email,
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });

        // ✅ Show message and redirect to dashboard
        alert("✅ Signup Successful!");
        setTimeout(() => {
          window.location.href = "dashboard.html";
        }, 1000);

      } catch (err) {
        // ⚠️ If user already exists
        if (err.code === "auth/email-already-in-use") {
          alert("⚠️ Email already registered. Please login.");
          window.location.href = "login.html"; 
        } else {
          alert("Signup Failed: " + err.message);
        }
      }
    });
  }

});
