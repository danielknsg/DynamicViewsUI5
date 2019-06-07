const axios = require('axios');
const keys = require('../config/keys');
module.exports = app => {

    const backendUrl = keys.sapSystemUrl;
    const user = { username: "dendres", password: "Dummy10% " };
    const sapClient = keys.sapClient;
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${new Buffer(keys.sapUsername + ':' + keys.sapPassword).toString('base64')}`,
    }

    app.get('/api/srep/soldtoparties', async (req, res) => {
        try {
            console.log('here we go')
            const axiosObj = axios.create({headers});
            const url = backendUrl + 'CustomerSet/' + sapClient;
            const odataResponse = await axiosObj.get(url, [{ auth: user }]);
            res.send(odataResponse.data.d.results);
        } catch (err) {
            console.log("something went wrong");
            console.log(err);
        }
    });
}