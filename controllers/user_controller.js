const User = require('../model/user_model');


// this is a post request to the url.
async function addUser(req, res) {

    try {
      const newUser = await User.create(req.body);
      res.status(201).json(newUser)
    }
    catch (error) {
      console.log('cant add User', error.message);
      res.status(400).json({message: 'cant add user' });
    }
  }
  // this is a delete request to the url.
async function deleteUserById(req, res) {
    const userId = req.params.UserId;
  
    try {
      await User.findByIdAndDelete(userId);
      res.status(200).json({ message: 'user deleted successfully' });
    }
    catch (error) {
      console.log('unable to delete user', error.message);
      res.status(400).json({ message: 'cant add user' })
    }
  }
module.exports = {
    addUser,
    deleteUserById
}