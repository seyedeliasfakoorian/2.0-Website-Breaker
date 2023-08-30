import express
  
import alloyproxy

import http

import fs

import path

app = express()

server = http.createServer(app)

localprox = alloy(prefix="/prefix/", error=lambda proxy: proxy.res.send(fs.readFileSync(path.join(__dirname, "public", "error.html"), "utf8")), request=[], response=[], injection=True)

app.use(localprox.app)

localprox.ws(server)

@app.post("/")

async def post_handler(req, res):

if req.url == "/":

return res.send(fs.readFileSync(path.join(__dirname, "public", "index.html"), "utf8"))

@app.get("/")

async def get_handler(req, res):

if req.url == "/":

return res.send(fs.readFileSync(path.join(__dirname, "public", "index.html"), "utf8"))

elif req.url == "/?a":

return res.send(fs.readFileSync(path.join(__dirname, "public", "error.html"), "utf8"))

app.use(express.static(path.join(__dirname, "public")))

server.listen(process.env.PORT or config.port)
