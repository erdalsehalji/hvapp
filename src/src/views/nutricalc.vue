<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                      <h5><strong>NUTRITIVNI KALKULATOR</strong></h5>
                </div>
 
                <div id="nutriupit" class="col-4">
                    <form>
                        <div id="korisnik" class="form-group"><label for="exampleInputname">Naziv namirnice</label><input type="text"
                                class="form-control" id="exampleInputname" aria-describedby="nameHelp"
                                placeholder="ime namirnice"></div>
                        <div class="form-group"><label for="exampleInputPassword1">Količina</label><input
                                type="text" class="form-control" id="exampleInputezina" placeholder="količina/grami">
                        </div>
                        <button id="nutributton" type="submit" class="btn btn-primary">Izračunaj</button>
                        <br>
                        <button id="nutributton" type="submit" class="btn btn-primary">RANDOM</button>
                    </form>
                </div>
       
          <div class="col-1">
          </div>
                <div id="nutrires" class="col-7">                      
                    <div id="korisnik" class="form-row">
                        <div class="form-group col-md-4"><label for="inputEmail4">Energija (kJ)</label><input type="email"
                                class="form-control" id="inputEmail4" placeholder=""></div>
                        <div class="form-group col-md-4"><label for="inputEmail4">Energija (kcal)</label><input type="email"
                                class="form-control" id="inputEmail4" placeholder=""></div>
                        <div class="form-group col-md-4"><label for="inputEmail4">Ugljikohidrati</label><input type="email"
                                class="form-control" id="inputEmail4" placeholder=""></div>
                        <div class="form-group col-md-4"><label for="inputPassword4">Proteini</label><input
                                type="Password" id="inputpassword" placeholder="" class="form-control"></div>
                        <div class="form-group col-md-4"><label for="inputPassword4">Masti</label><input
                                type="Password" id="inputpassword" placeholder="" class="form-control"></div>
                        <div class="form-group col-md-4"><label for="inputPassword4">Vlakna</label><input
                                type="Password" id="inputpassword" placeholder="" class="form-control"></div>
                        <p>*količine su prikazane u gramima</p>
                    </div>
                </div>                         
            </div>
        </div>
        </div>
</template>

<style>
   #nutriupit {
        background-color: #333;
        color: white;
        padding-bottom: 10 px;
        text-align: center;
        padding-top: 20px;
        padding-bottom: 20 px;
        margin-top: 100px;
    }

    #nutrires {
        background-color: #333;
        color: white;
        padding-bottom: 10 px;
        text-align: center;
        padding-top: 20px;
        padding-bottom: 20px;
        margin-top: 100px;
        margin-bottom: 50px;
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
    align-items: center;
    margin-left: 260px;
    }
</style>