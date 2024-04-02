const signup = require("../models/signup");

async function getUsername(userName) {
  try {
    const data = await signup.find({username:userName});
    if(data.length!=0){
        return true
    }
    return false;
    console.log(data);
  } catch (err) {
    console.log(err);
    return err;
  }
}

module.exports = getUsername;