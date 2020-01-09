<template>
        <div>
                <div class="container">
                        <div class="row">
                                <div id="naslov" class="col-12">
                                        <h5><strong>BODY CALC</strong></h5>
                                </div>
                                <div id="bodyupit" class="col-md-2">
                                        <form>
                                                <div class="form-group"><label>Težina</label><input
                                                                type="number" class="form-control" name="tezina" v-model= "tezina" id="tezina"
                                                                placeholder=""></div>                                               
                                                <div class="form-group"><label>Visina</label><input
                                                                type="number" class="form-control" name="visina" v-model= "visina" id="visina"
                                                                placeholder=""></div>
                                                 <div class="form-group"><label>Opseg vrata</label><input
                                                                type="number" class="form-control" name="opvrata" v-model= "opvrata" id="opvrata"
                                                                placeholder=""></div>
                                                <div class="form-group"><label>Opseg
                                                                struka</label><input type="text" class="form-control" v-model= "opstruka"
                                                                id="opstruka" placeholder=""></div>
                                                <div class="form-group"><label for="exampleInputPassword1">Opseg
                                                                kukova</label><input type="text" class="form-control" v-model= "opkukova"
                                                                id="opkukova" placeholder=""></div>
                                                <div class="form-group"><label for="exampleInputPassword1">Dob
                                                        </label><input type="text" class="form-control" v-model= "dob"
                                                                id="dob" placeholder=""></div>
                                                <div class="form-group"><label for="exampleInputPassword1">Spol
                                                        </label><input type="text" class="form-control" v-model= "spol"
                                                                id="spol" placeholder=""></div>
                                                                <button
                                                        id="bodybutton" type="submit"
                                                        class="btn btn-primary">Izračunaj</button>
                                        </form>
                                </div>
                                <div class="col-1"></div>
                                <div id="bodyuotput" class="col-9">
                                        <p10><strong>BODY SURFACE AREA (m2)</strong></p10>
                                        <div id="korisnik" class="form-row">
                                                <div class="form-group col-md-4"><label>Du Boisova
                                                                metoda</label><input type="number" class="form-control"
                                                                :value="dubois" name="duboisova"
                                                                id="dubo" placeholder=""></div>
                                                <div class="form-group col-md-4"><label for="inputEmail4">Takahirina
                                                                metoda</label><input type="number" class="form-control"
                                                                :value="takahira" name="takihirina"
                                                                id="taka" placeholder=""></div>
                                                <div class="form-group col-md-4"><label for="inputEmail4">Fujimotova
                                                                metoda</label><input type="number" class="form-control"
                                                                :value="fujimoto" name="fujimotova"
                                                                id="fuji" placeholder=""></div>
                                        </div>
                                        <p10><strong>BODY FAT INDEX (BFI)</strong></p10>
                                        <div id="korisnik" class="form-row">
                                                <div class="form-group col-md-4"><label for="inputEmail4">Body fat
                                                                index (%)</label><input type="number" class="form-control"
                                                                 :value="bfi" name="bfiukupan"
                                                                id="inputEmail4" placeholder=""></div>
                                                <div class="form-group col-md-4"><label for="inputEmail4">Body fat
                                                                mass (kg)</label><input type="number" class="form-control"
                                                                :value="bfm" name="bfm"
                                                                id="bfm" placeholder=""></div>                                                      
                                                <div class="form-group col-md-4"><label for="inputEmail4">Čista tjelesna
                                                                masa (kg)</label><input type="decimal" class="form-control"
                                                                 :value="cista" name="cista"
                                                                id="cista" placeholder=""></div>
                                                <div class="form-group col-md-4"><label for="inputEmail4">Idealni BFI za
                                                                danu dob</label><input type="email" class="form-control"
                                                                id="inputEmail4" placeholder=""></div>
                                                 <div class="form-group col-md-4"><label
                                                                for="inputEmail4">Ocjena</label><input type="email"
                                                                class="form-control" id="inputEmail4" placeholder="">
                                                </div>
                                        </div>
                                        <p10><strong>BODY MASS INDEX (BMI)</strong></p10>
                                        <div id="korisnik" class="form-row">
                                                <div class="form-group col-md-4"><label for="inputEmail4">BMI</label><input type="number" class="form-control"
                                                                :value="bmi" name="bmiukupan"
                                                                id="inputEmail4" placeholder=""></div>
                                                <div class="form-group col-md-4"><label for="inputEmail4">ocjena</label><input type="number" class="form-control"
                                                                :value="bmio" name="bmio" id="inputEmail4" placeholder=""></div>
                                                <div class="form-group col-md-4"><label
                                                                for="inputEmail4">Ugljikohidrati</label><input
                                                                type="number" class="form-control" id="inputEmail4"
                                                                placeholder=""></div>
                                        </div>
                                        <router-link button id="bodybutton" type="submit" class="btn btn-primary"
                                                to="/pracenje">Pračenje</router-link>
                                </div>
                           
                        </div>
                </div>
        </div>
