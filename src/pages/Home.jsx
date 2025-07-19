import { useContext, useState } from "react";
import { DiaryContext } from "../context/DiaryContext";
import { Link } from 'react-router-dom';
import DiaryItem from '../components/DiaryItem';

function Home() {
    const { diaries } = useContext(DiaryContext);
    const [filterEmotion, setFilterEmotion] = useState(0);
    const [sortType, setSortType] = useState('latest');
    const [searchKeyword, setSearchKeyword] = useState('');

    const getProcessedDiaries = () => {
        let result = [...diaries];
        
        if (sortType === 'latest') {
            result.sort((a, b) => new Date(b.date) - new Date(a.date));
        } else if (sortType === 'emotionDesc') {
            result.sort((a, b) => b.emotion - a.emotion);
        } else if (sortType === 'emotionAsc') {
            result.sort((a, b) => a.emotion - b.emotion);
        }

        if (filterEmotion > 0) {
            result = result.filter((d) => d.emotion === filterEmotion)
        }

        if (searchKeyword.trim() !== '') {
            result = result.filter(
                (d) =>
                    d.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
                    d.content.toLowerCase().includes(searchKeyword.toLowerCase())
            );
        }

        return result;
    }

    const processedDiaries = getProcessedDiaries();

    return (
        <>
            <div style={{ display: "flex", gap: "20px", margin: "0 0 20px 20px" }}>
                <div>
                <label>감정 필터: </label>
                <select
                    value={filterEmotion}
                    onChange={(e) => setFilterEmotion(Number(e.target.value))}
                >
                    <option value={0}>전체</option>
                    {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>
                        감정 {n}
                    </option>
                    ))}
                </select>
                </div>
                <div>
                <label>정렬 기준: </label>
                <select
                    value={sortType}
                    onChange={(e) => setSortType(e.target.value)}
                >
                    <option value="latest">최신 순</option>
                    <option value="emotionDesc">감정 높은 순</option>
                    <option value="emotionAsc">감정 낮은 순</option>
                </select>
                </div>
                <div>
                    <label>검색: </label>
                    <input 
                        type="text"
                        value={searchKeyword}
                        onChange={(e) => setSearchKeyword(e.target.value)}
                        placeholder="제목 또는 내용 검색"
                    />
                </div>
            </div>
                   
            <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
                <h2>📚 내 일기 목록</h2>
                {processedDiaries.length === 0 ? (
                    <p>조건에 맞는 일기가 없습니다.</p>
                ) : (
                    <ul style={{listStyle: 'none', padding: 0}}>
                        {processedDiaries.map((diary) => (
                            <DiaryItem key={diary.id} diary={diary} />
                        ))}
                    </ul>
                )}
            </div>
        </>
    ); 
}

export default Home;