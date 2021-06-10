// fb
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
    fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

// button
let start_btn = document.querySelector('.calc');
let work_btn = document.querySelector('.work_btn');
let back_btn = document.querySelector(".back_btn");

// value
let gender = document.querySelector("#gender");
let workload = document.querySelector("#work");
let age = document.querySelector("#age");
let height = document.querySelector("#height");
let weight = document.querySelector("#weight");

// dom
let result_b = document.querySelector("#result_b");
let result_t = document.querySelector("#result_t");
let result_bmi = document.querySelector("#result_bmi");
let bmi_info = document.querySelector("#bmi_info");

start_btn.addEventListener("click", () => {
    let check_list = [];
    check_list.push(gender.value !== '選擇你的性別');
    check_list.push(workload.value !== '選擇你的工作量');
    check_list.push(age.value !== 0 && age.value !== "");
    check_list.push(height.value !== 0 && height.value !== "");
    check_list.push(weight.value !== 0 && weight.value !== "");
    let no_ans_list = document.querySelectorAll(".no_ans");

    let check = check_list.findIndex(item => item == false);
    if (check == -1) {
        document.querySelector('.work_load').classList.remove("open");
        document.querySelector('.toggle_btn').classList.remove("open");
        startCalculate();
        document.querySelector('.card').classList.add("ans");
        no_ans_list.forEach(item => {
            item.classList.remove("no");
        })
    } else {
        check_list.forEach((item, index) => {
            if (item == false) {
                no_ans_list[index].classList.add("no")
            } else {
                no_ans_list[index].classList.remove("no")
            }
        })
    }
})

work_btn.addEventListener("click", () => {
    document.querySelector('.work_load').classList.toggle("open");
    document.querySelector('.toggle_btn').classList.toggle("open");
})

back_btn.addEventListener("click", () => {
    document.querySelector('.card').classList.remove("ans");
})


let BMR = 0;
let TDEE = 0;

function startCalculate() {
    changeBMI();
    BMRCalculate();
    TDEECalculate();
    result_b.innerText = Math.ceil(BMR);
    result_t.innerText = Math.ceil(TDEE);
}

function changeBMI() {
    let bmi = weight.value / Math.pow(height.value / 100, 2);
    let bmi_text = bmi < 18.5 ? "您的體重已經過輕了，該多補充一點營養囉！" : bmi < 24 ? "您的BMI非常正常，持續保持健康狀態！" : "已經超過正常的BMI，需要調整飲食囉！"
    result_bmi.innerText = Math.round(bmi * 100) / 100;
    bmi_info.innerText = bmi_text;
}

function BMRCalculate() {
    let num = gender.value == 'm' ? 5 : -161;
    BMR = (10 * weight.value) + (6.25 * height.value) - (5 * age.value) + num;
}

function TDEECalculate() {
    let num = (workload.value == 0) ? 1.2 : (workload.value == 1) ? 1.6 : 2;
    TDEE = BMR * num;
}


