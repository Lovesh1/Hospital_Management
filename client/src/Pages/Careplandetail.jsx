import { useState, useEffect, useMemo } from 'react';


export default function Careplandetail() {
  const data = useMemo(() => {
    const initialData = [
      { "name": "Care Plan 1", "text": "A book or other written or printed work, regarded in terms of its content rather than its physical form." },
      { "name": "Vitals 1", "text": "A book or other written or printed work, regarded in terms of its content rather than its physical form." },
      { "name": "Modifications 1", "text": "A book or other written or printed work, regarded in terms of its content rather than its physical form." },
      { "name": "Procedure 1", "text": "A book or other written or printed work, regarded in terms of its content rather than its physical form." },
      { "name": "Diet 1", "text": "A book or other written or printed work, regarded in terms of its content rather than its physical form." },
      { "name": "Therapy 1", "text": "A book or other written or printed work, regarded in terms of its content rather than its physical form." },
      { "name": "Other Test 1", "text": "A book or other written or printed work, regarded in terms of its content rather than its physical form." },
      { "name": "Action 1", "text": "A book or other written or printed work, regarded in terms of its content rather than its physical form." },
    ];
    return initialData;
  }, []); 

  const itemsPerPage = 3; 
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleData, setVisibleData] = useState([]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setVisibleData(data.slice(startIndex, endIndex));
  }, [currentPage, data]);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="careplan-container">
      <div className="table-container">
        <table className="careplan-table">
          <thead className='bg-blue-400 text-white'>
            <tr>
              <th>Care Plan</th>
              <th>Vitals To Test</th>
              <th>Modifications</th>
              <th>Procedure</th>
              <th>Diet</th>
              <th>Therapy</th>
              <th>Other Test</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {visibleData.map((item, index) => (
              <tr key={index} className='border-b-2 border-b-black'>
                <td>{item.name}</td>
                <td>{item.text}</td>
                <td>{item.text}</td>
                <td>{item.text}</td>
                <td>{item.text}</td>
                <td>{item.text}</td>
                <td>{item.text}</td>
                <td>{item.text}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination-container">
        <button className="pagination-button" onClick={handlePrevPage}>&lt;&lt;</button>
        <span className="pagination-current">{currentPage}</span>
        <button className="pagination-button" onClick={handleNextPage}>&gt;&gt;</button>
      </div>
    </div>
  );
}
