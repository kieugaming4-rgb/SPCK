const form = document.getElementById("auth-form");
const toggleLink = document.getElementById("toggle-link");
const toggleText = document.getElementById("toggle-text");
const formTitle = document.getElementById("form-title");
const message = document.getElementById("message");

let isLogin = true; // trạng thái: true = đăng nhập, false = đăng ký

// Chuyển đổi giữa đăng nhập và đăng ký
toggleLink.addEventListener("click", (e) => {
  e.preventDefault();
  isLogin = !isLogin;
  if (isLogin) {
    formTitle.textContent = "Đăng nhập";
    toggleText.textContent = "Chưa có tài khoản?";
    toggleLink.textContent = "Đăng ký";
  } else {
    formTitle.textContent = "Đăng ký";
    toggleText.textContent = "Đã có tài khoản?";
    toggleLink.textContent = "Đăng nhập";
  }
  message.textContent = "";
});

// Xử lý form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (isLogin) {
    // Đăng nhập
    const savedUser = localStorage.getItem("user");
    const savedPass = localStorage.getItem("pass");

    if (username === savedUser && password === savedPass) {
      message.style.color = "green";
      message.textContent = "Đăng nhập thành công!";
      // Chuyển sang trang index.html
      setTimeout(() => {
        window.location.href = "index.html";
      }, 1000);
    } else {
      message.style.color = "red";
      message.textContent = "Sai tên đăng nhập hoặc mật khẩu.";
    }
  } else {
    // Đăng ký
    if (username && password) {
      localStorage.setItem("user", username);
      localStorage.setItem("pass", password);
      message.style.color = "green";
      message.textContent = "Đăng ký thành công! Vui lòng đăng nhập.";
      // Sau khi đăng ký xong thì chuyển sang form đăng nhập
      isLogin = true;
      formTitle.textContent = "Đăng nhập";
      toggleText.textContent = "Chưa có tài khoản?";
      toggleLink.textContent = "Đăng ký";
    } else {
      message.style.color = "red";
      message.textContent = "Vui lòng nhập đầy đủ thông tin.";
    }
  }
});
