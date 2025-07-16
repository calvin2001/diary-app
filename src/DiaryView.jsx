import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DiaryContext } from "./DiaryContext";
import { Link } from "react-router-dom";

function DiaryView() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { diaries, deleteDiary } = useContext(DiaryContext);

    const diary = diaries.find((d) => d.id === Number(id));

    if (!diary) {
        return (
            <div style={{padding: '20px'}}>
                <h2>❌ 존재하지 않는 일기</h2>
                <button onClick={() => navigate('/')}>🏠 홈으로</button>
            </div>
        );
    }

    const handleDelete = () => {
        if (window.confirm('정말 삭제할까요?')) {
            deleteDiary(diary.id);
            navigate('/');
        }
    };

    return (
        <div style={{padding: '20px'}}>
            <h2>🔍 일기 상세</h2>
            <h3>{diary.title}</h3>
            <p><strong>날짜:</strong> {diary.date}</p>
            <p><strong>감정 점수:</strong> {diary.emotion}</p>
            <p>{diary.content}</p>
            <Link to={`/edit/${diary.id}`}>✏️ 수정하기</Link><br /><br />
            <button onClick={handleDelete}>🗑️ 삭제하기</button><br /><br />
            <button onClick={() => navigate('/')}>🏠 홈으로</button>
        </div>
    );
}

export default DiaryView;