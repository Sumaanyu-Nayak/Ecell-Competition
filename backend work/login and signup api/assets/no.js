const signup = require("../models/signup");

async function getNo(no) {
  try {
    const data = await signup.find({no:no});
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

module.exports = getNo;