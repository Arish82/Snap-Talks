import React, { useState } from 'react';
import './emoji.css'; // Ensure you have a CSS file named styles.css
import { Button, Popover, Space } from 'antd';


function EmojiInput() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleEmojiClick = (emoji) => {
    setInputValue(inputValue + emoji.target.innerText);
  };
  const emojis = [
    '😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃',
  ];
  const content = (
    <div className='emojis'>
      {emojis.map((e) => {
        return (
          <span
            onClick={handleEmojiClick}
          >{e}</span>
        )
      })}
    </div>
  );

  return (
    <div className="emoji-input-container">
      <input
        type="text"
        className='input-groupName'
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter Group Name"
      />

      <Popover content={content} title="" trigger="click">
        <button>😃</button>
      </Popover>
    </div>
  );
}

export default EmojiInput;
