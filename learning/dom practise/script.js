//Task 1
var btn = document.querySelector("#task1-btn");
var para = document.querySelector("#task1-p");

btn.addEventListener("click", function () {
    para.textContent = "Text is now Changed - By single click";
})
btn.addEventListener("dblclick", function () {
    para.textContent = "Text is now Changed - By double click";
})

//Task 2
var swapimg = document.querySelector("#task2-btn");
var img1 = document.querySelector("#task2-img1");
var img2 = document.querySelector("#task2-img2");
swapimg.addEventListener("click", () => {
    var src1 = img1.src;
    var src2 = img2.src;
    img1.src = src2;
    img2.src = src1;
});

//Task 3
var form = document.querySelector('#task3-form');
var inps = document.querySelectorAll(".task3-inp");
var task3h = document.querySelector("#task3h");
form.addEventListener("submit", (ev) => {
    task3h.textContent = '';
    //Used to remove default form actions
    ev.preventDefault();
    console.log(inps);
    for (var i = 0; i < inps.length; i++) {
        if (inps[i].value.trim() === '') {
            task3h.textContent = "Error, some feilds are blank";
            task3h.style.color = "red";
            break;
        }

    }
})

//Task 4
var t4_inp = document.querySelector('#t4-inp');
var t4_add = document.querySelector('#t4-add');
var t4_remove = document.querySelector('#t4-remove');
var t4_ul = document.querySelector('#t4-ul');
var li;

t4_add.addEventListener("click", function () {
    if (t4_inp.value.trim() === '') { }
    else {
        li = document.createElement('li');
        li.textContent = t4_inp.value;
        t4_ul.appendChild(li);
        t4_inp.value = '';
    }
})

t4_remove.addEventListener("click", ()=> t4_ul.removeChild(li));

//Task 5
var t5_start = document.querySelector('#t5-start');
var t5_stop = document.querySelector('#t5-stop');
var t5_h4 = document.querySelector('#t4-count');

var int;

t5_start.addEventListener("click", function(){
    var cnt = 0;
    t5_h4.textContent = cnt;
    int = setInterval(()=>{
        cnt++;
        t5_h4.textContent = cnt;
    }, 1000);
})

t5_stop.addEventListener("click", ()=> clearInterval(int));

//Task 7
var prog = document.querySelector('#progress');
var dc = document.querySelector('#prog_comp');
var cnt = 0;
var pro_int = setInterval(()=>{
    if(cnt == 100) {
        dc.textContent = "Download Complete";
        clearInterval(pro_int);
    }
    cnt++;
    prog.style.width = cnt+'%';
}, 100);
