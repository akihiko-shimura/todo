import { useState } from 'react';

interface Props {
  onAdd: (text: string) => void;
}

export function AddTodo({ onAdd }: Props) {
  const [value, setValue] = useState('');

  return (
    <form
      onSubmit={e => { e.preventDefault(); onAdd(value); setValue(''); }}
      className="add-todo"
    >
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="タスクを入力..."
        className="add-todo__input"
        autoFocus
      />
      <button type="submit" className="add-todo__btn" disabled={!value.trim()}>
        追加
      </button>
    </form>
  );
}
