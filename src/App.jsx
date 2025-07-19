import { Routes, Route, Link } from 'react-router-dom';
import NewDiary from './pages/NewDiary';
import Home from './pages/Home';
import DiaryView from './pages/DiaryView';
import DiaryEdit from './pages/DiaryEdit';

function App() {
  return (
    <div style={{ padding: '40px 20px', minHeight: '100vh'}}>
      <h1 style={{ textAlign: 'center' }}>📘 일기장 앱</h1>
      <nav style={{ textAlign: 'center', marginBottom: '20px' }}>
        <Link to="/">📚 목록</Link> | 
        <Link to="/new">✏️ 새 일기</Link> | 
        <Link to="/edit/1">🛠️ 수정</Link> | 
        <Link to="/view/1">🔍 보기</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewDiary />} />
        <Route path="/edit/:id" element={<DiaryEdit />} />
        <Route path="/view/:id" element={<DiaryView />} />
      </Routes>
    </div>
  );
}

export default App;


