
<template>
    <div>
       
        <div class="container">
            <div class="row">
                <div id="naslov" class="col-12">
                      <h5><strong>NUTRITIVNI KALKULATOR</strong></h5>
                </div>
 
                <div id="nutriupit" class="col-4">
                    <form>      
                        <p>unos namirnica ISKLJUČIVO MALIM slovima</p>           
                        <div id="korisnik" class="form-group"><label for="exampleInputname">Naziv namirnice</label><input type="char"
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
                <div id="nutrires" class="col-7">                      
                    <div id="korisnik" class="form-row">
                       
                        <div class="form-group col-md-4"><label>Energija (kcal)</label><input type="number"
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
                        <p>*količine su prikazane u gramima</p>
                    </div>
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
         
            }
    },

/* KORIŠTENI SU PODACI SA https://www.fatsecret.com/calories-nutrition/usda/*/
/* FORME ZA LOGIN, SIGNUP, TJELESNE SPECIFIKACIJE SU PREUZETE SA BOOTSTRAPA I MODIFICIRANE SU NA NAČIN KOJI JE ODGOVARAO ZA HEALTHVISOR APLIKACIJU*/
    computed: {
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
           return (this.kolicina * 3.54).toFixed(2)
              }

            if (this.namirnica === 'grah') {
           return (this.kolicina * 0.52).toFixed(2)
              }
                   if (this.namirnica === 'paprika') {
           return (this.kolicina * 0.57).toFixed(2)
              }
              if (this.namirnica === 'mrkva') {
           return (this.kolicina * 3.54).toFixed(2)
              }

            if (this.namirnica === 'kelj') {
           return (this.kolicina * 0.52).toFixed(2)
              }
                   if (this.namirnica === 'kupus') {
           return (this.kolicina * 0.57).toFixed(2)
              }
              if (this.namirnica === 'krastavac') {
           return (this.kolicina * 3.54).toFixed(2)
              }

            if (this.namirnica === 'celer') {
           return (this.kolicina * 0.52).toFixed(2)
              }
                   if (this.namirnica === 'luk') {
           return (this.kolicina * 0.57).toFixed(2)
              }
              if (this.namirnica === 'lubenica') {
           return (this.kolicina * 3.54).toFixed(2)
              }

            if (this.namirnica === 'dinja') {
           return (this.kolicina * 0.52).toFixed(2)
              }
                   if (this.namirnica === 'krompir') {
           return (this.kolicina * 0.57).toFixed(2)
              }
              if (this.namirnica === 'bundeva') {
           return (this.kolicina * 3.54).toFixed(2)
              }

            if (this.namirnica === 'špinat') {
           return (this.kolicina * 0.52).toFixed(2)
              }
                   if (this.namirnica === 'rajčica') {
           return (this.kolicina * 0.57).toFixed(2)
              }
            /*GRICKALICE*/
            /*PIĆA*/
            /*NAMIRNICE*/
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
        },

          izracunkalij: function () {
           if (this.namirnica === 'jabuka') {
           return (this.kolicina * 1.7).toFixed(2)

              }if (this.namirnica === 'banana') {
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
</style>