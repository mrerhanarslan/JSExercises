let myLogger= yazdirilacakNumber => console.log("sayilarin toplami "+yazdirilacakNumber);

let mycalculator=(sayi1,sayi2)=>sayi1+sayi2;

myLogger(mycalculator(2,3));

let arabaMarkalari=["m1","m2","m3"];


arabaMarkalari[5]="m5";
arabaMarkalari.push("m6","m7");
for(let i=0;i<arabaMarkalari.length;i++)
{
  if(arabaMarkalari[i])
  {
    arabaMarkalari[i]+="bosdegil";
  }
  else
  {
    arabaMarkalari[i]="bos";
  }
}

console.log(arabaMarkalari);


let myDynamicNFT={
  nftID:1234,
  nftDescription:"First NFT",
  nftNetworkName:"Etherium",
  nftPrice:100,
  calculateSellPrice:function (basePrice) {
    return basePrice*(1+20/100);
  }
}

console.log("current NFT Price "+myDynamicNFT.nftPrice+" and sell price is :"+myDynamicNFT.calculateSellPrice(myDynamicNFT.nftPrice));

let myArrayNumbers=[1,2,3,4,5];

const toplama=function (mynumber) {
  return mynumber+2;
}

const cikarma=function (mynumber) {
  return mynumber-2;
}

const carpma=function (mynumber) {
  return mynumber*2;
}

const diziislemleri = (myArray,islem) => {
  let gecicidizi=[];
  for (let i = 0; i < myArray.length; i++) {
    gecicidizi[i]=islem(myArray[i]);
  }
  console.log(gecicidizi);
}
console.log(myArrayNumbers);
diziislemleri(myArrayNumbers,toplama);
diziislemleri(myArrayNumbers,cikarma);
diziislemleri(myArrayNumbers,carpma);

const adimiSoyle = (ad,soyad,adimiBagiracakFunc) => {
  const mesaj="MERHABA "+ad.toUpperCase()+" "+ soyad.toUpperCase();
  adimiBagiracakFunc(mesaj);
}

adimiSoyle("erhan","arslan",(msg)=>{
  console.log(msg)});

console.log(myArrayNumbers);

const newNumbers=myArrayNumbers.map((sayi)=>{return sayi*2});
console.log(newNumbers);

const myNft=[{adi:"erhan",soyad:"arslan",yas:37},{adi:"neslihan",soyad:"arslan",yas:35}];

const  newObjArray=myNft.map((myobj)=>{return 2023-myobj.yas});

newObjArray.forEach((birthday,index)=>console.log(index+": dogum yili:"+birthday));
