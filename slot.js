

$(".スタートボタン内").on("click", function () {
$(".ストップボタン１").css("color", "red");
$(".ストップボタン２").css("color", "red");
$(".ストップボタン３").css("color", "red");
$("#play-startbutton").get(0).play();
$("#play-bgm").get(0).play();
$('.リール１').attr('src', 'ランダム表示.gif');
$('.リール２').attr('src', 'ランダム表示2.gif');
$('.リール３').attr('src', 'ランダム表示3.gif');
})

const btn1 = document.getElementById('画面枠');
btn1.addEventListener('click', () => {
  alert('ここを押しても何もないよ');
});




// ***********リールの中身***********//
var random1 = 1 + Math.floor(Math.random() * 13);
var random2 = 1 + Math.floor(Math.random() * 13);
var random3 = 1 + Math.floor(Math.random() * 13);
// ***********リールの中身***********//

console.log("①"+random1)
console.log("②"+random2)
console.log("③"+random3)


var S01 = "いっしー";
var S02 = "梅king";
var S03 = "ちゃんくぼ";
var S04 = "サガット";
var S05 = "ちゃんりな";
var S06 = "ぴーや";
var S08 = "とうま";
var S09 = "まっきー";
var S10 = "もりくん";
var S11 = "なべさん";
var S12 = "すずね";
var S13 = "イソノカツオ";
var S14 = "よね";

var playcount = 0
var S01count = 0
var S02count = 0
var S03count = 0
var S04count = 0
var S05count = 0
var S06count = 0
var S08count = 0
var S09count = 0
var S10count = 0
var S11count = 0
var S12count = 0
var S13count = 0
var S14count = 0

const playcounta = document.getElementById("playcounta");
const S01counta = document.getElementById("S01counta");
const S02counta = document.getElementById("S02counta");
const S03counta = document.getElementById("S03counta");
const S04counta = document.getElementById("S04counta");
const S05counta = document.getElementById("S05counta");
const S06counta = document.getElementById("S06counta");
const S08counta = document.getElementById("S08counta");
const S09counta = document.getElementById("S09counta");
const S10counta = document.getElementById("S10counta");
const S11counta = document.getElementById("S11counta");
const S12counta = document.getElementById("S12counta");
const S13counta = document.getElementById("S13counta");
const S14counta = document.getElementById("S14counta");



// ***********1つめ***********//
$(".ストップボタン１").on("click", function () {
$(".ストップボタン１").css("color", "yellow ");
if(random1==1){
    $('.リール１').attr('src', 'S01_いっしー.png');
    $(".あだな１").text(S01);
    $(".画面").text(S01);
    S01count++;
}
if(random1==2){
    $('.リール１').attr('src', 'S02_梅king.png');
    $(".あだな１").text(S02);
    $(".画面").text(S02);
    S02count++;
}
if(random1==3){
    $('.リール１').attr('src', 'S03_ちゃんくぼ.png');
    $(".あだな１").text(S03);
    $(".画面").text(S03);
    S03count++;
}
if(random1==4){
    $('.リール１').attr('src', 'S04_サガット.png');
    $(".あだな１").text(S04);
    $(".画面").text(S04);
    S04count++;
}
if(random1==5){
    $('.リール１').attr('src', 'S05_ちゃんりな.png');
    $(".あだな１").text(S05);
    $(".画面").text(S05);
    S05count++;
}
if(random1==6){
    $('.リール１').attr('src', 'S06_ぴーや.png');
    $(".あだな１").text(S06);
    $(".画面").text(S06);
    S06count++;
}
if(random1==7){
    $('.リール１').attr('src', 'S14_よね.png');
    $(".あだな１").text(S14);
    $(".画面").text(S14);
    S14count++;
}
if(random1==8){
    $('.リール１').attr('src', 'S08_とうま.png');
    $(".あだな１").text(S08);
    $(".画面").text(S08);
    S08count++;
}
if(random1==9){
    $('.リール１').attr('src', 'S09_まっきー.png');
    $(".あだな１").text(S09);
    $(".画面").text(S09);
    S09count++;
}
if(random1==10){
    $('.リール１').attr('src', 'S10_もりくん.png');
    $(".あだな１").text(S10);
    $(".画面").text(S10);
    S10count++;
}
if(random1==11){
    $('.リール１').attr('src', 'S11_なべさん.png');
    $(".あだな１").text(S11);
    $(".画面").text(S11);
    S11count++;
}
if(random1==12){
    $('.リール１').attr('src', 'S12_近藤すず音.png');
    $(".あだな１").text(S12);
    $(".画面").text(S12);
    S12count++;
}
if(random1==13){
    $('.リール１').attr('src', 'S13_イソノカツオ.png');
    $(".あだな１").text(S13);
    $(".画面").text(S13);
    S13count++;
}
$("#play-stopbutton").get(0).play();
document.getElementById("画面").style.fontSize = '45px';
document.getElementById("あだな１").style.fontWeight = 'bold';
document.getElementById("あだな１").style.fontSize = '15px';
}
)

