const Discord = require("discord.js"); //surtout pas toucher

const fs = require('fs');
const warns = JSON.parse(fs.readFileSync('./warns.json'))
const client = new Discord.Client(); //surtout pas t

const ClientID = "631001858118516736"

const token = (process.env.TOKEN1)

const prefix = "'" // Choix de votre préfix entre les ""   



client.login (process.env.TOKEN1);

client.on('message', function (message) {

	            if(message.content === prefix + "help") {
            message.delete() 
        const embed = new Discord.RichEmbed()
        .setColor('#0000CC' )
        .setThumbnail("https://cdn.discordapp.com/attachments/632549635185180685/635103871643025409/xxxnox2.png")
        .setTitle("``Voici mes commandes d'aides ! \n Je me surnomme " + (client.user.tag) + "✨ créer par 𝑵𝒆𝑪𝒓𝒐𝒛#9999``")
        .setDescription("__**Commandes générales, utilisables par tous !**__")
        .addField("**help**", "``C'est ce qui se trouve sous tes yeux !👀``")
        .addField("**fun**", "``Cette command vous montrera toutes les commandes fun disponible 🔱``") 
        .addField("**admin**", "``Cette commande vous montrera toutes les commandes d'administration disponible.``")
        .addField("**social**", "``Pour voir tous mes réseaux sociaux !📱``")
        .addField("**ping**", "``Pour connaître la vitesse de l'hébergeur de " + (client.user.tag) +" . 💻``")
        .addField("**invite**", "``pour tous ce qui veulent ajouté un bot sur un serveur personnel avec les même commandes que moi. ⚙️``")
        .setFooter("Bot created bye 𝑵𝒆𝑪𝒓𝒐𝒛#9999 ") 
        message.channel.send(embed);
        console.log("Un utilisateur à éffectué la commande d'aide");
       } 
       


            if(message.content === prefix + "admin") {
            message.delete() 
        var help_embed = new Discord.RichEmbed()
        .setThumbnail("https://cdn.discordapp.com/attachments/632549635185180685/635103871643025409/xxxnox2.png")
        .setColor('#0000CC')
        .setTitle("Voici mes commandes d'aides !")
        .setDescription("Commandes admin, utilisables par tous !")
        .addField("**admin**", "``C'est ce qui se trouve sous tes yeux !👀``")
        .addField("**kick**", "``Faites /kick pour expulsé une personne.``")
        .addField("**ban**", "``Faites /ban pour bannir quelqu'un du serveur. ``")
        .addField("**id**", "``Faites /id et juste à côté le id de la personne et vous trouverai son pseudo discord .``") 
        .addField("**serv**", "``Faites /serv pour avoir plus d'informations sur le serveur !! ``")
        .addField("**warn**", "``Cette command vous permets de warn un utilisateur (l'avertir) ``") 
        .addField("**unwarn**", "``Cette command vous permets d'enlevé un nombre précis de warn``") 
        .addField("**seewarn**", "``Sela vous permets de voir tout les warn de l'utilisateur mentionner ``")
        .setFooter("Menu d'aide - modération")
        message.channel.send(help_embed);
        console.log("Un utilisateur a effectué la commande d'aide");
    
       } 

            if(message.content === prefix + "fun") {
            message.delete() 
        var help_embed = new Discord.RichEmbed()
        .setThumbnail("https://cdn.discordapp.com/attachments/632549635185180685/635103871643025409/xxxnox2.png")
        .setColor('#0000CC')
        .setTitle("Voici mes commandes d'aides !")
        .setDescription("Commandes fun, utilisables par tous !")
        .addField("**fun**", "``C'est ce qui se trouve sous tes yeux !👀``")
        .addField("**punch**", "``Cette command vous permez me mettre un bon  grand coup de poin``")
        .addField("**love**", "``Envie de découvrir des choses sur un futur admirateur secret ? ♀️♂️``")
        .addField("**kiss**", "``Faire un bisou à une personne💋``" )
        .addField("**hug**", "``Faire un câlin à une personne💕`` ")
        .addField("**rire**", "``Lâcher un fou rire avec les minions 😂🤣`` ")
        .addField("**8ball**", "``Posez une question juste à côté de la Command et elle sera automatiquement répondu``")
        .addField("**pf**", "``Sa vous tante une partie de Pile ou Face 😏``") 
        .addField("**avatar**", "``Cette commande vous permets de voir de plus près l'avatar de l'utilisateur mentionné 👌``") 
        .addField("**roulette**", "``Pour joué à la roulette Russe :sweat_smile:  :gun: 🎰``")
        .addField("**proba10|proba8|proba6|proba4|proba2**", "``Je pense que vous connaissez les règles du proba. Faites proba(le chiffre paire) direct à côté le proba et les votre chiffre 😜``")
        .setFooter("Menu d'aide - Fun")
        message.channel.send(help_embed);
        console.log("Un utilisateur a effectué la commande Fun");
    
       } 
           
            if(message.content === prefix + "social") {
            message.delete() 
        var help_embed = new Discord.RichEmbed()
        .setColor('#0000CC')
        .setThumbnail("https://i.pinimg.com/originals/9b/9e/40/9b9e40c61133e03d57c6ae6d185ebfe0.gif")
        .setTitle("                                 ")
        .setDescription("Commandes social , utilisables par tous !")
        .addField("**instagram 📸**", "``Cette commande vous affichera le lien qui vous mènera sur la chaîne YouTube officiel de NeCroz!``")
        .addField("**youtube 🎥**", "``Cette commande vous affichera le lien qui vous mènera sur le compte Instagram officiel de NeCroz!``")
        .setFooter("Menu d'aide - social")
        message.channel.send(help_embed);
        console.log("Un utilisateur a effectué la commande d'aide");
    
       } 

           if(message.content === prefix + "invite"){
       	message.delete()
        let embed = new Discord.RichEmbed()
     .setTitle("Cliquez ici pour inviter le bot !")
     .setAuthor("INVITATION")
     .setColor("RANDOM")
     .setImage("https://cdn.discordapp.com/attachments/632549635185180685/635103871643025409/xxxnox2.png")
     .setURL("https://discordapp.com/api/oauth2/authorize?client_id=618824584061386774&permissions=38912&scope=bot")
     .setThumbnail(message.author.avatarURL)
  .setFooter(`Commande invite`, message.author.avatarURL)
        message.channel.send(embed)
    }
       //Commandes Fun
       
              
    
               
       
       
        
                if (message.content.startsWith(prefix + "hug")) {
            var hug = [
                "https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif",
                "https://media.giphy.com/media/5eyhBKLvYhafu/giphy.gif",
                "https://media.giphy.com/media/lrr9rHuoJOE0w/giphy.gif",
                "https://media.giphy.com/media/svXXBgduBsJ1u/giphy.gif"
            ];
            var gif = hug[Math.floor(Math.random() * hug.length)];
            var hug_embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .setTitle(`Tu viens de faire un câlin :`)
                .setImage(gif)
                .setTimestamp()
                .setFooter("NeCroz")
            message.channel.send(hug_embed);

       } 
	
	    if (message.content.startsWith(prefix + "say")) {
      message.delete();
      var args = message.content.split(' ').join(' ').slice(5);
    
      if(!args) return message.channel.send("Tu dois me dire quelque chose !")

      message.channel.send(`${args}`);
    }
	
	                              if (message.content.startsWith(prefix + "8ball")) {
            if (message.content.substr(prefix.length + 5)) {
                var ball = [
                    //oui
                    "Plutôt, oui",
                    "Oui.",
                    "Bien sûr.",
                    "Faites ainsi.",

                    //non
                    "Non",
                    "Mes sources disent non.",
                    "Les signes disent que non.",
                    "Je dirais que non",

                    //autres
                    "Actuellement, je ne peux le prédire ...",
                    "Impossible à prédire ..."
                ];
                var ansball = ball[Math.floor(Math.random() * ball.length)];
                var ball_embed = new Discord.RichEmbed()
                    .setColor('4f0982')
                    .addField(`Voici la réponse à vôtre question :`, ansball)
                    .setTimestamp()
                    .setFooter("NeCroz")
                message.channel.send(ball_embed);
            } else {
                message.channel.send("Si vous voulez que la boule magique vous réponde, vous devez déjà poser la question !")
            }
        
                      if (message.content.startsWith(prefix + 'ping')) {
            message.channel.send('Pong! ping :`' + `${Date.now() - message.createdTimestamp}` + ' ms`');
       }   
       
                   if (message.content.startsWith(prefix + "pf")) {
            pileface = Math.floor(Math.random() * 2 + 0)
            if (pileface === 0) {
                message.channel.send("Vous venez d'obtenir : **Pile** !")
            } else {
                message.channel.send("Vous venez d'obtenir : **Face** !")
            }
          } 
          

      
      if(message.content.startsWith(prefix + "play")) {
      	message.delete()
            var args = message.content.split(' ').join(' ').slice(6);
    
      if(!args) return message.channel.send("Tu dois me dire quelque chose !")
                  client.user.setGame(`${args}`);
                  message.channel.send("L'activité à été changé en ``" + (`${args}`) + "`` ??🔥🔥") 
                 } 
      
           if(message.content.startsWith(prefix + "love")){
       	message.delete()
    var mentionned = message.mentions.members.first();
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM') 
        .setDescription(mentionned.displayName + " je croie que quelqu'un vous aime 💕 ")
        .setFooter(`Commande %love`, message.author.avatarURL)
        message.channel.send(embed)
     } 
            
      //Social
     
                  if(message.content.startsWith(prefix + "don")) {
             message.delete()
         let embed = new Discord.RichEmbed()
        .setTitle("Voici le lien qui vous permettra de m'aidé financièrement ❤️❤️")
        .addField("**PayPal **", "https://paypal.me/necrozytb67?locale.x=fr_FR")
        .setImage("https://www.paiement-en-ligne.info/wp-content/uploads/2018/06/paypal-avis-e1530005844119.png") 
        .setColor("BLUE")
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setTimestamp()
        message.channel.send(embed)
    }

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
