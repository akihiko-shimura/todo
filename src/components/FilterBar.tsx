import type { FilterType } from '../types';

interface Props {
  filter: FilterType;
  onFilterChange: (f: FilterType) => void;
  activeCount: number;
  hasCompleted: boolean;
  onClearCompleted: () => void;
}

const FILTERS: { value: FilterType; label: string }[] = [
  { value: 'all', label: 'すべて' },
  { value: 'active', label: '未完了' },
  { value: 'completed', label: '完了済み' },
];

export function FilterBar({ filter, onFilterChange, activeCount, hasCompleted, onClearCompleted }: Props) {
  return (
    <div className="filter-bar">
      <span className="filter-bar__count">{activeCount} 件残り</span>
      <div className="filter-bar__buttons">
        {FILTERS.map(f => (
          <button
            key={f.value}
            onClick={() => onFilterChange(f.value)}
            className={`filter-bar__btn ${filter === f.value ? 'filter-bar__btn--active' : ''}`}
          >
            {f.label}
          </button>
        ))}
      </div>
      {hasCompleted && (
        <button onClick={onClearCompleted} className="filter-bar__clear">
          完了済みを削除
        </button>
      )}
    </div>
  );
}