// ***********1つめ***********//
    

// ***********2つめ***********//
$(".ストップボタン２").on("click", function () {
    $(".ストップボタン２").css("color", "yellow ");
    if(random2==1){
        $('.リール２').attr('src', 'S01_いっしー.png');
        $(".あだな２").text(S01);
        $(".画面").text(S01);
        S01count++;
    }
    if(random2==2){
        $('.リール２').attr('src', 'S02_梅king.png');
        $(".あだな２").text(S02);
        $(".画面").text(S02);
        S02count++;
    }
    if(random2==3){
        $('.リール２').attr('src', 'S03_ちゃんくぼ.png');
        $(".あだな２").text(S03);
        $(".画面").text(S03);
        S03count++;
    }
    if(random2==4){
        $('.リール２').attr('src', 'S04_サガット.png');
        $(".あだな２").text(S04);
        $(".画面").text(S04);
        S04count++;
    }
    if(random2==5){
        $('.リール２').attr('src', 'S05_ちゃんりな.png');
        $(".あだな２").text(S05);
        $(".画面").text(S05);
        S05count++;
    }
    if(random2==6){
        $('.リール２').attr('src', 'S06_ぴーや.png');
        $(".あだな２").text(S06);
        $(".画面").text(S06);
        S06count++;
    }
    if(random2==7){
        $('.リール２').attr('src', 'S14_よね.png');
        $(".あだな２").text(S14);
        $(".画面").text(S14);
        S14count++;
    }
    if(random2==8){
        $('.リール２').attr('src', 'S08_とうま.png');
        $(".あだな２").text(S08);
        $(".画面").text(S08);
        S08count++;
    }
    if(random2==9){
        $('.リール２').attr('src', 'S09_まっきー.png');
        $(".あだな２").text(S09);
        $(".画面").text(S09);
        S09count++;
    }
    if(random2==10){
        $('.リール２').attr('src', 'S10_もりくん.png');
        $(".あだな２").text(S10);
        $(".画面").text(S10);
        S10count++;
    }
    if(random2==11){
        $('.リール２').attr('src', 'S11_なべさん.png');
        $(".あだな２").text(S11);
        $(".画面").text(S11);
        S11count++;
    }
    if(random2==12){
        $('.リール２').attr('src', 'S12_近藤すず音.png');
        $(".あだな２").text(S12);
        $(".画面").text(S12);
        S12count++;
    }
    if(random2==13){
        $('.リール２').attr('src', 'S13_イソノカツオ.png');
        $(".あだな２").text(S13);
        $(".画面").text(S13);
        S13count++;
    }
    $("#play-stopbutton").get(0).play();
    document.getElementById("画面").style.fontSize = '60px';
    document.getElementById("あだな２").style.fontWeight = 'bold';
    document.getElementById("あだな２").style.fontSize = '15px';
    if(random1==random2){
        $(".画面").text("リーチ！");
        document.getElementById("画面").style.fontSize = '60px';
        $("#reach").get(0).play();
    }
    })
    
