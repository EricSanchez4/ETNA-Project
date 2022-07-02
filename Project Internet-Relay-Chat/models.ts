import { connection } from "./db";


let user = {
  nickname: "pfffffff",
  slot_id: "test",
  password: "",
  is_admin: "0",
};

class Models {
  static async nicknameDoNotExist(nickname: string) {
    let sql = "SELECT id FROM users WHERE nickname=?";
    const result = await connection.promise().query(sql, nickname);
    const subResult: any = result[0];
    return subResult[0] === undefined;
  }

  static async createUser(user: any) {
    let sql: string = "INSERT INTO users SET ?";
    await connection.promise().query(sql, user);
  }

  static async comparePassword(password: string, nickname: string) {
    let sql: string = "SELECT password FROM users WHERE nickname=?";
    const [result] = await connection.promise().query(sql, nickname);
    const subResult: any = result;
    return subResult[0].password === password;
  
  }
}

export default Models;

// const main = async () => {
//   console.log(await Models.nicknameDoNotExist("odsecuinhzeoi"));
//   console.log(await Models.nicknameDoNotExist("peter"));
//   console.log(await Models.comparePassword("toto", "peter"));
//   // await Models.createUser(user);
// };
// main();
// // console.log(Models.createUser(user))
