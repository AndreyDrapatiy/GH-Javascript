function help() {
    console.log("Enter name.sayHi to say Hi");
    console.log("Enter name.eat to keep normal satiety & health");
    console.log("Enter name.sleep to to keep min fatigue level ");
    console.log("Enter name.learn to be smart");
    console.log("Enter name.walk to be happy or dead (will see)");

}


console.log("Wellcome!");
console.log("Create a new pet with command: var nameWouldYouLike = new pet(name)");
console.log("You can always check your pet status with name.status() command");
console.log("You can use help() command for more");


function pet(name) {
    this.name = name;
    this.health = 50;   // default values in start moment
    this.happiness = 50;
    this.satiety = 50;
    this.fatigue = 50;
    this.stupidity = 100;

    this.healthStatus = function () {
        if (this.health < 10 || this.satiety < 10) {
            alert("WASTED");
            location.reload()
        }
    }
}


pet.prototype.status = function () {
    console.log(
        "Health:" + this.health,
        "Happiness:" + this.happiness,
        "Satiety:" + this.satiety,
        "Fatigue" + this.fatigue,
        "Stupidity" + this.stupidity
    );

    this.healthStatus()

};

pet.prototype.sayHi = function () {
    console.log("Hello")
};

pet.prototype.eat = function () {
    if (this.satiety < 80) {
        console.log("Om Nom Nom");
        this.satiety += 10;
    }
    else {
        console.log("I do not want to eat now");
    }

};


pet.prototype.walk = function () {
    var random = Math.floor(Math.random() * (100 - 1));
    if (random <= 25) { // 25%
        alert("Ohh A large balcony fell on your pet, He is dead! Game will restart");
        location.reload();
    }
    else {
        console.log("YaHoo! Was interesting and i am steel alive");
        this.happiness += 10;
        this.satiety -= 20;
        this.fatigue -= 20;
        if (this.satiety < 40) {
            console.log("I want eat now")
        }
        else if (this.fatigue < 20) {
            console.log("I'm very tired, I want to sleep")
        }
    }
    this.healthStatus()

};

pet.prototype.sleep = function () {
    if (this.fatigue < 50) {
        console.log("ZZZzzz...");
        var i = 10;
        (function () {
            if (i > 0) {
                console.log("Wait until I'm sleeping " + i + " seconds");
                i--;
                setTimeout(arguments.callee, 1000);
            } else {
                console.log('I am with you again ');
            }
        })();
    }
    else {
        console.log("I don want sleep now! go for walk with me!     (You can use name.walk()")
    }
    this.healthStatus()
};

pet.prototype.learn = function () {
    console.log("Hmm it will be interesting, or not");
    this.stupidity -= 10;
    this.satiety -= 10;
    this.fatigue -= 20;
    this.happiness += 10;

    if (this.satiety < 40) {
        console.log("I want eat now")
    }
    else if (this.fatigue < 40) {
        console.log("I'm very tired, I want to sleep")
    }
    else if (this.happiness < 40) {
        console.log("I'm very tired, but want more")
    }
    this.healthStatus()
};



// will be continued