// ***********2つめ***********//


// ***********3つめ***********//
$(".ストップボタン３").on("click", function () {
    $(".ストップボタン３").css("color", "yellow ");
    if(random3==1){
        $('.リール３').attr('src', 'S01_いっしー.png');
        $(".あだな３").text(S01);
        $(".画面").text(S01);
        S01count++;
    }
    if(random3==2){
        $('.リール３').attr('src', 'S02_梅king.png');
        $(".あだな３").text(S02);
        $(".画面").text(S02);
        S02count++;
    }
    if(random3==3){
        $('.リール３').attr('src', 'S03_ちゃんくぼ.png');
        $(".あだな３").text(S03);
        $(".画面").text(S03);
        S03count++;
    }
    if(random3==4){
        $('.リール３').attr('src', 'S04_サガット.png');
        $(".あだな３").text(S04);
        $(".画面").text(S04);
        S04count++;
    }
    if(random3==5){
        $('.リール３').attr('src', 'S05_ちゃんりな.png');
        $(".あだな３").text(S05);
        $(".画面").text(S05);
        S05count++;
    }
    if(random3==6){
        $('.リール３').attr('src', 'S06_ぴーや.png');
        $(".あだな３").text(S06);
        $(".画面").text(S06);
        S06count++;
    }
    if(random3==7){
        $('.リール３').attr('src', 'S14_よね.png');
        $(".あだな３").text(S14);
        $(".画面").text(S14);
        S14count++;
    }
    if(random3==8){
        $('.リール３').attr('src', 'S08_とうま.png');
        $(".あだな３").text(S08);
        $(".画面").text(S08);
        S08count++;
    }
    if(random3==9){
        $('.リール３').attr('src', 'S09_まっきー.png');
        $(".あだな３").text(S09);
        $(".画面").text(S09);
        S09count++;
    }
    if(random3==10){
        $('.リール３').attr('src', 'S10_もりくん.png');
        $(".あだな３").text(S10);
        $(".画面").text(S10);
        S10count++;
    }
    if(random3==11){
        $('.リール３').attr('src', 'S11_なべさん.png');
        $(".あだな３").text(S11);
        $(".画面").text(S11);
        S11count++;
    }
    if(random3==12){
        $('.リール３').attr('src', 'S12_近藤すず音.png');
        $(".あだな３").text(S12);
        $(".画面").text(S12);
        S12count++;
    }
    if(random3==13){
        $('.リール３').attr('src', 'S13_イソノカツオ.png');
        $(".あだな３").text(S13);
        $(".画面").text(S13);
        S13count++;
    }
   playcount++;
    $("#play-stopbutton").get(0).play();
    $(".メッセージ").text("写真をクリックすると・・・　　　　　　　　　写真をクリックすると・・・");
    document.getElementById("メッセージ").style.fontSize = '20px';
    document.getElementById("あだな３").style.fontWeight = 'bold';
    document.getElementById("あだな３").style.fontSize = '15px';
    document.getElementById("画面").style.fontSize = '60px';

    console.log("いっしー："+S01count)
    console.log("梅king："+S02count)
    console.log("ちゃんくぼ："+S03count)
    console.log("サガット："+S04count)
    console.log("ちゃんりな："+S05count)
    console.log("ぴーや："+S06count)
    console.log("とうま："+S08count)
    console.log("まっきー："+S09count)
    console.log("もりくん："+S10count)
    console.log("なべさん："+S11count)
    console.log("すずね："+S12count)
    console.log("イソノカツオ"+S13count)
    console.log("よね："+S14count)


    // // var S01count = document.getElementById("S01count");
    // S01counta.innerHTML = S01count;

    // // var S02count = document.getElementById("S02count");
    // S02counta.innerHTML = S02count;

    // // var S03count = document.getElementById("S03count");
    // S03counta.innerHTML = S03count;

    // // var S04count = document.getElementById("S04count");
    // S04counta.innerHTML = S04count;

    // // var S05count = document.getElementById("S05count");
    // S05counta.innerHTML = S05count;

    // // var S06count = document.getElementById("S06count");
    // S06counta.innerHTML = S06count;

    // // var S08count = document.getElementById("S08count");
    // S08counta.innerHTML = S08count;

    // // var S09count = document.getElementById("S09count");
    // S09counta.innerHTML = S09count;

    // // var S10count = document.getElementById("S10count");
    // S10counta.innerHTML = S10count;

    // // var S11count = document.getElementById("S11count");
    // S11counta.innerHTML = S11count;

    // // var S12count = document.getElementById("S12count");
    // S12counta.innerHTML = S12count;

    // // var S13count = document.getElementById("S13count");
    // S13counta.innerHTML = S13count;

    // // var S14count = document.getElementById("S14count");
    // S14counta.innerHTML = S14count;


    playcounta.textContent=playcount;
    S01counta.textContent=S01count;
    S02counta.textContent=S02count;
    S03counta.textContent=S03count;
    S04counta.textContent=S04count;
    S05counta.textContent=S05count;
    S06counta.textContent=S06count;
    S08counta.textContent=S08count;
    S09counta.textContent=S09count;
    S10counta.textContent=S10count;
    S11counta.textContent=S11count;
    S12counta.textContent=S12count;
    S13counta.textContent=S13count;
    S14counta.textContent=S14count;



    if(random1 == random2){
        if(random2 !== random3){
            $(".画面").text("ざんねん!");
            $("#non-reach").get(0).play();
            document.getElementById("画面").style.fontSize = '60px';
        }
        if(random2 == random3){
        $(".画面").text("Congratulations!!!");
        $("#congratulation").get(0).play();
        document.getElementById("画面").style.fontSize = '70px';
    }}
})
    
