import './CountryPage.sass'

const CountryPage = ({desc, info}) => {

    return (
        <main>
            <div className={"countryPage"}>
                {genTable(desc, info)}
            </div>
        </main>
    )
}

const genTable = (desc, info) => { //return an array, like [<desc/> <info/> <desc/> <info/> ...]
    let table = []
    for (let i = 0; i < desc.length; i++) {
        if (i === 0) {
            table.push(
                <>
                    <div key={i} className={"desc"}>{desc[i]}</div>
                    <img key={i+desc.length} src={info[i]} className={"info flag"} alt={'flag'}/>
                </>
            )
        } else {
            table.push(
                <>
                    <div key={i} className={"desc"}>{desc[i]}</div>
                    <div key={i+desc.length} className={"info"}>{info[i]}</div>
                </>
            )
        }
    }

    return table
}

export default CountryPage