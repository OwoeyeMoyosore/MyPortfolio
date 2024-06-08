import {ReactComponent as Previous} from "../svg/previous.svg"
import {ReactComponent as Next} from "../svg/next.svg"

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handleClick = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      onPageChange(pageNumber);
    }
  };

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-end mt-8 gap-4">
      <button
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <Previous className={`${currentPage === 1 ? 'next':''}`}/>
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => handleClick(page)}
          className={page === currentPage ? 'bg-[#00D288] px-4 py-2 text-[#090909] rounded text-base' : 'text-[#00D288]'}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
       
      >
       <Next className={`${currentPage === totalPages ? 'next':''}`}/>
      </button>
    </div>
  );
};

export default Pagination;


