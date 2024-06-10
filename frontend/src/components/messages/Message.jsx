const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar ">
        <div className="w-10 rounded-full ">
          <img
            alt="Tailwind CSS chat bubble component"
            src={'https://source.unsplash.com/random/800x600'}
          />
        </div>
      </div>
      <div className={`chat-bubble text-white pb-2 bg-blue-400`}>lorem34</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        12:44
      </div>
    </div>
  );
};

export default Message;
