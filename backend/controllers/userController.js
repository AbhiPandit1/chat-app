import User from '../models/userModel.js';

export const getUserSideBar = async (req, res) => {
  try {
    const loggedUserId = req.user._id;

    const filteredUsers = await User.find({
      _id: { $ne: loggedUserId },
    }).select('-password'); //Find every user in our database but not that one which is ewaul to our userId

    return res.status(200).json({ 'filtered UserSideBar': filteredUsers });
  } catch (err) {
    console.error('Error in sendMessageController', err.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};
