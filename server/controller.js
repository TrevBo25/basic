// module.exports makes these methods available to any file that imports it
module.exports = {
    // The name of the method has to match the name of the method you called from the server
    test(req, res){


        // This is the response. It is sending information back to the React side. Saying a status of 200 means everything went great. The string in the .send is the link to the image that will be displayed.
        res.status(200).send('http://i63.tinypic.com/2j9y8p.png');
    },
}