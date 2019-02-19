/* Your code goes here */
function userCard(key) {
    const cardOptions = {
        balance: 100,
        transactionLimit: 100,
        historyLogs: []
    }
    let errorTemplate = ` You can't take credits limit or remaining balance are lower than credits you want to take!`;
    let newTime = new Date().toLocaleString('en-GB');
    const getCardOptions = function () {
        return cardOptions;
    };
    function fnHistoryLogs(operationType, credits, operationTime) {
        const historyLogs = [];
        historyLogs.push({
            operationType: operationType,
            credits: credits,
            operationTime: newTime
        });
    }
    this.index = {
        type: Number,
        unique: true
    };
    const putCredits = function (limit) {
        cardOptions.balance += limit;
        fnHistoryLogs('Received credits', limit, newTime);
    };
    const takeCredits = function (limit) {
        if(cardOptions.balance >= limit && limit <= cardOptions.transactionLimit){
            cardOptions.balance -= limit;
            fnHistoryLogs('Withdrawal of credits', limit, newTime);
        }else{
            console.error(errorTemplate);
        }
    };
    const setTransactionLimit = function (limit) {
        cardOptions.transactionLimit = limit;
        fnHistoryLogs('Transaction limit change', limit, newTime);
    };
    const transferCredits = function(limit){
        let taxed = 0.005;
        let limitTaxed =limit * taxed + limit ;
        if (limitTaxed > cardOptions.balance && limitTaxed > cardOptions.transactionLimit){
            console.error(errorTemplate);
        }else{
            this.takeCredits(limitTaxed);
            fnHistoryLogs('Withdrawal of credits', limit, newTime);
            this.putCredits(limit);
            fnHistoryLogs('Received credits', limit, newTime);
        }
    };
    return {
        getCardOptions,
        putCredits,
        takeCredits,
        setTransactionLimit,
        transferCredits
    };
}
class UserAccount{
    constructor(name){
        this.name = name;
        this.card = [];
        this.cardofLimit = 3;
    }
    addCard(){
        if (this.card.length < this.cardLimit) {
            this.card.push(userCard(this.card.length + 1));
        } else {
            console.log(`Error: You've reached maximum amount of cards!`);
        }
    }
    getCardByKey(key) {
        return this.card[key - 1];
    }
}