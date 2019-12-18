<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h5><strong>BODY CALC</strong></h5>
                </div>

                <div id="bodyupit" class="col-md-2">
                    <form>
                        <div class="form-group"><label for="exampleInputPassword1">Težina</label><input type="text"
                                class="form-control" id="exampleInputezina" placeholder="">
                        </div>
                        <div class="form-group"><label for="exampleInputPassword1">Visina</label><input type="text"
                                class="form-control" id="exampleInputezina" placeholder="">
                        </div>
                        <div class="form-group"><label for="exampleInputPassword1">Opseg vrata</label><input type="text"
                                class="form-control" id="exampleInputezina" placeholder="">
                        </div>
                        <div class="form-group"><label for="exampleInputPassword1">Opseg struka</label><input
                                type="text" class="form-control" id="exampleInputezina" placeholder="">
                        </div>
                        <div class="form-group"><label for="exampleInputPassword1">Opseg kukova</label><input
                                type="text" class="form-control" id="exampleInputezina" placeholder="">
                        </div>
                        <button id="bodybutton" type="submit" class="btn btn-primary">Izračunaj</button>
                    </form>
                </div>

                <div class="col-1">
                </div>
                <div id="bodyuotput" class="col-9">
                    <p10><strong>BODY SURFACE AREA</strong></p10>
                    <div id="korisnik" class="form-row">
                        <div class="form-group col-md-4"><label for="inputEmail4">Du Boisova metoda</label><input
                                type="email" class="form-control" id="inputEmail4" placeholder=""></div>
                        <div class="form-group col-md-4"><label for="inputEmail4">Takahirina metoda</label><input
                                type="email" class="form-control" id="inputEmail4" placeholder=""></div>
                        <div class="form-group col-md-4"><label for="inputEmail4">Boydova metoda</label><input
                                type="email" class="form-control" id="inputEmail4" placeholder=""></div>
                    </div>
                    <p10><strong>BODY FAT INDEX (BFI)</strong></p10>
                    <div id="korisnik" class="form-row">
                        <div class="form-group col-md-4"><label for="inputEmail4">Body fat index</label><input
                                type="email" class="form-control" id="inputEmail4" placeholder=""></div>
                        <div class="form-group col-md-4"><label for="inputEmail4">Ocjena</label><input type="email"
                                class="form-control" id="inputEmail4" placeholder=""></div>
                        <div class="form-group col-md-4"><label for="inputEmail4">Body fat mass</label><input
                                type="email" class="form-control" id="inputEmail4" placeholder=""></div>
                        <div class="form-group col-md-4"><label for="inputEmail4">Čista tjelesna masa</label><input
                                type="email" class="form-control" id="inputEmail4" placeholder=""></div>
                        <div class="form-group col-md-4"><label for="inputEmail4">Body fat mass</label><input
                                type="email" class="form-control" id="inputEmail4" placeholder=""></div>
                        <div class="form-group col-md-4"><label for="inputEmail4">Idealni BFI za danu dob</label><input
                                type="email" class="form-control" id="inputEmail4" placeholder=""></div></div>
                        <p10><strong>BODY MASS INDEX (BMI)</strong></p10>
                        <div id="korisnik" class="form-row">
                            <div class="form-group col-md-4"><label for="inputEmail4">Energija (kJ)</label><input
                                    type="email" class="form-control" id="inputEmail4" placeholder=""></div>
                            <div class="form-group col-md-4"><label for="inputEmail4">Energija (kcal)</label><input
                                    type="email" class="form-control" id="inputEmail4" placeholder=""></div>
                            <div class="form-group col-md-4"><label for="inputEmail4">Ugljikohidrati</label><input
                                    type="email" class="form-control" id="inputEmail4" placeholder=""></div>
                        </div>
                          <router-link button id="bodybutton" type="submit" class="btn btn-primary" to="/pracenje">Pračenje</router-link>

                    </div>
                </div>
            </div>
        </div>
 

</template>

<style>
    #bodyupit {
        background-color: #333;
        color: white;
        padding-bottom: 10 px;
        text-align: center;
        padding-top: 20px;
        padding-bottom: 20 px;
        margin-top: 50px;
        margin-bottom: 50px;
    }

    #bodyuotput {
        background-color: #333;
        color: white;
        padding-bottom: 10 px;
        text-align: center;
        padding-top: 20px;
        padding-bottom: 20px;
        margin-top: 50px;
        margin-bottom: 50px;
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
        text-align: center;;
   
    }
    p10 {
        color:orange;
    }
</style>