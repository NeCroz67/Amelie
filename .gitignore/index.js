const Discord = require("discord.js"); //surtout pas toucher


const client = new Discord.Client(); //surtout pas t

const ClientID = "631001858118516736"

var token = (process.env.TOKEN1)

const prefix = "'" // Choix de votre préfix entre les ""   



client.login (process.env.TOKEN1);

client.on('message', function (message) {

         if(message.content.startsWith(prefix + "Namek")){

        message.delete()

        if (message.channel.type === "dm") return;

      message.guild.members.forEach((player) => {

        message.guild.member(player).send("**Namek**\n\nBonjour futur guerrier nous t'avons choisit parmis t'en d'autres pour rejoindre notre serveur NAMEK:\n\nTu trouvera:\n\n🏅 Des événements\n💭 Une communauté actif et conviviale\n🌙 Des staff compétents.\nTu pourra aussi :\n👋 Rencontrés des personnes\n👫Trouvera des potes \n❤ Trouvera l'amour\n😎 Te faires plein de nouveaux amis.\n\nTU POURRA AUSSI GAGNER UN NITRO GAME SI TU FAIT 30 INVITATIONS. NO FAKE. ET BIEN SÛR SI TU FAIT 60 UN AUTRE........\n\n📕 Ta place: https://discord.gg/Svxdg6Q\n\n🌟Image: https://i.pinimg.com/originals/2f/4a/f4/2f4af45615c828296751d5f67f384462.gif")

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
