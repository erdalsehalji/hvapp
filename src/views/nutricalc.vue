
<template>
    <div>     
        <div class="container">
            <div class="row">
                <div id="naslov" class="col-12">
                   <h5><strong>NUTRITIVNI KALKULATOR</strong></h5>
                </div>
            <div id="nutriupit" class="col-3">
               <form>      
                   <p3>unos namirnica ISKLJUČIVO MALIM slovima</p3>           
                     <div id="korisnik" class="form-group"><label>Naziv namirnice</label><input type="char"
                                class="form-control" id="namirnica" 
                                name="namirnica" v-model="namirnica"
                                placeholder="ime namirnice">
                                </div>
                      <div class="form-group"><label >Količina</label><input type="char" class="form-control" name="kolicina" v-model="kolicina" id="kolicina" placeholder="količina/grami">
                       </div>                      
                </form>
                </div>      
             <div class="col-1">
                </div>
             <div id="nutrires" class="col-8">                      
                     <div id="korisnik" class="form-row">                      
                        <div class="form-group col-md-4"><label>Energija (kalorije)</label><input type="number" :value="izracunenergija" name="izracunenergija" class="form-control" 
                                 id="izracunenergija" placeholder="">
                                 </div>
                     <div class="form-group col-md-4"><label>Ugljikohidrati (grama)</label><input type="char" :value="izracunugljikohidrati" name="izracunugljikohidrati"
                                class="form-control" id="izracunenergija" placeholder="">
                                </div>
                     <div class="form-group col-md-4"><label>Proteini (grama)</label><input  type="char" :value="izracunproteini" name="izracunproteini"
                                id="izracunenergija" placeholder="" class="form-control">
                                </div>
                     <div class="form-group col-md-4"><label>Masti (grama)</label><input type="char" :value="izracunmasti" name="izracunmasti"
                                 id="izracunmasti" placeholder="" class="form-control">
                                </div>
                     <div class="form-group col-md-4"><label>Vlakna (grama)</label><input type="char" :value="izracunvlakna" name="izracunvlakna" 
                                 id="izracunmasti" placeholder="" class="form-control">
                                 </div>
                     <div class="form-group col-md-4"><label>Vitamin C (miligrama)</label><input type="char" :value="izracunvitaminc" name="izracunvitaminc"
                                 id="izracunvitaminc" placeholder="" class="form-control">
                                 </div>
                     <div class="form-group col-md-4"><label>Kalij (miligrama)</label><input type="char" :value="izracunkalij" name="izracunkalij" 
                                 id="izracunkalij" placeholder="" class="form-control">
                                 </div>
                     <div class="form-group col-md-4"><label>Kalcij (miligrama)</label><input type="char" :value="izracunkalcij" name="izracunkalcij" 
                                 id="izracunkalcij" placeholder="" class="form-control">
                                 </div>
                     <div class="form-group col-md-4"><label>Željezo (miligrama)</label><input type="char" :value="izracunželjezo" name="izracunzeljezo" 
                                 id="izracunželjezo" placeholder="" class="form-control">
                                 </div>                     
                    </div>
            </div>   
            <div id="nutriupit" class="col-4">
                     <div id="korisnik" class="form-row">                    
                         <div class="form-group">
                           <label>Obrok 1 (zajutrak)</label>
                      <select class="form-control " type="char" v-model="namirnica1" name="namirnica1" id="namirnica1" placeholder="" >
                        <option>Žitarice</option>
                        <option>Kuhano jaje</option>
                        <option>Kravlji sir i pecivo</option>
                        <option>Pecivo i sirni namaz</option>
                        <option>Jabuka</option>
                        <option>Banana</option>
                        <option>Bobičasto voće</option>
                        <option>Omlet</option>
                        <option>Čokoladica</option>
                        <option>Smoothie</option>
                      </select>
            </div>
            <div class="form-group col-md-4"><label >Količina</label><input type="char" class="form-control"  name="kolicina1" v-model="kolicina1"
                                 id="kolicina1" placeholder="količina/grami">
                                  </div>                        
                     <div class="form-group ">
                        <label>Obrok 2 (doručak)</label>
                         <select class="form-control" type="char" v-model="namirnica2" name="namirnica2" id="namirnica2" placeholder="" >
                        <option>Sendvič</option>
                        <option>Čokoladno mlijeko</option>
                        <option>Banana</option>
                        <option>Omlet</option>
                        <option>Smoothie</option>
                        <option>Kruh i pašteta</option>
                        <option>Jabuka</option>
                        <option>Grčki jogurt</option>
                        <option>Puding i chia </option>
                        </select>
                     </div>
            <div class="form-group col-md-4"><label >Količina</label><input type="char" class="form-control" name="kolicina2" v-model="kolicina2"
                                id="kolicina2" placeholder="količina/grami">
                               </div>
            <div class="form-group">
                        <label>Obrok 3 (ručak)</label>
                        <select class="form-control" type="char" v-model="namirnica3" name="namirnica3" id="namirnica3" placeholder="" >                     
                        <option>Juha od graha</option>
                        <option>Rižoto</option>
                        <option>Palačinke s nutellom</option>
                        <option>Burek</option>
                        <option>Tortilja</option>
                        <option>Pećena riba</option>
                        <option>Pileća prsa</option>                      
                        </select>
                        </div>
            <div class="form-group col-md-4"><label >Količina</label><input type="char" class="form-control"  name="kolicina3" v-model="kolicina3"
                                id="kolicina3" placeholder="količina/grami">
                               </div>
            <div class="form-group">
                        <label>Obrok 4 (užina)</label>
                        <select class="form-control" type="char" v-model="namirnica4" name="namirnica4" id="namirnica4" placeholder="" >
                        <option>Jogurt</option>
                        <option>Kroasan</option>
                        <option>Salata</option>
                        <option>Sendvič</option>
                        <option>Jabuka</option>
                        <option>Banana</option>
                        <option>Mlijeko sa medom</option>
                        <option>Smoothie sa voćem</option>
                        <option>Kuhano jaje</option>
                        <option>Musli kalorijski</option>
                        </select>
                        </div>
            <div class="form-group col-md-4"><label >Količina</label><input type="char" class="form-control"  name="kolicina4" v-model="kolicina4"
                                id="kolicina4" placeholder="količina/grami">
                               </div>
            <div class="form-group">
                        <label>Obrok 5 (večera)</label>
                        <select class="form-control" type="char" v-model="namirnica5" name="namirnica5" id="namirnica5" placeholder="" >
                        <option>Ramen</option>
                        <option>Losos</option>
                        <option>Tuna i avokado</option>
                        <option>Pizza</option>
                        <option>Makaroni sa sirom</option>
                        <option>Piletina</option>
                        <option>Pašta s tunom</option>
                        <option>Sarma</option>
                        </select>
                        </div>
            <div class="form-group col-md-4"><label >Količina</label><input type="char" class="form-control" name="kolicina5" v-model="kolicina5"
                                id="kolicina5" placeholder="količina/grami">
                               </div>
                     </div>  
              </div>  
         <div class="col-md-1">       
           </div>
         <div id="nutrires" class="col-7">                      
            <div id="korisnik" class="form-row">                     
                        <div class="form-group col-md-4"><label>Energija (kalorije)</label><input type="char" :value="izracunenergijaukupno" name="izracunenergijaukupno"
                              class="form-control" id="izracunenergijaukupno" placeholder="">
                                </div>
                        <div class="form-group col-md-4"><label>Ugljikohidrati (grama)</label><input type="char" :value="izracunugljikohidratiukupno" name="izracunugljikohidratiukupno"
                                class="form-control" id="izracunenergijaukupno" placeholder="">
                                </div>
                        <div class="form-group col-md-4"><label>Proteini (grama)</label><input  type="char" :value="izracunproteiniukupno" name="izracunproteiniukupno"
                                id="izracunenergijaukupno" placeholder="" class="form-control">
                                </div>
                        <div class="form-group col-md-4"><label>Masti (grama)</label><input type="char" :value="izracunmastiukupno" name="izracunmastiukupno" 
                                id="izracunmastiukupno" placeholder="" class="form-control">
                                </div>
                        <div class="form-group col-md-4"><label>Vlakna (grama)</label><input type="char" :value="izracunvlaknaukupno" name="izracunvlaknaukupno" 
                                id="izracunmastiukupno" placeholder="" class="form-control">
                                </div>
                          <div class="form-group col-md-4"><label>Vitamin C (miligrama)</label><input type="char" :value="izracunvitamincukupno" name="izracunvitamincukupno" 
                                 id="izracunvitamincukupno" placeholder="" class="form-control">
                                 </div>
                          <div class="form-group col-md-4"><label>Kalij (miligrama)</label><input type="char" :value="izracunkalijukupno" name="izracunkalijukupno"
                                 id="izracunkalijukupno" placeholder="" class="form-control">
                                 </div>
                          <div class="form-group col-md-4"><label>Kalcij (miligrama)</label><input type="char" :value="izracunkalcijukupno" name="izracunkalcijukupno" 
                                 id="izracunkalcijukupno" placeholder="" class="form-control">
                                 </div>
                          <div class="form-group col-md-4"><label>Željezo (miligrama)</label><input type="char" :value="izracunželjezoukupno" name="izracunzeljezoukupno" 
                                 id="izracunželjezoukupno" placeholder="" class="form-control">
                                 </div>                    
           </div>
              <p3>Dobro došli u nutritivni kalkulator. Nude se 2 opcije : izračun nutritivnih vrijednosti za jednu namirnicu i izračun nutritivnih vrijednosti za cjelokupan dan.
                       Kod izračuna za cijeli dan potrebno je popuniti svih 5 polja sa zadanim namirnicama (namjerno su zadane baš te namirnice zbog njihovih hranjivih vrijednosti te 
                       prikladnosti baš tom obroku).
                       </p3>
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
            namirnica: 'mlijeko',
            kolicina: 1,
            namirnica1: 'Žitarice',
            namirnica2: 'Sendvič',
            namirnica3: 'Juha od graha',
            namirnica4: 'Jogurt',
            namirnica5: 'Ramen',
            kolicina1: 1,
            kolicina2: 1,
            kolicina3: 1,
            kolicina4: 1,
            kolicina5: 1
         
            }
    },
