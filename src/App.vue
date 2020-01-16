<template>

  <body>
    <div id="app">
      <div id="navi">
        <ul>
          <li>
            <router-link class="a" to="/izbornik">O APLIKACIJI </router-link>
          </li>
          <li>
            <router-link class="a" to="/pocetna">POČETNA</router-link>
          </li>
          <li>
            <router-link class="a" to="/nutricalc">NUTRI CALC</router-link>
          </li>
          <li  >
            <router-link v-if="!authenticated" class="button" to="/login">Login</router-link>
                <span   v-if="authenticated">               
                  <a  @click.prevent="logout" class="button" href="#">Logout</a>
                </span>
                     
            <li>
            <router-link v-if="!authenticated" class="button" to="/signup">Signup</router-link>
            </li>
             <button type="buttonlog" id="if" class="button">ULOGIRANI KORISNIK <br> {{ userEmail }}</button>
          <li style="float:right">              
            <router-link button type="button" id="if" class="button" to="/izbornik">Izbornik funkcija</router-link>
          </li>
        </ul><br><br>
      </div>
      <div>
        <router-view />
      </div><br>
      <footer class="footer mt-auto py-3">
        <div class="container">
          <p9>HEALTHVISOR,
            aplikacija za analizu u praćenje tjelesnih specifikacija.</p9>
        </div>
      </footer>
    </div>
  </body>
</template>
<script type="text/javascript">
import store from '@/store.js'

export default {
  data () {
    return store;
  },

  methods: {
    logout() {
      firebase.auth().signOut();
    }
  },

  mounted() {
    const self = this
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        self.userEmail = user.email;
        self.authenticated = true;
        console.log(`Authenticated: ${self.userEmail}`)
        if (self.$route.name !== 'home')
          self.$router.push({name: 'home'})
      }
      else {
        self.authenticated = false
        console.log('Logged out')
        if (self.$route.name !== 'login')
          self.$router.push({name: 'login'})
      }
    });
  }
}
</script>
<style>
  .container {
    width: auto;
    max-width: 1000px;
    max-height: 1500px;
    padding: 0 0px;
  }

  .footer {
    background-color: #333;
    position: fixed;
    color: orange;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin-top: 10px;
    padding-top: 10px;
    text-align: center;
  }

  #buttonlog {
    margin-top: 20px;
    align: center;
    color: #4CAF50;
  }

  #if {
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

  #app {
    background-color: rgb(84, 82, 82);
    height: 100vh;
  }

  #footer-li {
    text-align: center;

  }

  body {
    height: 100%;
  }
p8 {
  color:orange;
  margin-left: 20px;
}

  p9 {
    color: orange;
    text-align: center;
    position: center;
  }
</style>
