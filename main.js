let btn_tinh_luong = document.getElementById("btn_tinh_luong");
btn_tinh_luong.onclick = function () {
    let Day = document.getElementById("Day").value * 1;
    const Luong = 100000;
    let resuft = Day * Luong
    let content = `<p>Lương Của Bạn Là : ${resuft}</p>`
    let luong = document.getElementById("Tong_Luong");
    Tong_Luong.innerHTML = content

}


let BTN_Avg = document.getElementById("BTN_Avg");
BTN_Avg.onclick = function () {
    let number1 = document.getElementById("number1").value * 1;
    let number2 = document.getElementById("number2").value * 1;
    let number3 = document.getElementById("number3").value * 1;
    let number4 = document.getElementById("number4").value * 1;
    let number5 = document.getElementById("number5").value * 1;
    let resuft2 = (number1 + number2 + number3 + number4 + number5) / 5;
    let content2 = `<p> Trung Bình 5 Số Là: ${resuft2} </p>`
    let AVG = document.getElementById("AVG");
    AVG.innerHTML = content2

}

let BTN_Qui_Doi = document.getElementById("BTN_Qui_Doi");
BTN_Qui_Doi.onclick = function () {
    let USD = document.getElementById("USD").value;
     const He_So_USD = 23500;
    let resuft3 = USD * He_So_USD;
    const VND = new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'VND' });
    let content3 = `<p> Số Tiền Nhận Được Là: ${VND.format(resuft3)}`;
    let Qui_doi = document.getElementById("Qui_doi")
    Qui_doi.innerHTML = content3

}

let BTN_KQ = document.getElementById("BTN_KQ");
BTN_KQ.onclick = function(){
    let numBer1 = document.getElementById("Dai").value *1;
    let numBer2 = document.getElementById("Rong").value *1;
    let Dien_tich = numBer1*numBer2;
    let Chu_vi = (numBer1+numBer2)*2;
    let content4 = `Diện Tích Là: ${Dien_tich} và Chu Vi Là: ${Chu_vi}`;
    let Dientichchuvi = document.getElementById("DT_CV");
    Dientichchuvi.innerHTML = content4;
}

let BTN_KS = document.getElementById("BTN_KS")
BTN_KS.onclick = function(){
    let Ky_So = document.getElementById("Ky_So").value*1;
    let don_vi = (Ky_So % 10)*1;
    let chuc = Math.trunc(Ky_So/10)*1;
    let resuft5 = don_vi+chuc;
    let content5 = ` <p> Tổng 2 Ký Số Là: ${resuft5} </p>`
    let KS = document.getElementById("KS")
    KS.innerHTML=content5
}