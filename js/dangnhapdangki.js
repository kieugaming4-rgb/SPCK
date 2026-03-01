const form = document.getElementById("auth-form");
const toggleLink = document.getElementById("toggle-link");
const toggleText = document.getElementById("toggle-text");
const formTitle = document.getElementById("form-title");
const message = document.getElementById("message");

let isLogin = true;

// ===== CHUYỂN QUA LẠI LOGIN / REGISTER =====
toggleLink.onclick = (e) => {
    e.preventDefault();
    switchForm();
};

function switchForm(){
    isLogin = !isLogin;
    formTitle.textContent = isLogin ? "Đăng nhập" : "Đăng ký";
    toggleText.textContent = isLogin ? "Chưa có tài khoản?" : "Đã có tài khoản?";
    toggleLink.textContent = isLogin ? "Đăng ký" : "Đăng nhập";
    message.textContent = "";
}

// ===== SUBMIT =====
form.onsubmit = (e) => {
    e.preventDefault();

    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // ===== ĐĂNG NHẬP =====
    if (isLogin) {

        const found = users.find(u => 
            u.username === username && u.password === password
        );

        if (found) {
            localStorage.setItem("currentUser", username);

            message.style.color = "green";
            message.textContent = "Đăng nhập thành công!";

            usernameInput.value = "";
            passwordInput.value = "";

            setTimeout(() => {
                window.location.href = "index.html";
            }, 800);

        } else {
            message.style.color = "red";
            message.textContent = "Sai tài khoản hoặc mật khẩu!";
        }

    } 
    // ===== ĐĂNG KÝ =====
    else {

        if (users.some(u => u.username === username)) {
            message.style.color = "red";
            message.textContent = "Tài khoản đã tồn tại!";
            return;
        }

        users.push({ username, password });
        localStorage.setItem("users", JSON.stringify(users));

        message.style.color = "green";
        message.textContent = "Đăng ký thành công! Vui lòng đăng nhập.";

        usernameInput.value = "";
        passwordInput.value = "";

        // ⬇️ TỰ ĐỘNG CHUYỂN VỀ ĐĂNG NHẬP
        setTimeout(() => {
            switchForm();
        }, 800);
    }
};