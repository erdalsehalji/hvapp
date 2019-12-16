<template>
  <div id="app">
    <header>
      <div id="navi">
       
        <ul>
          <li>
            <router-link class="a" to="/izbornik">O NAMA</router-link>
          </li>
          <li>
            <router-link class="a" to="/pocetna">POČETNA</router-link>
          </li>
          <li>
            <router-link class="a" to="/home">NUTRI CALC</router-link>
          </li>
          <li>
            <router-link button type="button" class="button" to="/home">NAZAD</router-link>
          <li>
          <router-link button type="button" class="button" to="/login">LOGIN/SIGNUP</router-link>
          </li>

          <li style="float:right">
            <router-link button type="button" id="if" class="button" to="/izbornik">Izbornik funkcija</router-link></li>
        </ul>
        <br>
        <br>
      </div>
      </header>
      <router-view />
      <br>
      <br>

      <footer class="footer is-primaty">
        <div class="container">
          <div class="foot-top">
            <div class="column">
            <br>
              <p>HEALTHVISOR APLIKACIJA ZA RAČUNANJE I PRAĆENJE 
                TJELESNIH KARAKTERISTIKA
              </p>
            </div>
          <div class="columns">
            <router-link id="foti-li" to="/home">O NAMA</router-link>
         <br>
            <router-link class="a" to="/pocetna">NUTRI CALC</router-link>
         <br>
            <router-link id="foti-li" to="/home">POČETNA</router-link>
          </div>
          </div>
        </div>
      </footer>
  </div>
</template>

<style>
  .footer {
    background-color: #333;
    color: white;
  }
#if{
  background-color: #4CAF50;
}
  #navi {
    padding-bottom: 20 px;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
  }

  li {
    float: left;
    border-right: 1px solid #bbb;
  }

  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  li a:hover:not(.active) {
    background-color: rgb(212, 255, 0);
  }

  .active {
    background-color: #4CAF50;
  }

  #gridapp {
    background-color: #333;
    width: 100%;
  }
  .button {
    background-color: orange;
  }
  #app{
    background-color: rgb(84, 82, 82);
  }

</style>