var jwt = require("jsonwebtoken");

module.exports.setData = (data, tokendata, type) => {
  var receivedData = JSON.stringify(data);
  //Storing token in the local storage
  localStorage.setItem("token", JSON.stringify(tokendata));
  //localStorage.setItem("local_storage", receivedData);
  //localStorage.setItem("usertype", type);
};

module.exports.getData = () => {
  return JSON.parse(localStorage.getItem("local_storage"));
};

module.exports.getUserType = () => {
  return localStorage.getItem("usertype");
};

module.exports.isProfessor = () => {
  let ut = localStorage.getItem("usertype");
  if (ut === "faculty") {
    return true;
  } else {
    return false;
  }
};
