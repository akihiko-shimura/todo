import { useTodos } from './hooks/useTodos';
import { AddTodo } from './components/AddTodo';
import { TodoItem } from './components/TodoItem';
import { FilterBar } from './components/FilterBar';

function App() {
  const { todos, filter, setFilter, addTodo, toggleTodo, deleteTodo, clearCompleted, activeCount } = useTodos();
  const hasCompleted = todos.some(t => t.completed) || (filter !== 'all' && activeCount < todos.length);

  return (
    <div className="app">
      <h1 className="app__title">TODO</h1>
      <div className="app__card">
        <AddTodo onAdd={addTodo} />
        {todos.length > 0 ? (
          <ul className="todo-list">
            {todos.map(todo => (
              <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} onDelete={deleteTodo} />
            ))}
          </ul>
        ) : (
          <p className="empty">タスクがありません</p>
        )}
        <FilterBar
          filter={filter}
          onFilterChange={setFilter}
          activeCount={activeCount}
          hasCompleted={hasCompleted}
          onClearCompleted={clearCompleted}
        />
      </div>
    </div>
  );
}

export default App;