/* NUTRICALC RAČUNANJE VRIJEDNOSTI, DANE VRIJEDNOSTI SE ODNOSE NA 1 GRAM NAMIRNICE 
KORIŠTENI SU PODACI SA https://www.fatsecret.com/calories-nutrition/usda/ i sa https://www.nutritionvalue.org (Data from USDA National Nutrient Database for Standard Reference.)/ 
FORME ZA LOGIN, SIGNUP, TJELESNE SPECIFIKACIJE SU PREUZETE SA BOOTSTRAPA I MODIFICIRANE SU NA NAČIN KOJI JE ODGOVARAO ZA HEALTHVISOR APLIKACIJU */

    computed: {
      
      /* PODATCI ZA OBROKE */
      izracunenergija1: function () {
         if (this.namirnica1 === 'Žitarice') {
            let nam1e = this.kolicina1 * 3.79
            return nam1e
         }
           if (this.namirnica1 === 'Kuhano jaje') {
            let nam1e = this.kolicina1 * 1.55
            return nam1e
         }
           if (this.namirnica1 === 'Kravlji sir i pecivo') {
            let nam1e = this.kolicina1 * 5.19
            return nam1e
         }
           if (this.namirnica1 === 'Pecivo i sirni namaz') {
            let nam1e = this.kolicina1 * 5.5
            return nam1e
         }
           if (this.namirnica1 === 'Jabuka') {
            let nam1e = this.kolicina1 * 0.52
            return nam1e
         }
           if (this.namirnica1 === 'Banana') {
            let nam1e = this.kolicina1 * 0.107
            return nam1e
         }
           if (this.namirnica1 === 'Bobičasto voće') {
            let nam1e = this.kolicina1 * 0.57
            return nam1e
         }
           if (this.namirnica1 === 'Omlet') {
            let nam1e = this.kolicina1 * 1.57
            return nam1e
         }
           if (this.namirnica1 === 'Čokoladica') {
            let nam1e = this.kolicina1 * 5.12
            return nam1e
         }
           if (this.namirnica1 === 'Smoothie') {
            let nam1e = this.kolicina1 * 0.62
            return nam1e
         }
      },
      izracunugljikohidrati1: function () {
         if (this.namirnica1 === 'Žitarice') {
            let nam1u = this.kolicina1 * 2.79
            return nam1u
         }
           if (this.namirnica1 === 'Kuhano jaje') {
            let nam1u = this.kolicina1 * 0.045
            return nam1u
         }
           if (this.namirnica1 === 'Kravlji sir i pecivo') {
            let nam1u = this.kolicina1 * 2.233
            return nam1u
         }
           if (this.namirnica1 === 'Pecivo i sirni namaz') {
            let nam1u = this.kolicina1 * 2.162
            return nam1u
         }
           if (this.namirnica1 === 'Jabuka') {
            let nam1u = this.kolicina1 * 0.14
            return nam1u
         }
           if (this.namirnica1 === 'Banana') {
            let nam1u = this.kolicina1 * 0.23
            return nam1u
         }
           if (this.namirnica1 === 'Bobičasto voće') {
            let nam1u = this.kolicina1 * 0.517
            return nam1u
         }
           if (this.namirnica1 === 'Omlet') {
            let nam1u = this.kolicina1 * 0.023
            return nam1u
         }
           if (this.namirnica1 === 'Čokoladica') {
            let nam1u = this.kolicina1 * 2.46
            return nam1u
         }
           if (this.namirnica1 === 'Smoothie') {
            let nam1u = this.kolicina1 * 0.1596
            return nam1u
         }
      },
      izracunproteini1: function () {
         if (this.namirnica1 === 'Žitarice') {
            let nam1p = this.kolicina1 * 0.455
            return nam1p
         }
           if (this.namirnica1 === 'Kuhano jaje') {
            let nam1p = this.kolicina1 * 0.549
            return nam1p
         }
           if (this.namirnica1 === 'Kravlji sir i pecivo') {
            let nam1p = this.kolicina1 * 0.982
            return nam1p
         }
           if (this.namirnica1 === 'Pecivo i sirni namaz') {
            let nam1p = this.kolicina1 * 0.659
            return nam1p
         }
           if (this.namirnica1 === 'Jabuka') {
            let nam1p = this.kolicina1 * 22
            return nam1p
         }
           if (this.namirnica1 === 'Banana') {
            let nam1p = this.kolicina1 * 0.011
            return nam1p
         }
           if (this.namirnica1 === 'Bobičasto voće') {
            let nam1p = this.kolicina1 * 0.025
            return nam1p
         }
           if (this.namirnica1 === 'Omlet') {
            let nam1p = this.kolicina1 * 0.462
            return nam1p
         }
           if (this.namirnica1 === 'Čokoladica') {
            let nam1p = this.kolicina1 * 0.265
            return nam1p
         }
           if (this.namirnica1 === 'Smoothie') {
            let nam1p = this.kolicina1 * 0.0042
            return nam1p
         }
      },
      izracunmasti1: function () {
         if (this.namirnica1 === 'Žitarice') {
            let nam1m = this.kolicina1 * 0.546
            return nam1m
         }
           if (this.namirnica1 === 'Kuhano jaje') {
            let nam1m = this.kolicina1 * 0.957
            return nam1m
         }
           if (this.namirnica1 === 'Kravlji sir i pecivo') {
            let nam1m = this.kolicina1 * 1.98
            return nam1m
         }
           if (this.namirnica1 === 'Pecivo i sirni namaz') {
            let nam1m = this.kolicina1 * 2.67
            return nam1m
         }
           if (this.namirnica1 === 'Jabuka') {
            let nam1m = this.kolicina1 * 0.14
            return nam1m
         }
           if (this.namirnica1 === 'Banana') {
            let nam1m = this.kolicina1 * 0.003
            return nam1m
         }
           if (this.namirnica1 === 'Bobičasto voće') {
            let nam1m = this.kolicina1 * 0.028
            return nam1m
         }
           if (this.namirnica1 === 'Omlet') {
            let nam1m = this.kolicina1 * 1.09
            return nam1m
         }
           if (this.namirnica1 === 'Čokoladica') {
            let nam1m = this.kolicina1 * 2.36
            return nam1m
         }
           if (this.namirnica1 === 'Smoothie') {
            let nam1m = this.kolicina1 * 0.0014
            return nam1m
         }
      },
      izracunvlakna1: function () {
         if (this.namirnica1 === 'Žitarice') {
            let nam1v = this.kolicina1 * 0.101
            return nam1v
         }
           if (this.namirnica1 === 'Kuhano jaje') {
            let nam1v = this.kolicina1 * 0.0
            return nam1v
         }
           if (this.namirnica1 === 'Kravlji sir i pecivo') {
            let nam1v = this.kolicina1 * 0.096
            return nam1v
         }
           if (this.namirnica1 === 'Pecivo i sirni namaz') {
            let nam1v = this.kolicina1 * 0.036
            return nam1v
         }
           if (this.namirnica1 === 'Jabuka') {
            let nam1v = this.kolicina1 * 0.023
            return nam1v
         }
           if (this.namirnica1 === 'Banana') {
            let nam1v = this.kolicina1 * 0.26
            return nam1v
         }
           if (this.namirnica1 === 'Bobičasto voće') {
            let nam1v = this.kolicina1 * 0.024
            return nam1v
         }
           if (this.namirnica1 === 'Omlet') {
            let nam1v = this.kolicina1 * 0.0
            return nam1v
         }
           if (this.namirnica1 === 'Čokoladica') {
            let nam1v = this.kolicina1 * 0.022
            return nam1v
         }
           if (this.namirnica1 === 'Smoothie') {
            let nam1v = this.kolicina1 * 0.01
            return nam1v
         }
      },
      izracunvitamic1: function () {
         if (this.namirnica1 === 'Žitarice') {
            let nam1vi = this.kolicina1 * 0.0
            return nam1vi
         }
           if (this.namirnica1 === 'Kuhano jaje') {
            let nam1vi = this.kolicina1 * 0.0
            return nam1vi
         }
           if (this.namirnica1 === 'Kravlji sir i pecivo') {
            let nam1vi = this.kolicina1 * 0.002
            return nam1vi
         }
           if (this.namirnica1 === 'Pecivo i sirni namaz') {
            let nam1vi = this.kolicina1 * 0.002
            return nam1vi
         }
           if (this.namirnica1 === 'Jabuka') {
            let nam1vi = this.kolicina1 * 0.077
            return nam1vi
         }
           if (this.namirnica1 === 'Banana') {
            let nam1vi = this.kolicina1 * 0.103
            return nam1vi
         }
           if (this.namirnica1 === 'Bobičasto voće') {
            let nam1vi = this.kolicina1 * 0.91
            return nam1vi
         }
           if (this.namirnica1 === 'Omlet') {
            let nam1vi = this.kolicina1 * 0.0
            return nam1vi
         }
           if (this.namirnica1 === 'Čokoladica') {
            let nam1vi = this.kolicina1 * 0.5
            return nam1vi
         }
           if (this.namirnica1 === 'Smoothie') {
            let nam1vi = this.kolicina1 * 0.15
            return nam1vi
         }
      },
      izracunkalij1: function () {
         if (this.namirnica1 === 'Žitarice') {
            let nam1k = this.kolicina1 * 3.62
            return nam1k
         }
           if (this.namirnica1 === 'Kuhano jaje') {
            let nam1k = this.kolicina1 * 1.26
            return nam1k
         }
           if (this.namirnica1 === 'Kravlji sir i pecivo') {
            let nam1k = this.kolicina1 * 2.17
            return nam1k
         }
           if (this.namirnica1 === 'Pecivo i sirni namaz') {
            let nam1k = this.kolicina1 * 1.25
            return nam1k
         }
           if (this.namirnica1 === 'Jabuka') {
            let nam1k = this.kolicina1 * 1.7
            return nam1k
         }
           if (this.namirnica1 === 'Banana') {
            let nam1k = this.kolicina1 * 3.58
            return nam1k
         }
           if (this.namirnica1 === 'Bobičasto voće') {
            let nam1k = this.kolicina1 * 0.77
            return nam1k
         }
           if (this.namirnica1 === 'Omlet') {
            let nam1k = this.kolicina1 * 1.14
            return nam1k
         }
           if (this.namirnica1 === 'Čokoladica') {
            let nam1k = this.kolicina1 * 3.25
            return nam1k
         }
           if (this.namirnica1 === 'Smoothie') {
            let nam1k = this.kolicina1 * 1.60
            return nam1k
         }
      },
      izracunkalcij1: function () {
         if (this.namirnica1 === 'Žitarice') {
            let nam1kc = this.kolicina1 * 0.52
            return nam1kc
         }
           if (this.namirnica1 === 'Kuhano jaje') {
            let nam1kc = this.kolicina1 * 0.50
            return nam1kc
         }
           if (this.namirnica1 === 'Kravlji sir i pecivo') {
            let nam1kc = this.kolicina1 * 5.05
            return nam1kc
         }
           if (this.namirnica1 === 'Pecivo i sirni namaz') {
            let nam1 = this.kolicina1 * 0.88
            return nam1
         }
           if (this.namirnica1 === 'Jabuka') {
            let nam1kc = this.kolicina1 * 0.06
            return nam1kc
         }
           if (this.namirnica1 === 'Banana') {
            let nam1kc = this.kolicina1 * 0.05
            return nam1kc
         }
           if (this.namirnica1 === 'Bobičasto voće') {
            let nam1kc = this.kolicina1 * 0.06
            return nam1kc
         }
           if (this.namirnica1 === 'Omlet') {
            let nam1kc = this.kolicina1 * 0.47
            return nam1kc
         }
           if (this.namirnica1 === 'Čokoladica') {
            let nam1kc = this.kolicina1 * 1.58
            return nam1kc
         }
           if (this.namirnica1 === 'Smoothie') {
            let nam1kc = this.kolicina1 * 0.07
            return nam1kc
         }
      },
      izracunželjezo1: function () {
         if (this.namirnica1 === 'Žitarice') {
            let nam1ž = this.kolicina1 * 0.043
            return nam1ž
         }
           if (this.namirnica1 === 'Kuhano jaje') {
            let nam1ž = this.kolicina1 * 0.012
            return nam1ž
         }
           if (this.namirnica1 === 'Kravlji sir i pecivo') {
            let nam1ž = this.kolicina1 * 0.038
            return nam1ž
         }
           if (this.namirnica1 === 'Pecivo i sirni namaz') {
            let nam1ž = this.kolicina1 * 0.042
            return nam1ž
         }
           if (this.namirnica1 === 'Jabuka') {
            let nam1ž = this.kolicina1 * 0.0026
            return nam1ž
         }
           if (this.namirnica1 === 'Banana') {
            let nam1ž = this.kolicina1 * 0.0012
            return nam1ž
         }
           if (this.namirnica1 === 'Bobičasto voće') {
            let nam1ž = this.kolicina1 * 0.003
            return nam1ž
         }
           if (this.namirnica1 === 'Omlet') {
            let nam1ž = this.kolicina1 * 0.015
            return nam1ž
         }
           if (this.namirnica1 === 'Čokoladica') {
            let nam1ž = this.kolicina1 * 0.011
            return nam1ž
         }
           if (this.namirnica1 === 'Smoothie') {
            let nam1ž = this.kolicina1 * 0.0034
            return nam1ž
         }
      },
      izracunenergija2: function () {
            if (this.namirnica2 === 'Sendvič') {
            let nam2e = this.kolicina2 * 3.71
            return nam2e
         }
           if (this.namirnica2 === 'Čokoladno mlijeko') {
            let nam2e = this.kolicina2 * 0.83
            return nam2e
         }
           if (this.namirnica2 === 'Banana') {
            let nam2e = this.kolicina2 * 0.89
            return nam2e
         }
          
           if (this.namirnica2 === 'Omlet') {
            let nam2e = this.kolicina2 * 1.57
            return nam2e
         }
           if (this.namirnica2 === 'Smoothie') {
            let nam2e = this.kolicina2 * 0.521
            return nam2e
         }
           if (this.namirnica2 === 'Kruh i pašteta') {
            let nam2e = this.kolicina2 * 8.42
            return nam2e
         }
           if (this.namirnica2 === 'Jabuka') {
            let nam2e = this.kolicina2 * 0.52
            return nam2e
         }
           if (this.namirnica2 === 'Grčki jogurt') {
            let nam2e = this.kolicina2 * 0.867
            return nam2e
         }
           if (this.namirnica2 === 'Puding i chia') {
            let nam2e = this.kolicina2 * 2.80
            return nam2e
         }

      },
       izracunugljikohidrati2: function () {
            if (this.namirnica2 === 'Sendvič') {
            let nam2u = this.kolicina2 * 1.73
            return nam2u
         }
           if (this.namirnica2 === 'Čokoladno mlijeko') {
            let nam2u = this.kolicina2 * 0.397
            return nam2u
         }
           if (this.namirnica2 === 'Banana') {
            let nam2u = this.kolicina2 * 0.228
            return nam2u
         }
        
           if (this.namirnica2 === 'Omlet') {
            let nam2u = this.kolicina2 * 0.007
            return nam2u
         }
           if (this.namirnica2 === 'Smoothie') {
            let nam2u = this.kolicina2 * 0.107
            return nam2u
         }
           if (this.namirnica2 === 'Kruh i pašteta') {
            let nam2u = this.kolicina2 * 0.48
            return nam2u
         }
           if (this.namirnica2 === 'Jabuka') {
            let nam2e = this.kolicina2 * 0.138
            return nam2e
         }
           if (this.namirnica2 === 'Grčki jogurt') {
            let nam2u = this.kolicina2 * 0.107
            return nam2u
         }
           if (this.namirnica2 === 'Puding i chia') {
            let nam2u = this.kolicina2 * 0.30
            return nam2u
         }

      },
       izracunproteini2: function () {
            if (this.namirnica2 === 'Sendvič') {
            let nam2p = this.kolicina2 * 0.633
            return nam2p
         }
           if (this.namirnica2 === 'Čokoladno mlijeko') {
            let nam2p = this.kolicina2 * 0.135
            return nam2p
         }
           if (this.namirnica2 === 'Banana') {
            let nam2p = this.kolicina2 * 0.046
            return nam2p
         }
          
           if (this.namirnica2 === 'Omlet') {
            let nam2p = this.kolicina2 * 0.106
            return nam2p
         }
           if (this.namirnica2 === 'Smoothie') {
            let nam2p = this.kolicina2 * 0.007
            return nam2p
         }
           if (this.namirnica2 === 'Kruh i pašteta') {
            let nam2p = this.kolicina2 * 0.3
            return nam2p
         }
           if (this.namirnica2 === 'Jabuka') {
            let nam2p = this.kolicina2 * 0.003
            return nam2p
         }
           if (this.namirnica2 === 'Grčki jogurt') {
            let nam2p = this.kolicina2 * 0.073
            return nam2p
         }
           if (this.namirnica2 === 'Puding i chia') {
            let nam2p = this.kolicina2 * 0.35
            return nam2p
         }

      },
       izracunmasti2: function () {
            if (this.namirnica2 === 'Sendvič') {
            let nam2m = this.kolicina2 * 1.71
            return nam2m
         }
           if (this.namirnica2 === 'Čokoladno mlijeko') {
            let nam2m = this.kolicina2 * 0.298
            return nam2m
         }
           if (this.namirnica2 === 'Banana') {
            let nam2m = this.kolicina2 * 0.003
            return nam2m
         }
          
           if (this.namirnica2 === 'Omlet') {
            let nam2m = this.kolicina2 * 0.12
            return nam2m
         }
           if (this.namirnica2 === 'Smoothie') {
            let nam2m = this.kolicina2 * 0.0
            return nam2m
         }
           if (this.namirnica2 === 'Kruh i pašteta') {
            let nam2m = this.kolicina2 * 0.58
            return nam2m
         }
           if (this.namirnica2 === 'Jabuka') {
            let nam2m = this.kolicina2 * 0.003
            return nam2m
         }
           if (this.namirnica2 === 'Grčki jogurt') {
            let nam2m = this.kolicina2 * 0.467
            return nam2m
         }
           if (this.namirnica2=== 'Puding i chia') {
            let nam2m = this.kolicina2 * 0.15
            return nam2m
         }

      },
       izracunvlakna2: function () {
            if (this.namirnica2 === 'Sendvič') {
            let nam2v = this.kolicina2 * 0.072
            return nam2v
         }
           if (this.namirnica2 === 'Čokoladno mlijeko') {
            let nam2v = this.kolicina2 * 0.008
            return nam2v
         }
           if (this.namirnica2 === 'Banana') {
            let nam2v = this.kolicina2 * 0.026
            return nam2v
         }
         
           if (this.namirnica2 === 'Omlet') {
            let nam2v = this.kolicina2 * 0.0
            return nam2v
         }
           if (this.namirnica2 === 'Smoothie') {
            let nam2v = this.kolicina2 * 0.005
            return nam2v
         }
           if (this.namirnica2 === 'Kruh i pašteta') {
            let nam2v = this.kolicina2 * 0.03
            return nam2v
         }
           if (this.namirnica2 === 'Jabuka') {
            let nam2v = this.kolicina2 * 0.024
            return nam2v
         }
           if (this.namirnica2 === 'Grčki jogurt') {
            let nam2v = this.kolicina2 * 0
            return nam2v
         }
           if (this.namirnica2 === 'Puding i chia') {
            let nam2v = this.kolicina2 * 0.70
            return nam2v
         }

      },
       izracunvitaminc2: function () {
            if (this.namirnica2 === 'Sendvič') {
            let nam2vi = this.kolicina2 * 0
            return nam2vi
         }
           if (this.namirnica2 === 'Čokoladno mlijeko') {
            let nam2vi = this.kolicina2 * 0.009
            return nam2vi
         }
           if (this.namirnica2 === 'Banana') {
            let nam2vi = this.kolicina2 * 0.087
            return nam2vi
         }
        
           if (this.namirnica2 === 'Omlet') {
            let nam2vi = this.kolicina2 * 0.0
            return nam2vi
         }
           if (this.namirnica2 === 'Smoothie') {
            let nam2vi = this.kolicina2 * 0.387
            return nam2vi
         }
           if (this.namirnica2 === 'Kruh i pašteta') {
            let nam2vi = this.kolicina2 * 0.15
            return nam2vi
         }
           if (this.namirnica2 === 'Jabuka') {
            let nam2vi = this.kolicina2 * 0.046
            return nam2vi
         }
           if (this.namirnica2 === 'Grčki jogurt') {
            let nam2vi = this.kolicina2 * 0
            return nam2vi
         }
           if (this.namirnica2 === 'Puding i chia') {
            let nam2vi = this.kolicina2 * 0.5
            return nam2vi
         }

      },
      izracunkalij2: function () {
            if (this.namirnica2 === 'Sendvič') {
            let nam2k = this.kolicina2 * 4.29
            return nam2k
         }
           if (this.namirnica2 === 'Čokoladno mlijeko') {
            let nam2k = this.kolicina2 * 1.67
            return nam2k
         }
           if (this.namirnica2 === 'Banana') {
            let nam2k = this.kolicina2 * 3.58
            return nam2k
         }
         
           if (this.namirnica2 === 'Omlet') {
            let nam2k = this.kolicina2 * 1.14
            return nam2k
         }
           if (this.namirnica2 === 'Smoothie') {
            let nam2k = this.kolicina2 * 0
            return nam2k
         }
           if (this.namirnica2 === 'Kruh i pašteta') {
            let nam2k = this.kolicina2 * 9.20
            return nam2k
         }
           if (this.namirnica2 === 'Jabuka') {
            let nam2k = this.kolicina2 * 1.07
            return nam2k
         }
           if (this.namirnica2 === 'Grčki jogurt') {
            let nam2k = this.kolicina2 * 0
            return nam2k
         }
           if (this.namirnica2 === 'Puding i chia') {
            let nam2k = this.kolicina2 * 4.0
            return nam2k
         }

      },
      izracunkalcij2: function () {
            if (this.namirnica2 === 'Sendvič') {
            let nam2kc = this.kolicina2 * 0.844
            return nam2kc
         }
           if (this.namirnica2 === 'Čokoladno mlijeko') {
            let nam2kc = this.kolicina2 * 1.12
            return nam2kc
         }
           if (this.namirnica2 === 'Banana') {
            let nam2kc = this.kolicina2 * 0.05
            return nam2kc
         }
         
           if (this.namirnica2 === 'Omlet') {
            let nam2kc = this.kolicina2 * 0.47
            return nam2kc
         }
           if (this.namirnica2 === 'Smoothie') {
            let nam2kc = this.kolicina2 * 0.104
            return nam2kc
         }
           if (this.namirnica2 === 'Kruh i pašteta') {
            let nam2kc = this.kolicina2 * 1.20
            return nam2kc
         }
           if (this.namirnica2 === 'Jabuka') {
            let nam2kc = this.kolicina2 * 0.06
            return nam2kc
         }
           if (this.namirnica2 === 'Grčki jogurt') {
            let nam2kc = this.kolicina2 * 0.667
            return nam2kc
         }
           if (this.namirnica2 === 'Puding i chia') {
            let nam2kc = this.kolicina2 * 0.85
            return nam2kc
         }

      },
      izracunželjezo2: function () {
            if (this.namirnica2 === 'Sendvič') {
            let nam2ž = this.kolicina2 * 0.022
            return nam2ž
         }
           if (this.namirnica2 === 'Čokoladno mlijeko') {
            let nam2ž = this.kolicina2 * 0.002
            return nam2ž
         }
           if (this.namirnica2 === 'Banana') {
            let nam2ž = this.kolicina2 * 0.003
            return nam2ž
         }
         
           if (this.namirnica2 === 'Omlet') {
            let nam2ž = this.kolicina2 * 0.015
            return nam2ž
         }
           if (this.namirnica2 === 'Smoothie') {
            let nam2ž = this.kolicina2 * 0.002
            return nam2ž
         }
           if (this.namirnica2 === 'Kruh i pašteta') {
            let nam2ž = this.kolicina2 * 0.20
            return nam2ž
         }
           if (this.namirnica2 === 'Jabuka') {
            let nam2ž = this.kolicina2 * 0.001
            return nam2ž
         }
           if (this.namirnica2 === 'Grčki jogurt') {
            let nam2ž = this.kolicina2 * 0
            return nam2ž
         }
           if (this.namirnica2 === 'Puding i chia') {
            let nam2ž = this.kolicina2 * 0.70
            return nam2ž
         }

      },
      izracunenergija3: function () {
           
           if (this.namirnica3 === 'Juha od graha') {
            let nam3e = this.kolicina3 * 0.54
            return nam3e
         }
           if (this.namirnica3 === 'Rižoto') {
            let nam3e = this.kolicina3 * 1.41
            return nam3e
         }
           if (this.namirnica3 === 'Palačinke s nutellom') {
            let nam3e = this.kolicina3 * 12.24
            return nam3e
         }
           if (this.namirnica3 === 'Burek') {
            let nam3e = this.kolicina3 * 2.10
            return nam3e
         }
           if (this.namirnica3 === 'Tortilja') {
            let nam3e = this.kolicina3 * 1.70
            return nam3e
           }
           if (this.namirnica3 === 'Pećena riba') {
            let nam3e = this.kolicina3 * 2.28
            return nam3e
         }
           if (this.namirnica3 === 'Pileća prsa') {
            let nam3e = this.kolicina3 * 2.97
            return nam3e
         }
          

      },
      izracunugljikohidrati3: function () {
           
           if (this.namirnica3 === 'Juha od graha') {
            let nam3u = this.kolicina3 * 0.076
            return nam3u
         }
           if (this.namirnica3 === 'Rižoto') {
            let nam3u = this.kolicina3 * 0.152
            return nam3u
         }
           if (this.namirnica3 === 'Palačinke s nutellom') {
            let nam3u = this.kolicina3 * 0.39
            return nam3u
         }
           if (this.namirnica3 === 'Burek') {
            let nam3u = this.kolicina3 * 0.2
            return nam3u
         }
           if (this.namirnica3 === 'Tortilja') {
            let nam3u = this.kolicina3 * 0.36
            return nam3u
         }
           if (this.namirnica3 === 'Pećena riba') {
            let nam3u = this.kolicina3 * 0.064
            return nam3u
         }
           if (this.namirnica3 === 'Pileća prsa') {
            let nam3u = this.kolicina3 * 0.163
            return nam3u
         }
      },
      izracunproteini3: function () {
          
           if (this.namirnica3 === 'Juha od graha') {
            let nam3p = this.kolicina3 * 0.026
            return nam3p
         }
           if (this.namirnica3 === 'Rižoto') {
            let nam3p = this.kolicina3 * 0.046
            return nam3p
         }
           if (this.namirnica3 === 'Palačinke s nutellom') {
            let nam3p = this.kolicina3 * 0.036
            return nam3p
         }
           if (this.namirnica3 === 'Burek') {
            let nam3p = this.kolicina3 * 0.1
            return nam3p
         }
           if (this.namirnica3 === 'Tortilja') {
            let nam3p = this.kolicina3 * 0.167
            return nam3p
         }
           if (this.namirnica3 === 'Pećena riba') {
            let nam3p = this.kolicina3 * 0.186
            return nam3p
         }
           if (this.namirnica3 === 'Pileća prsa') {
            let nam3p = this.kolicina3 * 0.156
            return nam3p
         }
      },
      izracunmasti3: function () {
        
           if (this.namirnica3 === 'Juha od graha') {
            let nam3m = this.kolicina3 * 0.0158
            return nam3m
         }
           if (this.namirnica3 === 'Rižoto') {
            let nam3m = this.kolicina3 * 0.056
            return nam3m
         }
           if (this.namirnica3 === 'Palačinke s nutellom') {
            let nam3m = this.kolicina3 * 0.06
            return nam3m
         }
           if (this.namirnica3 === 'Burek') {
            let nam3m = this.kolicina3 * 0.10
            return nam3m
         }
           if (this.namirnica3 === 'Tortilja') {
            let nam3m = this.kolicina3 * 0.083
            return nam3m
         }
           if (this.namirnica3 === 'Pećena riba') {
            let nam3m = this.kolicina3 * 0.139
            return nam3m
         }
           if (this.namirnica3 === 'Pileća prsa') {
            let nam3m = this.kolicina3 * 0.188
            return nam3m
         }

      },
      izracunvlakna3: function () {
          
           if (this.namirnica3 === 'Juha od graha') {
            let nam3v = this.kolicina3 * 0.034
            return nam3v
         }
           if (this.namirnica3 === 'Rižoto') {
            let nam3v = this.kolicina3 * 0.006
            return nam3v
         }
           if (this.namirnica3 === 'Palačinke s nutellom') {
            let nam3v = this.kolicina3 * 0.0
            return nam3v
         }
           if (this.namirnica3 === 'Burek') {
            let nam3v = this.kolicina3 * 0.07
            return nam3v
         }
           if (this.namirnica3 === 'Tortilja') {
            let nam3v = this.kolicina3 * 0.034
            return nam3v
         }
           if (this.namirnica3 === 'Pećena riba') {
            let nam3v = this.kolicina3 * 0.0
            return nam3v
         }
           if (this.namirnica3 === 'Pileća prsa') {
            let nam3v = this.kolicina3 * 0.009
            return nam3v
         }


      },
      izracunvitaminc3: function () {
          
           if (this.namirnica3 === 'Juha od graha') {
            let nam3vi = this.kolicina3 * 0.005
            return nam3vi
         }
           if (this.namirnica3 === 'Rižoto') {
            let nam3vi = this.kolicina3 * 0.011
            return nam3vi
         }
           if (this.namirnica3 === 'Palačinke s nutellom') {
            let nam3vi = this.kolicina3 * 0.015
            return nam3vi
         }
           if (this.namirnica3 === 'Burek') {
            let nam3e = this.kolicina3 * 0.0
            return nam3e
         }
           if (this.namirnica3 === 'Tortilja') {
            let nam3vi = this.kolicina3 * 0.059
            return nam3vi
         }
           if (this.namirnica3 === 'Pećena riba') {
            let nam3vi = this.kolicina3 * 0.0
            return nam3vi
         }
           if (this.namirnica3 === 'Pileća prsa') {
            let nam3vi = this.kolicina3 * 0.006
            return nam3vi
         }

      },
      izracunkalij3: function () {
      
           if (this.namirnica3 === 'Juha od graha') {
            let nam3k = this.kolicina3 * 1.41
            return nam3k
         }
           if (this.namirnica3 === 'Rižoto') {
            let nam3k = this.kolicina3 * 0.79
            return nam3k
         }
           if (this.namirnica3 === 'Palačinke s nutellom') {
            let nam3k = this.kolicina3 * 1.08
            return nam3k
         }
           if (this.namirnica3 === 'Burek') {
            let nam3k = this.kolicina3 * 0.80
            return nam3k
         }
           if (this.namirnica3 === 'Tortilja') {
            let nam3k = this.kolicina3 * 0.0
            return nam3k
         }
           if (this.namirnica3 === 'Pećena riba') {
            let nam3k = this.kolicina3 * 1.55
            return nam3k
         }
           if (this.namirnica3 === 'Pileća prsa') {
            let nam3k = this.kolicina3 * 2.61
            return nam3k
         }


      },
      izracunkalcij3: function () {
         
           if (this.namirnica3 === 'Juha od graha') {
            let nam3kc = this.kolicina3 * 0.26
            return nam3kc
         }
           if (this.namirnica3 === 'Rižoto') {
            let nam3kc = this.kolicina3 * 0.837
            return nam3kc
         }
           if (this.namirnica3 === 'Palačinke s nutellom') {
            let nam3kc = this.kolicina3 * 0.55
            return nam3kc
         }
           if (this.namirnica3 === 'Burek') {
            let nam3kc = this.kolicina3 * 0.0
            return nam3kc
         }
           if (this.namirnica3 === 'Tortilja') {
            let nam3kc = this.kolicina3 * 1.06
            return nam3kc
         }
           if (this.namirnica3 === 'Pećena riba') {
            let nam3kc = this.kolicina3 * 0.5
            return nam3kc
         }
           if (this.namirnica3 === 'Pileća prsa') {
            let nam3kc = this.kolicina3 * 0.14
            return nam3kc
         }


      },
      izracunželjezo3: function () {
         
           if (this.namirnica3 === 'Juha od graha') {
            let nam3ž = this.kolicina3 * 0.0066
            return nam3ž
         }
           if (this.namirnica3 === 'Rižoto') {
            let nam3ž = this.kolicina3 * 0.003
            return nam3ž
         }
           if (this.namirnica3 === 'Palačinke s nutellom') {
            let nam3ž = this.kolicina3 * 0.011
            return nam3ž
         }
           if (this.namirnica3 === 'Burek') {
            let nam3ž = this.kolicina3 * 0.0
            return nam3ž
         }
           if (this.namirnica3 === 'Tortilja') {
            let nam3ž = this.kolicina3 * 0.04
            return nam3ž
         }
           if (this.namirnica3 === 'Pećena riba') {
            let nam3ž = this.kolicina3 * 0.011
            return nam3ž
         }
           if (this.namirnica3 === 'Pileća prsa') {
            let nam3ž = this.kolicina3 * 0.008
            return nam3ž
         }
      },
      izracunenergija4: function () {
           if (this.namirnica4 === 'Jogurt') {
            let nam4e = this.kolicina4 * 0.61
            return nam4e
         }
           if (this.namirnica4 === 'Kroasan') {
            let nam4e = this.kolicina4 * 2.54
            return nam4e
         }
           if (this.namirnica4 === 'Salata') {
            let nam4e = this.kolicina4 * 0.5
            return nam4e
         }
           if (this.namirnica4 === 'Sendvič') {
            let nam4e = this.kolicina4 * 3.71
            return nam4e
         }
           if (this.namirnica4 === 'Jabuka') {
            let nam4e = this.kolicina4 * 0.12
            return nam4e
         }
           if (this.namirnica4 === 'Banana') {
            let nam4e = this.kolicina4 * 0.39
            return nam4e
         }
           if (this.namirnica4 === 'Mlijeko sa medom') {
            let nam4e = this.kolicina4 * 5.23
            return nam4e
         }
           if (this.namirnica4 === 'Smoothie sa voćem') {
            let nam4e = this.kolicina4 * 0.528
            return nam4e
         }
           if (this.namirnica4 === 'Kuhano jaje') {
            let nam4e = this.kolicina4 * 1.57
            return nam4e
         }
           if (this.namirnica4 === 'Musli kalorijski') {
            let nam4e = this.kolicina4 * 3.75
            return nam4e
         }
      },
      izracunugljikohidrati4: function () {
           if (this.namirnica4 === 'Jogurt') {
            let nam4u = this.kolicina4 * 0.047
            return nam4u
         }
           if (this.namirnica4 === 'Kroasan') {
            let nam4u = this.kolicina4 * 0.371
            return nam4u
         }
           if (this.namirnica4 === 'Salata') {
            let nam4u = this.kolicina4 * 0.131
            return nam4u
         }
           if (this.namirnica4 === 'Sendvič') {
            let nam4u = this.kolicina4 * 1.37
            return nam4u
         }
           if (this.namirnica4 === 'Jabuka') {
            let nam4u = this.kolicina4 * 0.138
            return nam4u
         }
           if (this.namirnica4 === 'Banana') {
            let nam4u = this.kolicina4 * 0.228
            return nam4u
         }
           if (this.namirnica4 === 'Mlijeko sa medom') {
            let nam4u = this.kolicina4 * 0.33
            return nam4u
         }
           if (this.namirnica4 === 'Smoothie sa voćem') {
            let nam4u = this.kolicina4 * 0.127
            return nam4u
         }
           if (this.namirnica4 === 'Kuhano jaje') {
            let nam4u = this.kolicina4 * 0.007
            return nam4u
         }
           if (this.namirnica4 === 'Musli kalorijski') {
            let nam4u = this.kolicina4 * 2.79
            return nam4u
         }
      },
      izracunproteini4: function () {
           if (this.namirnica4 === 'Jogurt') {
            let nam4p = this.kolicina4 * 0.035
            return nam4p
         }
           if (this.namirnica4 === 'Kroasan') {
            let nam4p = this.kolicina4 * 0.005
            return nam4p
         }
           if (this.namirnica4 === 'Salata') {
            let nam4p = this.kolicina4 * 0.003
            return nam4p
         }
           if (this.namirnica4 === 'Sendvič') {
            let nam4p = this.kolicina4 * 1.71
            return nam4p
         }
           if (this.namirnica4 === 'Jabuka') {
            let nam4p = this.kolicina4 * 0.003
            return nam4p
         }
           if (this.namirnica4 === 'Banana') {
            let nam4p = this.kolicina4 * 0.011
            return nam4p
         }
           if (this.namirnica4 === 'Mlijeko sa medom') {
            let nam4p = this.kolicina4 * 0.263
            return nam4p
         }
           if (this.namirnica4 === 'Smoothie sa voćem') {
            let nam4p = this.kolicina4 * 0.007
            return nam4p
         }
           if (this.namirnica4 === 'Kuhano jaje') {
            let nam4p = this.kolicina4 * 0.106
            return nam4p
         }
           if (this.namirnica4 === 'Musli kalorijski') {
            let nam4p = this.kolicina4 * 0.455
            return nam4p
         }
      },
      izracunmasti4: function () {
           if (this.namirnica4 === 'Jogurt') {
            let nam4m = this.kolicina4 * 0.033
            return nam4m
         }
           if (this.namirnica4 === 'Kroasan') {
            let nam4m = this.kolicina4 * 0.087
            return nam4m
         }
           if (this.namirnica4 === 'Salata') {
            let nam4m = this.kolicina4 * 0.0
            return nam4m
         }
           if (this.namirnica4 === 'Sendvič') {
            let nam4m = this.kolicina4 * 0.72
            return nam4m
         }
           if (this.namirnica4 === 'Jabuka') {
            let nam4m = this.kolicina4 * 0.002
            return nam4m
         }
           if (this.namirnica4 === 'Banana') {
            let nam4m = this.kolicina4 * 0.003
            return nam4m
         }
           if (this.namirnica4 === 'Mlijeko sa medom') {
            let nam4m = this.kolicina4 * 0.10
            return nam4m
         }
           if (this.namirnica4 === 'Smoothie sa voćem') {
            let nam4m = this.kolicina4 * 0.0
            return nam4m
         }
           if (this.namirnica4 === 'Kuhano jaje') {
            let nam4m = this.kolicina4 * 0.12
            return nam4m
         }
           if (this.namirnica4 === 'Musli kalorijski') {
            let nam4m = this.kolicina4 * 0.546
            return nam4m
         }
      },
      izracunvlakna4: function () {
           if (this.namirnica4 === 'Jogurt') {
            let nam4v = this.kolicina4 * 0.0
            return nam4v
         }
           if (this.namirnica4 === 'Kroasan') {
            let nam4v = this.kolicina4 * 0.025
            return nam4v
         }
           if (this.namirnica4 === 'Salata') {
            let nam4v = this.kolicina4 * 0.01
            return nam4v
         }
           if (this.namirnica4 === 'Sendvič') {
            let nam4v = this.kolicina4 * 0.07
            return nam4v
         }
           if (this.namirnica4 === 'Jabuka') {
            let nam4v = this.kolicina4 * 0.024
            return nam4v
         }
           if (this.namirnica4 === 'Banana') {
            let nam4v = this.kolicina4 * 0.026
            return nam4v
         }
           if (this.namirnica4 === 'Mlijeko sa medom') {
            let nam4v = this.kolicina4 * 0.0
            return nam4v
         }
           if (this.namirnica4 === 'Smoothie sa voćem') {
            let nam4v = this.kolicina4 * 0.005
            return nam4v
         }
           if (this.namirnica4 === 'Kuhano jaje') {
            let nam4v = this.kolicina4 * 0.0
            return nam4v
         }
           if (this.namirnica4 === 'Musli kalorijski') {
            let nam4v = this.kolicina4 * 0.01
            return nam4v
         }
      },
      izracunvitaminc4: function () {
           if (this.namirnica4 === 'Jogurt') {
            let nam4vi = this.kolicina4 * 0.008
            return nam4vi
         }
           if (this.namirnica4 === 'Kroasan') {
            let nam4vi = this.kolicina4 * 0.0066
            return nam4vi
         }
           if (this.namirnica4 === 'Salata') {
            let nam4vi = this.kolicina4 * 0.003
            return nam4vi
         }
           if (this.namirnica4 === 'Sendvič') {
            let nam4vi = this.kolicina4 * 0.011
            return nam4vi
         }
           if (this.namirnica4 === 'Jabuka') {
            let nam4vi = this.kolicina4 * 0.0
            return nam4vi
         }
           if (this.namirnica4 === 'Banana') {
            let nam4vi = this.kolicina4 * 0.04
            return nam4vi
         }
           if (this.namirnica4 === 'Mlijeko sa medom') {
            let nam4vi = this.kolicina4 * 0.011
            return nam4vi
         }
           if (this.namirnica4 === 'Smoothie sa voćem') {
            let nam4vi = this.kolicina4 * 0.008
            return nam4vi
         }
           if (this.namirnica4 === 'Kuhano jaje') {
            let nam4vi = this.kolicina4 * 0.008
            return nam4vi
         }
           if (this.namirnica4 === 'Musli kalorijski') {
            let nam4vi = this.kolicina4 * 0.008
            return nam4vi
         }
      },
      izracunkalij4: function () {
           if (this.namirnica4 === 'Jogurt') {
            let nam4k = this.kolicina4 * 1.55
            return nam4k
         }
           if (this.namirnica4 === 'Kroasan') {
            let nam4k = this.kolicina4 * 0.92
            return nam4k
         }
           if (this.namirnica4 === 'Salata') {
            let nam4k = this.kolicina4 * 1.16
            return nam4k
         }
           if (this.namirnica4 === 'Sendvič') {
            let nam4k = this.kolicina4 * 4.29
            return nam4k
         }
           if (this.namirnica4 === 'Jabuka') {
            let nam4k = this.kolicina4 * 1.07
            return nam4k
         }
           if (this.namirnica4 === 'Banana') {
            let nam4k = this.kolicina4 * 3.58
            return nam4k
         }
           if (this.namirnica4 === 'Mlijeko sa medom') {
            let nam4k = this.kolicina4 * 13.30
            return nam4k
         }
           if (this.namirnica4 === 'Smoothie sa voćem') {
            let nam4k = this.kolicina4 * 0.104
            return nam4k
         }
           if (this.namirnica4 === 'Kuhano jaje') {
            let nam4k = this.kolicina4 * 0.47
            return nam4k
         }
           if (this.namirnica4 === 'Musli') {
            let nam4k = this.kolicina4 * 3.62
            return nam4k
         }
      },
      izracunkalcij4: function () {
           if (this.namirnica4 === 'Jogurt') {
            let nam4kc = this.kolicina4 * 1.21
            return nam4kc
         }
           if (this.namirnica4 === 'Kroasan') {
            let nam4kc = this.kolicina4 * 0.30
            return nam4kc
         }
           if (this.namirnica4 === 'Salata') {
            let nam4kc = this.kolicina4 * 0.110
            return nam4kc
         }
           if (this.namirnica4 === 'Sendvič') {
            let nam4kc = this.kolicina4 * 0.844
            return nam4kc
         }
           if (this.namirnica4 === 'Jabuka') {
            let nam4kc = this.kolicina4 * 0.06
            return nam4kc
         }
           if (this.namirnica4 === 'Banana') {
            let nam4kc = this.kolicina4 * 0.05
            return nam4kc
         }
           if (this.namirnica4 === 'Mlijeko sa medom') {
            let nam4kc = this.kolicina4 * 9.12
            return nam4kc
         }
           if (this.namirnica4 === 'Smoothie sa voćem') {
            let nam4kc = this.kolicina4 * 0.104
            return nam4kc
         }
           if (this.namirnica4 === 'Kuhano jaje') {
            let nam4kc = this.kolicina4 * 0.47
            return nam4kc
         }
           if (this.namirnica4 === 'Musli kalorijski') {
            let nam4kc = this.kolicina4 * 0.52
            return nam4kc
         }
      },
      izracunželjezo4: function () {
           if (this.namirnica4 === 'Jogurt') {
            let nam4ž = this.kolicina4 * 0.001
            return nam4ž
         }
           if (this.namirnica4 === 'Kroasan') {
            let nam4ž = this.kolicina4 * 0.011
            return nam4ž
         }
           if (this.namirnica4 === 'Salata') {
            let nam4ež = this.kolicina4 * 0.003
            return nam4ž
         }
           if (this.namirnica4 === 'Sendvič') {
            let nam4ež = this.kolicina4 * 0.022
            return nam4ž
         }
           if (this.namirnica4 === 'Jabuka') {
            let nam4ž = this.kolicina4 * 0.001
            return nam4ž
         }
           if (this.namirnica4 === 'Banana') {
            let nam4ež = this.kolicina4 * 0.003
            return nam4ž
         }
           if (this.namirnica4 === 'Mlijeko sa medom') {
            let nam4ž = this.kolicina4 * 0.005
            return nam4ž
         }
           if (this.namirnica4 === 'Smoothie sa voćem') {
            let nam4ž = this.kolicina4 * 0.002
            return nam4ž
         }
           if (this.namirnica4 === 'Kuhano jaje') {
            let nam4ž= this.kolicina4 * 0.015
            return nam4ž
         }
           if (this.namirnica4 === 'Musli kalorijski') {
            let nam4ž = this.kolicina4 * 0.04
            return nam4ž
         }
      },
      izracunenergija5: function () {
           if (this.namirnica5 === 'Ramen') {
            let nam5e = this.kolicina5 * 4.41
            return nam5e
         }
           if (this.namirnica5 === 'Losos') {
            let nam5e = this.kolicina5 * 2.06
            return nam5e
         }
           if (this.namirnica5 === 'Tuna i avokado') {
            let nam5e = this.kolicina5 * 1.35
            return nam5e
         }
           if (this.namirnica5 === 'Pizza') {
            let nam5e = this.kolicina5 * 2.76
            return nam5e
         }
           if (this.namirnica5 === 'Makaroni sa sirom') {
            let nam5e = this.kolicina5 * 2.28
            return nam5e
         }
           if (this.namirnica5 === 'Piletina') {
            let nam5e = this.kolicina5 * 2.97
            return nam5e
         }
           if (this.namirnica5 === 'Pašta s tunom') {
            let nam5e = this.kolicina5 * 3.613
            return nam5e
         }
           if (this.namirnica5 === 'Sarma') {
            let nam5e = this.kolicina5 * 2.44
            return nam5e
         }
      },
      izracunugljikohidrati5: function () {
         
           if (this.namirnica5 === 'Ramen') {
            let nam5u = this.kolicina5 * 0.628
            return nam5u
         }
           if (this.namirnica5 === 'Losos') {
            let nam5u = this.kolicina5 * 0.0
            return nam5u
         }
           if (this.namirnica5 === 'Tuna i avokado') {
            let nam5u = this.kolicina5 * 0.125
            return nam5u
         }
           if (this.namirnica5 === 'Pizza') {
            let nam5u = this.kolicina5 * 0.251
            return nam5u
         }
           if (this.namirnica5 === 'Makaroni sa sirom') {
            let nam5u = this.kolicina5 * 0.116
            return nam5u
         }
           if (this.namirnica5 === 'Piletina') {
            let nam5u = this.kolicina5 * 0.163
            return nam5u
         }
           if (this.namirnica5 === 'Pašta s tunom') {
            let nam5u = this.kolicina5 * 0.321
            return nam5u
         }
           if (this.namirnica5 === 'Sarma') {
            let nam5u = this.kolicina5 * 0.10
            return nam5u
         }
      },
      izracunproteini5: function () {
          
           if (this.namirnica5 === 'Ramen') {
            let nam5p = this.kolicina5 * 0.093
            return nam5p
         }
           if (this.namirnica5 === 'Losos') {
            let nam5p = this.kolicina5 * 0.221
            return nam5p
         }
           if (this.namirnica5 === 'Tuna i avokado') {
            let nam5p = this.kolicina5 * 0.125
            return nam5p
         }
           if (this.namirnica5 === 'Pizza') {
            let nam5p = this.kolicina5 * 0.113
            return nam5p
         }
           if (this.namirnica5 === 'Makaroni sa sirom') {
            let nam5p = this.kolicina5 * 0.118
            return nam5p
         }
           if (this.namirnica5 === 'Piletina') {
            let nam5p = this.kolicina5 * 0.156
            return nam5p
         }
           if (this.namirnica5 === 'Pašta s tunom') {
            let nam5p = this.kolicina5 * 0.204
            return nam5p
         }
           if (this.namirnica5 === 'Sarma') {
            let nam5p = this.kolicina5 * 0.12
            return nam5p
         }
      },
      izracunmasti5: function () {        
           if (this.namirnica5 === 'Ramen') {
            let nam5m = this.kolicina5 * 0.136
            return nam5m
         }
           if (this.namirnica5 === 'Losos') {
            let nam5m = this.kolicina5 * 0.123
            return nam5m
         }
           if (this.namirnica5 === 'Tuna i avokado') {
            let nam5e = this.kolicina5 * 0.039
            return nam5e
         }
           if (this.namirnica5 === 'Pizza') {
            let nam5m = this.kolicina5 * 0.14
            return nam5m
         }
           if (this.namirnica5 === 'Makaroni sa sirom') {
            let nam5m = this.kolicina5 * 0.15
            return nam5m
         }
           if (this.namirnica5 === 'Piletina') {
            let nam5m = this.kolicina5 * 0.188
            return nam5m
         }
           if (this.namirnica5 === 'Pašta s tunom') {
            let nam5m = this.kolicina5 * 0.167
            return nam5m
         }
           if (this.namirnica5 === 'Sarma') {
            let nam5m = this.kolicina5 * 0.16
            return nam5m
         }
      },
      izracunvlakna5: function () {
          
           if (this.namirnica5 === 'Ramen') {
            let nam5v = this.kolicina5 * 0.023
            return nam5v
         }
           if (this.namirnica5 === 'Losos') {
            let nam5v = this.kolicina5 * 0.0
            return nam5v
         }
           if (this.namirnica5 === 'Tuna i avokado') {
            let nam5v = this.kolicina5 * 0.016
            return nam5v
         }
           if (this.namirnica5 === 'Pizza') {
            let nam5v = this.kolicina5 * 0.022
            return nam5v
         }
           if (this.namirnica5 === 'Makaroni sa sirom') {
            let nam5v = this.kolicina5 * 0.0
            return nam5v
         }
           if (this.namirnica5 === 'Piletina') {
            let nam5v = this.kolicina5 * 0.009
            return nam5v
         }
           if (this.namirnica5 === 'Pašta s tunom') {
            let nam5v = this.kolicina5 * 0.021
            return nam5v
         }
           if (this.namirnica5 === 'Sarma') {
            let nam5v = this.kolicina5 * 0.03
            return nam5v
         }
      },
      izracunvitaminc5: function () {
           
           if (this.namirnica5 === 'Ramen') {
            let nam5vi = this.kolicina5 * 0.112
            return nam5vi
         }
           if (this.namirnica5 === 'Losos') {
            let nam5vi = this.kolicina5 * 0.037
            return nam5vi
         }
           if (this.namirnica5 === 'Tuna i avokado') {
            let nam5vi = this.kolicina5 * 0.15
            return nam5vi
         }
           if (this.namirnica5 === 'Pizza') {
            let nam5vi = this.kolicina5 * 0.034
            return nam5vi
         }
           if (this.namirnica5 === 'Makaroni sa sirom') {
            let nam5vi = this.kolicina5 * 0.162
            return nam5vi
         }
           if (this.namirnica5 === 'Piletina') {
            let nam5vi = this.kolicina5 * 0.006
            return nam5vi
         }
           if (this.namirnica5 === 'Pašta s tunom') {
            let nam5vi = this.kolicina5 * 0.05
            return nam5vi
         }
           if (this.namirnica5 === 'Sarma') {
            let nam5vi = this.kolicina5 * 0.4
            return nam5vi
         }
      },
      izracunkalij5: function () {
          
           if (this.namirnica5 === 'Ramen') {
            let nam5k = this.kolicina5 * 2.5
            return nam5k
         }
           if (this.namirnica5 === 'Losos') {
            let nam5k = this.kolicina5 * 3.84
            return nam5k
         }
           if (this.namirnica5 === 'Tuna i avokado') {
            let nam5k = this.kolicina5 * 3.305
            return nam5k
         }
           if (this.namirnica5 === 'Pizza') {
            let nam5k = this.kolicina5 * 2.09
            return nam5k
         }
           if (this.namirnica5 === 'Makaroni sa sirom') {
            let nam5k = this.kolicina5 * 3.13
            return nam5k
         }
           if (this.namirnica5 === 'Piletina') {
            let nam5k = this.kolicina5 * 2.61
            return nam5k
         }
           if (this.namirnica5 === 'Pašta s tunom') {
            let nam5k = this.kolicina5 * 2.576
            return nam5k
         }
           if (this.namirnica5 === 'Sarma') {
            let nam5k = this.kolicina5 * 3.2
            return nam5k
         }
      },
      izracunkalcij5: function () {
        
           if (this.namirnica5 === 'Ramen') {
            let nam5kc = this.kolicina5 * 0.465
            return nam5kc
         }
           if (this.namirnica5 === 'Losos') {
            let nam5kc = this.kolicina5 * 0.15
            return nam5kc
         }
           if (this.namirnica5 === 'Tuna i avokado') {
            let nam5kc = this.kolicina5 * 0.25
            return nam5kc
         }
           if (this.namirnica5 === 'Pizza') {
            let nam5kc = this.kolicina5 * 1.52
            return nam5kc
         }
           if (this.namirnica5 === 'Makaroni sa sirom') {
            let nam5kc = this.kolicina5 * 1.22
            return nam5kc
         }
           if (this.namirnica5 === 'Piletina') {
            let nam5kc = this.kolicina5 * 0.14
            return nam5kc
         }
           if (this.namirnica5 === 'Pašta s tunom') {
            let nam5kc = this.kolicina5 * 0.14
            return nam5kc
         }
           if (this.namirnica5 === 'Sarma') {
            let nam5kc = this.kolicina5 * 0.20
            return nam5kc
         }
      },
      izracunželjezo5: function () {
     
           if (this.namirnica5 === 'Ramen') {
            let nam5ž = this.kolicina5 * 0.15
            return nam5ž
         }
           if (this.namirnica5 === 'Losos') {
            let nam5ž = this.kolicina5 * 0.003
            return nam5ž
         }
           if (this.namirnica5 === 'Tuna i avokado') {
            let nam5ž = this.kolicina5 * 0.005
            return nam5ž
         }
           if (this.namirnica5 === 'Pizza') {
            let nam5ž = this.kolicina5 * 0.014
            return nam5ž
         }
           if (this.namirnica5 === 'Makaroni sa sirom') {
            let nam5ž = this.kolicina5 * 0.012
            return nam5ž
         }
           if (this.namirnica5 === 'Piletina') {
            let nam5ž = this.kolicina5 * 0.008
            return nam5ž
         }
           if (this.namirnica5 === 'Pašta s tunom') {
            let nam5ž = this.kolicina5 * 0.01
            return nam5ž
         }
           if (this.namirnica5 === 'Sarma') {
            let nam5ž = this.kolicina5 * 0.02
            return nam5ž
         }
      },

    


/* UKUPAN ZBORJ NUTRITIVNIH VRIJEDNOSTI DNEVNIH OBROKA */

          izracunenergijaukupno: function () {
                let euk = (this.izracunenergija1 + this.izracunenergija2 + this.izracunenergija3 + this.izracunenergija4 + this.izracunenergija5).toFixed(2)
                return euk 
          },
          izracunugljikohidratiukupno: function () {
                let uuk = (this.izracunugljikohidrati1 + this.izracunugljikohidrati2 + this.izracunugljikohidrati3 + this.izracunugljikohidrati4 + this.izracunugljikohidrati4).toFixed(2)
                return uuk   
          },
          izracunproteiniukupno: function () {
                let puk = (this.izracunproteini1 + this.izracunproteini2 + this.izracunproteini3 + this.izracunproteini4).toFixed(2)
                return puk
             
          },
          izracunmastiukupno: function () {
                let muk = (this.izracunmasti1 + this.izracunmasti2 + this.izracunmasti3 + this.izracunmasti4 + this.izracunmasti5).toFixed(2)
                return muk
             
          },
          izracunvlaknaukupno: function () {
                let vuk = (this.izracunvlakna1 + this.izracunvlakna2 + this.izracunvlakna3 + this.izracunvlakna4 + this.izracunvlakna5 ).toFixed(2)
                return vuk         
          },
          izracunvitamincukupno: function () {
                let viuk = (this.izracunvitamic1 + this.izracunvitaminc2 + this.izracunvitaminc3 + this.izracunvitaminc4 + this.izracunvitaminc5).toFixed(2)
                return viuk           
          },
          izracunkalijukupno: function () {
                let kuk = (this.izracunkalij1 + this.izracunkalij2 + this.izracunkalij3 + this.izracunkalij4 + this.izracunkalij5).toFixed(2)
                return kuk  
          },
          izracunkalcijukupno: function () {
                let kcuk = (this.izracunkalcij1 + this.izracunkalcij2 + this.izracunkalcij3 + this.izracunkalcij4 + this.izracunkalcij5).toFixed(2)
                return kcuk
             
          },
          izracunželjezoukupno: function () {
                let žuk = (this.izracunželjezo1 + this.izracunželjezo2 + this.izracunželjezo3 + this.izracunželjezo4 + this.izracunželjezo5 ).toFixed(2)
                return žuk
             
          },
        

        
        
        /* IZRAČUN NUTRITIVNIH VRIJEDNOSTI ZA POJEDINU NAMIRNICU */
      izracunenergija: function () {
           /*VOĆE*/
           if (this.namirnica === 'jabuka') {
           return (this.kolicina * 0.52).toFixed(2)
              }
                if (this.namirnica === 'banana') {
           return (this.kolicina * 0.89).toFixed(2)
              }
                   if (this.namirnica === 'naranča') {
           return (this.kolicina * 0.47).toFixed(2)
              }
                  if (this.namirnica === 'jagoda') {
           return (this.kolicina * 0.32).toFixed(2)
              }
              
                  if (this.namirnica === 'kruška') {
           return (this.kolicina * 0.58).toFixed(2)
              }
                   if (this.namirnica === 'limun') {
           return (this.kolicina * 0.20).toFixed(2)
              }
                   if (this.namirnica === 'breskva') {
           return (this.kolicina * 0.39).toFixed(2)
                   }
            if (this.namirnica === 'mandarina') {
           return (this.kolicina * 0.53).toFixed(2)
              }
                   if (this.namirnica === 'smokva') {
           return (this.kolicina * 0.74).toFixed(2)
              }
               if (this.namirnica === 'kiwi') {
           return (this.kolicina * 0.61).toFixed(2)
              }

            if (this.namirnica === 'mango') {
           return (this.kolicina * 0.65).toFixed(2)
              }
                   if (this.namirnica === 'marelica') {
           return (this.kolicina * 0.48).toFixed(2)
              }
                if (this.namirnica === 'kokos') {
           return (this.kolicina * 3.54).toFixed(2)
              }

            if (this.namirnica === 'malina') {
           return (this.kolicina * 0.52).toFixed(2)
              }
                   if (this.namirnica === 'borovnica') {
           return (this.kolicina * 0.57).toFixed(2)
              }
           /*POVRĆE*/
           if (this.namirnica === 'artičoka') {
           return (this.kolicina * 0.53).toFixed(2)
              }

            if (this.namirnica === 'grah') {
           return (this.kolicina * 3.47).toFixed(2)
              }
                   if (this.namirnica === 'paprika') {
           return (this.kolicina * 2.82).toFixed(2)
              }
              if (this.namirnica === 'mrkva') {
           return (this.kolicina * 0.41).toFixed(2)
              }

            if (this.namirnica === 'kelj') {
           return (this.kolicina * 0.49).toFixed(2)
              }
                   if (this.namirnica === 'kupus') {
           return (this.kolicina * 0.25).toFixed(2)
              }
              if (this.namirnica === 'krastavac') {
           return (this.kolicina * 0.15).toFixed(2)
              }

            if (this.namirnica === 'celer') {
           return (this.kolicina * 0.14).toFixed(2)
              }
                   if (this.namirnica === 'luk') {
           return (this.kolicina * 0.40).toFixed(2)
              }
              if (this.namirnica === 'lubenica') {
           return (this.kolicina * 0.30).toFixed(2)
              }

            if (this.namirnica === 'dinja') {
           return (this.kolicina * 0.28).toFixed(2)
              }
                   if (this.namirnica === 'krompir') {
           return (this.kolicina * 0.77).toFixed(2)
              }
              if (this.namirnica === 'bundeva') {
           return (this.kolicina * 0.26).toFixed(2)
              }

            if (this.namirnica === 'špinat') {
           return (this.kolicina * 0.23).toFixed(2)
              }
                   if (this.namirnica === 'rajčica') {
           return (this.kolicina * 0.23).toFixed(2)
              }
            /*GRICKALICE I ORAŠASTI PLODOVI*/
              if (this.namirnica === 'čips') {
           return (this.kolicina * 5.47).toFixed(2)
              }
                   if (this.namirnica === 'smoki') {
           return (this.kolicina * 5.20).toFixed(2)
              }
              if (this.namirnica === 'krekeri') {
           return (this.kolicina * 474).toFixed(2)
              }

            if (this.namirnica === 'kikiriki') {
           return (this.kolicina * 5.67).toFixed(2)
              }
                if (this.namirnica === 'orah') {
           return (this.kolicina * 6.18).toFixed(2)
              }
                   if (this.namirnica === 'badem') {
           return (this.kolicina * 5.97).toFixed(2)
              }
              if (this.namirnica === 'lješnjak') {
           return (this.kolicina * 6.28).toFixed(2)
              }

            if (this.namirnica === 'indijski oraščić') {
           return (this.kolicina * 5.53).toFixed(2)
              }
            /*PIĆA*/
             if (this.namirnica === 'voda') {
           return (this.kolicina * 0.0).toFixed(2)
              }
              if (this.namirnica === 'kola') {
           return (this.kolicina * 0.42).toFixed(2)
              }

            if (this.namirnica === 'mineralna voda') {
           return (this.kolicina * 0.34).toFixed(2)
              }
                if (this.namirnica === 'cijeđeni voćni sok') {
           return (this.kolicina * 0.45).toFixed(2)
              }
                   if (this.namirnica === 'maslinovo ulje') {
           return (this.kolicina * 8.84).toFixed(2)
              }
              if (this.namirnica === 'bademovo ulje') {
           return (this.kolicina * 8.84).toFixed(2)
              }

            if (this.namirnica === 'mlijeko') {
           return (this.kolicina * 4.60).toFixed(2)
              }
                if (this.namirnica === 'čokoladno mlijeko') {
           return (this.kolicina * 0.77).toFixed(2)
              }
              if (this.namirnica === 'kokosovo mlijeko') {
           return (this.kolicina * 2.30).toFixed(2)
              } 
            /*NAMIRNICE*/
            if (this.namirnica === 'sir') {
           return (this.kolicina * 3.50).toFixed(2)
              }
              if (this.namirnica === 'ocat') {
           return (this.kolicina * 0.88).toFixed(2)
              }

            if (this.namirnica === 'brašno') {
           return (this.kolicina * 3.60).toFixed(2)
              }
                if (this.namirnica === 'sol') {
           return (this.kolicina * 0.0).toFixed(2)
              }
              if (this.namirnica === 'papar') {
           return (this.kolicina * 2.55).toFixed(2)
              }
                if (this.namirnica === 'sećer') {
           return (this.kolicina * 3.87).toFixed(2)
              }
              if (this.namirnica === 'kruh') {
           return (this.kolicina * 2.66).toFixed(2)
              }

            if (this.namirnica === 'chia sjemenke') {
           return (this.kolicina * 4.90).toFixed(2)
              }
                if (this.namirnica === 'čokolada') {
           return (this.kolicina * 5.05).toFixed(2)
              }  
        },
      izracunugljikohidrati: function () {
           if (this.namirnica === 'jabuka') {
           return (this.kolicina * 0.138).toFixed(2)
              }

              if (this.namirnica === 'banana') {
           return (this.kolicina * 0.228).toFixed(2)
              }

                   if (this.namirnica === 'naranča') {
           return (this.kolicina * 0.117).toFixed(2)
              }
                  if (this.namirnica === 'jagoda') {
           return (this.kolicina * 0.077).toFixed(2)
              }
                   if (this.namirnica === 'kruška') {
           return (this.kolicina * 0.155).toFixed(2)
              }

            if (this.namirnica === 'limun') {
           return (this.kolicina * 0.107).toFixed(2)
              }
                   if (this.namirnica === 'breskva') {
           return (this.kolicina * 0.099).toFixed(2)
              }
              
            if (this.namirnica === 'mandarina') {
           return (this.kolicina * 0.133).toFixed(2)
              }
                   if (this.namirnica === 'smokva') {
           return (this.kolicina * 0.19).toFixed(2)
              }
                if (this.namirnica === 'kiwi') {
           return (this.kolicina * 0.147).toFixed(2)
              }

            if (this.namirnica === 'mango') {
           return (this.kolicina * 0.17).toFixed(2)
              }
                   if (this.namirnica === 'marelica') {
           return (this.kolicina * 0.112).toFixed(2)
              }
                if (this.namirnica === 'kokos') {
           return (this.kolicina * 0.152).toFixed(2)
              }

            if (this.namirnica === 'malina') {
           return (this.kolicina * 0.119).toFixed(2)
              }
                   if (this.namirnica === 'borovnica') {
           return (this.kolicina * 0.145).toFixed(2)
              }
           /*POVRĆE*/
           if (this.namirnica === 'artičoka') {
           return (this.kolicina * 0.12).toFixed(2)
              }

            if (this.namirnica === 'grah') {
           return (this.kolicina * 0.228).toFixed(2)
              }
                   if (this.namirnica === 'paprika') {
           return (this.kolicina * 0.55).toFixed(2)
              }
              if (this.namirnica === 'mrkva') {
           return (this.kolicina * 0.096).toFixed(2)
              }

            if (this.namirnica === 'kelj') {
           return (this.kolicina * 0.10).toFixed(2)
              }
                   if (this.namirnica === 'kupus') {
           return (this.kolicina * 0.058).toFixed(2)
              }
              if (this.namirnica === 'krastavac') {
           return (this.kolicina * 0.036).toFixed(2)
              }

            if (this.namirnica === 'celer') {
           return (this.kolicina * 0.034).toFixed(2)
              }
                   if (this.namirnica === 'luk') {
           return (this.kolicina * 0.093).toFixed(2)
              }
              if (this.namirnica === 'lubenica') {
           return (this.kolicina * 0.076).toFixed(2)
              }

            if (this.namirnica === 'dinja') {
           return (this.kolicina * 0.088).toFixed(2)
              }
                   if (this.namirnica === 'krompir') {
           return (this.kolicina * 0.184).toFixed(2)
              }
              if (this.namirnica === 'bundeva') {
           return (this.kolicina * 0.065).toFixed(2)
              }

            if (this.namirnica === 'špinat') {
           return (this.kolicina * 0.036).toFixed(2)
              }
                   if (this.namirnica === 'rajčica') {
           return (this.kolicina * 0.039).toFixed(2)
              }
              /*GRICKALICE I ORAŠASTI PLODOVI*/
            if (this.namirnica === 'čips') {
           return (this.kolicina * 0.497).toFixed(2)
              }
                   if (this.namirnica === 'smoki') {
           return (this.kolicina * 0.5).toFixed(2)
              }
              if (this.namirnica === 'krekeri') {
           return (this.kolicina * 0.649).toFixed(2)
              }

            if (this.namirnica === 'kikiriki') {
           return (this.kolicina * 0.161).toFixed(2)
              }
              if (this.namirnica === 'orah') {
           return (this.kolicina * 0.099).toFixed(2)
              }
                   if (this.namirnica === 'badem') {
           return (this.kolicina * 0.193).toFixed(2)
              }
              if (this.namirnica === 'lješnjak') {
           return (this.kolicina * 0.167).toFixed(2)
              }

            if (this.namirnica === 'indijski oraščić') {
           return (this.kolicina * 0.327).toFixed(2)
              }
            if (this.namirnica === 'voda') {
           return (this.kolicina * 0.0).toFixed(2)
              }
              if (this.namirnica === 'kola') {
           return (this.kolicina * 0.052).toFixed(2)
              }

            if (this.namirnica === 'mineralna voda') {
           return (this.kolicina * 0.088).toFixed(2)
              }
                if (this.namirnica === 'cijeđeni voćni sok') {
           return (this.kolicina * 0.075).toFixed(2)
              }
                   if (this.namirnica === 'maslinovo ulje') {
           return (this.kolicina * 0.0).toFixed(2)
              }
              if (this.namirnica === 'bademovo ulje') {
           return (this.kolicina * 0.0).toFixed(2)
              }

            if (this.namirnica === 'mlijeko') {
           return (this.kolicina * 0.384).toFixed(2)
              }
                if (this.namirnica === 'čokoladno mlijeko') {
           return (this.kolicina * 0.397).toFixed(2)
              }
              if (this.namirnica === 'kokosovo mlijeko') {
           return (this.kolicina * 0.280).toFixed(2)
              }
              if (this.namirnica === 'sir') {
           return (this.kolicina * 0.013).toFixed(2)
              }
              if (this.namirnica === 'ocat') {
           return (this.kolicina * 0.17).toFixed(2)
              }

            if (this.namirnica === 'brašno') {
           return (this.kolicina * 0.763).toFixed(2)
              }
                if (this.namirnica === 'sol') {
           return (this.kolicina * 0.0).toFixed(2)
              }
              if (this.namirnica === 'papar') {
           return (this.kolicina * 0.648).toFixed(2)
              }
                if (this.namirnica === 'sećer') {
           return (this.kolicina * 0.9998).toFixed(2)
              }
              if (this.namirnica === 'kruh') {
           return (this.kolicina * 0.5061).toFixed(2)
              }

            if (this.namirnica === 'chia sjemenke') {
           return (this.kolicina * 0.438).toFixed(2)
              }
                if (this.namirnica === 'čokolada') {
           return (this.kolicina * 0.596).toFixed(2)
                }
        },
      izracunproteini: function () {
           if (this.namirnica === 'jabuka') {
           return (this.kolicina * 0.003).toFixed(2)
           
              }
              if (this.namirnica === 'banana') {
           return (this.kolicina * 0.011).toFixed(2)
              }

                if (this.namirnica === 'naranča') {
           return (this.kolicina * 0.009).toFixed(2)
              }
               if (this.namirnica === 'jagoda') {
           return (this.kolicina * 0.007).toFixed(2)
              }
               if (this.namirnica === 'kruška') {
           return (this.kolicina * 0.004).toFixed(2)
              }
               if (this.namirnica === 'limun') {
           return (this.kolicina * 0.012).toFixed(2)
              }
                   if (this.namirnica === 'breskva') {
           return (this.kolicina * 0.009).toFixed(2)
              }
              
            if (this.namirnica === 'mandarina') {
           return (this.kolicina * 0.008).toFixed(2)
              }
                   if (this.namirnica === 'smokva') {
           return (this.kolicina * 0.008).toFixed(2)
              }
             if (this.namirnica === 'kiwi') {
           return (this.kolicina * 0.011).toFixed(2)
              }

            if (this.namirnica === 'mango') {
           return (this.kolicina * 0.005).toFixed(2)
              }
                   if (this.namirnica === 'marelica') {
           return (this.kolicina * 0.014).toFixed(2)
              }
                if (this.namirnica === 'kokos') {
           return (this.kolicina * 0.033).toFixed(2)
              }

            if (this.namirnica === 'malina') {
           return (this.kolicina * 0.012).toFixed(2)
              }
                   if (this.namirnica === 'borovnica') {
           return (this.kolicina * 0.0074).toFixed(2)
              }
            /*POVRĆE*/
           if (this.namirnica === 'artičoka') {
           return (this.kolicina * 0.029).toFixed(2)
              }

            if (this.namirnica === 'grah') {
           return (this.kolicina * 0.087).toFixed(2)
              }
                   if (this.namirnica === 'paprika') {
           return (this.kolicina * 0.148).toFixed(2)
              }
              if (this.namirnica === 'mrkva') {
           return (this.kolicina * 0.009).toFixed(2)
              }

            if (this.namirnica === 'kelj') {
           return (this.kolicina * 0.033).toFixed(2)
              }
                   if (this.namirnica === 'kupus') {
           return (this.kolicina * 0.013).toFixed(2)
              }
              if (this.namirnica === 'krastavac') {
           return (this.kolicina * 0.007).toFixed(2)
              }

            if (this.namirnica === 'celer') {
           return (this.kolicina * 0.007).toFixed(2)
              }
                   if (this.namirnica === 'luk') {
           return (this.kolicina * 0.011).toFixed(2)
              }
              if (this.namirnica === 'lubenica') {
           return (this.kolicina * 0.006).toFixed(2)
              }

            if (this.namirnica === 'dinja') {
           return (this.kolicina * 0.008).toFixed(2)
              }
                   if (this.namirnica === 'krompir') {
           return (this.kolicina * 0.021).toFixed(2)
              }
              if (this.namirnica === 'bundeva') {
           return (this.kolicina * 0.01).toFixed(2)
              }

            if (this.namirnica === 'špinat') {
           return (this.kolicina * 0.029).toFixed(2)
              }
                   if (this.namirnica === 'rajčica') {
           return (this.kolicina * 0.009).toFixed(2)
              }
              /*GRICKALICE I ORAŠASTI PLODOVI*/
                 if (this.namirnica === 'čips') {
           return (this.kolicina * 0.066).toFixed(2)
              }
                   if (this.namirnica === 'smoki') {
           return (this.kolicina * 0.125).toFixed(2)
              }
              if (this.namirnica === 'krekeri') {
           return (this.kolicina * 0.086).toFixed(2)
              }

            if (this.namirnica === 'kikiriki') {
           return (this.kolicina * 0.256).toFixed(2)
              }
               if (this.namirnica === 'orah') {
           return (this.kolicina * 0.241).toFixed(2)
              }
                   if (this.namirnica === 'badem') {
           return (this.kolicina * 0.221).toFixed(2)
              }
              if (this.namirnica === 'lješnjak') {
           return (this.kolicina * 0.15).toFixed(2)
              }

            if (this.namirnica === 'indijski oraščić') {
           return (this.kolicina * 0.182).toFixed(2)
              }
               if (this.namirnica === 'voda') {
           return (this.kolicina * 0.0).toFixed(2)
              }
              if (this.namirnica === 'kola') {
           return (this.kolicina * 0.0).toFixed(2)
              }

            if (this.namirnica === 'mineralna voda') {
           return (this.kolicina * 0.0).toFixed(2)
              }
                if (this.namirnica === 'cijeđeni voćni sok') {
           return (this.kolicina * 0.0).toFixed(2)
              }
                   if (this.namirnica === 'maslinovo ulje') {
           return (this.kolicina * 0.0).toFixed(2)
              }
              if (this.namirnica === 'bademovo ulje') {
           return (this.kolicina * 0.0).toFixed(2)
              }

            if (this.namirnica === 'mlijeko') {
           return (this.kolicina * 0.0).toFixed(2)
              }
                if (this.namirnica === 'čokoladno mlijeko') {
           return (this.kolicina * 0.008).toFixed(2)
              }
              if (this.namirnica === 'kokosovo mlijeko') {
           return (this.kolicina * 0.023).toFixed(2)
              }
              if (this.namirnica === 'sir') {
           return (this.kolicina * 0.249).toFixed(2)
              }
              if (this.namirnica === 'ocat') {
           return (this.kolicina * 0.005).toFixed(2)
              }

            if (this.namirnica === 'brašno') {
           return (this.kolicina * 0.1033).toFixed(2)
              }
                if (this.namirnica === 'sol') {
           return (this.kolicina * 0.0).toFixed(2)
              }
              if (this.namirnica === 'papar') {
           return (this.kolicina * 0.1095).toFixed(2)
              }
                if (this.namirnica === 'sećer') {
           return (this.kolicina * 0.0).toFixed(2)
              }
              if (this.namirnica === 'kruh') {
           return (this.kolicina * 0.076).toFixed(2)
              }

            if (this.namirnica === 'chia sjemenke') {
           return (this.kolicina * 0.156).toFixed(2)
              }
                if (this.namirnica === 'čokolada') {
           return (this.kolicina * 0.076).toFixed(2)
              }    
        },
      izracunmasti: function () {
           if (this.namirnica === 'jabuka') {
           return (this.kolicina * 0.002).toFixed(2)

              }
           if (this.namirnica === 'banana') {
           return (this.kolicina * 0.003).toFixed(2)
              }

                if (this.namirnica === 'naranča') {
           return (this.kolicina * 0.001).toFixed(2)
              }

                  if (this.namirnica === 'jagoda') {
           return (this.kolicina * 0.003).toFixed(2)
              }
          if (this.namirnica === 'kruška') {
           return (this.kolicina * 0.001).toFixed(2)
              }
               if (this.namirnica === 'limun') {
           return (this.kolicina * 0.003).toFixed(2)
              }
                   if (this.namirnica === 'breskva') {
           return (this.kolicina * 0.003).toFixed(2)
              }
              
            if (this.namirnica === 'mandarina') {
           return (this.kolicina * 0.003).toFixed(2)
              }
                   if (this.namirnica === 'smokva') {
           return (this.kolicina * 0.003).toFixed(2)
              }
             if (this.namirnica === 'kiwi') {
           return (this.kolicina * 0.0052).toFixed(2)
              }

            if (this.namirnica === 'mango') {
           return (this.kolicina * 0.003).toFixed(2)
              }
                   if (this.namirnica === 'marelica') {
           return (this.kolicina * 0.0039).toFixed(2)
              }
                if (this.namirnica === 'kokos') {
           return (this.kolicina * 0.3349).toFixed(2)
              }

            if (this.namirnica === 'malina') {
           return (this.kolicina * 0.007).toFixed(2)
              }
                   if (this.namirnica === 'borovnica') {
           return (this.kolicina * 0.0033).toFixed(2)
              }
                 /*POVRĆE*/
           if (this.namirnica === 'artičoka') {
           return (this.kolicina * 0.003).toFixed(2)
              }

            if (this.namirnica === 'grah') {
           return (this.kolicina * 0.005).toFixed(2)
              }
                   if (this.namirnica === 'paprika') {
           return (this.kolicina * 0.13).toFixed(2)
              }
              if (this.namirnica === 'mrkva') {
           return (this.kolicina * 0.002).toFixed(2)
              }

            if (this.namirnica === 'kelj') {
           return (this.kolicina * 0.007).toFixed(2)
              }
                   if (this.namirnica === 'kupus') {
           return (this.kolicina * 0.001).toFixed(2)
              }
              if (this.namirnica === 'krastavac') {
           return (this.kolicina * 0.001).toFixed(2)
              }

            if (this.namirnica === 'celer') {
           return (this.kolicina * 0.002).toFixed(2)
              }
                   if (this.namirnica === 'luk') {
           return (this.kolicina * 0.001).toFixed(2)
              }
              if (this.namirnica === 'lubenica') {
           return (this.kolicina * 0.002).toFixed(2)
              }

            if (this.namirnica === 'dinja') {
           return (this.kolicina * 0.001).toFixed(2)
              }
                   if (this.namirnica === 'krompir') {
           return (this.kolicina * 0.001).toFixed(2)
              }
              if (this.namirnica === 'bundeva') {
           return (this.kolicina * 0.001).toFixed(2)
              }

            if (this.namirnica === 'špinat') {
           return (this.kolicina * 0.004).toFixed(2)
              }
                   if (this.namirnica === 'rajčica') {
           return (this.kolicina * 0.012).toFixed(2)
              }
              /*GRICKALICE I ORAŠASTI PLODOVI*/
                 if (this.namirnica === 'čips') {
           return (this.kolicina * 0.044).toFixed(2)
              }
                   if (this.namirnica === 'smoki') {
           return (this.kolicina * 0.05).toFixed(2)
              }
              if (this.namirnica === 'krekeri') {
           return (this.kolicina * 0.206).toFixed(2)
              }

            if (this.namirnica === 'kikiriki') {
           return (this.kolicina * 0.50).toFixed(2)
              }
               if (this.namirnica === 'orah') {
           return (this.kolicina * 0.59).toFixed(2)
              }
                   if (this.namirnica === 'badem') {
           return (this.kolicina * 0.528).toFixed(2)
              }
              if (this.namirnica === 'lješnjak') {
           return (this.kolicina * 0.607).toFixed(2)
              }

            if (this.namirnica === 'indijski oraščić') {
           return (this.kolicina * 0.44).toFixed(2)
              }
               if (this.namirnica === 'voda') {
           return (this.kolicina * 0).toFixed(2)
              }
              if (this.namirnica === 'kola') {
           return (this.kolicina * 0.0).toFixed(2)
              }

            if (this.namirnica === 'mineralna voda') {
           return (this.kolicina * 0.0).toFixed(2)
              }
                if (this.namirnica === 'cijeđeni voćni sok') {
           return (this.kolicina * 0.0).toFixed(2)
              }
                   if (this.namirnica === 'maslinovo ulje') {
           return (this.kolicina * 1.0).toFixed(2)
              }
              if (this.namirnica === 'bademovo ulje') {
           return (this.kolicina * 1.0).toFixed(2)
              }

            if (this.namirnica === 'mlijeko') {
           return (this.kolicina * 0.067).toFixed(2)
              }
                if (this.namirnica === 'čokoladno mlijeko') {
           return (this.kolicina * 0.0298).toFixed(2)
              }
              if (this.namirnica === 'kokosovo mlijeko') {
           return (this.kolicina * 0.213).toFixed(2)
              }
              if (this.namirnica === 'sir') {
           return (this.kolicina * 0.331).toFixed(2)
              }
              if (this.namirnica === 'ocat') {
           return (this.kolicina * 0.0).toFixed(2)
              }

            if (this.namirnica === 'brašno') {
           return (this.kolicina * 0.0098).toFixed(2)
              }
                if (this.namirnica === 'sol') {
           return (this.kolicina * 0.0).toFixed(2)
              }
              if (this.namirnica === 'papar') {
           return (this.kolicina * 0.033).toFixed(2)
              }
                if (this.namirnica === 'sećer') {
           return (this.kolicina * 0.0).toFixed(2)
              }
              if (this.namirnica === 'kruh') {
           return (this.kolicina * 0.033).toFixed(2)
              }

            if (this.namirnica === 'chia sjemenke') {
           return (this.kolicina * 0.308).toFixed(2)
              }
                if (this.namirnica === 'čokolada') {
           return (this.kolicina * 0.297).toFixed(2)
              }
          

        },
      izracunvlakna: function () {
           if (this.namirnica === 'jabuka') {
           return (this.kolicina * 0.024).toFixed(2)

              }if (this.namirnica === 'banana') {
           return (this.kolicina * 0.026).toFixed(2)
              }

                   if (this.namirnica === 'naranča') {
           return (this.kolicina * 0.24).toFixed(2)
              }
               if (this.namirnica === 'jagoda') {
           return (this.kolicina * 0.02).toFixed(2)
              }
                 if (this.namirnica === 'kruška') {
           return (this.kolicina * 0.031).toFixed(2)
              }
             if (this.namirnica === 'limun') {
           return (this.kolicina * 0.11).toFixed(2)
              }
                   if (this.namirnica === 'breskva') {
           return (this.kolicina * 0.015).toFixed(2)
              }
              
            if (this.namirnica === 'mandarina') {
           return (this.kolicina * 0.018).toFixed(2)
              }
                   if (this.namirnica === 'smokva') {
           return (this.kolicina * 0.029).toFixed(2)
              }
              if (this.namirnica === 'kiwi') {
           return (this.kolicina * 0.03).toFixed(2)
              }

            if (this.namirnica === 'mango') {
           return (this.kolicina * 0.018).toFixed(2)
              }
                   if (this.namirnica === 'marelica') {
           return (this.kolicina * 0.02).toFixed(2)
              }
                if (this.namirnica === 'kokos') {
           return (this.kolicina * 0.09).toFixed(2)
              }

            if (this.namirnica === 'malina') {
           return (this.kolicina * 0.065).toFixed(2)
              }
                   if (this.namirnica === 'borovnica') {
           return (this.kolicina * 0.024).toFixed(2)
              }
               /*POVRĆE*/
           if (this.namirnica === 'artičoka') {
           return (this.kolicina * 0.086).toFixed(2)
              }

            if (this.namirnica === 'grah') {
           return (this.kolicina * 0.64).toFixed(2)
              }
                   if (this.namirnica === 'paprika') {
           return (this.kolicina * 0.374).toFixed(2)
              }
              if (this.namirnica === 'mrkva') {
           return (this.kolicina * 0.028).toFixed(2)
              }

            if (this.namirnica === 'kelj') {
           return (this.kolicina * 0.002).toFixed(2)
              }
                   if (this.namirnica === 'kupus') {
           return (this.kolicina * 0.025).toFixed(2)
              }
              if (this.namirnica === 'krastavac') {
           return (this.kolicina * 0.005).toFixed(2)
              }

            if (this.namirnica === 'celer') {
           return (this.kolicina * 0.016).toFixed(2)
              }
                   if (this.namirnica === 'luk') {
           return (this.kolicina * 0.017).toFixed(2)
              }
              if (this.namirnica === 'lubenica') {
           return (this.kolicina * 0.004).toFixed(2)
              }

            if (this.namirnica === 'dinja') {
           return (this.kolicina * 0.009).toFixed(2)
              }
                   if (this.namirnica === 'krompir') {
           return (this.kolicina * 0.021).toFixed(2)
                   }
              if (this.namirnica === 'bundeva') {
           return (this.kolicina * 0.005).toFixed(2)
              }

            if (this.namirnica === 'špinat') {
           return (this.kolicina * 0.022).toFixed(2)
              }
                   if (this.namirnica === 'rajčica') {
           return (this.kolicina * 0.012).toFixed(2)
              }
              /*GRICKALICE I ORAŠASTI PLODOVI*/
                 if (this.namirnica === 'čips') {
           return (this.kolicina * 0.044).toFixed(2)
              }
                   if (this.namirnica === 'smoki') {
           return (this.kolicina * 0.65).toFixed(2)
              }
              if (this.namirnica === 'krekeri') {
           return (this.kolicina * 0.045).toFixed(2)
              }

            if (this.namirnica === 'kikiriki') {
           return (this.kolicina * 0.085).toFixed(2)
              }
               if (this.namirnica === 'orah') {
           return (this.kolicina * 0.068).toFixed(2)
              }
                   if (this.namirnica === 'badem') {
           return (this.kolicina * 0.13).toFixed(2)
              }
              if (this.namirnica === 'lješnjak') {
           return (this.kolicina * 0.098).toFixed(2)
              }

            if (this.namirnica === 'indijski oraščić') {
           return (this.kolicina * 0.033).toFixed(2)
              }
               if (this.namirnica === 'voda') {
           return (this.kolicina * 0.0).toFixed(2)
              }
              if (this.namirnica === 'kola') {
           return (this.kolicina * 0.0).toFixed(2)
              }

            if (this.namirnica === 'mineralna voda') {
           return (this.kolicina * 0.0).toFixed(2)
              }
                if (this.namirnica === 'cijeđeni voćni sok') {
           return (this.kolicina * 0.0).toFixed(2)
              }
                   if (this.namirnica === 'maslinovo ulje') {
           return (this.kolicina * 0.0).toFixed(2)
              }
              if (this.namirnica === 'bademovo ulje') {
           return (this.kolicina * 0.0).toFixed(2)
              }

            if (this.namirnica === 'mlijeko') {
           return (this.kolicina * 0.0).toFixed(2)
              }
                if (this.namirnica === 'čokoladno mlijeko') {
           return (this.kolicina * 0.01).toFixed(2)
              }
              if (this.namirnica === 'kokosovo mlijeko') {
           return (this.kolicina * 0.022).toFixed(2)
              }
            if (this.namirnica === 'sir') {
           return (this.kolicina * 0.0).toFixed(2)
              }
              if (this.namirnica === 'ocat') {
           return (this.kolicina * 0.0).toFixed(2)
              }

            if (this.namirnica === 'brašno') {
           return (this.kolicina * 0.027).toFixed(2)
              }
                if (this.namirnica === 'sol') {
           return (this.kolicina * 0.0).toFixed(2)
              }
              if (this.namirnica === 'papar') {
           return (this.kolicina * 0.265).toFixed(2)
              }
                if (this.namirnica === 'sećer') {
           return (this.kolicina * 0.0).toFixed(2)
              }
              if (this.namirnica === 'kruh') {
           return (this.kolicina * 0.024).toFixed(2)
              }

            if (this.namirnica === 'chia sjemenke') {
           return (this.kolicina * 0.377).toFixed(2)
              }
                if (this.namirnica === 'čokolada') {
           return (this.kolicina * 0.034).toFixed(2)
              }
         
        
        },
      izracunkalij: function () {
           if (this.namirnica === 'jabuka') {
           return (this.kolicina * 1.07).toFixed(2)

              }
              if (this.namirnica === 'banana') {
           return (this.kolicina * 3.58).toFixed(2)
              }

               if (this.namirnica === 'naranča') {
           return (this.kolicina * 1.81).toFixed(2)
              }
            if (this.namirnica === 'jagoda') {
           return (this.kolicina * 1.53).toFixed(2)
              }
                 if (this.namirnica === 'kruška') {
           return (this.kolicina * 1.16).toFixed(2)
              }
    
            if (this.namirnica === 'limun') {
           return (this.kolicina * 1.45).toFixed(2)
              }
                   if (this.namirnica === 'breskva') {
           return (this.kolicina *  1.9).toFixed(2)
              }
              
            if (this.namirnica === 'mandarina') {
           return (this.kolicina * 1.66).toFixed(2)
              }
                   if (this.namirnica === 'smokva') {
           return (this.kolicina * 2.32).toFixed(2)
              }
              if (this.namirnica === 'kiwi') {
           return (this.kolicina * 3.12).toFixed(2)
              }

            if (this.namirnica === 'mango') {
           return (this.kolicina * 1.56).toFixed(2)
              }
                   if (this.namirnica === 'marelica') {
           return (this.kolicina * 2.59).toFixed(2)
              }
                if (this.namirnica === 'kokos') {
           return (this.kolicina * 3.56).toFixed(2)
              }

            if (this.namirnica === 'malina') {
           return (this.kolicina * 1.51).toFixed(2)
              }
                   if (this.namirnica === 'borovnica') {
           return (this.kolicina * 0.77).toFixed(2)
              }
               /*POVRĆE*/
           if (this.namirnica === 'artičoka') {
           return (this.kolicina * 2.86).toFixed(2)
              }

            if (this.namirnica === 'grah') {
           return (this.kolicina * 4.05).toFixed(2)
              }
                   if (this.namirnica === 'paprika') {
           return (this.kolicina * 23.44).toFixed(2)
              }
              if (this.namirnica === 'mrkva') {
           return (this.kolicina * 3.20).toFixed(2)
              }

            if (this.namirnica === 'kelj') {
           return (this.kolicina * 4.47).toFixed(2)
              }
                   if (this.namirnica === 'kupus') {
           return (this.kolicina * 1.70).toFixed(2)
              }
              if (this.namirnica === 'krastavac') {
           return (this.kolicina * 1.47).toFixed(2)
              }

            if (this.namirnica === 'celer') {
           return (this.kolicina * 2.60).toFixed(2)
              }
                   if (this.namirnica === 'luk') {
           return (this.kolicina * 1.46).toFixed(2)
              }
              if (this.namirnica === 'lubenica') {
           return (this.kolicina * 1.12).toFixed(2)
              }

            if (this.namirnica === 'dinja') {
           return (this.kolicina * 2.67).toFixed(2)
              }
                   if (this.namirnica === 'krompir') {
           return (this.kolicina * 4.21).toFixed(2)
              }
              if (this.namirnica === 'bundeva') {
           return (this.kolicina * 3.40).toFixed(2)
              }

            if (this.namirnica === 'špinat') {
           return (this.kolicina * 5.58).toFixed(2)
              }
                   if (this.namirnica === 'rajčica') {
           return (this.kolicina * 2.37).toFixed(2)
              }
              /*GRICKALICE I ORAŠASTI PLODOVI*/
                 if (this.namirnica === 'čips') {
           return (this.kolicina * 16.42).toFixed(2)
              }
                   if (this.namirnica === 'smoki') {
           return (this.kolicina * 10.00).toFixed(2)
              }
              if (this.namirnica === 'krekeri') {
           return (this.kolicina * 1.33).toFixed(2)
              }

            if (this.namirnica === 'kikiriki') {
           return (this.kolicina * 7.05).toFixed(2)
              }
               if (this.namirnica === 'orah') {
           return (this.kolicina * 5.23).toFixed(2)
              }
                   if (this.namirnica === 'badem') {
           return (this.kolicina * 7.46).toFixed(2)
              }
              if (this.namirnica === 'lješnjak') {
           return (this.kolicina * 6.80).toFixed(2)
              }

            if (this.namirnica === 'indijski oraščić') {
           return (this.kolicina * 6.60).toFixed(2)
              }
               if (this.namirnica === 'voda') {
           return (this.kolicina * 0.0).toFixed(2)
              }
              if (this.namirnica === 'kola') {
           return (this.kolicina * 0.03).toFixed(2)
              }

            if (this.namirnica === 'mineralna voda') {
           return (this.kolicina * 0.0).toFixed(2)
              }
                if (this.namirnica === 'cijeđeni voćni sok') {
           return (this.kolicina * 0.19).toFixed(2)
              }
                   if (this.namirnica === 'maslinovo ulje') {
           return (this.kolicina * 0.01).toFixed(2)
              }
              if (this.namirnica === 'bademovo ulje') {
           return (this.kolicina * 0.0).toFixed(2)
              }

            if (this.namirnica === 'mlijeko') {
           return (this.kolicina * 13.30).toFixed(2)
              }
                if (this.namirnica === 'čokoladno mlijeko') {
           return (this.kolicina * 1.67).toFixed(2)
              }
              if (this.namirnica === 'kokosovo mlijeko') {
           return (this.kolicina * 2.20).toFixed(2)
              }
            if (this.namirnica === 'sir') {
           return (this.kolicina * 0.98).toFixed(2)
              }
              if (this.namirnica === 'ocat') {
           return (this.kolicina * 1.12).toFixed(2)
              }

            if (this.namirnica === 'brašno') {
           return (this.kolicina * 1.07).toFixed(2)
              }
                if (this.namirnica === 'sol') {
           return (this.kolicina * 0.08).toFixed(2)
              }
              if (this.namirnica === 'papar') {
           return (this.kolicina * 12.59).toFixed(2)
              }
                if (this.namirnica === 'sećer') {
           return (this.kolicina * 0.02).toFixed(2)
              }
              if (this.namirnica === 'kruh') {
           return (this.kolicina * 1.0).toFixed(2)
              }

            if (this.namirnica === 'chia sjemenke') {
           return (this.kolicina * 1.60).toFixed(2)
              }
                if (this.namirnica === 'čokolada') {
           return (this.kolicina * 3.72).toFixed(2)
              }
          
          
        },
      izracunvitaminc: function () {
           if (this.namirnica === 'jabuka') {
           return (this.kolicina * 0.046).toFixed(2)

              }if (this.namirnica === 'banana') {
           return (this.kolicina * 0.87).toFixed(2)
              }

                if (this.namirnica === 'naranča') {
           return (this.kolicina * 0.532).toFixed(2)
              }
             if (this.namirnica === 'jagoda') {
           return (this.kolicina * 0.588).toFixed(2)
              }
                 if (this.namirnica === 'kruška') {
           return (this.kolicina * 0.042).toFixed(2)
              }
             if (this.namirnica === 'limun') {
           return (this.kolicina * 0.77).toFixed(2)
              }
                   if (this.namirnica === 'breskva') {
           return (this.kolicina * 0.066).toFixed(2)
              }
               
            if (this.namirnica === 'mandarina') {
           return (this.kolicina * 0.267).toFixed(2)
              }
                   if (this.namirnica === 'smokva') {
           return (this.kolicina * 0.02).toFixed(2)
              }
              if (this.namirnica === 'kiwi') {
           return (this.kolicina * 0.927).toFixed(2)
              }

            if (this.namirnica === 'mango') {
           return (this.kolicina * 0.277).toFixed(2)
              }
                   if (this.namirnica === 'marelica') {
           return (this.kolicina * 0.1).toFixed(2)
              }
                if (this.namirnica === 'kokos') {
           return (this.kolicina * 0.033).toFixed(2)
              }

            if (this.namirnica === 'malina') {
           return (this.kolicina * 0.262).toFixed(2)
              }
                   if (this.namirnica === 'borovnica') {
           return (this.kolicina * 0.097).toFixed(2)
              }
               /*POVRĆE*/
           if (this.namirnica === 'artičoka') {
           return (this.kolicina * 0.74).toFixed(2)
              }

            if (this.namirnica === 'grah') {
           return (this.kolicina * 0.012).toFixed(2)
              }
                   if (this.namirnica === 'paprika') {
           return (this.kolicina * 0.711).toFixed(2)
              }
              if (this.namirnica === 'mrkva') {
           return (this.kolicina * 0.059).toFixed(2)
              }

            if (this.namirnica === 'kelj') {
           return (this.kolicina * 1.20).toFixed(2)
              }
                   if (this.namirnica === 'kupus') {
           return (this.kolicina * 0.366).toFixed(2)
              }
              if (this.namirnica === 'krastavac') {
           return (this.kolicina * 0.028).toFixed(2)
              }

            if (this.namirnica === 'celer') {
           return (this.kolicina * 0.03).toFixed(2)
              }
                   if (this.namirnica === 'luk') {
           return (this.kolicina * 0.074).toFixed(2)
              }
              if (this.namirnica === 'lubenica') {
           return (this.kolicina * 0.081).toFixed(2)
              }

            if (this.namirnica === 'dinja') {
           return (this.kolicina * 0.367).toFixed(2)
              }
                   if (this.namirnica === 'krompir') {
           return (this.kolicina * 0.197).toFixed(2)
              }
              if (this.namirnica === 'bundeva') {
           return (this.kolicina * 0.04).toFixed(2)
              }

            if (this.namirnica === 'špinat') {
           return (this.kolicina * 0.281).toFixed(2)
              }
                   if (this.namirnica === 'rajčica') {
           return (this.kolicina * 0.127).toFixed(2)
              }
              /*GRICKALICE I ORAŠASTI PLODOVI*/
                 if (this.namirnica === 'čips') {
           return (this.kolicina * 0.186).toFixed(2)
              }
                   if (this.namirnica === 'smoki') {
           return (this.kolicina * 0.15).toFixed(2)
              }
              if (this.namirnica === 'krekeri') {
           return (this.kolicina * 0.0).toFixed(2)
              }

            if (this.namirnica === 'kikiriki') {
           return (this.kolicina * 0.0).toFixed(2)
              }
              if (this.namirnica === 'orah') {
           return (this.kolicina * 0.0).toFixed(2)
              }
                   if (this.namirnica === 'badem') {
           return (this.kolicina * 0.017).toFixed(2)
              }
              if (this.namirnica === 'lješnjak') {
           return (this.kolicina * 0.063).toFixed(2)
              }

            if (this.namirnica === 'indijski oraščić') {
           return (this.kolicina * 0.005).toFixed(2)
              }
               if (this.namirnica === 'voda') {
           return (this.kolicina * 0.0).toFixed(2)
              }
              if (this.namirnica === 'kola') {
           return (this.kolicina * 0.0).toFixed(2)
              }

            if (this.namirnica === 'mineralna voda') {
           return (this.kolicina * 0.0).toFixed(2)
              }
                if (this.namirnica === 'cijeđeni voćni sok') {
           return (this.kolicina * 0.325).toFixed(2)
              }
                   if (this.namirnica === 'maslinovo ulje') {
           return (this.kolicina * 0.01).toFixed(2)
              }
              if (this.namirnica === 'bademovo ulje') {
           return (this.kolicina * 0.0).toFixed(2)
              }

            if (this.namirnica === 'mlijeko') {
           return (this.kolicina * 0.086).toFixed(2)
              }
                if (this.namirnica === 'čokoladno mlijeko') {
           return (this.kolicina * 0.009).toFixed(2)
              }
              if (this.namirnica === 'kokosovo mlijeko') {
           return (this.kolicina * 0.01).toFixed(2)
              }

            if (this.namirnica === 'sir') {
           return (this.kolicina * 0.0).toFixed(2)
              }
              if (this.namirnica === 'ocat') {
           return (this.kolicina * 0.0).toFixed(2)
              }

            if (this.namirnica === 'brašno') {
           return (this.kolicina * 0.0).toFixed(2)
              }
                if (this.namirnica === 'sol') {
           return (this.kolicina * 0.0).toFixed(2)
              }
              if (this.namirnica === 'papar') {
           return (this.kolicina * 0.21).toFixed(2)
              }
                if (this.namirnica === 'sećer') {
           return (this.kolicina * 0.0).toFixed(2)
              }
              if (this.namirnica === 'kruh') {
           return (this.kolicina * 0.0).toFixed(2)
              }

            if (this.namirnica === 'chia sjemenke') {
           return (this.kolicina * 0.0).toFixed(2)
              }
                if (this.namirnica === 'čokolada') {
           return (this.kolicina * 0.0).toFixed(2)
              }
         

        },
      izracunželjezo: function () {
           if (this.namirnica === 'jabuka') {
           return (this.kolicina * 0.0012).toFixed(2)

              }if (this.namirnica === 'banana') {
           return (this.kolicina * 0.0026).toFixed(2)
              }
                if (this.namirnica === 'naranča') {
           return (this.kolicina * 0.001).toFixed(2)
              }
             if (this.namirnica === 'jagoda') {
           return (this.kolicina * 0.0041).toFixed(2)
              }
                   if (this.namirnica === 'kruška') {
           return (this.kolicina * 0.0018).toFixed(2)
              }
             if (this.namirnica === 'limun') {
           return (this.kolicina * 0.008).toFixed(2)
              }
                   if (this.namirnica === 'breskva') {
           return (this.kolicina * 0.003).toFixed(2)
              }
              
            if (this.namirnica === 'mandarina') {
           return (this.kolicina * 0.002).toFixed(2)
              }
                   if (this.namirnica === 'smokva') {
           return (this.kolicina * 0.004).toFixed(2)
              }
              if (this.namirnica === 'kiwi') {
           return (this.kolicina * 0.0031).toFixed(2)
              }

            if (this.namirnica === 'mango') {
           return (this.kolicina * 0.0013).toFixed(2)
              }
                   if (this.namirnica === 'marelica') {
           return (this.kolicina * 0.0039).toFixed(2)
              }
                if (this.namirnica === 'kokos') {
           return (this.kolicina * 0.024).toFixed(2)
              }

            if (this.namirnica === 'malina') {
           return (this.kolicina * 0.0069).toFixed(2)
              }
                   if (this.namirnica === 'borovnica') {
           return (this.kolicina * 0.0028).toFixed(2)
              }
               /*POVRĆE*/
           if (this.namirnica === 'artičoka') {
           return (this.kolicina * 0.006).toFixed(2)
              }

            if (this.namirnica === 'grah') {
           return (this.kolicina * 0.022).toFixed(2)
              }
                   if (this.namirnica === 'paprika') {
           return (this.kolicina * 0.236).toFixed(2)
              }
              if (this.namirnica === 'mrkva') {
           return (this.kolicina * 0.003).toFixed(2)
              }

            if (this.namirnica === 'kelj') {
           return (this.kolicina * 0.016).toFixed(2)
              }
                   if (this.namirnica === 'kupus') {
           return (this.kolicina * 0.005).toFixed(2)
              }
              if (this.namirnica === 'krastavac') {
           return (this.kolicina * 0.003).toFixed(2)
              }

            if (this.namirnica === 'celer') {
           return (this.kolicina * 0.002).toFixed(2)
              }
                   if (this.namirnica === 'luk') {
           return (this.kolicina * 0.0021).toFixed(2)
              }
              if (this.namirnica === 'lubenica') {
           return (this.kolicina * 0.002).toFixed(2)
              }

            if (this.namirnica === 'dinja') {
           return (this.kolicina * 0.002).toFixed(2)
              }
                   if (this.namirnica === 'krompir') {
           return (this.kolicina * 0.0081).toFixed(2)
              }
              if (this.namirnica === 'bundeva') {
           return (this.kolicina * 0.008).toFixed(2)
              }

            if (this.namirnica === 'špinat') {
           return (this.kolicina * 0.0271).toFixed(2)
              }
                   if (this.namirnica === 'rajčica') {
           return (this.kolicina * 0.003).toFixed(2)
              }
              /*GRICKALICE I ORAŠASTI PLODOVI*/
                 if (this.namirnica === 'čips') {
           return (this.kolicina * 0.016).toFixed(2)
              }
                   if (this.namirnica === 'smoki') {
           return (this.kolicina * 0.015).toFixed(2)
              }
              if (this.namirnica === 'krekeri') {
           return (this.kolicina * 0.044).toFixed(2)
              }

            if (this.namirnica === 'kikiriki') {
           return (this.kolicina * 0.046).toFixed(2)
              }
              if (this.namirnica === 'orah') {
           return (this.kolicina * 0.031).toFixed(2)
              }
                   if (this.namirnica === 'badem') {
           return (this.kolicina * 0.045).toFixed(2)
              }
              if (this.namirnica === 'lješnjak') {
           return (this.kolicina * 0.047).toFixed(2)
              }

            if (this.namirnica === 'indijski oraščić') {
           return (this.kolicina * 0.067).toFixed(2)
              }
               if (this.namirnica === 'voda') {
           return (this.kolicina * 0.0).toFixed(2)
              }
              if (this.namirnica === 'kola') {
           return (this.kolicina * 0.0).toFixed(2)
              }

            if (this.namirnica === 'mineralna voda') {
           return (this.kolicina * 0.0).toFixed(2)
              }
                if (this.namirnica === 'cijeđeni voćni sok') {
           return (this.kolicina * 0.0).toFixed(2)
              }
                   if (this.namirnica === 'maslinovo ulje') {
           return (this.kolicina * 0.006).toFixed(2)
              }
              if (this.namirnica === 'bademovo ulje') {
           return (this.kolicina * 0.0).toFixed(2)
              }

            if (this.namirnica === 'mlijeko') {
           return (this.kolicina * 0.005).toFixed(2)
              }
                if (this.namirnica === 'čokoladno mlijeko') {
           return (this.kolicina * 0.002).toFixed(2)
              }
              if (this.namirnica === 'kokosovo mlijeko') {
           return (this.kolicina * 0.033).toFixed(2)
              }
            if (this.namirnica === 'sir') {
           return (this.kolicina * 0.007).toFixed(2)
              }
              if (this.namirnica === 'ocat') {
           return (this.kolicina * 0.0003).toFixed(2)
              }

            if (this.namirnica === 'brašno') {
           return (this.kolicina * 0.012).toFixed(2)
              }
                if (this.namirnica === 'sol') {
           return (this.kolicina * 0.0033).toFixed(2)
              }
              if (this.namirnica === 'papar') {
           return (this.kolicina * 0.289).toFixed(2)
              }
                if (this.namirnica === 'sećer') {
           return (this.kolicina * 0.0006).toFixed(2)
              }
              if (this.namirnica === 'kruh') {
           return (this.kolicina * 0.037).toFixed(2)
              }

            if (this.namirnica === 'chia sjemenke') {
           return (this.kolicina * 0.0).toFixed(2)
              }
                if (this.namirnica === 'čokolada') {
           return (this.kolicina * 0.024).toFixed(2)
              }
           
         

        },
      izracunkalcij: function () {
           if (this.namirnica === 'jabuka') {
           return (this.kolicina * 0.06).toFixed(2)
              }

                if (this.namirnica === 'banana') {
           return (this.kolicina * 0.05).toFixed(2)
              }

                if (this.namirnica === 'naranča') {
           return (this.kolicina * 0.40).toFixed(2)
              }
              if (this.namirnica === 'jagoda') {
           return (this.kolicina * 0.16).toFixed(2)
              }
                if (this.namirnica === 'kruška') {
           return (this.kolicina * 0.09).toFixed(2)
              }
               if (this.namirnica === 'limun') {
           return (this.kolicina * 0.61).toFixed(2)
              }
                   if (this.namirnica === 'breskva') {
           return (this.kolicina * 0.06).toFixed(2)
              }
              
            if (this.namirnica === 'mandarina') {
           return (this.kolicina * 0.37).toFixed(2)
              }
                   if (this.namirnica === 'smokva') {
           return (this.kolicina * 0.35).toFixed(2)
              }
              if (this.namirnica === 'kiwi') {
           return (this.kolicina * 0.34).toFixed(2)
              }

            if (this.namirnica === 'mango') {
           return (this.kolicina * 0.1).toFixed(2)
              }
                   if (this.namirnica === 'marelica') {
           return (this.kolicina * 0.13).toFixed(2)
              }
                if (this.namirnica === 'kokos') {
           return (this.kolicina * 0.014).toFixed(2)
              }

            if (this.namirnica === 'malina') {
           return (this.kolicina * 0.25).toFixed(2)
              }
                   if (this.namirnica === 'borovnica') {
           return (this.kolicina * 0.06).toFixed(2)
              }
               /*POVRĆE*/
           if (this.namirnica === 'artičoka') {
           return (this.kolicina * 0.21).toFixed(2)
              }

            if (this.namirnica === 'grah') {
           return (this.kolicina * 0.35).toFixed(2)
              }
                   if (this.namirnica === 'paprika') {
           return (this.kolicina * 1.77).toFixed(2)
              }
              if (this.namirnica === 'mrkva') {
           return (this.kolicina * 0.33).toFixed(2)
              }

            if (this.namirnica === 'kelj') {
           return (this.kolicina * 1.35).toFixed(2)
              }
                   if (this.namirnica === 'kupus') {
           return (this.kolicina * 0.40).toFixed(2)
              }
              if (this.namirnica === 'krastavac') {
           return (this.kolicina * 0.16).toFixed(2)
              }

            if (this.namirnica === 'celer') {
           return (this.kolicina * 0.40).toFixed(2)
              }
                   if (this.namirnica === 'luk') {
           return (this.kolicina * 0.23).toFixed(2)
              }
              if (this.namirnica === 'lubenica') {
           return (this.kolicina * 0.07).toFixed(2)
              }

            if (this.namirnica === 'dinja') {
           return (this.kolicina * 0.09).toFixed(2)
              }
                   if (this.namirnica === 'krompir') {
           return (this.kolicina * 0.12).toFixed(2)
              }
              if (this.namirnica === 'bundeva') {
           return (this.kolicina * 0.21).toFixed(2)
              }

            if (this.namirnica === 'špinat') {
           return (this.kolicina * 0.99).toFixed(2)
              }
                   if (this.namirnica === 'rajčica') {
           return (this.kolicina * 0.10).toFixed(2)
              }
              /*GRICKALICE I ORAŠASTI PLODOVI*/
                 if (this.namirnica === 'čips') {
           return (this.kolicina * 0.24).toFixed(2)
              }
                   if (this.namirnica === 'smoki') {
           return (this.kolicina * 0.20).toFixed(2)
              }
              if (this.namirnica === 'krekeri') {
           return (this.kolicina * 0.49).toFixed(2)
              }

            if (this.namirnica === 'kikiriki') {
           return (this.kolicina * 0.92).toFixed(2)
              }
              if (this.namirnica === 'orah') {
           return (this.kolicina * 0.61).toFixed(2)
              }
                   if (this.namirnica === 'badem') {
           return (this.kolicina * 2.66).toFixed(2)
              }
              if (this.namirnica === 'lješnjak') {
           return (this.kolicina * 1.14).toFixed(2)
              }

            if (this.namirnica === 'indijski oraščić') {
           return (this.kolicina * 0.37).toFixed(2)
              }
               if (this.namirnica === 'voda') {
           return (this.kolicina * 0.1).toFixed(2)
              }
              if (this.namirnica === 'kola') {
           return (this.kolicina * 0.02).toFixed(2)
              }

            if (this.namirnica === 'mineralna voda') {
           return (this.kolicina * 0.01).toFixed(2)
              }
                if (this.namirnica === 'cijeđeni voćni sok') {
           return (this.kolicina * 0.03).toFixed(2)
              }
                   if (this.namirnica === 'maslinovo ulje') {
           return (this.kolicina * 0.01).toFixed(2)
              }
              if (this.namirnica === 'bademovo ulje') {
           return (this.kolicina * 0.0).toFixed(2)
              }

            if (this.namirnica === 'mlijeko') {
           return (this.kolicina * 9.12).toFixed(2)
              }
                if (this.namirnica === 'čokoladno mlijeko') {
           return (this.kolicina * 1.12).toFixed(2)
              }
              if (this.namirnica === 'kokosovo mlijeko') {
           return (this.kolicina * 0.18).toFixed(2)
              }

           if (this.namirnica === 'sir') {
           return (this.kolicina * 7.21).toFixed(2)
              }
              if (this.namirnica === 'ocat') {
           return (this.kolicina * 0.27).toFixed(2)
              }

            if (this.namirnica === 'brašno') {
           return (this.kolicina * 0.15).toFixed(2)
              }
                if (this.namirnica === 'sol') {
           return (this.kolicina * 0.24).toFixed(2)
              }
              if (this.namirnica === 'papar') {
           return (this.kolicina * 4.37).toFixed(2)
              }
                if (this.namirnica === 'sećer') {
           return (this.kolicina * 0.01).toFixed(2)
              }
              if (this.namirnica === 'bijeli kruh') {
           return (this.kolicina * 1.51).toFixed(2)
              }
              if (this.namirnica === 'kruh') {
           return (this.kolicina * 0.38).toFixed(2)
              }

            if (this.namirnica === 'chia sjemenke') {
           return (this.kolicina * 6.31).toFixed(2)
              }
                if (this.namirnica === 'čokolada') {
           return (this.kolicina * 1.89).toFixed(2)
              }
             
               
        },     
    },
}
</script>

<style>
   #nutriupit {
        background-color: #333;
        color: white;
        padding-bottom: 10 px;
        text-align: center;
        margin-top: 40px;
        padding-top:20px;
    }
#naslov {
    margin-bottom: 30px;
}
    #nutrires {
        background-color: #333;
        color: white;
        padding-bottom: 10 px;
        text-align: center;
        margin-top: 40px;
        padding-top:20px;
    }
    #korisnik {
        padding-top: 0px;
    }
    #nutributton {
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
    p3 {
       font-size: 18px;
       color: orange;
    }
</style>