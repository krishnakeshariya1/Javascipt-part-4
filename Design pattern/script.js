//module pattern
//iife
let Bank = (function(){
    let bankBalance = 120000;

    function setBalance(val) {
        bankBalance =val;
    }
    function checkBalance() {
        console.log(`Your Balance :- ${bankBalance}`);
    }
    function withdraw(val) {
        if(val<= bankBalance){
            bankBalance -= val;
            console.log(`You have withdraw ${val}`);
            console.log(`Remaning balance ${bankBalance}`)
        }
        else{
            console.log("You donn't have sufficient Balance....")
        }
    }
    function deposite(val){
        bankBalance += val;
        console.log(`Total Balance is ${bankBalance}`);
    }
    return{
        checkBalance,
        setBalance,
        withdraw,
        deposite,
    }
})();
Bank.checkBalance();
Bank.withdraw(20000);


// Revealing Module pattern
//I can change the name of function while returning bcz i'm returing a object so i can decide the key name of that function

// Factory function pattern

function createProduct(name, price){
    let stock = 12;
    return{
        name,
        price,
        checkStock(){
            console.log(`We have total ${stock} ${name} left`);
        },
        buy(val){
            if(val <= stock){
                stock -= val;
                console.log(`${val} ${name} booked...`);
                console.log(`we have left ${stock} ${name}`)
            }
            else{
                console.log(`We don't have ${val} ${name}`);
            }
        },
        refill(val){
            stock += val;
            console.log(`Total ${name} are :- ${stock}`);
        }
    }

}
let iphone = createProduct("iphone-17", 120000);
iphone.buy(4);
iphone.refill(8);
iphone.checkStock();
let kitkat = createProduct("kitkat", 20);
kitkat.buy(13);

// observe pattern (basic sub-pub)

class YoutubeChannel {
    constructor() {
        this.subscribers =[];
        this.subscribeCount = 0;
    }
    subscribe(user){
        this.subscribers.push(user);
        this.subscribeCount += 1;
        user.update(`You have subscribed the channel...`);
    }
    unsubscribe(user){
        this.subscribeCount -=1;
        this.subscribers = this.subscribers.filter(sub => sub !==  user)
        user.update(`You have unsubscribed the channel...`);
    }
    notify(message){
        this.subscribers.forEach(val => val.update(message));
    }
}
class User {
    constructor (name){
        this.name = name
    }
    update(data){
        console.log(data);
    }

}
let sheryians = new YoutubeChannel();
let u1 = new User("krishna");
let u2 = new User("Amit");
sheryians.subscribe(u2)
sheryians.subscribe(u1);
sheryians.unsubscribe(u1);

sheryians.notify("A new Video uploaded...");