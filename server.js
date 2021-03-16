const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const Stripe = require('./server/routes/api/Stripe')

//XERO data for app to work
const clientID = 'FA5E26DA8ADF487EA7F4D86FEA8FD7F0';
const clientSecret = 'ad1m84XaNdIxJN4U5kWEfUc0MabYktc7iGP1Rr-E4vRj21TE';
const XeroClient = require('xero-node').XeroClient;

//Create XERO client
const xero = new XeroClient({
    clientId: clientID,
    clientSecret: clientSecret,
    redirectUris: [`http://localhost:${port}/callback`],
    scopes: 'openid profile email accounting.transactions offline_access'.split(" ")
});

app.use('/checkout', Stripe)

//Start connection to XERO
app.get('/start', async (req, res) => {
    // `buildConsentUrl()` will also call `await xero.initialize()`
    let consentUrl = await xero.buildConsentUrl(); //Auth to XERO? Not sure

    res.redirect(consentUrl); //Redirects to URL specified in 'developer.xero.com/myapps'
});

//Specified URL for Callbacks
app.get('/callback', async (req, res) => {
    //Try catch for failer to get data
    try{
        //Get TokenSet from XERO
        const tokenSet = await xero.apiCallback(req.url);
    
        console.log('TokenSet: ' + tokenSet); //Need to expand for details to show
    
        // updateTenants fullOrgDetails param will default to true
        const tenants = await xero.updateTenants(); //Not sure what this is for
        console.log('XERO Tenants: ' + tenants); //Need to expand for details to show

        res.redirect('/redirect');
    } catch(err) {
        console.log('Callback Error: ' + err);
    }
});

//Redirect after connecting to XERO and getting data
app.get('/redirect', (req, res) => {
    res.send('Worked!');
});

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(__dirname+'/client/public'));

    app.get('*', (req, res) => {
        const index = path.resolve(__dirname, 'client', 'public', 'index.html')
        res.sendFile(index)
    });
}

app.listen(port, () => {
    //use "npm start" to run as dev, so when saving/making changes (ctrl + s) the local server auto restarts
    //use "npm index.js" if you want to restart local server each time
    console.log(`Server listening at http://localhost:${port}`);
});