document.addEventListener("DOMContentLoaded", function(){

const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

const data = JSON.parse(localStorage.getItem("models")) || [];
const item = data.find(m => m.id === id);

const detailBox = document.getElementById("detail");


if(!item){
detailBox.innerHTML = "<h2 style='text-align:center'>Không tìm thấy mô hình</h2>";
return;
}

let imageHTML = "";
if(item.images){
item.images.forEach(img=>{
imageHTML += `
<img src="${img}"
style="
width:250px;
height:250px;
object-fit:cover;
border-radius:15px;
margin:10px;
"
onerror="this.src='https://via.placeholder.com/250?text=Image+Error';">
`;
});
}

let accessoryHTML = "";
if(item.accessories){
accessoryHTML = item.accessories.map(a=>`<li>${a}</li>`).join("");
}

detailBox.innerHTML = `
<div style="
max-width:900px;
margin:50px auto;
background:white;
padding:40px;
border-radius:20px;
box-shadow:0 10px 30px rgba(0,0,0,0.15);
text-align:center;
">

<h2>${item.model}</h2>

<div style="
display:flex;
justify-content:center;
flex-wrap:wrap;
gap:20px;
margin-bottom:20px;
">
${imageHTML}
</div>

<p>${item.intro}</p>

<h3>Phụ kiện:</h3>
<ul style="list-style:none;padding:0;">
${accessoryHTML}
</ul>

<br>
<a href="index.html"
style="
display:inline-block;
padding:10px 20px;
border-radius:10px;
background:linear-gradient(45deg,#6a00ff,#4c6ef5);
color:white;
text-decoration:none;
">
⬅ Quay lại
</a>

</div>
`;

});