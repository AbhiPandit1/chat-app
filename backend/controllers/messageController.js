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
export const getMessage = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate('messages'); //not just refrence but message itself or else we hav eto find conversation id in message and then solve it

    if (conversation) return res.status(200).json({});

    const message = conversation.message;
    res.status(200).json(conversation.messages);
  } catch (err) {
    console.log('Error in sendMessageController', err.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};
