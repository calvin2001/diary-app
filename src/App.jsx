import { Routes, Route, Link } from 'react-router-dom';
import NewDiary from './NewDiary';
import DiaryList from './DiaryList';
import DiaryView from './DiaryView';
import DiaryEdit from './DiaryEdit';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>📘 일기장 앱</h1>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/">📚 목록</Link> | 
        <Link to="/new">✏️ 새 일기</Link> | 
        <Link to="/edit/1">🛠️ 수정</Link> | 
        <Link to="/view/1">🔍 보기</Link>
      </nav>

      <Routes>
        <Route path="/" element={<DiaryList />} />
        <Route path="/new" element={<NewDiary />} />
        <Route path="/edit/:id" element={<DiaryEdit />} />
        <Route path="/view/:id" element={<DiaryView />} />
      </Routes>
    </div>
  );
}

export default App;


