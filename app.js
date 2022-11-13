const express = require('express');
const fetch = require("node-fetch");
const { response } = require('express');
const app = express();
const port = 8000;
app.set('json spaces', 2);
const axios = require('axios');

// to query, call: http://localhost:8000/gettoken
const url = 'https://api.iq.inrix.com/findRoute';

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHBJZCI6InhyNnhxbzViY2wiLCJ0b2tlbiI6eyJpdiI6IjYxM2M4MTVmY2ZhN2M3YWQzOGFkZWVmMjM5MmM4NDUwIiwiY29udGVudCI6ImM5MmIzYzEzYmE4ZmNiZWZhMWJjZWY3ZTZkNzUyNDExZDVmNjFhZWI1MTE5NTE1ZTE0MzhlZGUzYmM4ZTExNzE1YTYyOWVlZmNhNDA5ZmNmOWNhOWM0OGNiOTJmMTA0NWJkYWZlZjhlOTgwMzg0NDFjMTliNDFkODFmOGEyYzAzMGY0NzQ2YTY0NDc3YmU5ZDM3N2JiNTBkZWFiOWJjNzdkODhlM2Y5NGU5MjU4MTMzYmNjZTQ3MWFjYjdjOWE3MzMzZDcxNzY1YWFkZjI4YjQ2NGNkOTJiOTJmZjU4NjE1Y2M0ODY4MjJjNzFlODhkMjU1NjUwMzFjZTY3ZDg0MjgxMTRlN2I0YzlhMzZjNjczYWUxNTc3NDkxMWNmOTU4NjdiNTA3YzUwY2U1YTE1NDQzZmQyMmVlNDdjMmUyNWM1ODc1Nzg3NmQ3NjA2YzU5YzU0MTE5ZTBlYzZjOTIyYTYwZGE0NWFkNmZjMjA1ZjcxYjBhYWE0OTI3YjM2Y2JmNGMzN2U0ZjAyODVkYzNjYWYzZDMxZDRkY2E0NTQ1YTI1Mzg4ZTExMWFkZTU5MTc4M2ZmYmNhOTcwMmU2ZTE4ZTA4OWEwMDkzOTE5YmE0ZTczZmY3NzE2ZThjOTU4ZWQyNjdlODBiMzdlZDM1YzVkYWU5MGM4NTZmNTY4OGZjZDc2ZjM1NjgwYjg5Njk5OTk4MDZjM2I5YjIzY2U3ZGU0MmFiNDU1OWUzNWRlOGQ3Mjc3YWFhMTA0NGY2MTZlNWViZmVhOWVmOTgzNGY3M2RmODBmMzE1ZTMwYmMxZjQwMDIyYWI0MWIxNzFkNTliMzNiOGM1OTRhYzc2YTBlN2JmNzliNjIxMjkxMmQ2OGJmODdmOWFlZjgyIn0sInNlY3VyaXR5VG9rZW4iOnsiaXYiOiI2MTNjODE1ZmNmYTdjN2FkMzhhZGVlZjIzOTJjODQ1MCIsImNvbnRlbnQiOiJjYjMzMWUyOGVkYTRjN2Q2YWJiM2Y1NWM1MTQ2Mjk0ZmYyZDA2MWNjNGQxMzQwMzkxMzQ4OTNhM2Q4YmQyODdhNjM2OTk5OWE4MjE0OGNjMzg0YWJlYmIyIn0sImp0aSI6ImFmZGI5MjYyLWMzNGMtNDQxOS04ZjI4LWFiM2ZmNDZiZDhkMyIsImlhdCI6MTY2ODMwNjUzMywiZXhwIjoxNjY4MzEwMTMzfQ.ZYAqrwTHzoUwAWz5b4mgcpkqdrjmOjRgfTwHUfl89G4";



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
    res.json({
        token: output,
    });
})

app.get('/route', async function (req, res) {
    // var http = new XMLHttpRequest();

    try {
        const response = await axios.get(url, {
            params: {
                wp_1: "37.8044,-122.4370",
                wp_2: "37.7943,-122.4349",
                format: "json",
                routeOutputFields: "P"
            },
            headers: { Authorization: `Bearer ${token}` }
        });
        res.json(response?.data);
    } catch (error) {
        console.error(error);
        res.json({
            "error": "unknown error"
        })
    }

})

//Starting server using listen function
app.listen(port, function () {
    console.log("Server has been started at " + port);
})
