import './Pagination.sass'

const Pagination = ({currentPage, firstPage, lastPage, changePage}) => {
    return (
        <nav>
            <div>
                <button className={"back"} disabled={currentPage === firstPage} onClick={() => changePage('back')}>
                    {'<<'}
                </button>
                <button className={"forward"} disabled={currentPage === lastPage} onClick={() => changePage('forward')}>
                    {'>>'}
                </button>
            </div>
        </nav>
    )
}

export default Pagination