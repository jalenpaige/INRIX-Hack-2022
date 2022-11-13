const http = require('http');
const fs = require('fs')
const port = 3000;

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHBJZCI6ImNtMDNsaXA2dDYiLCJ0b2tlbiI6eyJpdiI6IjU1ZGUwYmU4ZDQwMDljZDVkMzY5YWE5ZjA3MzI5Y2EwIiwiY29udGVudCI6ImU2NWJkM2E3YzQyYjIyZjYwMDUwMWJlZjBlMTNiZjZmOTQ4Nzg4NDY5Yzc5YWFmYWE0NjM1MzdhNjg0NjJhOTc0NjE1ZGZiM2Q3MTIxOWZlYjNlN2M2MGY2NDg4NDJmM2E1NmE3M2EyMDg2MDNmNmI1OTU3MzcwOWZiNGZiOGQxNTkyYTMwNzg4MWZjN2ZjN2JlZWY5NTgxZDdiN2EzZTBiYzNkNThhNmZlMzRkZDM4ZWViOTMyNzZhMmRlZDI1NjgxNDkzNWUwNzhmYzBjMmZmNDA3YzUyNTQwZTM3NzU5ZWY3YjE5YTNlNWVjNGYwZjczM2Y5YThjMjlhMTk5MGRhMDBmZGQyOTYyZmE2YzM5NGVmZjE3MTNiMTM1OWY4YjA2MzQ4ZGY1ZTQ0YjdkNjEwYTE2NTgzYjYyNjk0ZWUyNzlhYjc0NDMwMTg5MDg2ZjYzYjJhZWY5NDIyZjExNGY1ZWVjOGU5ODJkOWU0NzhkNDdkZTRmMTcwYzNmMzQ2NmFhMWQ3ZGUzNTc2ZjdlMGFjNzY5MWNjODI4MWY4OGQ0NWJlOTExYTc2NTQ0ZjYxZDdhNDAxZmY1YzdiNzMyNzZhMjdhYjJjN2MwZjdhOGRkZTU2MjY3NDVmOWNkNzY1NzY0NTVkYTlhZTc0N2FlNzhkNjk5ZjFmMmM2MjlkNmY4Y2Y3ZTdhNDU0NWI3MGM1NWYwNTY5NGI3MDhmMDkzYzhlNzQzZjgwMGQ2YjhlMzAwNjQxZmE4YjkxN2FiMWE1MTg5ZGI5MjYxYWM0Y2Q1ZTQwOTdhZGIyMjM1YTk5OTJmYmViOGM4OWQ5YTk3YzI4ZThkYjg2MDNhMGM5Y2YzNTFjZDdmNThjZjc0ZWM3MDdiYjA2Mzg5In0sInNlY3VyaXR5VG9rZW4iOnsiaXYiOiI1NWRlMGJlOGQ0MDA5Y2Q1ZDM2OWFhOWYwNzMyOWNhMCIsImNvbnRlbnQiOiJjNjE3Y2Q5Y2VjMTkwNGY5MzU3ZDYyZTk2ODAwODI3NGUzYjZhMzQyYmQ0NWNlOGE5MjU5NTIwYjE2NWM3MGJhMjgyZmFkZjJjZjFhMGE4N2VkZDJiZTMxIn0sImp0aSI6IjVlZDRjY2I3LTRmYzItNGJhMy1iZmFkLTMwMzBiZmZlMzRkMSIsImlhdCI6MTY2ODMwMzEwMiwiZXhwIjoxNjY4MzA2NzAxfQ.nIAiAqnHTSZdtlLXCEyq_PhJ9ft9IATnv9xxmNO0YjE";


const server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile('index.html', function(error, data){
        if(error){
            res.writeHead(404)
            res.write('Error: File not found')
        } else{
            res.write(data)
        }
        res.end()
    })
})

server.listen(port, function(error){
    if(error){
        console.log("Something went wrong", error)
    }else{
        console.log('Server is listening on port ' +port)
    }
})

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHBJZCI6Imw4bTg4djNvMGQiLCJ0b2tlbiI6eyJpdiI6IjU2YTNiN2RhY2Q1NGJmZThiMjk1ZGE0Y2RkMDZkZTAxIiwiY29udGVudCI6ImI4ZjU5MWQ0NWIyODNlNjk5NjI5ZTJlOTE4MjBjMzI4YTg4OGQ4ODFhN2FhZWM1YWMxMzhiYTNiZTExOTMwODRhOTEyZTk0YjE1ZjRjYTJiMmU3MDQ1YTRlYWZlZDk4NWRjMThkOTc3MWZiYTU0ZDgxMTc1ODdmOTk5YTIxYzFiNmRhMjg1NDYwZTk3YjM1YWY3ZmFmYmI2YWVhZGUxZWY0ZTQ5MGIyM2JhYzRkNTQzYWNmNGIzOTBjNzdmYmFlN2FkZmE4OTQ4Yjk2YWRiNjJiZGFkNjRiMTNlODgyZGIyMTkwMjFhYTEwMGQ0MzQ3MTY0ODk2NTQ4ZmJkMTE0MGMwYmE0YTVhYzYyMWNjNDgwYWNlMDQxN2ZmZDAxNzM5ZDM2YmM4ZWVmOTVmOTVhYjhkOWQ3YjM2NGMzY2JiMjU4NmEwNTQ1MWQwZDc5Mjc4MTFkODc4YjkyNGQ5ODhjYmMyNDkyNDUyNzZkOTllNjFjYzZiYTc0YzBkOTUyZmE4Zjk1MDY3NGI3NTMxZDQxOTliZjI0ZWQzZDlmYjJlOGVhZGU5NDk4YjI2YTVjYmNjZjAwOTE2ODAwMDIxNDUyMTE5OTE1NmFhOWU1M2E1ZTI1YmZmMjQ2ZmIxYTkyODEzNDIzNTY5YjNlOTc0MjlhZWFiMzU1YTYwOTcxMTI3ODMyMjg1N2RmMjNhM2E0ODM2MjViYjAzMTMxZDNkMjAyNTI1M2Y1YzgwMWUxOWE3ZDhkMjcxMTEyZmY5NDVkM2Y3ZGNhZWY5ODgyZjkyNDVkZDQ3NjFkNzdhOTIwZTYxODIwMjg2NmM4ZmIyZWZlNTFhMTEyNjNlOTdjNjhkNWY0ZWIxYTE5YWFlOWNlZTM2ZjgyY2FkODAzIn0sInNlY3VyaXR5VG9rZW4iOnsiaXYiOiI1NmEzYjdkYWNkNTRiZmU4YjI5NWRhNGNkZDA2ZGUwMSIsImNvbnRlbnQiOiJlOWMxZWJjNDdlMWIzYjZjOTIxMWVlZDA3NDA4YTc0YWExYmJhNmJhOTRiZGY2MWI5NzMzYTQ0ODlhM2QwNGI0YjcwNThlMWYwY2ZiZDUwMjBjNDA3ZTlhIn0sImp0aSI6IjE5YzRmNTczLWUxZmMtNGRiNS04YTIzLTdmNTQyYTk4ZWI5NiIsImlhdCI6MTY2ODMwNTQ5NCwiZXhwIjoxNjY4MzA5MDk0fQ.EeCLCW9jzlcIYq_6RU3aVDeS3tt8wUvBIGrhCHakPo4");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.iq.inrix.com/findRoute?wp_1=37.770581%2C-122.442550&wp_2=37.765297%2C-122.442527&format=json\n", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
