function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        
        localStorage.setItem("username", username);

        
        window.location.href = "profile.html";
    } else {
        alert("يرجى إدخال اسم المستخدم وكلمة المرور!");
    }
}

function goBack() {
    
    localStorage.removeItem("username");

    
    window.location.href = "index.html";
}

if (window.location.pathname.includes("profile.html")) {
    const username = localStorage.getItem("username");
    const welcomeMessage = document.getElementById("welcome-message");

    if (username) {
        welcomeMessage.textContent = `مرحبًا ${username}!`;
    } else {
        window.location.href = "index.html";
    }
}
