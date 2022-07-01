import CountriesPage from "./CountriesPage";
import {useEffect, useState} from "react";

const PaginatedCountriesPage = ({data, itemsPerPage}) => {

    const [currentData, setCurrentData] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [dataOffset, setDataOffset] = useState(0)
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
    }, [dataOffset])

    return <CountriesPage
        data={currentData}
        changePage={changePage}
        currentPage={currentPage}
        firstPage={0}
        lastPage={totalPageCount - 1}/>
}

export default PaginatedCountriesPage