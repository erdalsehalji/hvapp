<template>
  <div class="container">
    <div class="row">
      <div id="naslov" class="col-12">
        <h5><strong>IZBORNIK FUNKCIJA</strong></h5>
      </div>
      <div id="home21" class="col-4"><br><br>
        <div class="card" style=""><img src="vaga.jpg" class="card-img-top" alt=""></div><br>
        <div id="btnpoc">
          <router-link button type="button" class="btn btn-warning" to="/bodycalc">BODY CALC</router-link>
        </div><br>
        <p>Traži unos podataka o određenim tjelesnim karakteristikama. Zatim kalkulira detaljne
          fizičke specifikacije te daje uvid u stanje tijela.</p>
      </div>
      <div id="home11" class="col-4"><br><br>
        <div class="card" style=""><img src="kal.png" class="card-img-top" alt=""></div><br>
        <div id="btnpoc">
          <router-link button type="button" class="btn btn-warning" to="/nutricalc">NUTRI CALC</router-link>
        </div><br>
        <p>Traži unos imena namirnice i količinu u gramima. Zatim kalkulira hranjivu vrijednost za unesenu namirnicu.
          </p>
      </div>
      <div id="home31" class="col-4"><br><br>
        <div class="card" style=""><img src="pear.jpg" class="card-img-top" alt=""></div><br>
        <div id="btnpoc">
          <router-link button type="button" class="btn btn-warning" to="/info">FOOD INFO</router-link>
        </div><br>
        <p>Traži unos imena namirnice ili klik na dugme random. Zatim izbacuje podatke o namirnici,
            kao i zanimljivosti vezane uz istu. </p>
      </div>
    </div>
  </div>
</template>
<style>
  #naslov {
    margin-bottom: 30px;
    padding-bottom: 30px;
  }

  #kako {
    max-width: 50%;
    max-height: 50%;
    object-fit: contain;
  }

  p {
    font-family: Chilanka;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 20px;
    text-align: center;
    color: whitesmoke;
  }

  h5 {
    font-family: Chilanka;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 40px;
    text-align: center;
    align-items: center;
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