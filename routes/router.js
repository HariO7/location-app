require('dotenv').config()

const router = require('express').Router();
const { append } = require('express/lib/response');
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const res = require('express/lib/response');
const mapbox_Tokens = process.env.mapbox_token;
const geocoder = mbxGeocoding({accessToken:mapbox_Tokens})


router.get('/',async (req,res)=>{
    res.render('home')
       
})

router.post('/',async(req,res)=>{
    console.log(req.body);
    const geoData = await geocoder.forwardGeocode({
        query:req.body.location,
        limit: 1
    }).send()
    console.log(geoData.body.features[0].geometry.coordinates)
})



module.exports = router