import React, { useState } from "react";

interface TodoInputProps {
  onSubmit: (text: string) => void;
}

/**
 * 待办事项输入组件
 * @param onSubmit 提交回调
 */
const TodoInput: React.FC<TodoInputProps> = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    const trimmed = inputValue.trim();
    if (trimmed) {
      onSubmit(trimmed);
      setInputValue("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="输入待办事项"
      />
      <button onClick={handleSubmit}>添加</button>
    </div>
  );
};

export default TodoInput;
