import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { DiaryContext } from "../context/DiaryContext";

function DiaryEdit() {
    const { id } = useParams();
    const { diaries, updateDiary } = useContext(DiaryContext);
    const navigate = useNavigate();

    const diary = diaries.find((d) => d.id === Number(id));
    const [title, setTitle] = useState(diary?.title || '');
    const [content, setContent] = useState(diary?.content || '');
    const [emotion, setEmotion] = useState(diary?.emotion || 3);
    const [date, setDate] = useState(diary?.date || '');

    if (!diary) {
        return (
            <div style={{padding: '20px'}}>
                <h2>❌ 일기를 찾을 수 없습니다</h2>
            </div>
        );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateDiary(diary.id, { title, content, emotion, date });
        navigate(`/view/${diary.id}`);
    };

    return (
        <div style={{padding: '20px'}}>
            <h2>🛠️ 일기 수정</h2>  
            <form onSubmit={handleSubmit}>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required/><br />
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required/><br />
                <textarea value={content} onChange={(e) => setContent(e.target.value)} required/><br />
                <label>감정 (1~5): </label>
                <input type="number" min="1" max="5" value={emotion} onChange={(e) => setEmotion(Number(e.target.value))} /><br />
                <button type="submit">저장</button>
            </form>
        </div>
    );
}

export default DiaryEdit;
