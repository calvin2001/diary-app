import { createContext, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const DiaryContext = createContext();

export function DiaryProvider({ children }) {
  const [diaries, setDiaries] = useState([]);

  const createDiary = (diary) => {
    setDiaries((prev) => [...prev, { ...diary, id: Date.now() }]);
  };

  return (
    <DiaryContext.Provider value={{ diaries, createDiary }}>
      {children}
    </DiaryContext.Provider>
  );
}
