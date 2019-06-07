module.exports = app => {
    app.get('/api/srepmock/soldtoparties', (req,res) => {
        res.send([{
            Kunnr: 64,
            Name1: "Mount Sinai Hospital"
        },{
            Kunnr: 78,
            Name1: "Inselspital Bern"
        },{
            Kunnr: 66,
            Name1: "Dev Hospital"
        }])
    });
}