// ***********3つめ***********//

// ***********リセットボタン***********//
$(".reload").on("click", function () {
    $("#play-reloadbutton").get(0).play();
    // const v =$("#あだな１").val();
    // localStorage.setItem("number",v);
    // window.location.reload();
    random1 = 1 + Math.floor(Math.random() * 13);
    random2 = 1 + Math.floor(Math.random() * 13);
    random3 = 1 + Math.floor(Math.random() * 13);
    console.log("①"+random1)
    console.log("②"+random2)
    console.log("③"+random3)
    $('.リール１').attr('src', 'ラッキーセブン色違い.png');
    $('.リール２').attr('src', 'ラッキーセブン色違い.png');
    $('.リール３').attr('src', 'ラッキーセブン色違い.png');
    $(".画面").text("がんばれ！"); 
    $(".あだな１").text("誰かな？？？"); 
    $(".あだな２").text("誰かな？？？"); 
    $(".あだな３").text("誰かな？？？"); 
    document.getElementById("あだな１").style.fontWeight = 'normal';
    document.getElementById("あだな１").style.fontSize = '10px';
    document.getElementById("あだな２").style.fontWeight = 'normal';
    document.getElementById("あだな２").style.fontSize = '10px';
    document.getElementById("あだな３").style.fontWeight = 'normal';
    document.getElementById("あだな３").style.fontSize = '10px';
    document.getElementById("画面").style.fontSize = '30px';
    $(".メッセージ").text("毎週土曜はEZO HUBへGO!!!　　　　　　　　　毎週土曜はEZO HUBへGO!!!");
    document.getElementById("メッセージ").style.fontSize = '15px';
    $(".ストップボタン１").css("color", "black");
    $(".ストップボタン２").css("color", "black");
    $(".ストップボタン３").css("color", "black");

// S01いっしー
if(random1==1){
    pdf1.setAttribute('href', S01pdf);
    }
    if(random2==1){
        pdf2.setAttribute('href', S01pdf);
    }
    if(random3==1){
        pdf3.setAttribute('href', S01pdf);
    }
    
    // S02
    if(random1==2){
        pdf1.setAttribute('href',S02pdf);
    }
    if(random2==2){
        pdf2.setAttribute('href',S02pdf );
    }
    if(random3==2){
        pdf3.setAttribute('href',S02pdf );
    }
    
    
    // S03
    if(random1==3){
        pdf1.setAttribute('href',S03pdf );
    }
    if(random2==3){
        pdf2.setAttribute('href',S03pdf );
    }
    if(random3==3){
        pdf3.setAttribute('href',S03pdf );
    }
    
    // S04
    if(random1==4){
        pdf1.setAttribute('href',S04pdf );
    }
    if(random2==4){
        pdf2.setAttribute('href',S04pdf );
    }
    if(random3==4){
        pdf3.setAttribute('href',S04pdf );
    }
    
    // S05
    if(random1==5){
        pdf1.setAttribute('href',S05pdf );
    }
    if(random2==5){
        pdf2.setAttribute('href',S05pdf );
    }
    if(random3==5){
        pdf3.setAttribute('href',S05pdf );
    }
    
    // S06
    if(random1==6){
        pdf1.setAttribute('href',S06pdf );
    }
    if(random2==6){
        pdf2.setAttribute('href',S06pdf );
    }
    if(random3==6){
        pdf3.setAttribute('href',S06pdf );
    }
    
    // S14
    if(random1==7){
        pdf1.setAttribute('href',S14pdf );
    }
    if(random2==7){
        pdf2.setAttribute('href',S14pdf );
    }
    if(random3==7){
        pdf3.setAttribute('href',S14pdf );
    }
    
    // S08
    if(random1==8){
        pdf1.setAttribute('href',S08pdf );
    }
    if(random2==8){
        pdf2.setAttribute('href',S08pdf );
    }
    if(random3==8){
        pdf3.setAttribute('href',S08pdf );
    }
    
    // S09
    if(random1==9){
        pdf1.setAttribute('href',S09pdf );
    }
    if(random2==9){
        pdf2.setAttribute('href',S09pdf );
    }
    if(random3==9){
        pdf3.setAttribute('href',S09pdf );
    }
    
    // S10
    if(random1==10){
        pdf1.setAttribute('href',S10pdf );
    }
    if(random2==10){
        pdf2.setAttribute('href',S10pdf );
    }
    if(random3==10){
        pdf3.setAttribute('href',S10pdf );
    }
    
    // S11
    if(random1==11){
        pdf1.setAttribute('href',S11pdf );
    }
    if(random2==11){
        pdf2.setAttribute('href',S11pdf );
    }
    if(random3==11){
        pdf3.setAttribute('href',S11pdf );
    }
    
    // S12
    if(random1==12){
        pdf1.setAttribute('href', S12pdf);
    }
    if(random2==12){
        pdf2.setAttribute('href',S12pdf );
    }
    if(random3==12){
        pdf3.setAttribute('href',S12pdf );
    }
    
    // S13
    if(random1==13){
        pdf1.setAttribute('href',S13pdf );
    }
    if(random2==13){
        pdf2.setAttribute('href',S13pdf );
    }
    if(random3==13){
        pdf3.setAttribute('href',S13pdf );
    }
    


})
// ***********リセットボタン***********//


