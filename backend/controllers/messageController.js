import Conversation from '../models/conversationModel.js';
import Message from '../models/messageModel.js';

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;

    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    //This will run in parallel
    await Promise.all([conversation.save(), newMessage.save()]);

    res.status(201).json({ message: 'Sent new message', newMessage });
  } catch (err) {
    console.log('Error in sendMessageController', err.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};

//get message
export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate('messages'); // NOT REFERENCE BUT ACTUAL MESSAGES

    if (!conversation) {
      return res.status(200).json([]); // Return an empty array if conversation is not found
    }

    const messages = conversation.messages;

    return res.status(200).json(messages);
  } catch (error) {
    console.error('Error in getMessages controller:', error.message);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
