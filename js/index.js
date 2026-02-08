// Sau khi render()
render();

// Hiển thị tên đăng nhập
const usernameDisplay = document.getElementById("username-display");
const savedUser = localStorage.getItem("user");
if (savedUser) {
    usernameDisplay.textContent = "👤 " + savedUser;
} else {
    usernameDisplay.textContent = "Khách";
}

// Xử lý nút đăng xuất
document.getElementById("logout-btn").addEventListener("click", () => {
    localStorage.removeItem("user");
    localStorage.removeItem("pass");
    alert("Bạn đã đăng xuất!");
    window.location.href = "dangkidangnhap.html"; // quay về trang đăng nhập
});
