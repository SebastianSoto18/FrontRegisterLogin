import Environment from "../Envairoment.js";

export function loginUser(user, password) {
  return fetch(Environment.apiLogin, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
    },
    body: JSON.stringify({
      username: user,
      password: password,
    }),
  });
}