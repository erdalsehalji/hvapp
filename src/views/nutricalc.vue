
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
                                placeholder="ime namirnice"></div>
                        <div class="form-group"><label >Količina</label><input
                                type="char" class="form-control" 
                              name="kolicina" v-model="kolicina"
                                id="kolicina" placeholder="količina/grami">
                        </div>
                       
                    </form>
                </div>
       
          <div class="col-1">
          </div>
                <div id="nutrires" class="col-8">                      
                    <div id="korisnik" class="form-row">
                       
                        <div class="form-group col-md-4"><label>Energija (kalorije)</label><input type="number"
                        :value="izracunenergija" name="izracunenergija"
                                class="form-control" id="izracunenergija" placeholder=""></div>
                        <div class="form-group col-md-4"><label>Ugljikohidrati (grama)</label><input type="char"
                            :value="izracunugljikohidrati" name="izracunugljikohidrati"
                                class="form-control" id="izracunenergija" placeholder=""></div>
                        <div class="form-group col-md-4"><label>Proteini (grama)</label><input
                                type="char" 
                                  :value="izracunproteini" name="izracunproteini"
                                id="izracunenergija" placeholder="" class="form-control"></div>
                        <div class="form-group col-md-4"><label>Masti (grama)</label><input
                                type="char" :value="izracunmasti" name="izracunmasti" id="izracunmasti" placeholder="" class="form-control"></div>
                        <div class="form-group col-md-4"><label>Vlakna (grama)</label><input
                                type="char" :value="izracunvlakna" name="izracunvlakna" id="izracunmasti" placeholder="" class="form-control"></div>
                          <div class="form-group col-md-4"><label>Vitamin C (miligrama)</label><input
                                type="char" :value="izracunvitaminc" name="izracunvitaminc" id="izracunvitaminc" placeholder="" class="form-control"></div>
                          <div class="form-group col-md-4"><label>Kalij (miligrama)</label><input
                                type="char" :value="izracunkalij" name="izracunkalij" id="izracunkalij" placeholder="" class="form-control"></div>
                          <div class="form-group col-md-4"><label>Kalcij (miligrama)</label><input
                                type="char" :value="izracunkalcij" name="izracunkalcij" id="izracunkalcij" placeholder="" class="form-control"></div>
                          <div class="form-group col-md-4"><label>Željezo (miligrama)</label><input
                                type="char" :value="izracunželjezo" name="izracunzeljezo" id="izracunželjezo" placeholder="" class="form-control"></div>
                      
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
                        <div class="form-group col-md-4"><label >Količina</label><input
                                type="char" class="form-control" 
                              name="kolicina1" v-model="kolicina1"
                                id="kolicina1" placeholder="količina/grami">
                        </div>
                         
                          <div class="form-group ">
                           <label>Obrok 2 (doručak)</label>
               <select class="form-control" type="char" v-model="namirnica2" name="namirnica2" id="namirnica2" placeholder="" >
                        <option>Sendvič</option>
                        <option>Čokoladno mlijeko</option>
                        <option>Banana</option>
                        <option>Zobena kaša</option>
                        <option>Omlet</option>
                        <option>Smoothie</option>
                        <option>Kruh i pašteta</option>
                        <option>Jabuka</option>
                        <option>Grčki jogurt</option>
                        <option>Puding i chia </option>
    </select>
  </div>
                        <div class="form-group col-md-4"><label >Količina</label><input
                                type="char" class="form-control" 
                              name="kolicina2" v-model="kolicina2"
                                id="kolicina2" placeholder="količina/grami">
                        </div>

                          <div class="form-group">
                           <label>Obrok 3 (ručak)</label>
               <select class="form-control" type="char" v-model="namirnica3" name="namirnica3" id="namirnica3" placeholder="" >
                        <option>Pećena pileća salata</option>
                        <option>Pizza</option>
                        <option>Sarma</option>
                        <option>Čevapi</option>
                        <option>Busadsadsddssdrek</option>
                        <option>Lazanje</option>
                        <option>Grah</option>
                        <option>Sarma</option>
                        <option>Čevapi</option>
                        <option>Burek</option>
    </select>
  </div>
                        <div class="form-group col-md-4"><label >Količina</label><input
                                type="char" class="form-control" 
                              name="kolicina3" v-model="kolicina3"
                                id="kolicina3" placeholder="količina/grami">
                        </div>
                          <div class="form-group">
                           <label>Obrok 4 (užina)</label>
               <select class="form-control" type="char" v-model="namirnica4" name="namirnica4" id="namirnica4" placeholder="" >
                        <option>Pašta s tunom</option>
                        <option>Pizza</option>
                        <option>Sarma</option>
                        <option>Busadsadsddssdrek</option>
                        <option>Burek</option>
                        <option>Lazanje</option>
                        <option>Grah</option>
                        <option>Sarma</option>
                        <option>Čevapi</option>
                        <option>Burek</option>
    </select>
  </div>
                        <div class="form-group col-md-4"><label >Količina</label><input
                                type="char" class="form-control" 
                              name="kolicina4" v-model="kolicina4"
                                id="kolicina4" placeholder="količina/grami">
                        </div>
                          <div class="form-group">
                           <label>Obrok 5 (večera)</label>
               <select class="form-control" type="char" v-model="namirnica5" name="namirnica5" id="namirnica5" placeholder="" >
                        <option>Pašta s tunom</option>
                        <option>Pizza</option>
                        <option>Sarma</option>
                        <option>Čevapi</option>
                        <option>Busadsadsddssdrek</option>
                        <option>Lazanje</option>
                        <option>Grah</option>
                        <option>Sarma</option>
                        <option>Čevapi</option>
                        <option>Burek</option>
    </select>
  </div>
                        <div class="form-group col-md-4"><label >Količina</label><input
                                type="char" class="form-control" 
                              name="kolicina5" v-model="kolicina5"
                                id="kolicina5" placeholder="količina/grami">
                        </div>
                </div>  
                </div>  
                     <div class="col-md-1"></div>
                 <div id="nutrires" class="col-7">                      
                    <div id="korisnik" class="form-row">
                       
                        <div class="form-group col-md-4"><label>Energija (kalorije)</label><input type="char"
                        :value="izracunenergijaukupno" name="izracunenergijaukupno"
                                class="form-control" id="izracunenergijaukupno" placeholder=""></div>
                        <div class="form-group col-md-4"><label>Ugljikohidrati (grama)</label><input type="char"
                            :value="izracunugljikohidratiukupno" name="izracunugljikohidratiukupno"
                                class="form-control" id="izracunenergijaukupno" placeholder=""></div>
                        <div class="form-group col-md-4"><label>Proteini (grama)</label><input
                                type="char" 
                                  :value="izracunproteiniukupno" name="izracunproteiniukupno"
                                id="izracunenergijaukupno" placeholder="" class="form-control"></div>
                        <div class="form-group col-md-4"><label>Masti (grama)</label><input
                                type="char" :value="izracunmastiukupno" name="izracunmastiukupno" id="izracunmastiukupno" placeholder="" class="form-control"></div>
                        <div class="form-group col-md-4"><label>Vlakna (grama)</label><input
                                type="char" :value="izracunvlaknaukupno" name="izracunvlaknaukupno" id="izracunmastiukupno" placeholder="" class="form-control"></div>
                          <div class="form-group col-md-4"><label>Vitamin C (miligrama)</label><input
                                type="char" :value="izracunvitamincukupno" name="izracunvitamincukupno" id="izracunvitamincukupno" placeholder="" class="form-control"></div>
                          <div class="form-group col-md-4"><label>Kalij (miligrama)</label><input
                                type="char" :value="izracunkalijukupno" name="izracunkalijukupno" id="izracunkalijukupno" placeholder="" class="form-control"></div>
                          <div class="form-group col-md-4"><label>Kalcij (miligrama)</label><input
                                type="char" :value="izracunkalcijukupno" name="izracunkalcijukupno" id="izracunkalcijukupno" placeholder="" class="form-control"></div>
                          <div class="form-group col-md-4"><label>Željezo (miligrama)</label><input
                                type="char" :value="izracunželjezoukupno" name="izracunzeljezoukupno" id="izracunželjezoukupno" placeholder="" class="form-control"></div>
                      
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
            namirnica: null,
            kolicina: 0,
          
            namirnica1: '',
            namirnica2: '',
            namirnica3: '',
            namirnica4: '',
            namirnica5: '',
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
           if (this.namirnica1 === 'Bobićasto voće') {
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
            return nam1u.toFixed(2)
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
           if (this.namirnica1 === 'Bobićasto voće') {
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
            let nam1p = this.kolicina1 * 22
            return nam1p
         }
           if (this.namirnica1 === 'Bobićasto voće') {
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
           if (this.namirnica1 === 'Bobićasto voće') {
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
           if (this.namirnica1 === 'Bobićasto voće') {
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
           if (this.namirnica1 === 'Bobićasto voće') {
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
           if (this.namirnica1 === 'Bobićasto voće') {
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
           if (this.namirnica1 === 'Bobićasto voće') {
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
           if (this.namirnica1 === 'Bobićasto voće') {
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

      },

        izracunenergija3: function () {

      },

        izracunenergija4: function () {

      },

        izracunenergija5: function () {

      },
        izracunenergijaukupno: function () {
                let euk = this.izracunenergija1
                return euk
             
          },
        

        izracunenergija: function () {
           /*VOĆE*/
           if (this.namirnica === 'jabuka') {
           return (this.kolicina * 0.52).toFixed(2)
              }
                if (this.namirnica === 'banana') {
           return (this.kolicina * 0.107).toFixed(2)
              }
                   if (this.namirnica === 'naranča') {
           return (this.kolicina * 0.97).toFixed(2)
              }
                  if (this.namirnica === 'jagoda') {
           return (this.kolicina * 0.32).toFixed(2)
              }
              
                  if (this.namirnica === 'kruška') {
           return (this.kolicina * 0.57).toFixed(2)
              }
                   if (this.namirnica === 'limun') {
           return (this.kolicina * 0.47).toFixed(2)
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
           return (this.kolicina * 0.47).toFixed(2)
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
           return (this.kolicina * 4.98).toFixed(2)
              }
                   if (this.namirnica === 'smoki') {
           return (this.kolicina * 5.20).toFixed(2)
              }
              if (this.namirnica === 'krekeri') {
           return (this.kolicina * 5.0).toFixed(2)
              }

            if (this.namirnica === 'kikiriki') {
           return (this.kolicina * 5.70).toFixed(2)
              }
                if (this.namirnica === 'orah') {
           return (this.kolicina * 6.54).toFixed(2)
              }
                   if (this.namirnica === 'badem') {
           return (this.kolicina * 5.79).toFixed(2)
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
           return (this.kolicina * 0.0).toFixed(2)
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
           return (this.kolicina * 0.60).toFixed(2)
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
           return (this.kolicina * 3.64).toFixed(2)
              }

            if (this.namirnica === 'brašno') {
           return (this.kolicina * 0.60).toFixed(2)
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
         
            /*JELA*/
               
        },


        izracunugljikohidrati: function () {
           if (this.namirnica === 'jabuka') {
           return (this.kolicina * 0.14).toFixed(2)
              }

              if (this.namirnica === 'banana') {
           return (this.kolicina * 0.23).toFixed(2)
              }

                   if (this.namirnica === 'naranča') {
           return (this.kolicina * 0.25).toFixed(2)
              }
                  if (this.namirnica === 'jagoda') {
           return (this.kolicina * 0.077).toFixed(2)
              }
                   if (this.namirnica === 'kruška') {
           return (this.kolicina * 0.15).toFixed(2)
              }

            if (this.namirnica === 'limun') {
           return (this.kolicina * 0.16).toFixed(2)
              }
                   if (this.namirnica === 'breskva') {
           return (this.kolicina * 0.095).toFixed(2)
              }
              
            if (this.namirnica === 'mandarina') {
           return (this.kolicina * 0.13).toFixed(2)
              }
                   if (this.namirnica === 'smokva') {
           return (this.kolicina * 0.1918).toFixed(2)
              }
                if (this.namirnica === 'kiwi') {
           return (this.kolicina * 0.1466).toFixed(2)
              }

            if (this.namirnica === 'mango') {
           return (this.kolicina * 0.17).toFixed(2)
              }
                   if (this.namirnica === 'marelica') {
           return (this.kolicina * 0.1112).toFixed(2)
              }
                if (this.namirnica === 'kokos') {
           return (this.kolicina * 0.3349).toFixed(2)
              }

            if (this.namirnica === 'malina') {
           return (this.kolicina * 0.1194).toFixed(2)
              }
                   if (this.namirnica === 'borovnica') {
           return (this.kolicina * 0.1449).toFixed(2)
              }
           /*POVRĆE*/
           if (this.namirnica === 'artičoka') {
           return (this.kolicina * 0.11).toFixed(2)
              }

            if (this.namirnica === 'grah') {
           return (this.kolicina * 0.63).toFixed(2)
              }
                   if (this.namirnica === 'paprika') {
           return (this.kolicina * 0.54).toFixed(2)
              }
              if (this.namirnica === 'mrkva') {
           return (this.kolicina * 0.096).toFixed(2)
              }

            if (this.namirnica === 'kelj') {
           return (this.kolicina * 0.044).toFixed(2)
              }
                   if (this.namirnica === 'kupus') {
           return (this.kolicina * 0.058).toFixed(2)
              }
              if (this.namirnica === 'krastavac') {
           return (this.kolicina * 0.125).toFixed(2)
              }

            if (this.namirnica === 'celer') {
           return (this.kolicina * 0.03).toFixed(2)
              }
                   if (this.namirnica === 'luk') {
           return (this.kolicina * 0.093).toFixed(2)
              }
              if (this.namirnica === 'lubenica') {
           return (this.kolicina * 0.076).toFixed(2)
              }

            if (this.namirnica === 'dinja') {
           return (this.kolicina * 0.066).toFixed(2)
              }
                   if (this.namirnica === 'krompir') {
           return (this.kolicina * 0.17).toFixed(2)
              }
              if (this.namirnica === 'bundeva') {
           return (this.kolicina * 0.065).toFixed(2)
              }

            if (this.namirnica === 'špinat') {
           return (this.kolicina * 0.036).toFixed(2)
              }
                   if (this.namirnica === 'rajčica') {
           return (this.kolicina * 0.051).toFixed(2)
              }
              /*GRICKALICE I ORAŠASTI PLODOVI*/
            if (this.namirnica === 'čips') {
           return (this.kolicina * 0.68).toFixed(2)
              }
                   if (this.namirnica === 'smoki') {
           return (this.kolicina * 0.50).toFixed(2)
              }
              if (this.namirnica === 'krekeri') {
           return (this.kolicina * 0.625).toFixed(2)
              }

            if (this.namirnica === 'kikiriki') {
           return (this.kolicina * 0.16).toFixed(2)
              }
              if (this.namirnica === 'orah') {
           return (this.kolicina * 0.14).toFixed(2)
              }
                   if (this.namirnica === 'badem') {
           return (this.kolicina * 0.22).toFixed(2)
              }
              if (this.namirnica === 'lješnjak') {
           return (this.kolicina * 0.23).toFixed(2)
              }

            if (this.namirnica === 'indijski oraščić') {
           return (this.kolicina * 3.62).toFixed(2)
              }
            if (this.namirnica === 'voda') {
           return (this.kolicina * 0.0).toFixed(2)
              }
              if (this.namirnica === 'kola') {
           return (this.kolicina * 0.10).toFixed(2)
              }

            if (this.namirnica === 'mineralna voda') {
           return (this.kolicina * 0.0).toFixed(2)
              }
                if (this.namirnica === 'cijeđeni voćni sok') {
           return (this.kolicina * 6.54).toFixed(2)
              }
                   if (this.namirnica === 'maslinovo ulje') {
           return (this.kolicina * 0.0).toFixed(2)
              }
              if (this.namirnica === 'bademovo ulje') {
           return (this.kolicina * 0.0).toFixed(2)
              }

            if (this.namirnica === 'mlijeko') {
           return (this.kolicina * 0.045).toFixed(2)
              }
                if (this.namirnica === 'čokoladno mlijeko') {
           return (this.kolicina * 0.11).toFixed(2)
              }
              if (this.namirnica === 'kokosovo mlijeko') {
           return (this.kolicina * 0.055).toFixed(2)
              }

            if (this.namirnica === 'ulje crnog kima') {
           return (this.kolicina * 5.53).toFixed(2)
              }
              if (this.namirnica === 'sir') {
           return (this.kolicina * 0.0471).toFixed(2)
              }
              if (this.namirnica === 'ocat') {
           return (this.kolicina * 0.0004).toFixed(2)
              }

            if (this.namirnica === 'brašno') {
           return (this.kolicina * 0.7631).toFixed(2)
              }
                if (this.namirnica === 'sol') {
           return (this.kolicina * 0.0).toFixed(2)
              }
              if (this.namirnica === 'papar') {
           return (this.kolicina * 0.6481).toFixed(2)
              }
                if (this.namirnica === 'sećer') {
           return (this.kolicina * 0.9998).toFixed(2)
              }
              if (this.namirnica === 'kruh') {
           return (this.kolicina * 0.5061).toFixed(2)
              }

            if (this.namirnica === 'chia sjemenke') {
           return (this.kolicina * 1.78).toFixed(2)
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
           return (this.kolicina * 0.015).toFixed(2)
              }
               if (this.namirnica === 'jagoda') {
           return (this.kolicina * 0.007).toFixed(2)
              }
               if (this.namirnica === 'kruška') {
           return (this.kolicina * 0.004).toFixed(2)
              }
               if (this.namirnica === 'limun') {
           return (this.kolicina * 0.015).toFixed(2)
              }
                   if (this.namirnica === 'breskva') {
           return (this.kolicina * 0.009).toFixed(2)
              }
              
            if (this.namirnica === 'mandarina') {
           return (this.kolicina * 0.008).toFixed(2)
              }
                   if (this.namirnica === 'smokva') {
           return (this.kolicina * 0.0075).toFixed(2)
              }
             if (this.namirnica === 'kiwi') {
           return (this.kolicina * 0.0114).toFixed(2)
              }

            if (this.namirnica === 'mango') {
           return (this.kolicina * 0.0051).toFixed(2)
              }
                   if (this.namirnica === 'marelica') {
           return (this.kolicina * 0.014).toFixed(2)
              }
                if (this.namirnica === 'kokos') {
           return (this.kolicina * 0.1523).toFixed(2)
              }

            if (this.namirnica === 'malina') {
           return (this.kolicina * 0.012).toFixed(2)
              }
                   if (this.namirnica === 'borovnica') {
           return (this.kolicina * 0.0074).toFixed(2)
              }
            /*POVRĆE*/
           if (this.namirnica === 'artičoka') {
           return (this.kolicina * 0.033).toFixed(2)
              }

            if (this.namirnica === 'grah') {
           return (this.kolicina * 0.21).toFixed(2)
              }
                   if (this.namirnica === 'paprika') {
           return (this.kolicina * 0.14).toFixed(2)
              }
              if (this.namirnica === 'mrkva') {
           return (this.kolicina * 3.54).toFixed(2)
              }

            if (this.namirnica === 'kelj') {
           return (this.kolicina * 0.029).toFixed(2)
              }
                   if (this.namirnica === 'kupus') {
           return (this.kolicina * 0.013).toFixed(2)
              }
              if (this.namirnica === 'krastavac') {
           return (this.kolicina * 0.16).toFixed(2)
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
           return (this.kolicina * 0.011).toFixed(2)
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
           return (this.kolicina * 0.012).toFixed(2)
              }
              /*GRICKALICE I ORAŠASTI PLODOVI*/
                 if (this.namirnica === 'čips') {
           return (this.kolicina * 0.023).toFixed(2)
              }
                   if (this.namirnica === 'smoki') {
           return (this.kolicina * 0.125).toFixed(2)
              }
              if (this.namirnica === 'krekeri') {
           return (this.kolicina * 0.068).toFixed(2)
              }

            if (this.namirnica === 'kikiriki') {
           return (this.kolicina * 0.26).toFixed(2)
              }
               if (this.namirnica === 'orah') {
           return (this.kolicina * 0.15).toFixed(2)
              }
                   if (this.namirnica === 'badem') {
           return (this.kolicina * 0.21).toFixed(2)
              }
              if (this.namirnica === 'lješnjak') {
           return (this.kolicina * 0.15).toFixed(2)
              }

            if (this.namirnica === 'indijski oraščić') {
           return (this.kolicina * 0.30).toFixed(2)
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
           return (this.kolicina * 0.104).toFixed(2)
              }
                   if (this.namirnica === 'maslinovo ulje') {
           return (this.kolicina * 0.0).toFixed(2)
              }
              if (this.namirnica === 'bademovo ulje') {
           return (this.kolicina * 0.0).toFixed(2)
              }

            if (this.namirnica === 'mlijeko') {
           return (this.kolicina * 0.031).toFixed(2)
              }
                if (this.namirnica === 'čokoladno mlijeko') {
           return (this.kolicina * 0.035).toFixed(2)
              }
              if (this.namirnica === 'kokosovo mlijeko') {
           return (this.kolicina * 0.023).toFixed(2)
              }
              if (this.namirnica === 'sir') {
           return (this.kolicina * 0.221).toFixed(2)
              }
              if (this.namirnica === 'ocat') {
           return (this.kolicina * 0.0).toFixed(2)
              }

            if (this.namirnica === 'brašno') {
           return (this.kolicina * 0.1033).toFixed(2)
              }
                if (this.namirnica === 'sol') {
           return (this.kolicina * 0.77).toFixed(2)
              }
              if (this.namirnica === 'papar') {
           return (this.kolicina * 0.1095).toFixed(2)
              }
                if (this.namirnica === 'sećer') {
           return (this.kolicina * 0.0).toFixed(2)
              }
              if (this.namirnica === 'kruh') {
           return (this.kolicina * 0.07664).toFixed(2)
              }

            if (this.namirnica === 'chia sjemenke') {
           return (this.kolicina * 0.542).toFixed(2)
              }
                if (this.namirnica === 'čokolada') {
           return (this.kolicina * 0.039).toFixed(2)
              }
         

          
        },

         izracunmasti: function () {
           if (this.namirnica === 'jabuka') {
           return (this.kolicina * 0.14).toFixed(2)

              }
           if (this.namirnica === 'banana') {
           return (this.kolicina * 0.003).toFixed(2)
              }

                if (this.namirnica === 'naranča') {
           return (this.kolicina * 0.002).toFixed(2)
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
           return (this.kolicina * 0.0027).toFixed(2)
              }
                   if (this.namirnica === 'marelica') {
           return (this.kolicina * 0.0039).toFixed(2)
              }
                if (this.namirnica === 'kokos') {
           return (this.kolicina * 0.3349).toFixed(2)
              }

            if (this.namirnica === 'malina') {
           return (this.kolicina * 0.0065).toFixed(2)
              }
                   if (this.namirnica === 'borovnica') {
           return (this.kolicina * 0.0033).toFixed(2)
              }
                 /*POVRĆE*/
           if (this.namirnica === 'artičoka') {
           return (this.kolicina * 0.002).toFixed(2)
              }

            if (this.namirnica === 'grah') {
           return (this.kolicina * 0.012).toFixed(2)
              }
                   if (this.namirnica === 'paprika') {
           return (this.kolicina * 0.13).toFixed(2)
              }
              if (this.namirnica === 'mrkva') {
           return (this.kolicina * 0.009).toFixed(2)
              }

            if (this.namirnica === 'kelj') {
           return (this.kolicina * 0.015).toFixed(2)
              }
                   if (this.namirnica === 'kupus') {
           return (this.kolicina * 0.001).toFixed(2)
              }
              if (this.namirnica === 'krastavac') {
           return (this.kolicina * 0.009).toFixed(2)
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
           return (this.kolicina * 0.02).toFixed(2)
              }
              /*GRICKALICE I ORAŠASTI PLODOVI*/
                 if (this.namirnica === 'čips') {
           return (this.kolicina * 0.25).toFixed(2)
              }
                   if (this.namirnica === 'smoki') {
           return (this.kolicina * 0.029).toFixed(2)
              }
              if (this.namirnica === 'krekeri') {
           return (this.kolicina * 0.275).toFixed(2)
              }

            if (this.namirnica === 'kikiriki') {
           return (this.kolicina * 0.50).toFixed(2)
              }
               if (this.namirnica === 'orah') {
           return (this.kolicina * 0.65).toFixed(2)
              }
                   if (this.namirnica === 'badem') {
           return (this.kolicina * 0.50).toFixed(2)
              }
              if (this.namirnica === 'lješnjak') {
           return (this.kolicina * 0.53).toFixed(2)
              }

            if (this.namirnica === 'indijski oraščić') {
           return (this.kolicina * 0.44).toFixed(2)
              }
               if (this.namirnica === 'voda') {
           return (this.kolicina * 5.20).toFixed(2)
              }
              if (this.namirnica === 'kola') {
           return (this.kolicina * 0.003).toFixed(2)
              }

            if (this.namirnica === 'mineralna voda') {
           return (this.kolicina * 0.0).toFixed(2)
              }
                if (this.namirnica === 'cijeđeni voćni sok') {
           return (this.kolicina * 0.002).toFixed(2)
              }
                   if (this.namirnica === 'maslinovo ulje') {
           return (this.kolicina * 1.0).toFixed(2)
              }
              if (this.namirnica === 'bademovo ulje') {
           return (this.kolicina * 1.0).toFixed(2)
              }

            if (this.namirnica === 'mlijeko') {
           return (this.kolicina * 0.035).toFixed(2)
              }
                if (this.namirnica === 'čokoladno mlijeko') {
           return (this.kolicina * 0.023).toFixed(2)
              }
              if (this.namirnica === 'kokosovo mlijeko') {
           return (this.kolicina * 0.24).toFixed(2)
              }
              if (this.namirnica === 'sir') {
           return (this.kolicina * 0.2691).toFixed(2)
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
           return (this.kolicina * 0.0326).toFixed(2)
              }
                if (this.namirnica === 'sećer') {
           return (this.kolicina * 0.0).toFixed(2)
              }
              if (this.namirnica === 'kruh') {
           return (this.kolicina * 0.0329).toFixed(2)
              }

            if (this.namirnica === 'chia sjemenke') {
           return (this.kolicina * 2.57).toFixed(2)
              }
                if (this.namirnica === 'čokolada') {
           return (this.kolicina * 0.342).toFixed(2)
              }
          

        },

         izracunvlakna: function () {
           if (this.namirnica === 'jabuka') {
           return (this.kolicina * 0.024).toFixed(2)

              }if (this.namirnica === 'banana') {
           return (this.kolicina * 0.026).toFixed(2)
              }

                   if (this.namirnica === 'naranča') {
           return (this.kolicina * 0.11).toFixed(2)
              }
               if (this.namirnica === 'jagoda') {
           return (this.kolicina * 0.002).toFixed(2)
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
           return (this.kolicina * 0.05).toFixed(2)
              }

            if (this.namirnica === 'grah') {
           return (this.kolicina * 0.16).toFixed(2)
              }
                   if (this.namirnica === 'paprika') {
           return (this.kolicina * 0.35).toFixed(2)
              }
              if (this.namirnica === 'mrkva') {
           return (this.kolicina * 0.028).toFixed(2)
              }

            if (this.namirnica === 'kelj') {
           return (this.kolicina * 0.041).toFixed(2)
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
           return (this.kolicina * 0.011).toFixed(2)
              }
              /*GRICKALICE I ORAŠASTI PLODOVI*/
                 if (this.namirnica === 'čips') {
           return (this.kolicina * 0.072).toFixed(2)
              }
                   if (this.namirnica === 'smoki') {
           return (this.kolicina * 0.77).toFixed(2)
              }
              if (this.namirnica === 'krekeri') {
           return (this.kolicina * 0.023).toFixed(2)
              }

            if (this.namirnica === 'kikiriki') {
           return (this.kolicina * 0.095).toFixed(2)
              }
               if (this.namirnica === 'orah') {
           return (this.kolicina * 0.067).toFixed(2)
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
           return (this.kolicina * 0.002).toFixed(2)
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
           return (this.kolicina * 0.055).toFixed(2)
              }
         
        
        },

          izracunkalij: function () {
           if (this.namirnica === 'jabuka') {
           return (this.kolicina * 1.7).toFixed(2)

              }
              if (this.namirnica === 'banana') {
           return (this.kolicina * 3.58).toFixed(2)
              }

               if (this.namirnica === 'naranča') {
           return (this.kolicina * 2.12).toFixed(2)
              }
            if (this.namirnica === 'jagoda') {
           return (this.kolicina * 1.53).toFixed(2)
              }
                 if (this.namirnica === 'kruška') {
           return (this.kolicina * 1.16).toFixed(2)
              }
    
            if (this.namirnica === 'limun') {
           return (this.kolicina * 1.6).toFixed(2)
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
           return (this.kolicina * 1.51).toFixed(2)
              }
                if (this.namirnica === 'kokos') {
           return (this.kolicina * 3.56).toFixed(2)
              }

            if (this.namirnica === 'malina') {
           return (this.kolicina * 0.65).toFixed(2)
              }
                   if (this.namirnica === 'borovnica') {
           return (this.kolicina * 0.77).toFixed(2)
              }
               /*POVRĆE*/
           if (this.namirnica === 'artičoka') {
           return (this.kolicina * 3.70).toFixed(2)
              }

            if (this.namirnica === 'grah') {
           return (this.kolicina * 13.93).toFixed(2)
              }
                   if (this.namirnica === 'paprika') {
           return (this.kolicina * 22.80).toFixed(2)
              }
              if (this.namirnica === 'mrkva') {
           return (this.kolicina * 3.20).toFixed(2)
              }

            if (this.namirnica === 'kelj') {
           return (this.kolicina * 3.48).toFixed(2)
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
           return (this.kolicina * 1.82).toFixed(2)
              }
                   if (this.namirnica === 'krompir') {
           return (this.kolicina * 4.25).toFixed(2)
              }
              if (this.namirnica === 'bundeva') {
           return (this.kolicina * 3.40).toFixed(2)
              }

            if (this.namirnica === 'špinat') {
           return (this.kolicina * 5.58).toFixed(2)
              }
                   if (this.namirnica === 'rajčica') {
           return (this.kolicina * 2.04).toFixed(2)
              }
              /*GRICKALICE I ORAŠASTI PLODOVI*/
                 if (this.namirnica === 'čips') {
           return (this.kolicina * 7.55).toFixed(2)
              }
                   if (this.namirnica === 'smoki') {
           return (this.kolicina * 0.755).toFixed(2)
              }
              if (this.namirnica === 'krekeri') {
           return (this.kolicina * 1.175).toFixed(2)
              }

            if (this.namirnica === 'kikiriki') {
           return (this.kolicina * 7.44).toFixed(2)
              }
               if (this.namirnica === 'orah') {
           return (this.kolicina * 4.41).toFixed(2)
              }
                   if (this.namirnica === 'badem') {
           return (this.kolicina * 7.33).toFixed(2)
              }
              if (this.namirnica === 'lješnjak') {
           return (this.kolicina * 7.38).toFixed(2)
              }

            if (this.namirnica === 'indijski oraščić') {
           return (this.kolicina * 6.60).toFixed(2)
              }
               if (this.namirnica === 'voda') {
           return (this.kolicina * 0.0).toFixed(2)
              }
              if (this.namirnica === 'kola') {
           return (this.kolicina * 0.05).toFixed(2)
              }

            if (this.namirnica === 'mineralna voda') {
           return (this.kolicina * 0.02).toFixed(2)
              }
                if (this.namirnica === 'cijeđeni voćni sok') {
           return (this.kolicina * 2.00).toFixed(2)
              }
                   if (this.namirnica === 'maslinovo ulje') {
           return (this.kolicina * 0.01).toFixed(2)
              }
              if (this.namirnica === 'bademovo ulje') {
           return (this.kolicina * 0.0).toFixed(2)
              }

            if (this.namirnica === 'mlijeko') {
           return (this.kolicina * 2.53).toFixed(2)
              }
                if (this.namirnica === 'čokoladno mlijeko') {
           return (this.kolicina * 1.97).toFixed(2)
              }
              if (this.namirnica === 'kokosovo mlijeko') {
           return (this.kolicina * 2.63).toFixed(2)
              }
            if (this.namirnica === 'sir') {
           return (this.kolicina * 1.87).toFixed(2)
              }
              if (this.namirnica === 'ocat') {
           return (this.kolicina * 8.84).toFixed(2)
              }

            if (this.namirnica === 'brašno') {
           return (this.kolicina * 1.07).toFixed(2)
              }
                if (this.namirnica === 'sol') {
           return (this.kolicina * 0.08).toFixed(2)
              }
              if (this.namirnica === 'papar') {
           return (this.kolicina * 2.30).toFixed(2)
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
           return (this.kolicina * 2.90).toFixed(2)
              }
          
          
        },

        izracunvitaminc: function () {
           if (this.namirnica === 'jabuka') {
           return (this.kolicina * 0.077).toFixed(2)

              }if (this.namirnica === 'banana') {
           return (this.kolicina * 0.103).toFixed(2)
              }

                if (this.namirnica === 'naranča') {
           return (this.kolicina * 0.697).toFixed(2)
              }
             if (this.namirnica === 'jagoda') {
           return (this.kolicina * 0.58).toFixed(2)
              }
                 if (this.namirnica === 'kruška') {
           return (this.kolicina * 0.042).toFixed(2)
              }
             if (this.namirnica === 'limun') {
           return (this.kolicina * 0.307).toFixed(2)
              }
                   if (this.namirnica === 'breskva') {
           return (this.kolicina * 0.065).toFixed(2)
              }
               
            if (this.namirnica === 'mandarina') {
           return (this.kolicina * 0.22).toFixed(2)
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
           return (this.kolicina * 0.117).toFixed(2)
              }

            if (this.namirnica === 'grah') {
           return (this.kolicina * 0.063).toFixed(2)
              }
                   if (this.namirnica === 'paprika') {
           return (this.kolicina * 0.009).toFixed(2)
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
           return (this.kolicina * 0.09).toFixed(2)
              }

            if (this.namirnica === 'špinat') {
           return (this.kolicina * 0.281).toFixed(2)
              }
                   if (this.namirnica === 'rajčica') {
           return (this.kolicina * 0.127).toFixed(2)
              }
              /*GRICKALICE I ORAŠASTI PLODOVI*/
                 if (this.namirnica === 'čips') {
           return (this.kolicina * 0.05).toFixed(2)
              }
                   if (this.namirnica === 'smoki') {
           return (this.kolicina * 0.05).toFixed(2)
              }
              if (this.namirnica === 'krekeri') {
           return (this.kolicina * 0.0).toFixed(2)
              }

            if (this.namirnica === 'kikiriki') {
           return (this.kolicina * 0.0).toFixed(2)
              }
              if (this.namirnica === 'orah') {
           return (this.kolicina * 0.013).toFixed(2)
              }
                   if (this.namirnica === 'badem') {
           return (this.kolicina * 0.0).toFixed(2)
              }
              if (this.namirnica === 'lješnjak') {
           return (this.kolicina * 0.0).toFixed(2)
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
           return (this.kolicina * 0.50).toFixed(2)
              }
                   if (this.namirnica === 'maslinovo ulje') {
           return (this.kolicina * 0.0).toFixed(2)
              }
              if (this.namirnica === 'bademovo ulje') {
           return (this.kolicina * 0.0).toFixed(2)
              }

            if (this.namirnica === 'mlijeko') {
           return (this.kolicina * 0.009).toFixed(2)
              }
                if (this.namirnica === 'čokoladno mlijeko') {
           return (this.kolicina * 0.002).toFixed(2)
              }
              if (this.namirnica === 'kokosovo mlijeko') {
           return (this.kolicina * 0.028).toFixed(2)
              }

            if (this.namirnica === 'sir') {
           return (this.kolicina * 0.0).toFixed(2)
              }
              if (this.namirnica === 'ocat') {
           return (this.kolicina * 0.02).toFixed(2)
              }

            if (this.namirnica === 'brašno') {
           return (this.kolicina * 0.60).toFixed(2)
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
           return (this.kolicina * 0.008).toFixed(2)
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
           return (this.kolicina * 0.0025).toFixed(2)
              }
              
            if (this.namirnica === 'mandarina') {
           return (this.kolicina * 0.0015).toFixed(2)
              }
                   if (this.namirnica === 'smokva') {
           return (this.kolicina * 0.0037).toFixed(2)
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
           return (this.kolicina * 0.0234).toFixed(2)
              }

            if (this.namirnica === 'malina') {
           return (this.kolicina * 0.0069).toFixed(2)
              }
                   if (this.namirnica === 'borovnica') {
           return (this.kolicina * 0.0028).toFixed(2)
              }
               /*POVRĆE*/
           if (this.namirnica === 'artičoka') {
           return (this.kolicina * 0.013).toFixed(2)
              }

            if (this.namirnica === 'grah') {
           return (this.kolicina * 0.051).toFixed(2)
              }
                   if (this.namirnica === 'paprika') {
           return (this.kolicina * 0.2114).toFixed(2)
              }
              if (this.namirnica === 'mrkva') {
           return (this.kolicina * 0.003).toFixed(2)
              }

            if (this.namirnica === 'kelj') {
           return (this.kolicina * 0.016).toFixed(2)
              }
                   if (this.namirnica === 'kupus') {
           return (this.kolicina * 0.0047).toFixed(2)
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
           return (this.kolicina * 0.0024).toFixed(2)
              }

            if (this.namirnica === 'dinja') {
           return (this.kolicina * 0.0034).toFixed(2)
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
           return (this.kolicina * 0.0051).toFixed(2)
              }
              /*GRICKALICE I ORAŠASTI PLODOVI*/
                 if (this.namirnica === 'čips') {
           return (this.kolicina * 0.012).toFixed(2)
              }
                   if (this.namirnica === 'smoki') {
           return (this.kolicina * 0.012).toFixed(2)
              }
              if (this.namirnica === 'krekeri') {
           return (this.kolicina * 0.05).toFixed(2)
              }

            if (this.namirnica === 'kikiriki') {
           return (this.kolicina * 0.0391).toFixed(2)
              }
              if (this.namirnica === 'orah') {
           return (this.kolicina * 0.0291).toFixed(2)
              }
                   if (this.namirnica === 'badem') {
           return (this.kolicina * 0.0371).toFixed(2)
              }
              if (this.namirnica === 'lješnjak') {
           return (this.kolicina * 0.0312).toFixed(2)
              }

            if (this.namirnica === 'indijski oraščić') {
           return (this.kolicina * 0.0668).toFixed(2)
              }
               if (this.namirnica === 'voda') {
           return (this.kolicina * 0.0).toFixed(2)
              }
              if (this.namirnica === 'kola') {
           return (this.kolicina * 0.0002).toFixed(2)
              }

            if (this.namirnica === 'mineralna voda') {
           return (this.kolicina * 0.0).toFixed(2)
              }
                if (this.namirnica === 'cijeđeni voćni sok') {
           return (this.kolicina * 0.002).toFixed(2)
              }
                   if (this.namirnica === 'maslinovo ulje') {
           return (this.kolicina * 0.0056).toFixed(2)
              }
              if (this.namirnica === 'bademovo ulje') {
           return (this.kolicina * 6.28).toFixed(2)
              }

            if (this.namirnica === 'mlijeko') {
           return (this.kolicina * 0.0005).toFixed(2)
              }
                if (this.namirnica === 'čokoladno mlijeko') {
           return (this.kolicina * 0.0042).toFixed(2)
              }
              if (this.namirnica === 'kokosovo mlijeko') {
           return (this.kolicina * 0.0164).toFixed(2)
              }
            if (this.namirnica === 'sir') {
           return (this.kolicina * 0.0051).toFixed(2)
              }
              if (this.namirnica === 'ocat') {
           return (this.kolicina * 0.0003).toFixed(2)
              }

            if (this.namirnica === 'brašno') {
           return (this.kolicina * 0.0464).toFixed(2)
              }
                if (this.namirnica === 'sol') {
           return (this.kolicina * 0.0033).toFixed(2)
              }
              if (this.namirnica === 'papar') {
           return (this.kolicina * 0.2886).toFixed(2)
              }
                if (this.namirnica === 'sećer') {
           return (this.kolicina * 0.0001).toFixed(2)
              }
              if (this.namirnica === 'kruh') {
           return (this.kolicina * 0.0374).toFixed(2)
              }

            if (this.namirnica === 'chia sjemenke') {
           return (this.kolicina * 0.0).toFixed(2)
              }
                if (this.namirnica === 'čokolada') {
           return (this.kolicina * 0.0276).toFixed(2)
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
           return (this.kolicina * 1.61).toFixed(2)
              }
              if (this.namirnica === 'jagoda') {
           return (this.kolicina * 0.16).toFixed(2)
              }
                if (this.namirnica === 'kruška') {
           return (this.kolicina * 0.09).toFixed(2)
              }
               if (this.namirnica === 'limun') {
           return (this.kolicina * 1.34).toFixed(2)
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
           return (this.kolicina * 0.44).toFixed(2)
              }

            if (this.namirnica === 'grah') {
           return (this.kolicina * 1.13).toFixed(2)
              }
                   if (this.namirnica === 'paprika') {
           return (this.kolicina * 2.29).toFixed(2)
              }
              if (this.namirnica === 'mrkva') {
           return (this.kolicina * 0.33).toFixed(2)
              }

            if (this.namirnica === 'kelj') {
           return (this.kolicina * 2.54).toFixed(2)
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
           return (this.kolicina * 1.82).toFixed(2)
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
           return (this.kolicina * 0.13).toFixed(2)
              }
              /*GRICKALICE I ORAŠASTI PLODOVI*/
                 if (this.namirnica === 'čips') {
           return (this.kolicina * 0.60).toFixed(2)
              }
                   if (this.namirnica === 'smoki') {
           return (this.kolicina * 0.60).toFixed(2)
              }
              if (this.namirnica === 'krekeri') {
           return (this.kolicina * 0.23).toFixed(2)
              }

            if (this.namirnica === 'kikiriki') {
           return (this.kolicina * 1.06).toFixed(2)
              }
              if (this.namirnica === 'orah') {
           return (this.kolicina * 0.98).toFixed(2)
              }
                   if (this.namirnica === 'badem') {
           return (this.kolicina * 2.69).toFixed(2)
              }
              if (this.namirnica === 'lješnjak') {
           return (this.kolicina * 4.41).toFixed(2)
              }

            if (this.namirnica === 'indijski oraščić') {
           return (this.kolicina * 0.37).toFixed(2)
              }
               if (this.namirnica === 'voda') {
           return (this.kolicina * 0.1).toFixed(2)
              }
              if (this.namirnica === 'kola') {
           return (this.kolicina * 0.01).toFixed(2)
              }

            if (this.namirnica === 'mineralna voda') {
           return (this.kolicina * 0.33).toFixed(2)
              }
                if (this.namirnica === 'cijeđeni voćni sok') {
           return (this.kolicina * 0.11).toFixed(2)
              }
                   if (this.namirnica === 'maslinovo ulje') {
           return (this.kolicina * 0.01).toFixed(2)
              }
              if (this.namirnica === 'bademovo ulje') {
           return (this.kolicina * 0.0).toFixed(2)
              }

            if (this.namirnica === 'mlijeko') {
           return (this.kolicina * 1.13).toFixed(2)
              }
                if (this.namirnica === 'čokoladno mlijeko') {
           return (this.kolicina * 1.14).toFixed(2)
              }
              if (this.namirnica === 'kokosovo mlijeko') {
           return (this.kolicina * 0.16).toFixed(2)
              }

           if (this.namirnica === 'sir') {
           return (this.kolicina * 6.51).toFixed(2)
              }
              if (this.namirnica === 'ocat') {
           return (this.kolicina * 0.06).toFixed(2)
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
           return (this.kolicina * 0.24).toFixed(2)
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
    position: absolute;
    font-family: Chilanka;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 40px;
    color: orange;
    text-align: center;
    margin-left: 240px;
    }
    p3 {
       font-size: 18px;
       color: orange;
    }
</style>