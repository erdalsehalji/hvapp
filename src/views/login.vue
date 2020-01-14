<template>
    <div>
        <div class="container">
            <div class="row">
                <div id="naslov" class="col-12">
                    <h10><strong>PRIJAVA</strong></h10>
                </div>
                <div id="log" class="col-12">
                    <form><strong>PRIJAVA</strong>
                        <div id="korisnik" class="form-group"><label for="InputEmail1">Email
                                address</label><input type="email" class="form-control" id="InputEmail1"
                                aria-describedby="emailHelp" placeholder="unesite email"></div>
                        <div class="form-group"><label for="InputPassword1">Password</label><input
                                type="password" class="form-control" id="InputPassword1" placeholder="unesite password">
                        </div><button id= "prijavalog" type="submit" class="btn btn-primary">Prijava</button>
                    </form>
                </div> 
            </div>
        </div>
    </div>
</template>
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