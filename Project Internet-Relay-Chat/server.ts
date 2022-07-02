import { Server } from "socket.io";
import { connection } from "./db";
import Models from "./models";
import { RowDataPacket } from "mysql2";

const server = new Server(3000);

server.on("connection", async (socket) => {
  //Connection---

  console.log("JARVIS: Un user s'est connecté");
  socket.emit("bienvenue_debut", "JARVIS: Bienvenue cher user !", );

  //authentification

  let user = {
    nickname: "",
    slot_id: "",
    password: "",
    is_admin: "0",
  };

  socket.emit("question");

  //athentification

  socket.on("nickname", async (name) => {
    user.nickname = name;

    //vérifier si user déjà enregistré

    if (!(await Models.nicknameDoNotExist(name))) {
      //demander le mot de passe
      socket.emit("logpassword");
      socket.on("password", async (password) => {
        if (await Models.comparePassword(password, user.nickname)) {
          console.log("Le mdp de l'user " + user.nickname + " est correct.");
          socket.emit("msg_du_serveur", "Vous êtes bien connecté !");
          user.slot_id = socket.id;
          socket.emit(
            "msg_du_serveur",
            "\x1b[36m" +
              "Voici les explications du fonctionnement : " +
              "\nPour rejoindre une room " + "\x1b[33m" + '"&join_room NOM_DE_LA_ROOM"' + "\x1b[36m" +
              "\nPour créer une room " + "\x1b[33m" + '"&create_room NOM_DE_LA_ROOM"' + "\x1b[36m" +
              "\nPour quitter une room " + "\x1b[33m" + '"&exit_room"' + "\x1b[37m"
          );

          console.log("\x1b[35m", user.nickname + " is connected.", "\x1b[37m");
        } else {
          console.log("MDP Incorrect");
          socket.emit("REpassword");
        }
      });
    } else {
      socket.emit("register");
    }

    socket.on("retryregister", () => {
      console.log("Dues invalid input and retry all the register form.");
      socket.emit("register");
    });

    socket.on("insert", async (password) => {
      user.password = password;
      await Models.createUser(user);
          user.slot_id = socket.id;
    });

    socket.on("retryregister", () => {
      console.log("Invalid inputs and retry all the register form.");
      socket.emit("register");
    });

    //messages et rooms
    let current_room: string = "";

    socket.on("msg_envoi", async (msg) => {
      let sql = ``;
      let values = ``;

      if (msg[0] == "&") {
        //le message est une commande
        let msg_split = msg.split(" ");
        switch (msg_split[0]) {
          case "&join_room":
            if (current_room != "") {
              socket.emit(
                "msg_du_serveur",
                `Veuillez quitter la room ${current_room} avant de rejoindre une autre room`
              );
              break;
            }
            let room_a_rejoindre = msg_split[1];
            //requete sql pour vérifier si la room existe
            sql = "SELECT name FROM rooms WHERE name=?;";
            values = room_a_rejoindre;
            connection.query(sql, values, (err: any, results: any) => {
              let data = <RowDataPacket>results;
              if (data[0]) {
                socket.join(room_a_rejoindre);
                socket
                  .to(room_a_rejoindre)
                  .emit(
                    "msg_du_serveur",
                    `${user.nickname} est entré dans la room ${room_a_rejoindre}`
                  );
                socket.emit(
                  "msg_du_serveur",
                  `Vous avez rejoint la room ${room_a_rejoindre}`
                );
                current_room = room_a_rejoindre;
                console.log(current_room);
              } else {
                socket.emit(
                  "msg_du_serveur",
                  `la room ${room_a_rejoindre} n'a pas été créée, veuillez la créer ou rejoindre une autre room.`
                );
              }
            });
            break;

          case "&create_room":
            let room_a_creer = msg_split[1];
            //vérifier si la room existe déjà
            sql = "select * from rooms where name=?";
            values = room_a_creer;
            connection.query(sql, values, (err: any, result: any) => {
              if (JSON.parse(JSON.stringify(result))[0]) {
                //la room existe déjà
                socket.emit(
                  "msg_du_serveur",
                  `La room ${room_a_creer} existe déjà.`
                );
              } else {
                //requete sql pour ajouter la room à creer
                sql = "INSERT INTO rooms(name) values (?)";
                values = room_a_creer;
                connection.query(sql, values);
                socket.emit(
                  "msg_du_serveur",
                  `La room ${room_a_creer} a bien été créée.`
                );
              }
            });
            break;


          case "&exit_room":
            if (current_room == "") {
              socket.emit("msg_du_serveur", "Vous n'êtes pas dans une room.");
            } else {
              socket.leave(current_room);
              socket.emit(
                "msg_du_serveur",
                `Vous avez quitté la room ${current_room}.`
              );
              current_room = "";
            }
            break;

          case "&list_room":
            console.log("liste des rooms a priori");
            //requete sql
            sql = "SELECT name FROM rooms;";
            connection.query(sql, (err: any, result: any) => {
              const data = <RowDataPacket>result;
              let rooms = "";
              for (let i = 0; i < data.length; i++) {
                rooms = rooms + data[i].name + " ";
              }
              socket.emit("msg_du_serveur", rooms);
            });
            break;
        }
      } else {
        // le message n'est pas une commande
        if (current_room == "") {
          socket.emit(
            "msg_du_serveur",
            "JARVIS: Vous n'avez pas encore de room, veuillez rejoindre une room avant d'envoyer un message.", ""
          );
        } else {

          socket
            .to(current_room)
            .emit("msg_du_serveur", `${user.nickname} : ${msg}`);
        }
      }
    });
  });
});

          // trouver le user_id : (pour l'historique des messages)

          //   async function getUserId() {
          //     const sql = "select id from users where nickname=?";
          //     return await connection.promise().query(sql,user.nickname);
          //     };
          //   console.log(getUserId());

          //  async function getRoomId() {
          //     const sql = "select id from rooms where name=?";
          //     return await connection.promise().query(sql,current_room);
          //     };
          //   console.log(getRoomId());

          //   sql = "INSERT INTO messages(user_id, room_id, content) SET ?;"
          //   let message = {user_id: user_id, room_id:room_id, msg:msg}
          //   connection.query(sql, [message]);

          //afficher sur la console de l'utilisateur

                    // case "&msg" :
          //     let nom_user = msg_split[1];
          //     let msg_mp = msg.split[2];
          //     //requete sql pour rejoindre la proom
          //     sql = "SELECT slot_id FROM users WHERE name=?;"
          //     values = nom_user;
          //     connection.query(sql, values, (err, result) => {
          //       //socket.broadcast.to(result[0].socketid).emit("msg_du_serveur", "aya");
          //       console.log(result);
          //       //socket.broadcast.to(JSON.parse(JSON.stringify(result))[0]).emit("msg_du_serveur", `***Vous avez reçu un mp***\n${user.nickname} : ${msg_mp}`)
          //     });
          //     break;