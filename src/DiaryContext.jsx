import { createContext, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const DiaryContext = createContext();

export function DiaryProvider({ children }) {
  const [diaries, setDiaries] = useState([]);

  const createDiary = (diary) => {
    setDiaries((prev) => [...prev, { ...diary, id: Date.now() }]);
  };

  const updateDiary = (id, updatedDiary) => {
    setDiaries((prev) => 
      prev.map((diary) => (diary.id === id ? {...diary, ...updatedDiary} : diary))
    );
  };

  const deleteDiary = (id) => {
    setDiaries((prev) => prev.filter((diary) => diary.id !== id));
  };

  return (
    <DiaryContext.Provider value={{ diaries, createDiary, updateDiary, deleteDiary }}>
      {children}
    </DiaryContext.Provider>
  );
}
