import React from "react";
import './CountryPage.sass'

const CountryPage = ({data}) => {

    return (
        <main>
            <div className={"countryPage"}>
                {data.map((row, index, arr) =>
                    index === 0
                        ?
                        <React.Fragment key={index}>
                            <div key={index} className={"desc"}>{row[0]}</div>
                            <img key={index + arr.length} className={"info flag"} src={row[1]} alt={"flag"}/>
                        </React.Fragment>
                        :
                        <React.Fragment key={index}>
                            <div key={index} className={"desc"}>{row[0]}</div>
                            <div key={index + arr.length} className={"info"}>{row[1]}</div>
                        </React.Fragment>
                )}
            </div>
        </main>
    )
}

export default CountryPage