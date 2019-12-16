<template>
    <div>
        <div class="container">
            <div class="row">
             
                <div id="log" class="col-4">
                    <form>
                        <strong>PRIJAVA</strong>
                        <div id="korisnik" class="form-group"><label for="exampleInputEmail1">Email address</label><input type="email"
                                class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                placeholder="email"><small id="emailHelp" class="form-text text-muted">We'll never share
                                your email with anyone
                                else.</small></div>
                        <div class="form-group"><label for="exampleInputPassword1">Password</label><input
                                type="password" class="form-control" id="exampleInputPassword1" placeholder="password">
                        </div><button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div id="raz" class="col-1"></div>
                <div id="reg" class="col-6">
                          <strong>REGISTRACIJA</strong>
                    <div id="korisnik" class="form-row">
                        <div class="form-group col-md-6"><label for="inputEmail4">Ime</label><input type="email"
                                class="form-control" id="inputEmail4" placeholder="ime"></div>
                        <div class="form-group col-md-6"><label for="inputEmail4">Prezime</label><input type="email"
                                class="form-control" id="inputEmail4" placeholder="prezime"></div>
                        <div class="form-group col-md-6"><label for="inputEmail4">Email</label><input type="email"
                                class="form-control" id="inputEmail4" placeholder="email"></div>
                        <div class="form-group col-md-6"><label for="inputPassword4">Password</label><input
                                type="Password" id="inputpassword" placeholder="Password" class="form-control"></div>
                        <div id="dob" class="form-group col-md-6"><label for="inputState">Spol</label><select
                                id="inputState" class="form-control">
                                <option selected>Odaberi...</option>
                                <option>M</option>
                                <option>Ž</option>
                            </select></div>
                        <div id="dob" class="form-group col-md-6"><label for="inputState">Dob</label><select
                                id="inputState" class="form-control">
                                <option selected>Odaberi...</option>
                                <option>1</option>
                                <option>...</option>
                            </select></div>
                    </div><button type="submit" class="btn btn-primary">Registracija</button><br>
                </div>
            </div>
        </div>
        <div id="raz" class="col-1"></div>
    </div>
</template>

<style>
    #log {
        background-color: #333;
        color: white;
        padding-bottom: 10 px;
        text-align: center;
        padding-top: 20px;
        padding-bottom: 20 px;
    }

    #reg {
        background-color: #333;
        color: white;
        padding-bottom: 10 px;
        text-align: center;
        padding-top: 20px;
        padding-bottom: 20px;
    }
    #korisnik {
        padding-top: 20px;
    }
</style>