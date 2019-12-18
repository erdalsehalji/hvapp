<template>
  <div class="container">
    <div class="row">
      <div id="home2" class="col-4"><br><br>
        <h2>ZNATE LI OVU STATISTIKU?</h2><br>
        <div class="card" style=""><img src="diduknow.png" class="card-img-top" alt=""></div><br>
        <p1>Pretilost je vodeći svijetski kroinični zdravstveni problem. <br></p1>
        <p1>Pretilost u Europi se procjenuje na približno 30%. Po mišljeju SZO-a do 2030. čak 2.16 milijardi osoba imati
          prekomjernu težinu,
          dok će 1,
          12 milijarda biti pretilo. </p1><br>
      </div>
      <div id="home1" class="col-4"><br><br>
        <h1>ZAŠTO BAŠ HEALTHVISOR?</h1><br>
        <div class="card" style=""><img src="kako.jpg" class="card-img-top" alt=""></div><br>
        <p1>Pred vama je aplikacija koja će vam pokušati pomoći da živite zdraviji život.</p1>
        <p1><b>Nudimo sljedeće opcije: </b></p1>
        <p1>- kalkulator nutritivnih vrijednosti</p1>
        <p1>- body kalkulator</p1>
        <p1>- pračenje stanja tijela</p1>
        <p1>- info o namirnicama</p1>
        <p1><b>ŽELITE NAM SE OBRATITI?</b></p1>
        <div id="btnpoc">
          <router-link id="fdb" button type="button" class="btn btn-primary btn-lg" to="/login">FEEDBACK</router-link>
        </div>
      </div>
      <div id="home3" class="col-4"><br><br>
        <h3>PROBAJTE HEALTHVISOR!</h3><br>
        <div class="card" style="height: 300px;"><img src="logo.png" class="card-img-top" alt=""></div><br>
        <div>
          <p1>Ukoliko samo želite isprobati healthvisor kliknite na gumb gost. </p1>
          <div id="btnpoc">
            <router-link button type="button" class="btn btn-primary btn-lg" to="/izbornik">GOST</router-link>
          </div><br>
          <p1>Želite li izraditi profil ili pristupiti postojećem kliknite login/signup gumb. </p1>
          <div id="btnpoc">
            <router-link button type="button" class="btn btn-primary btn-lg" to="/login">LOGIN/SIGNUP</router-link>
          </div>
        </div>
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

  p1 {
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

  #btnpoc {
    text-align: center;
  }
</style>