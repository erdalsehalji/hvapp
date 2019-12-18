<template>
<body>
  <div id="app">
      <div id="navi">
       
        <ul>
          <li>
            <router-link class="a" to="/izbornik">O NAMA</router-link>
          </li>
          <li>
            <router-link class="a" to="/pocetna">POČETNA</router-link>
          </li>
          <li>
            <router-link class="a" to="/nutricalc">NUTRI CALC</router-link>
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
     
      <div>
      <router-view />

      </div>
      <br>
      <footer class="footer">
        <div class="container">
          <div class="foot-top">
            <br>
              <p>HEALTHVISOR APLIKACIJA ZA RAČUNANJE I PRAĆENJE 
                TJELESNIH KARAKTERISTIKA
              </p>
            </div>

           
          </div>
      </footer>
  </div>
  </body>
</template>

<style>
  .footer {
    background-color: #333;
    position: fixed;
    color: orange;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin-bottom: 0px;
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
    height: 100vh;
  }

#footer-li {
  text-align: center;

}
body {
  height: 100%;
}
p {
  text-align: center;
}
</style>