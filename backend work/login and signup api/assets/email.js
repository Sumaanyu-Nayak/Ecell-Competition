const signup = require("../models/signup");

async function getEmail(value) {
  try {
    const data = await signup.find({email:value});
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

module.exports = getEmail;