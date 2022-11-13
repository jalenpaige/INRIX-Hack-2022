const express = require('express');
const fetch = require("node-fetch");
const { response } = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;
app.set('json spaces', 2);
app.use(bodyParser.json());
const axios = require('axios');
// to query, call: http://localhost:8000/gettoken
const url = 'https://api.iq.inrix.com/findRoute';
// const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHBJZCI6InhyNnhxbzViY2wiLCJ0b2tlbiI6eyJpdiI6IjYxM2M4MTVmY2ZhN2M3YWQzOGFkZWVmMjM5MmM4NDUwIiwiY29udGVudCI6ImM5MmIzYzEzYmE4ZmNiZWZhMWJjZWY3ZTZkNzUyNDExZDVmNjFhZWI1MTE5NTE1ZTE0MzhlZGUzYmM4ZTExNzE1YTYyOWVlZmNhNDA5ZmNmOWNhOWM0OGNiOTJmMTA0NWJkYWZlZjhlOTgwMzg0NDFjMTliNDFkODFmOGEyYzAzMGY0NzQ2YTY0NDc3YmU5ZDM3N2JiNTBkZWFiOWJjNzdkODhlM2Y5NGU5MjU4MTMzYmNjZTQ3MWFjYjdjOWE3MzMzZDcxNzY1YWFkZjI4YjQ2NGNkOTJiOTJmZjU4NjE1Y2M0ODY4MjJjNzFlODhkMjU1NjUwMzFjZTY3ZDg0MjgxMTRlN2I0YzlhMzZjNjczYWUxNTc3NDkxMWNmOTU4NjdiNTA3YzUwY2U1YTE1NDQzZmQyMmVlNDdjMmUyNWM1ODc1Nzg3NmQ3NjA2YzU5YzU0MTE5ZTBlYzZjOTIyYTYwZGE0NWFkNmZjMjA1ZjcxYjBhYWE0OTI3YjM2Y2JmNGMzN2U0ZjAyODVkYzNjYWYzZDMxZDRkY2E0NTQ1YTI1Mzg4ZTExMWFkZTU5MTc4M2ZmYmNhOTcwMmU2ZTE4ZTA4OWEwMDkzOTE5YmE0ZTczZmY3NzE2ZThjOTU4ZWQyNjdlODBiMzdlZDM1YzVkYWU5MGM4NTZmNTY4OGZjZDc2ZjM1NjgwYjg5Njk5OTk4MDZjM2I5YjIzY2U3ZGU0MmFiNDU1OWUzNWRlOGQ3Mjc3YWFhMTA0NGY2MTZlNWViZmVhOWVmOTgzNGY3M2RmODBmMzE1ZTMwYmMxZjQwMDIyYWI0MWIxNzFkNTliMzNiOGM1OTRhYzc2YTBlN2JmNzliNjIxMjkxMmQ2OGJmODdmOWFlZjgyIn0sInNlY3VyaXR5VG9rZW4iOnsiaXYiOiI2MTNjODE1ZmNmYTdjN2FkMzhhZGVlZjIzOTJjODQ1MCIsImNvbnRlbnQiOiJjYjMzMWUyOGVkYTRjN2Q2YWJiM2Y1NWM1MTQ2Mjk0ZmYyZDA2MWNjNGQxMzQwMzkxMzQ4OTNhM2Q4YmQyODdhNjM2OTk5OWE4MjE0OGNjMzg0YWJlYmIyIn0sImp0aSI6ImFmZGI5MjYyLWMzNGMtNDQxOS04ZjI4LWFiM2ZmNDZiZDhkMyIsImlhdCI6MTY2ODMwNjUzMywiZXhwIjoxNjY4MzEwMTMzfQ.ZYAqrwTHzoUwAWz5b4mgcpkqdrjmOjRgfTwHUfl89G4";

const getToken = async () => {
    let url = `https://api.iq.inrix.com/auth/v1/appToken?appId=xr6xqo5bcl&hashToken=eHI2eHFvNWJjbHx4V3ZVR0IyQnJqYUdmMGNYZDNmZlo2NTg0UnlITkdmckVpNjlUQzE3`;

    //Set up query method
    var requestOptions = {
        method: 'GET'
    };

    //Query INRIX for token
    let response = await fetch(url, requestOptions);
    let json = await response.json();
    let output = json.result.token;
    return output;
}

var min;
app.get('/gettoken', async function (req, res) {

    //Set up URL to query
    let appId = "Insert AppId here";
    let hashToken = "Insert HashToken here";
    let url = `https://api.iq.inrix.com/auth/v1/appToken?appId=xr6xqo5bcl&hashToken=eHI2eHFvNWJjbHx4V3ZVR0IyQnJqYUdmMGNYZDNmZlo2NTg0UnlITkdmckVpNjlUQzE3`;

    //Set up query method
    var requestOptions = {
        method: 'GET'
    };

    //Query INRIX for token
    let response = await fetch(url, requestOptions);
    let json = await response.json();
    let output = json.result.token;

    //Return token
    return res.json({
        token: output,
    });
})
var times = new Array();
var depTimes = new Array();
app.get('/route', async function (req, res) {

    const params = req.query;
    //to change the UTC by 30 minute intervals for the time period
    let d;
    let start = "2022-11-15T00:00:00Z";

    //Start time in UTC
    d = new Date(start);



    //Increments by 60 minutes
    function addMinutes(date,minutes){
        return new Date(date.getTime()+minutes*60000);
    }

    /*if (!params.wp_1 || !params.wp_2) {
        return res.json({
            "error": "missing params"
        })
    }*/

   for(let i = 0; i <= startTime; i++)
    {
        d = addMinutes(d,60);
    }

    for(let j = 0; j <= endTime - startTime; j++){
        try {
            const token = await getToken();
            const response = await axios.get(url, {
                params: {
                    wp_1: lat1, long1,
                    wp_2: lat2, long2,
                    departureTime: d,
                    format: "json",
                    routeOutputFields: "P"
                },
                headers: { Authorization: `Bearer ${token}` }
            });

            const data = response.data;
            const travelTimeMinutes = data.result.trip.routes[0].travelTimeMinutes;
            const uncongested = data.result.trip.routes[0].uncongestedTravelTimeMinutes;

            times[j] = travelTimeMinutes;
            depTimes[j] = d;

            d = addMinutes(d,60);

            // return res.json({
            //     uncongestedTravelTime: uncongested,
            //     travelTimeMinutes: travelTimeMinutes,
            //     //dpt: departureTime
            //
            // });
          } catch (error) {
                console.error(error);
                return res.json({
                    "error": "unknown error"
                })
            }

            //eta_array = travelTimeMinutes;
            //console.log("Estimated time of arrival is:"+eta_array[i]);

    }
    let index = 0;
    min = (Math.min(...times));
    for (let i = 0; i < times.length; i++) {
        if (times[i] == min) {
            index = i;
            break;
          }
    }
    return deptTimes[index];

    return("");
    window.alert(times[0]);
    let f = times[0];
    let hourOfFastestTime = 0;
    for(let k = 1; k < times.length; k++) {
        if(times[k] < f) {
            f = times[k];
            hourOfFastestTime = k;
        }
    }
    hourOfFastestTime = hourOfFastestTime + 9;

    return res.json({
        traveltimes: times[0]
    })

    // f is the time it takes to get to the place
    // ind is the hour that the fastest time should be at
})


//Starting server using listen function
app.listen(port, function () {
    console.log("Server has been started at " + port);
    console.log();
})