</template>


<script>

export default {
    name: 'app',
    data () {
            return {
            tezina: null,
            visina: null,
            opvrata: null,
            opstruka: null,
            opkukova: null,
            dob: null,
            spol: null
            }
    },
    computed: {
             bmi: function () {
                  let bmi = this.tezina / ((this.visina*this.visina) / 10000)   
                      return bmi.toFixed(2)  
               }, 

              bmio: function () {
                      if ( this.bmi < 8 ) {
                              return 'pothranjenost'
                      }

                      else if ( this.bmi > 8 && this.bmi < 19 ) {
                              return 
                      }
                      else  if ( this.bmi > 19 && this.bmi < 25 ) {
                              return 'prekomjerno'
                      }
                      else if ( this.bmi > 25 ) {
                              return 'pretilo'
                      }

              }, 

             dubois: function () {
                  let dubo = 0.007184 * Math.pow(this.tezina, 0.425) * Math.pow(this.visina, 0.725)
                  return dubo.toFixed(2) 
             },

             takahira: function () {
                 let takahira = 0.007241 * Math.pow(this.tezina, 0.425) * Math.pow(this.visina, 0.725)
                 return takahira.toFixed(2)
             },

             fujimoto: function () {
                 let fujimoto = 0.008883 * Math.pow(this.tezina, 0.444) * Math.pow(this.visina, 0.666)
                 return fujimoto.toFixed(2) 
             },

             bfi: function () {

                let bfi = (1.39 * ((this.tezina / ((this.visina*this.visina) / 10000)) + (0.16 * this.dob)) - (10.34 * this.spol) - 9 )
                return bfi.toFixed(2)
                
             },

             bfm: function () {
                     let bfm = this.tezina * (this.bfi / 100)
                     return bfm.toFixed(2)
                     
             },

             cista: function () {
                     let cista = this.tezina - this.bfm
                     return cista
             }
    }

}

</script>
<style>
        #naslov {
                display: table-cell;
                vertical-align: middle;
                text-align: center;
                padding-bottom: 20px;
        }

        #bodyupit {
                background-color: #333;
                color: white;
                text-align: center;
                padding-top: 20px;
                padding-bottom: 20 px;
                margin-top: 30px;
                margin-bottom: 30px;
        }

        #bodyuotput {
                background-color: #333;
                color: white;
                padding-bottom: 10 px;
                text-align: center;
                padding-top: 20px;
                padding-bottom: 20px;
                margin-top: 30px;
                margin-bottom: 30px;
        }

        #korisnik {
                padding-top: 0px;
        }

        #bodybutton {
                margin-bottom: 20px;
        }

        h5 {
                position: center;
                font-family: Chilanka;
                font-style: normal;
                font-weight: normal;
                font-size: 40px;
                line-height: 40px;
                color: orange;
                text-align: center;
                ;

        }

        p10 {
                color: orange;
                text-align: center;
        }
</style>