//server
import {WebSocketServer} from 'ws'
import {promises as fs} from 'fs'
import {createServer} from 'https'
let SECURE = false
let BOARD
const WIDTH = 2000, HEIGHT = 2000
try{
	BOARD = await fs.readFile('./place')
}catch(e){
	BOARD = new Uint8Array(WIDTH * HEIGHT)
}
let wss, COOLDOWNS = new Map()
if(SECURE){
	wss = new WebSocketServer({ server: createServer({key: await fs.readFile('a.key'),
	cert: await fs.readFile('a.pem') }).listen(1291) })
}else wss = new WebSocketServer({ port: 1291 })
let players = 0
wss.on('connection', async function(p) {
	players++

  p.on('message', function(data) {
    
  })
	p.on('close', function(){ players-- })
})
let NOW = Date.now()
setInterval(() => {
	NOW = Date.now()
}, 50)

import repl from 'basic-repl'
repl('$',_=>eval(_))

import { exec } from 'child_process'

exec("", (error, stdout, stderr) => {console.log(error)})