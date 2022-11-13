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
