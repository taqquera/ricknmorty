import React from "react";
import s from "./Pagination.module.css";
import ReactPaginate from "react-paginate";

const Pagination = ({ info, pageNumber, setPageNumber }) => {

    return (
        <div className={s.container}>
            <ReactPaginate className={s.pagination} 
            forcePage={pageNumber === 1? 0 : pageNumber - 1}
            previousLabel="Prev" 
            previousClassName={s.btn}
            nextLabel="Next"
            nextClassName={s.btn}
            pageClassName={s.pageItem}
            pageLinkClassName={s.pageLink}
            onPageChange={(data) => {
                setPageNumber(data.selected + 1)
            }}
            pageCount={info?.pages} />
        </div>
    )

}

export default Pagination