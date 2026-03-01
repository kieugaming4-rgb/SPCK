// =======================
// DEFAULT MODELS
// =======================

const defaultModels = [

{
id:1,
model:"Yolopark AMK Pro Drift",
intro:"Advance Model Kit Drift – nhân vật Autobot trong TF4 AOE. Cao ~18cm sau khi lắp ráp, đã sơn hoàn thiện, khung xương kim loại chắc chắn. Trang bị mắt LED từ tính 3 chế độ. Lưu ý: Không có chức năng biến hình.",
images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsSryooqGU2_4fmxEm1slM6wYO3opdxrihYg&s"],
accessories:["Kiếm Katana x2","Kiếm nhỏ sau lưng x2","Nhiều bàn tay thay thế","Đế trưng"],
reviews:[
{ name:"Collector A", star:5, text:"Thiết kế samurai cực đẹp, pose rất đã mắt." },
{ name:"Collector B", star:5, text:"Khớp chắc chắn, màu sơn sắc nét." },
{ name:"Collector C", star:5, text:"Một trong những bản Drift đẹp nhất mình từng sở hữu." }
]
},

{
id:2,
model:"Studio Series Optimus Prime AOE",
intro:"🔥Hasbro Studio Series Leader Class Optimus Prime – Age of Extinction (2014). Cao 21.5cm, 44 bước biến đổi giữa robot chiến đấu và xe tải Western Star 5700XE. Trang bị 4 phụ kiện gắn được ở cả 2 dạng, khớp nối linh hoạt, chi tiết chuẩn phim.",
images:["https://cdn.myonlinestore.eu/941eb4b5-6be1-11e9-a722-44a8421b9960/image/cache/full/18479a02bac34559d8055510fe3a9c4b3167ad5c.jpg?20260217095841"],
accessories:["Kiếm phán xét","Khiên","Kiếm Energon","Giá đỡ vũ khí sau lưng"],
reviews:[
{ name:"TF Fan 1", star:5, text:"Chi tiết cao, tạo hình rất sát phim." },
{ name:"TF Fan 2", star:5, text:"Cầm lên rất chắc tay, sơn đẹp." },
{ name:"TF Fan 3", star:5, text:"Leader class đáng mua nhất dòng AOE." }
]
},

{
id:3,
model:"Shockwave Studio Series",
intro:"🔥Studio Series Leader Class 56 Shockwave – Dark of the Moon (2011). 17 bước biến đổi giữa robot chiến đấu và xe tank. Thiết kế hầm hố, chuẩn phim, đầy đủ phụ kiện.",
images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6IlAwb6bSnmhwVYdcl-Pr4uvH2Z5i06il2A&s"],
accessories:["Brain","Wheelie","Cây Đao","Người Nest nhảy dù"],
reviews:[
{ name:"Huyah103", star:5, text:"Shockwave nhìn cực kỳ hầm hố." },
{ name:"lrizz", star:5, text:"Súng lớn rất ấn tượng." },
{ name:"miwn", star:5, text:"Pose dáng rất ngầu." }
]
},

{
id:4,
model:"Core Class Ironhide",
intro:"Studio Series Ironhide – Rise of the Beasts, hàng chính hãng Takara Tomy. Cao ~11cm, đầy đủ phụ kiện, có hướng dẫn chuyển đổi.",
images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw6-Fvq2W6C-91V-ycoR9M2RHR7DQq92XcQw&s"],
accessories:["Khẩu Blaster x2"],
reviews:[
{ name:"Autobot 1", star:5, text:"Nhỏ gọn nhưng rất chi tiết." },
{ name:"Autobot 2", star:5, text:"Giá tốt so với chất lượng." },
{ name:"Autobot 3", star:5, text:"Rất phù hợp để trưng bày." }
]
},

{
id:5,
model:"Studio Series 104 Nightbird",
intro:"Studio Series Deluxe Class 104 Nightbird – Rise of the Beasts. Chuyển đổi giữa robot và Nissan Skyline GTR R33 trong 21 bước.",
images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReNxACJHT67v_Uie2zE_3Klqt0giHyGnHxpQ&s"],
accessories:["Kiếm Katana"],
reviews:[
{ name:"ROTB Fan 1", star:5, text:"Nightbird tạo hình rất sắc sảo." },
{ name:"ROTB Fan 2", star:5, text:"Kiếm đi kèm rất đẹp." },
{ name:"ROTB Fan 3", star:5, text:"Rất đáng sưu tầm." }
]
},

{
id:6,
model:"Core Class Starscream Bumblebee Movie",
intro:"🔥Studio Series Core Class Starscream – Bumblebee (2018). Cao 9cm, 14 bước biến đổi giữa robot và máy bay Cybertron.",
images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKXZDIjJT8p65QD43CrfPa94QYHInE1xi70A&s"],
accessories:["Súng"],
reviews:[
{ name:"Cybertron Fan 1", star:5, text:"Thiết kế Cybertron cực kỳ đẹp." },
{ name:"Cybertron Fan 2", star:5, text:"Màu sắc rất ấn tượng." },
{ name:"Cybertron Fan 3", star:5, text:"Phiên bản rất đáng mua." }
]
}

];


