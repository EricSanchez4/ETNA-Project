import { io } from "socket.io-client";
import * as readline from "readline";

const socket = io("ws://localhost:3000");

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

socket.on("bienvenue_debut", (arg) => {
  console.log(arg);
  socket.on("question", () => {
    socket.emit("id_socket");
    rl.question(`nickname : `, (answer) => {
      socket.emit("nickname", answer);
    });
  });
});
socket.on("logpassword", () => {
  rl.question(`password : `, (answer) => {
    socket.emit("password", answer);
  });
});
socket.on("mess_connect", (arg) => {
    console.log(arg);
});

socket.on("register", () => {
    rl.question(`Are you sure to register as a new user ? [y/n] : `, (answer) => {
    if (answer == "y") {
        rl.question(`password : `, (answer) => {
          rl.question(`comfirm password : `, (newanswer) => {
            if (answer == newanswer) {
              socket.emit("insert", answer);
              console.log("Vous êtes bien connecté !\n\x1b[36m" +
              "Voici les explications du fonctionnement : " +
              "\nPour rejoindre une room " + "\x1b[33m" + '"&join_room NOM_DE_LA_ROOM"' + "\x1b[36m" +
              "\nPour créer une room " + "\x1b[33m" + '"&create_room NOM_DE_LA_ROOM"' + "\x1b[36m" +
              "\nPour quitter une room " + "\x1b[33m" + '"&exit_room"' + "\x1b[37m")
            }
            else {
              console.log("password does not match");
              socket.emit("retryregister");
            }
          });
        });
      }
      else {
        socket.emit("nickname", answer);
      }
    });
});


socket.on("REpassword", () => {
  rl.question(`Wrong password\npassword : `, (answer) => {
    socket.emit("password", answer);
  });
});

socket.on("msg_du_serveur", (msg) => {
  console.log(msg);
});

rl.on("line", (msg) => {
  socket.emit("msg_envoi", msg);
});
