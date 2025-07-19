import { createContext, useState, useEffect } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const DiaryContext = createContext();

export function DiaryProvider({ children }) {
  
  const [diaries, setDiaries] = useState(() => {
    const saved = localStorage.getItem('diaries');
    if(saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('❗ 저장된 데이터를 파싱할 수 없습니다:', e);
      }
    }
    return [];
  });

  useEffect(() => {
    const saved = localStorage.getItem('diaries');
    if(saved !== null) {
      try {
        setDiaries(JSON.parse(saved));
      } catch (error) {
        console.log('❗ JSON 파싱 오류:', error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('diaries', JSON.stringify(diaries));
  }, [diaries]);

  const createDiary = (diary) => {
    const NewDiary = { ...diary, id: Date.now() };
    setDiaries((prev) => {
      const updated = [...prev, NewDiary];
      console.log('📝 새 일기 추가됨:', updated);
      return updated;
    });
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
