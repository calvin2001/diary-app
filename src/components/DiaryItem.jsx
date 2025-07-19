import { Link } from 'react-router-dom';

function DiaryItem({ diary }) {

    const getEmotionStyle = (score) => {
        if (score <= 2) return { backgroundColor: '#ffe0e0' };
        if (score === 3) return { backgroundColor: '#fffbe0' };
        return { backgroundColor: '#e0ffe0' };
    }

    return (
        <li 
            key={diary.id} 
            style={{
                ...getEmotionStyle(diary.emotion),
                border: '1px solid #ccc',
                padding: '10px',
                marginBottom: '20px',
                borderRadius: '8px',
                color: 'black'
            }}
        >
            <h3>{diary.title}</h3>
            <p><strong>날짜:</strong> {diary.date}</p>
            <p><strong>감정:</strong> {diary.emotion}점</p>
            <Link to={`/view/${diary.id}`}>🔍 자세히 보기</Link>
            <Link to={`/edit/${diary.id}`}> ✏️ 수정</Link>
        </li>
    );
}

export default DiaryItem;







