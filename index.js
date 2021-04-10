const Discord = require("discord.js")
const keepAlive = require("./server")

/*
   @author  Bravirro
*/

const client = new Discord.Client()

const kill = [
  " ha intentado nadar en lava",
  " ha sido asesinado por un zombie",
  " ha caido al vacío", 
  " ha sido asesinado por un esqueleto",
  " ha sido asesinado por una araña",
  " ha sido asesinado por una araña de cueva",
  " ha sido asesinado por un slime",
  " ha sido asesinado por una bruja",
  " ha sido asesinado por un esqueleto whither",
  " ha sido asesinado por un blaze",
  " ha sido asesinado por un fantasma",
  " ha sido asesinado por un ghast",
  " ha sido asesinado por un cubo de magma",
  " ha sido asesinado por un piglin",
  " ha sido asesinado por un piglin zombificado",
  " ha sido asesinado por un hoglin",
  " ha sido asesinado por un zoglin",
  " ha sido asesinado por un piglin bruto",
  " ha sido asesinado por un whither",
  " ha sido asesinado por el ender dragon",
  " ha sido asesinado por un enderman",
  " ha sido asesinado por un golem de hierro",
  " ha sido asesinado por una llama",
  " ha sido asesinado por un lobo",
  " ha sido asesinado por un panda",
  " ha sido asesinado por un oso polar",
  " ha sido asesinado por un ahogado",
  " ha sido asesinado por un aldeano zombi",
  " ha sido asesinado por un ravager",
  " ha sido asesinado por un invocador",
  " ha sido asesinado por un pillager",
  " ha sido asesinado por un guardián",
  " ha sido asesinado por un elder guardian",
  " ha sido asesinado por un husk",
  " ha sido asesinado por un stryder",
  " ha sido asesinado por un spider jockey",
  " ha sido asesinado por un chicken jockey",
  " ha sido asesinado por un silverfish",
  " ha sido asesinado por un shulker",
  " ha sido asesinado por una cabra",
  " ha sido asesinado por un warden",
  " ha sido asesinado por un conejo asesino",
  " ha sido asesinado por un gigante",
  " ha sido asesinado por un ilusionista",
  " ha volado por los aires",
  " se ha asfixiado en una pared",
  " ha sido expoltado por creeper",
  " ha sido explotado por ghast",
  " se ha muerto de hambre",
  " se ha chocado contra un cactus",
  " ha intentado nadar en lava",
  " ha muerto por magia",
  " ha sido expulsado del server por AFK", 
]

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  if (msg.author.bot) return

  if (msg.content.startsWith("/kill")) {
    const out = kill[Math.floor(Math.random() * kill.length)]
    const index = ["@"]
    const username = (`${msg.author}`)
    var arg = msg.content.trim().split('/kill ')
    console.log(arg)
    if (index.some(word => msg.content.includes(word))) {
      const out_ = arg + " ha sido asesinado por " + username
      const output_trg = out_.split(",")
      msg.channel.send(output_trg)
    }
    else{
      const out_def = username + out  
      const output_def = out_def.split(",")
      msg.channel.send(output_def)
    }
    

  }
})

 

keepAlive()
client.login(process.env.TOKEN)
