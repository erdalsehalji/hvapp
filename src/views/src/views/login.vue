<template>
    <div>
        <div class="container">
            <div class="row">
                <div id="naslov" class="col-12">
                    <h10><strong>PRIJAVA</strong></h10>
                </div>
                <div class="col-3"></div>
                <div id="log" class="col-6">
                    <form @submit.prevent="signup">
                <div class="form-group">
                 <label for="emailField">Email address</label>
                 <input v-model="email" type="email" class="form-control" id="emailField" aria-describedby="emailHelp" placeholder="Enter email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                  <label for="passwordField">Password</label>
                <input v-model="password" type="password" class="form-control" id="passwordField" placeholder="Password">
                 </div>
               <button type="submit" class="btn btn-primary mt-5">Submit</button>
              </form>
                </div> 
                <div class="col-3"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signup () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(function(error) {
        console.log(error);
      });
    }
  }
}
</script>
<style>
    #log {
        background-color: #333;
        color: white;
        padding-bottom: 10 px;
        text-align: center;
        padding-bottom: 100 px;
        padding-top: 20px;
    }

    #reg {
        background-color: #333;
        color: white;
        padding-bottom: 10 px;
        text-align: center;
        padding-top: 20px;
    }

    #korisnik {
        padding-top: 20px;
    }

    .row {
        margin-left: 0px;
        margin-right: 0px;
    }

    #naslov {
        display: table-cell;
        vertical-align: middle;
        text-align: center;
        margin-bottom: 30px;
    }

    #logbutton {
        margin-bottom: 20px;
    }

    h10 {
        font-family: Chilanka;
        font-style: normal;
        font-weight: normal;
        font-size: 40px;
        line-height: 40px;
        color: orange;


    }

    #prijavalog {
        margin-bottom: 40px;
    }
</style>