// ***********プロフ表示***********//
let pdf1 = document.getElementById('pdf1');
let pdf2 = document.getElementById('pdf2');
let pdf3 = document.getElementById('pdf3');

let S01pdf = 'S01_いっしー.pdf';
let S02pdf = 'S02_梅king.pdf';
let S03pdf = 'S03_ちゃんくぼ.pdf';
let S04pdf = 'S04_サガット.pdf';
let S05pdf = 'S05_ちゃんりな.pdf';
let S06pdf = 'S06_ぴーや.pdf';
let S14pdf = 'S14_よね.pdf';
let S08pdf = 'S08_とうま.pdf';
let S09pdf = 'S09_まっきー.pdf';
let S10pdf = 'S10_もりくん.pdf';
let S11pdf = 'S11_なべさん.pdf';
let S12pdf = 'S12_近藤すず音.pdf';
let S13pdf = 'S13_イソノカツオ.pdf';


// S01いっしー
if(random1==1){
pdf1.setAttribute('href', S01pdf);
}
if(random2==1){
    pdf2.setAttribute('href', S01pdf);
}
if(random3==1){
    pdf3.setAttribute('href', S01pdf);
}

// S02
if(random1==2){
    pdf1.setAttribute('href',S02pdf);
}
if(random2==2){
    pdf2.setAttribute('href',S02pdf );
}
if(random3==2){
    pdf3.setAttribute('href',S02pdf );
}


