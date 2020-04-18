<template>
  <div class="container">
    <div class="row">
      <div id="home2" class="col-12"><br><br>
        <h2>HEALTHVISOR?</h2><br>
        <div class="row">
        <div id="home2" class="col-12">
        <p> APLIKACIJA JE NAPRAVLJENA SA SVRHOM OSVJEŠTAVANJA KORISNIKA O ZDRAVLJU TIJELA
          NA NAČIN DA MU STATISTIČKIM PODATCIMA UKAZUJE NA EVENTUALNE NEDOSTATKE. BAZNA FUNKCIJA APLIKACIJE JE 
            KALKULATOR KOJI JE ZAMIŠLJEN DA SPREMA KORISNIČKE PODATKE SA CILJEM PREGLEDA PROMJENE NASTALE TOKOM VREMENA
            . POPRATNE FUNKCIJE SU NUTRITIVNI KALKULATOR I INFO O NAMIRNICAMA KOJE SU TU DA BI DODATNO MOTIVIRALE 
            KORISNIKA.<br><br>
            KALKULACIJE SU RAČUNANE PO SLJEDEĆIM FORMULAMA:
        </p>
         <div id="home2" class="col-12">
           <p>
            
            <b>BODY FAT INDEX :</b> muško (1.39 * ((tezina / ((visina*visina) / 10000)) + (0.16 * dob)) - (10.34 * 1) - 9 ), žensko (1.39 * ((this.tezina / ((.visina*.visina) / 10000)) + (0.16 * .dob)) - (10.34 * 0) - 9 )<br>
            <b>BODY FAT MASS :</b>  tezina * (body fat index / 100)<br>
            <b>ČISTA TJELESNA MASA :</b> tezina - body fat mass<br>
            <b>IDEALNI BFI ZA DANU DOB :</b> muško - ovisno o dobi, žensko - ovisno o dobi<br>
            <b>OCJENA POSTOTKA MASTI :</b> muško - -13 loše stanje, 12-31 dobro stanje, 31+ loše stanje  ,  žensko -5 loše stanje, 5-25 dobro stanje, 25+ loše stanje<br>
           <b> BODY MASS INDEX :</b> (visina / (visina * težina) / 10000) <br>        
            <b>OCJENA BMI-a :</b> -16 je ozbiljna mršavost, 25+ je prekomjerno, 30 je granica pretilosti  <br>
            <b>IDEALNI BMI ZA VISINU :</b> muško - ((((visina - 152) / 2.5) * 1.9) + 52) - 13.34 (najniža), odnosno + 9.76 (najviša), žensko - (((visina - 152) / 2.5) * 1.7) + 49 - 13.34 (najniža), odnosno + 9.76 (najviša) <br>
            <b>DU BOISOVA :</b> 0.007184 * Math.pow(tezina, 0.425) * Math.pow(visina, 0.725) <br>
            <b>TAKAHIRINA :</b> 0.007241 * Math.pow(tezina, 0.425) * Math.pow(visina, 0.725)<br>
            <b>FUJIMOTOVA :</b> 0.008883 * Math.pow(tezina, 0.444) * Math.pow(visina, 0.666)<br>  
            <b>BAZIČNI METABOLIČKI UNOS :</b> muško - ((10 * tezina) + (6.25 * visina) - (5 * dob) + 5) * 1.2, žensko - ((10 * tezina) + (6.25 * visina) - (5 * dob) - 161) * 1.2<br>
            <b>BMU NISKA AKTIVNOST : isto kao i BMU samo sa zadnjim množiteljem 1.4</b> <br>
           <b>BMU AKTIVNOST 1-3 PUTA TJEDNO :</b> isto kao i BMU samo sa zadnjim množiteljem 1.4<br>
            <b>BMU AKTIVNOST 4-5 PUTA TJEDNO  : </b>isto kao i BMU samo sa zadnjim množiteljem 1.6<br>
            <b>BMU INTENZIVNA 3-4 PUTA TJEDNO :</b>isto kao i BMU samo sa zadnjim množiteljem 1.7<br>
            <b>BMU INTENZIVNA 6-7 PUTA TJEDNO : </b>isto kao i BMU samo sa zadnjim množiteljem 1.8<br>   
        </p>
         </div>
         </div>
        </div>
         
      
        </div>
      </div>
      </div>
         
 

            
</template>
<style>



  .mog {
   text-align: center;
   
  }

  p {
    color: whitesmoke;
    text-align: center;
    font-size: 15px;
  }
  p1 {
    font-family: Chilanka;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 25px;
    text-align: center;
    color: whitesmoke;  
  }


  h1 {
    position: relative;
    font-family: Chilanka;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 40px;
    text-align: center;
    align-content: center;
    color: orange;
  }

  h2 {
    position: relative;
    font-family: Chilanka;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 40px;
    text-align: center;
    color: orange;
  }

  h3 {
    position: relative;
    font-family: Chilanka;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 40px;
    text-align: center;
    color: orange;
  }

  #home1 {
    position: relative;
    background-color: #333;
  }

  #home2 {
    position: relative;
    background-color: #333;
  }

  #home3 {
    position: relative;
    background-color: #333;
  }

</style>