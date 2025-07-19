import { useState, useContext } from 'react';
import { DiaryContext } from '../context/DiaryContext';
import { useNavigate } from 'react-router-dom';

function NewDiary() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  const [emotion, setEmotion] = useState(3);
  const { createDiary } = useContext(DiaryContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    createDiary({ title, content, date, emotion});
    navigate('/');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>✏️ 새 일기 작성</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        /><br />
        <input
          type='text'
          placeholder='제목'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        /><br />
        <textarea
          placeholder='내용'
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        /><br />
        <label>감정 (1~5): </label>
        <input
          type='number'
          min='1'
          max='5'
          value={emotion}
          onChange={(e) => setEmotion(Number(e.target.value))}
        /><br />
        <button type='submit'>저장</button>
      </form>
    </div>
  );
}

export default NewDiary;