// =======================
// LOCAL STORAGE SYNC (LUÔN UPDATE INTRO + IMAGE + ACCESSORIES)
// =======================

let stored = JSON.parse(localStorage.getItem("models")) || [];

let data = defaultModels.map(model => {

let found = stored.find(m => m.id === model.id);

if(found){
return {
id: model.id,
model: model.model,
intro: model.intro,
images: model.images,
accessories: model.accessories,
reviews: found.reviews || model.reviews
};
}

return model;
});

localStorage.setItem("models", JSON.stringify(data));


// =======================
// USER INFO
// =======================

const currentUser = localStorage.getItem("currentUser");
const userSpan = document.getElementById("current-user");
const logoutBtn = document.getElementById("logout-btn");

if(currentUser && userSpan){
userSpan.textContent = "Xin chào, " + currentUser;
}

if(logoutBtn){
logoutBtn.onclick = function(){
localStorage.removeItem("currentUser");
window.location.href="dangkidangnhap.html";
};
}


// =======================
// HOME PAGE
// =======================

const home = document.getElementById("content");

if(home){

let html="";

data.forEach(model=>{

let avg=0;
if(model.reviews.length>0){
avg=model.reviews.reduce((a,b)=>a+b.star,0)/model.reviews.length;
}

html+=`
<div class="model">
<h2>${model.model}</h2>
<img src="${model.images[0]}" onerror="this.src='https://via.placeholder.com/250';">
<p>${model.intro}</p>
<p>⭐ ${avg.toFixed(1)} (${model.reviews.length} đánh giá)</p>
<a href="detail.html?id=${model.id}">Xem chi tiết</a>
</div>
`;

});

home.innerHTML=html;
}
// =======================
// DETAIL PAGE
// =======================

const detail = document.getElementById("detailContainer");

if(detail){

const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));
let model = data.find(m => m.id === id);

if(!model){
detail.innerHTML = "<h2>Không tìm thấy mô hình</h2>";
}else{

renderDetail();

function renderDetail(){

let reviewsHTML = "";

model.reviews.forEach((r,index)=>{

let buttons="";
if(currentUser && r.name === currentUser){
buttons=`
<button onclick="editReview(${index})">Sửa</button>
<button onclick="deleteReview(${index})">Xóa</button>
`;
}

reviewsHTML+=`
<div class="review">
<strong>${r.name}</strong> - ${"⭐".repeat(r.star)}
<p>${r.text}</p>
${buttons}
</div>
`;
});

detail.innerHTML=`
<div class="detail-top">
<div class="detail-img">
<img src="${model.images[0]}" onerror="this.src='https://via.placeholder.com/300';">
</div>

<div class="detail-info">
<h2>${model.model}</h2>
<p>${model.intro}</p>
<p><strong>Phụ kiện:</strong> ${model.accessories.join(", ")}</p>
<p><strong>Số đánh giá:</strong> ${model.reviews.length}</p>
</div>
</div>

<h3>Đánh giá</h3>
${reviewsHTML}

<div class="review-form">
<h3>Thêm đánh giá</h3>

<select id="star">
<option value="1">1 ⭐</option>
<option value="2">2 ⭐</option>
<option value="3">3 ⭐</option>
<option value="4">4 ⭐</option>
<option value="5">5 ⭐</option>
</select>
<br>

<textarea id="text" placeholder="Nhập nội dung"></textarea>
<br>

<button onclick="saveReview()">Lưu đánh giá</button>
</div>
`;
}

// =======================
// SAVE REVIEW
// =======================

window.saveReview = function(){

if(!currentUser){
alert("Bạn phải đăng nhập!");
return;
}

let star = parseInt(document.getElementById("star").value);
let text = document.getElementById("text").value.trim();

if(text === ""){
alert("Nhập nội dung đánh giá!");
return;
}

model.reviews.push({
name: currentUser,
star: star,
text: text
});

localStorage.setItem("models", JSON.stringify(data));
renderDetail();
};

// =======================
// EDIT REVIEW
// =======================

window.editReview = function(index){

let r = model.reviews[index];

document.getElementById("star").value = r.star;
document.getElementById("text").value = r.text;

model.reviews.splice(index,1);

localStorage.setItem("models", JSON.stringify(data));
renderDetail();
};

// =======================
// DELETE REVIEW
// =======================

window.deleteReview = function(index){

model.reviews.splice(index,1);

localStorage.setItem("models", JSON.stringify(data));
renderDetail();
};

}
}