import gameData from '../../consts/shema_config.json';
import { configs } from '../../consts/configs';
import styles from './Schema.module.css';
import { SetStateAction, useState } from 'react';

type GameData = { [key: string]: string }; // Define a more flexible type

export const Schema = () => {
  // Local state to hold the gameData copy
  const [localGameData, setLocalGameData] = useState<GameData>(gameData as GameData); // Cast gameData to the new type
  const [inputValue, setInputValue] = useState<string>('');
  const [selectedValue, setSelectedValue] = useState<string>('config_base.json');
  const [localJson, setLocalJson] = useState<string | null>(null);

  const handleOnChange = (e: { target: { value: SetStateAction<string> } }) => {
    setInputValue(e.target.value);
  };

  const newConfigs = inputValue !== '' ? configs : [];

  const handleSelect = (e: { target: { value: any } }) => {
    const value = e.target.value;
    setSelectedValue(value);
  };

  // Check if inputValue exists in localGameData to enable/disable "Remove" button
  const canRemove = inputValue in localGameData;

  const handleRemove = () => {
    if (inputValue && canRemove) {
      const updatedGameData = { ...localGameData };
      delete updatedGameData[inputValue]; // No more TypeScript error
      setLocalGameData(updatedGameData);
    }
  };

  const handleAddOrReplace = () => {
    if (inputValue && selectedValue) {
      // Add or replace key-value pair
      setLocalGameData((prevData) => ({
        ...prevData,
        [inputValue]: selectedValue,
      }));
    }
  };

  const handleConfirm = () => {
    // Generate the local JSON string and save it to state
    setLocalJson(JSON.stringify(localGameData, null, 2));
  };

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Game</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(localGameData).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <input
        type="text"
        value={inputValue}
        onChange={handleOnChange}
        placeholder="Enter key"
      />

      <select value={selectedValue} onChange={handleSelect}>
        {newConfigs.map((config, index) => (
          <option key={index} value={config}>
            {config}
          </option>
        ))}
      </select>

      {/* Three Buttons */}
      <button onClick={handleRemove} disabled={!canRemove}>
        Remove
      </button>

      <button onClick={handleAddOrReplace}>
        Add/Replace
      </button>

      <button onClick={handleConfirm}>
        Confirm
      </button>

      {/* Display the local JSON when confirm is pressed */}
      {localJson && (
        <div>
          <h3>Local JSON:</h3>
          <pre>{localJson}</pre>
        </div>
      )}
    </div>
  );
};
