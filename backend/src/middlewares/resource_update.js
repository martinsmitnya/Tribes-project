let database = [{
        type: 'food',
        amount: 1,
        generation: 1,
        updatedAt: 1613994048,
    },
    {
        type: 'gold',
        amount: 1,
        generation: 2,
        updatedAt: 1613994048,
    },
];

export default Updater();

database.forEach(element => {
    let dateNow = Date.now() / 1000;
    element.amount +=
        element.generation * Math.floor((dateNow - element.updatedAt) / 60);
    element.updatedAt = Math.floor(dateNow);
});

console.log(database);