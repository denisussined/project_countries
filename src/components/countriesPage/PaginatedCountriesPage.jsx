import CountriesPage from "./CountriesPage";
import {useEffect, useState} from "react";

const PaginatedCountriesPage = ({data, itemsPerPage, previousPage, setPreviousPage, previousOffset}) => {

    const [currentData, setCurrentData] = useState([])
    const [currentPage, setCurrentPage] = useState(previousPage ? previousPage : 0)
    const [dataOffset, setDataOffset] = useState(previousOffset ? previousOffset : 0)
    const totalPageCount = Math.ceil(data.length / itemsPerPage)

    const changePage = (direction) => {
        if (direction === 'forward') {
            setDataOffset(prevState => prevState + itemsPerPage)
            setCurrentPage(prevState => prevState + 1)
        } else if (direction === 'back') {
            setDataOffset(prevState => prevState - itemsPerPage)
            setCurrentPage(prevState => prevState - 1)
        }
    }

    useEffect(() => {
        setCurrentData(data.slice(dataOffset, dataOffset + itemsPerPage))
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })

        return () => setPreviousPage(currentPage, dataOffset)
    }, [dataOffset])

    return <CountriesPage
        data={currentData}
        changePage={changePage}
        currentPage={currentPage}
        firstPage={0}
        lastPage={totalPageCount - 1}/>
}

export default PaginatedCountriesPage