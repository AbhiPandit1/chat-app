import MessageInput from './MessageInput';
import Messages from './Messages';

const MessageContainer = () => {
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {/* Header */}
      <div className="bg-blue-400 px-4 py-2 mb-2 text-white">
        <span className="label-text text-3xl font-bold">To:</span>{' '}
        <span className="font-bold text-2xl">John doe</span>
      </div>

      <Messages />
      <MessageInput />
    </div>
  );
};

export default MessageContainer;
