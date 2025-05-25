
document.getElementById("ordeer").addEventListener("click" , function(){
  const car= document.getElementById("cartContainer");

  
  
  const iteem = [
      {
          cart:car.nodeValue,

      }
  ]
  
  let order = JSON.parse(localStorage.getItem("order"));
if (!Array.isArray(order)) {
  order = [];
}



order.push(iteem);
localStorage.setItem("order", JSON.stringify(order))

// تحديث عدد العناصر في أي عنصر في الص
    const alar = document.getElementById("custom-alertt");
    
    

    alar.style.display = "flex"


    const yee = document.getElementById("yess");
    const lod = document.querySelector(".dots-container");

    const noou =document.getElementById("noo");
    yee.onclick = function() {
    const alal = document.getElementById("custom-alerttt");

    alar.style.display = "none"
    lod.style.display = "flex"; // ده أول حدث – يظهر اللودينج

    // بعد شوية صغيرة (مثلاً 100 مللي ثانية)، نفذ باقي الكود
    setTimeout(() => {
        alal.style.display = "flex";
        alar.style.display = "none";
    }, 2000); // الوقت بالملي ثانية
    }

    noou.onclick = function(){
      alar.style.display = "none"
    }

    document.getElementById("yees").addEventListener("click" , function() {
      location.href = "indexE.html"
    })



    

    
    




});


const nam = document.getElementById("textt");
const pho = document.getElementById("phone");
const clic = document.getElementById("ordeer");
const ca =document.getElementById("ca-5");


ca.addEventListener("click" , function(){
  window.scrollTo({ top: 500, behavior: 'smooth' });

})

// إخفاء الزر في البداية
clic.style.display = "none";

// عندما يكتب المستخدم شيئًا في الحقل
nam.addEventListener("input", function () {
  if (nam.value.trim() !== "") {
    clic.style.display = "block";
    ca.style.display = "none"
  } else {
    clic.style.display = "none";
    ca.style.display = "block"
  }
});


pho.addEventListener("input", function () {
  if (pho.value.trim() !== "") {
    clic.style.display = "block";
    ca.style.display = "none"
  } else {
    clic.style.display = "none";
    ca.style.display = "block"
  }
});

// تعيين السعر الأساسي
