import clsx from 'clsx';
import { FC, useEffect, useRef, useState } from 'react';
import styles from './Combobox.module.css';

type ComboboxProps = {
  value: string;
  options: { label: string; value: string }[];
  placeholder?: string;
  onChange?: (value: string) => void;
};

export const Combobox: FC<ComboboxProps> = ({ value, options, placeholder = 'Select an option', onChange }) => {
  const [currentValue, setCurrentValue] = useState<string>(value);
  const [expanded, setExpanded] = useState<boolean>(false);
  const [searchActive, setSearchActive] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');
  const rootRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const filteredOptions = options.filter((option) => {
    if (!searchText) return true;

    const normalizedOptionLabel = option.label.toLowerCase();
    const normalizedSearchText = searchText.toLowerCase();
    return normalizedOptionLabel.includes(normalizedSearchText);
  });

  useEffect(() => {
    if (searchActive) {
      searchInputRef.current?.focus();
    }
  }, [searchActive]);

  const onComboboxClick = () => {
    setSearchActive(true);
    setExpanded(true);
  };

  const onOptionClick = (value: string) => {
    console.log(value);
    onChange?.(value);
    setCurrentValue(value);
    setExpanded(false);
    setSearchActive(false);
    setSearchText('');
  };

  return (
    <div className={styles.root} ref={rootRef}>
      <div className={styles.combobox} onClick={onComboboxClick}>
        {searchActive ? (
          <input
            className={styles.searchInput}
            type="text"
            name="comboSearch"
            id="combo-search"
            placeholder={placeholder}
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            onBlur={(event) => {
              event.stopPropagation();
              setExpanded(false);
            }}
            autoComplete="off"
            ref={searchInputRef}
          />
        ) : (
          <span className={styles.selectedValue}>{currentValue}</span>
        )}
        <button className={styles.toggleBtn} type="button" aria-label="Toggle options" aria-expanded={expanded}>
          <span className={clsx(styles.chevron, { [styles.bottom]: expanded })} />
        </button>
      </div>
      <div className={clsx(styles.dropdown, { [styles.expanded]: expanded })}>
        <ul className={styles.options}>
          {filteredOptions.map(({ label, value }) => {
            return (
              <li
                className={clsx(styles.option, { [styles.active]: value === currentValue })}
                key={value}
                tabIndex={0}
                onClick={() => onOptionClick(value)}
              >
                {label}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
