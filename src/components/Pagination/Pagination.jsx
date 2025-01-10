import css from './Pagination.module.css'
import clsx from 'clsx';

const Pagination = ({ curPage, handleNextPage, handlePrevPage, ttlPages }) => {
    let isFirst = curPage === 1;
    let isLast = curPage === ttlPages; 
    
    return (
        <div className={css.pagWrap}>
            <button 
            className={clsx(css.btn, { [css.disabled]: isFirst })} 
            onClick={handlePrevPage} 
            disabled={isFirst}
            >
            Previous
            </button>
            <button
            className={clsx(css.btn, { [css.disabled]: isLast })} 
            onClick={handleNextPage} 
            disabled={isLast}>
                Next
            </button>
        </div>
    )
}


export default Pagination; 