// S03
if(random1==3){
    pdf1.setAttribute('href',S03pdf );
}
if(random2==3){
    pdf2.setAttribute('href',S03pdf );
}
if(random3==3){
    pdf3.setAttribute('href',S03pdf );
}

// S04
if(random1==4){
    pdf1.setAttribute('href',S04pdf );
}
if(random2==4){
    pdf2.setAttribute('href',S04pdf );
}
if(random3==4){
    pdf3.setAttribute('href',S04pdf );
}

// S05
if(random1==5){
    pdf1.setAttribute('href',S05pdf );
}
if(random2==5){
    pdf2.setAttribute('href',S05pdf );
}
if(random3==5){
    pdf3.setAttribute('href',S05pdf );
}

// S06
if(random1==6){
    pdf1.setAttribute('href',S06pdf );
}
if(random2==6){
    pdf2.setAttribute('href',S06pdf );
}
if(random3==6){
    pdf3.setAttribute('href',S06pdf );
}

// S14
if(random1==7){
    pdf1.setAttribute('href',S14pdf );
}
if(random2==7){
    pdf2.setAttribute('href',S14pdf );
}
if(random3==7){
    pdf3.setAttribute('href',S14pdf );
}

// S08
if(random1==8){
    pdf1.setAttribute('href',S08pdf );
}
if(random2==8){
    pdf2.setAttribute('href',S08pdf );
}
if(random3==8){
    pdf3.setAttribute('href',S08pdf );
}

// S09
if(random1==9){
    pdf1.setAttribute('href',S09pdf );
}
if(random2==9){
    pdf2.setAttribute('href',S09pdf );
}
if(random3==9){
    pdf3.setAttribute('href',S09pdf );
}

// S10
if(random1==10){
    pdf1.setAttribute('href',S10pdf );
}
if(random2==10){
    pdf2.setAttribute('href',S10pdf );
}
if(random3==10){
    pdf3.setAttribute('href',S10pdf );
}

// S11
if(random1==11){
    pdf1.setAttribute('href',S11pdf );
}
if(random2==11){
    pdf2.setAttribute('href',S11pdf );
}
if(random3==11){
    pdf3.setAttribute('href',S11pdf );
}

// S12
if(random1==12){
    pdf1.setAttribute('href', S12pdf);
}
if(random2==12){
    pdf2.setAttribute('href',S12pdf );
}
if(random3==12){
    pdf3.setAttribute('href',S12pdf );
}

// S13
if(random1==13){
    pdf1.setAttribute('href',S13pdf );
}
if(random2==13){
    pdf2.setAttribute('href',S13pdf );
}
if(random3==13){
    pdf3.setAttribute('href',S13pdf );
}


// ***********プロフ表示***********//


$(".スタートボタン内2").click(function() {
      window.location.href = 'index.html';
    }
  );