import { Routes, Route, Link } from 'react-router-dom';
import NewDiary from './NewDiary';

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
        <Route path="/" element={<div>📚 일기 목록 페이지</div>} />
        <Route path="/new" element={<NewDiary />} />
        <Route path="/edit/:id" element={<div>🛠️ 일기 수정</div>} />
        <Route path="/view/:id" element={<div>🔍 일기 상세</div>} />
      </Routes>
    </div>
  );
}

export default App;


