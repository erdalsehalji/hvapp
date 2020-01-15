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
                                                <div class="form-group col-md-4"><label>Takahirina
                                                                metoda</label><input type="number" class="form-control"
                                                                :value="takahira" name="takihirina"
                                                                id="taka" placeholder=""></div>
                                                <div class="form-group col-md-4"><label>Fujimotova
                                                                metoda</label><input type="number" class="form-control"
                                                                :value="fujimoto" name="fujimotova"
                                                                id="fuji" placeholder=""></div>
                                        </div>
                                        <p10><strong>BODY FAT INDEX (BFI)</strong></p10>
                                        <div id="korisnik" class="form-row">
                                                <div class="form-group col-md-4"><label>Body fat
                                                                index (%)</label><input type="number" class="form-control"
                                                                 :value="bfi" name="bfiukupan"
                                                                id="inputEmail4" placeholder=""></div>
                                                <div class="form-group col-md-4"><label>Body fat
                                                                mass (kg)</label><input type="number" class="form-control"
                                                                :value="bfm" name="bfm"
                                                                id="bfm" placeholder=""></div>                                                      
                                                <div class="form-group col-md-4"><label>Čista tjelesna
                                                                masa (kg)</label><input type="decimal" class="form-control"
                                                                 :value="cista" name="cista"
                                                                id="cista" placeholder=""></div>
                                                <div class="form-group col-md-4"><label>Idealni BFI za
                                                                danu dob</label><input type="email" class="form-control"
                                                                :value="idealbfi" name="idealbfi"
                                                                id="idealbfi" placeholder=""></div>
                                                 <div class="form-group col-md-4"><label>Ocjena postotka masti</label><input type="text"
                                                                :value="bfiocjena" name="bfiocjena"
                                                                class="form-control" id="i" placeholder="">
                                                </div>
                                        </div>
                                        <p10><strong>BODY MASS INDEX (BMI)</strong></p10>
                                        <div id="korisnik" class="form-row">
                                                <div class="form-group col-md-4"><label>Body mass index</label><input type="number" class="form-control"
                                                                :value="bmi" name="bmiukupan"
                                                                id="inputEmail4" placeholder=""></div>
                                                <div class="form-group col-md-4"><label>Ocjena količnika težine i visine</label><input type="text" class="form-control"
                                                                :value="bmio" name="bmio" id="inputEmail4" placeholder=""></div>
                                                <div class="form-group col-md-4"><label
                                                                for="inputEmail4">Do idealnog stanja</label><input
                                                                type="email" 
                                                                 :value="idealbmi" name="idealbmi"
                                                                class="form-control" id="inputEmail4"
                                                                placeholder=""></div>
                                        </div>

                                       <p10><strong>DNEVNI METABOLIČKI UNOS</strong></p10>
                                        <div id="korisnik" class="form-row">
                                                <div class="form-group col-md-4"><label>Bazični metabolički unos</label><input type="number" class="form-control"
                                                                :value="bmr" name="bmr"
                                                                id="inputEmail4" placeholder=""></div>
                                                <div class="form-group col-md-4"><label>Niski nivo aktivnosti</label><input type="number" class="form-control"
                                                                :value="bmr1" name="bmr1"  placeholder=""></div>
                                                <div class="form-group col-md-4"><label
                                                                for="inputEmail4">Aktivnost 1-3 puta tjedno</label><input
                                                                type="number" 
                                                                 :value="bmr2" name="bmr2"
                                                                class="form-control" 
                                                                placeholder=""></div>
                                                <div class="form-group col-md-4"><label>Aktivnost 4-5 puta tjedno</label><input type="number" class="form-control"
                                                                :value="bmr3" name="bmr3"
                                                                id="inputEmail4" placeholder=""></div>
                                                <div class="form-group col-md-4"><label>Intenzivno 3-4 puta tjedno</label><input type="number" class="form-control"
                                                                :value="bmr4" name="bmr4" id="inputEmail4" placeholder=""></div>
                                                <div class="form-group col-md-4"><label
                                                                for="inputEmail4">Intenzivno 6-7 puta tjedno</label><input
                                                                type="number" 
                                                                 :value="bmr5" name="bmr5"
                                                                class="form-control" id="inputEmail4"
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
              
                  let bmi = this.tezina / ((this.visina*this.visina) / 10000) ;  
                      return bmi.toFixed(2)  
               },  
         bmio: function () {
                      if ( this.bmi < 16 ) {
                              return 'ozbiljna mršavost'
                      }
                      else if ( this.bmi > 16 && this.bmi < 17 ) {
                              return 'povećana mršavost'
                      }
                      else  if ( this.bmi > 17 && this.bmi < 18.5 ) {
                              return 'blaga mršavost'
                      }
                      else if ( this.bmi > 18.5 && this.bmi < 25 ) {
                              return 'normalno'
                      }

                        else  if ( this.bmi > 25 && this.bmi < 30 ) {
                              return 'prekomjerno'
                      }

                        else  if ( this.bmi > 30 && this.bmi < 35 ) {
                              return 'pretilost 1. stupnja'
                      }

                        else  if ( this.bmi > 35 && this.bmi < 40) {
                              return 'pretilost 2. stupnja'
                      }

                        else  if ( this.bmi > 40 ) {
                              return 'pretilost 3. stupnja'
                      }
              }, 
              idealbmi: function () {
              if (this.bmi < 18.5) {
              let ideall = this.visina / 18.5 
              return  ' + ' + ideall.toFixed(1) + 'kg'
              }

              if (this.bmi > 25) {
                if (this.bmi > 25) {
                let idealh
                idealh = this.visina / 25 
                return ' - ' + idealh.toFixed(1) + 'kg'
              }
              }

              if (this.bmi > 18 && this.bmi < 25) {
                      return 'vase je stanje idealno'
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
                if (this.spol === 'm' || this.spol === 'M') {
                let bfi = (1.39 * ((this.tezina / ((this.visina*this.visina) / 10000)) + (0.16 * this.dob)) - (10.34 * 1) - 9 ) ;     
                return bfi.toFixed(2) }

                else if (this.spol === 'Z' || this.spol === 'z') {
                let bfi = (1.39 * ((this.tezina / ((this.visina*this.visina) / 10000)) + (0.16 * this.dob)) - (10.34 * 0) - 9 ) ;     
                return bfi.toFixed(2) }              
             },
             bfm: function () {
                     let bfm = this.tezina * (this.bfi / 100)
                     return bfm.toFixed(2)
                     
             },
             cista: function () {
                     let cista = this.tezina - this.bfm
                     return cista.toFixed(2)
             },
             idealbfi: function () {
                     if ( this.spol === 'z' ||  this.spol === 'Z' ) {
                             if (this.dob < 20 ) {
                               return 17.7 + '%'
                             }
                              if (this.dob < 25 ) {
                               return 18.4 + '%'
                             }
                              if (this.dob < 30 ) {
                               return 19.3 + '%'
                             }
                              if (this.dob < 35 ) {
                               return 21.5 + '%'
                             }
                              if (this.dob < 40 ) {
                               return 22.2 + '%'
                             }
                              if (this.dob < 45 ) {
                               return 22.9 + '%'
                             }
                              if (this.dob < 50 ) {
                               return 25.2 + '%'
                             }
                              if (this.dob < 55 ) {
                               return 26.3 + '%'
                             }
                     }
                      else if ( this.spol === 'm' ||  this.spol === 'M' ) {
                             if (this.dob < 20 ) {
                               return 8.5 + '%'
                             }
                              if (this.dob < 25 ) {
                               return 10.7 + '%'
                             }
                              if (this.dob < 30 ) {
                               return 12.7 + '%'
                             }
                              if (this.dob < 35 ) {
                               return 13.7 + '%'
                             }
                              if (this.dob < 40 ) {
                               return 15.3 + '%'
                             }
                              if (this.dob < 45 ) {
                               return 16.4 + '%'
                             }
                              if (this.dob < 50 ) {
                               return 18.9 + '%'
                             }
                              if (this.dob < 55 ) {
                               return 20.9 + '%'
                             }
                     }

             },
             bfiocjena: function () {
                     if ( this.spol === 'z' ||  this.spol === 'Z' ) {
                             if (this.bfi > 10 && this.bfi < 13 ) {
                               return 'esencijalne masti'
                             }
                              if (this.bfi > 14 && this.bfi < 20) {
                               return 'sportaš'
                             }
                              if (this.bfi > 21 && this.bfi < 24 ) {
                               return 'fit'
                             }
                              if (this.bfi > 25 && this.bfi < 31 ) {
                               return  'prosjecno'
                             }
                              if (this.dob > 32 ) {
                               return 'pretilo'
                             }
                        
                     }
                      else if ( this.spol === 'm' ||  this.spol === 'M' ) {
                             if (this.bfi > 2 && this.bfi < 5 ) {
                               return 'esencijalne masti'
                             }
                              if (this.bfi > 6 && this.bfi < 13 ) {
                               return 'sportaš'
                             }
                              if (this.bfi > 14 && this.bfi < 17 ) {
                               return 'fit'
                             }
                              if (this.bfi > 18 && this.bfi < 25 ) {
                               return 'prosjecno'
                             }
                              if (this.bfi > 25) {
                               return 'pretilo'
                             }
                        }
                 },

                 bmr: function () {
                          if ( this.spol === 'm' ||  this.spol === 'm' ) {
                             let bmrm = (10 * this.tezina) + (6.25 * this.visina) - (5 * this.dob) + 5
                             return bmrm       
                             }
                          else if   ( this.spol === 'z' ||  this.spol === 'Z' ) {
                             let bmrz = (10 * this.tezina) + (6.25 * this.visina) - (5 * this.dob) - 161
                             return bmrz        
                             }                        
                     },
                
                bmr1: function () {
                        if ( this.spol === 'm' ||  this.spol === 'M' ) {
                                let bmrr = (this.bmrm * 1.2)
                         return bmrr
                        }

                       else if ( this.spol === 'z' ||  this.spol === 'Z' ) {
                         return this.bmrz * 1.2
                        }
                },

                bmr2: function () {
                        if ( this.spol === 'm' ||  this.spol === 'M' ) {
                         return this.bmrm * 1.4
                        }

                        else if ( this.spol === 'z' ||  this.spol === 'Z' ) {
                         return this.bmrz * 1.4
                        }
                },

                bmr3: function () {
                        if ( this.spol === 'm' ||  this.spol === 'M' ) {
                         return this.bmrm * 1.5
                        }

                       else if ( this.spol === 'z' ||  this.spol === 'Z' ) {
                         return this.bmrz * 1.5
                        }
                },

                bmr4: function () {
                        if ( this.spol === 'm' ||  this.spol === 'M' ) {
                         return this.bmrm * 1.6
                        }

                       else if ( this.spol === 'z' ||  this.spol === 'Z' ) {
                         return this.bmrz * 1.6
                        }
                },

                bmr5: function () {
                        if ( this.spol === 'm' ||  this.spol === 'M' ) {
                         return this.bmrm * 1.7
                        }

                        if ( this.spol === 'z' ||  this.spol === 'Z' ) {
                         return this.bmrz * 1.7
                        }
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
                padding-bottom: 20 px;
                margin-bottom: 30px;
        }
        #bodyuotput {
                background-color: #333;
                color: white;
                padding-bottom: 10 px;
                text-align: center;
                padding-bottom: 20px;
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