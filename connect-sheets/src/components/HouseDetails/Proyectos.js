import React from 'react'

import './HouseDetails.css'
import ReactTooltip from 'react-tooltip';


function Proyectos({ props }) {

    const house = props;

    const ItemContent = (params) => {
        let row = params.row
        let firstColumn = params.firstColumn
        return (
            house[row][firstColumn] != 'X' &&
            <li>
                <img src={house[row][firstColumn + 3]} />
                <h3>{house[row][firstColumn]}</h3>
                <span>{((house[row][firstColumn + 1] + "").split("http").length > 1) ?
                    <a href={house[row][firstColumn + 1]} target={"_blank"} >{house[row][firstColumn + 2]}</a>
                    : house[row][firstColumn + 1]}
                </span>
            </li>
        )
    }

    return (
        (house.length > 0) ?
            <>
                <div className='col col-5'>
                    <ul className='list-content padding20'>
                        <ReactTooltip />
                        <ItemContent firstColumn={4} row={56} />
                        <ItemContent firstColumn={4} row={57} />
                        <ItemContent firstColumn={4} row={58} />
                    </ul>
                </div>
                <div className='col col-5'>
                    <ul className='list-content padding20'>
                        <ReactTooltip />
                        <ItemContent firstColumn={4} row={59} />
                        <ItemContent firstColumn={4} row={60} />
                        <ItemContent firstColumn={4} row={61} />
                    </ul>
                </div>
            </>
            : <>Loading</>
    )
}

export default Proyectos