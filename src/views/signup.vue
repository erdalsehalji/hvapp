<template>

   <div class="container">
            <div class="row">
                <div id="naslov" class="col-12">
                    <h10><strong>REGISTRACIJA</strong></h10>
                </div>
   <div class="col-3"></div>
  <div id="reg" class="col-6">
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
        <div class="form-group">
          <label for="confirmPasswordField">Confirm Password</label>
          <input v-model="password2" type="password" class="form-control" id="confirmPasswordField" placeholder="Confirm password">
        </div>
        <button type="submit" class="btn btn-primary mt-5">Submit</button>
      </form>
                </div>
                <div class="col-3"></div>
                </div>
                </div>

</template>

<script>
export default {
    /* KORIŠTENE SU FORMULE PO UZORU NA https://www.calculator.net/ */
/* FORME ZA LOGIN, SIGNUP, TJELESNE SPECIFIKACIJE SU PREUZETE SA BOOTSTRAPA I MODIFICIRANE SU NA NAČIN KOJI JE ODGOVARAO ZA HEALTHVISOR APLIKACIJU*/
    name:"login",
  data()  {
        return {
         email:'',
         password:'',
         password2:''
        }
    } ,
    methods: {
        signup(){
            firebase.auth().createUserWithEmailAndPassword(this.email , this.password).then(()=>{
                let self=this;
                let id=self.email

       /*        db.collection("Korisnik").doc(id).collection("Podaci").add({
                BMI :'',
                BFI :'',
                BFM:'',
                CISTA:'' 
            })
            .then(function() {
                console.log("Document successfully written!");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            }); */

            });  


        }  
    }
}
</script>
<style>
 h10 {
        font-family: Chilanka;
        font-style: normal;
        font-weight: normal;
        font-size: 40px;
        line-height: 40px;
        color: orange;


    }
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
</style>
