import { useContext } from "react";
import { DiaryContext } from "./DiaryContext";
import { Link } from 'react-router-dom';

function DiaryList() {
    const { diaries } = useContext(DiaryContext);

    const sorted = [...diaries].sort((a,b) => new Date(b.date) - new Date(a.date));

    return (
        <div style={{padding: '20px'}}>
            <h2>📚 내 일기 목록</h2>
            {sorted.length == 0 ? (
                <p>작성한 일기가 없습니다.</p>
            ) : (
                <ul style={{listStyle: 'none', padding: 0}}>
                    {sorted.map((diary) => (
                        <li key={diary.id} style={{marginBottom: '20px', border: '1px solid #ccc', padding: '10px'}}>
                            <h3>{diary.title}</h3>
                            <p><strong>날짜:</strong> {diary.date}</p>
                            <p><strong>감정:</strong> {diary.emotion}점</p>
                            <Link to={`/view/${diary.id}`}>🔍 자세히 보기</Link>
                            <Link to={`/edit/${diary.id}`}> ✏️ 수정</Link>
                        </li>
                    ))}

                </ul>
            )}

        </div>    
    ); 
}

export default DiaryList;