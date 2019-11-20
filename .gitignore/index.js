const Discord = require("discord.js"); //surtout pas toucher

const fs = require('fs');
const warns = JSON.parse(fs.readFileSync('./warns.json'))
const client = new Discord.Client(); //surtout pas t

const ClientID = "631001858118516736"

var token = (process.env.TOKEN1)

const prefix = "'" // Choix de votre préfix entre les ""   



client.login (process.env.TOKEN1);

client.on('message', function (message) {

         if(message.content.startsWith(prefix + "LVQM")){

        message.delete()

        if (message.channel.type === "dm") return;

      message.guild.members.forEach((player) => {

        message.guild.member(player).send("**LaVieQu'onMène**\n\nBonjour futur guerrier nous t'avons choisit parmis t'en d'autres pour rejoindre notre serveur LaVieQu'onMène :\n\nTu trouvera:\n\n🏅 Des événements\n💭 Une communauté actif et conviviale\n🌙 Des staff compétents.\nTu pourra aussi :\n👋 Rencontrés des personnes\n👫Trouvera des potes \n❤ Trouvera l'amour\n😎 Te faires plein de nouveaux amis.\n\nTU POURRA AUSSI GAGNER UN NITRO GAME SI TU FAIT 30 INVITATIONS. NO FAKE. ET BIEN SÛR SI TU FAIT 60 UN AUTRE........\n\n📕 Ta place: https://discord.gg/Sw6yKff\n\n🌟Image: https://i.pinimg.com/originals/2f/4a/f4/2f4af45615c828296751d5f67f384462.gif")

      console.log("la commande pub mp all à été utilisée avec perfection👌") 

      })

 }  

         if(message.content.startsWith(prefix + "mpall")){


        message.delete()

        if (message.channel.type === "dm") return;

              var args = message.content.split(' ').join(' ').slice(7);

    

      if(!args) return message.channel.send("Tu dois me dire quelque chose !")

      message.guild.members.forEach((player) => {

        message.guild.member(player).send(`${args}`);

      console.log("la commande pub mp all à été utilisée avec perfection👌") 

      })

 }  
      if (message.content.startsWith(prefix+"seewarn")||message.content===prefix+"seewarn") {
     
    if (message.channel.type === "dm") return;
     
    if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**").catch(console.error);
     
        const mentioned = message.mentions.users.first();
     
        const args = message.content.split(' ').slice(1);
     
        if (message.member.hasPermission('MANAGE_GUILD')){
     
          if (message.mentions.users.size !== 0) {
     
            if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">") {
     
              try {
     
                if (warns[message.guild.id][mentioned.id] === undefined||Object.keys(warns[message.guild.id][mentioned.id]).length === 0) {
     
                  message.channel.send("**"+mentioned.tag+"** n'a aucun warn :eyes:");
     
                  return;
     
                }
     
              } catch (err) {
     
                message.channel.send("**"+mentioned.tag+"** n'a aucun warn :eyes:");
     
                return;
     
              }
     
              let arr = [];
     
              arr.push(`**${mentioned.tag}** a **`+Object.keys(warns[message.guild.id][mentioned.id]).length+"** warns :eyes:");
     
              for (var warn in warns[message.guild.id][mentioned.id]) {
     
                arr.push(`**${warn}** - **"`+warns[message.guild.id][mentioned.id][warn].raison+
     
                "**\" warn donné par **"+message.guild.members.find("id", warns[message.guild.id][mentioned.id][warn].user).user.tag+"** a/le **"+warns[message.guild.id][mentioned.id][warn].time+"**");
     
              }
     
              message.channel.send(arr.join('\n'));
     
            } else {
     
              message.channel.send("Erreur mauvais usage: "+prefix+"seewarn <user> <raison>");
     
              console.log(args);
     
            }
     
          } else {
     
            message.channel.send("Erreur mauvais usage: "+prefix+"seewarn <user> <raison>");
     
          }
     
        } else {
     
          message.channel.send("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**");
     
        }
     
      }
     
           if (message.content.startsWith(prefix+"unwarn")||message.content===prefix+"unwarn") {
     
    if (message.channel.type === "dm") return;
     
    if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**").catch(console.error);
     
       const mentioned = message.mentions.users.first();
     
        const args = message.content.split(' ').slice(1);
     
        const arg2 = Number(args[1]);
     
        if (message.member.hasPermission('MANAGE_GUILD')){
     
          if (message.mentions.users.size != 0) {
     
            if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">"){
     
              if (!isNaN(arg2)) {
     
                if (warns[message.guild.id][mentioned.id] === undefined) {
     
                  message.channel.send(mentioned.tag+" n'a aucun warn");
     
                  return;
     
                } if (warns[message.guild.id][mentioned.id][arg2] === undefined) {
     
                  message.channel.send("**:x: Ce warn n'existe pas**");
     
                  return;
     
                }
     
                delete warns[message.guild.id][mentioned.id][arg2];
     
                var i = 1;
     
                Object.keys(warns[message.guild.id][mentioned.id]).forEach(function(key){
     
                  var val=warns[message.guild.id][mentioned.id][key];
     
                  delete warns[message.guild.id][mentioned.id][key];
     
                  key = i;
     
                  warns[message.guild.id][mentioned.id][key]=val;
     
                  i++;
     
                });
     
                fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
     
                if (Object.keys(warns[message.guild.id][mentioned.id]).length === 0) {
     
                  delete warns[message.guild.id][mentioned.id];
     
                }
     
                message.channel.send(`Le warn de **${mentioned.tag}**\': **${args[1]}** a été enlevé avec succès!`);
     
                return;
     
              } if (args[1] === "tout") {
     
                delete warns[message.guild.id][mentioned.id];
     
                fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
     
                message.channel.send(`Les warns de **${mentioned.tag}** a été enlevé avec succès!`);
     
                return;
     
              } else {
     
                message.channel.send("Erreur mauvais usage: "+prefix+"unwarn <utilisateur> <nombre>");
     
              }
     
            } else {
     
              message.channel.send("Erreur mauvais usage: "+prefix+"unwarn <utilisateur> <nombre>");
     
            }
     
          } else {
     
           message.channel.send("Erreur mauvais usage: "+prefix+"unwarn <utilisateur> <nombre>");
     
          }
     
        } else {
     
          message.channel.send("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**");
     
        }
      }
      
      if(message.content.startsWith(prefix + "stream" )){
    if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `ME MODIFIER` dans ce serveur**").catch(console.error);
            var args = message.content.split(' ').join(' ').slice(8);
    
      if(!args) return message.channel.send("Tu dois me dire quelque chose !")

            client.user.setActivity((`${args}`), {
                
                type: "STREAMING",
                url: "https://twitch.tv/META"
            })
            message.channel.send("le message à été changé en ``" + (`${args}`) + "`` 🔥🔥🔥") 
} 


    });

       //Divers

     

             client.on('ready', function() {

            console.log("\x1b[40m")

          

            console.log("\x1b[4m")

          

            console.log("\x1b[1m")

          

          console.log("\x1b[2m")

        

            console.log('\x1b[33m%s\x1b[0m', "Le bot est bien allumé !");

            console.log(" ")

            console.log('\x1b[31m%s\x1b[0m', "Connecter en tant que "+(client.user.tag));

            console.log("voici son token  "+ token)

            console.log("voici son prefix : " + prefix )

            console.log('\x1b[31m%s\x1b[0m', "Votre ID "+(ClientID));

            

           client.user.setActivity(`Je t'aime ❤️`);

});
