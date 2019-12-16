<template>
  <div class="container">
    <div class="row">
      <div id="home21" class="col-4"><br><br>
        <div class="card" style=""><img src="vaga.jpg" class="card-img-top" alt=""></div><br>
      <div id="btnpoc">
          <router-link button type="button" class="btn btn-warning" to="/izbornikfunkcija">BODY CALC</router-link>
      </div>
      <br>
        <p>Traži unos podataka o određenim tjelesnim karakteristikama.
          <p> Zatim kalkulira 
          postotak, masti, mišične mase te prikazuje na osnvu obrađenih podataka
          daje uvid u stanje tijela.
        </p>
      
      </div>
      <div id="home11" class="col-4"><br><br>
        <div class="card" style=""><img src="kal.png" class="card-img-top" alt=""></div><br>
       <div id="btnpoc">
          <router-link button type="button" class="btn btn-warning" to="/izbornikfunkcija">NUTRI CALC</router-link>
      </div>
      <br>
        <p>Traži unos imena namirnice i količinu u gramima.
          <p> Zatim kalkulira hranjivu vrijedost za unesenu namirnicu.
        </p>
      </div>
      <div id="home31" class="col-4"><br><br>
        <div class="card" style=""><img src="pear.jpg" class="card-img-top" alt=""></div><br>
       <div id="btnpoc">
          <router-link button type="button" class="btn btn-warning" to="/izbornikfunkcija">FOOD INFO</router-link>
      </div>
      <br>
       <p>Traži unos imena namirnice ili klik na dugme random.
          <p> Zatim izbacuje podatke o namirnici, kao i zanimljivosti vezane uz istu.
        </p>
     
      </div>
    </div>
  </div>
</template>
<style>
  #kako {
    max-width: 50%;
    max-height: 50%;
    object-fit: contain;
  }

  p {
    font-family: Chilanka;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 20px;
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

  #home11 {
    position: relative;
    background-color: #333;
  }

  #home21 {
    position: relative;
    background-color: #333;
  }

  #home31 {
    position: relative;
    background-color: #333;
  }

  #btnpoc {
    text-align: center;
  }
</style>