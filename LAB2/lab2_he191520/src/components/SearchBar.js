import { useEffect, useRef } from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const inputRef = useRef(null);

  // Yêu cầu: Tự động focus vào ô tìm kiếm khi tải trang
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Tìm tên phim................"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="search-bar"
    />
  );
};

export default SearchBar;