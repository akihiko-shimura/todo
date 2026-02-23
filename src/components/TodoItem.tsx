import type { Todo } from '../types';

interface Props {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: Props) {
  return (
    <li className={`todo-item ${todo.completed ? 'todo-item--done' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="todo-item__check"
        id={todo.id}
      />
      <label htmlFor={todo.id} className="todo-item__label">
        {todo.text}
      </label>
      <button
        onClick={() => onDelete(todo.id)}
        className="todo-item__delete"
        aria-label="削除"
      >
        ×
      </button>
    </li>
  );
}
