import React from 'react'

import './HouseDetails.css'

function Terreno({ props }) {

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
                        <ItemContent firstColumn={4} row={42} />
                        <ItemContent firstColumn={4} row={43} />
                        <ItemContent firstColumn={4} row={44} />
                    </ul>
                </div>
                <div className='col col-5'>
                    <ul className='list-content padding20'>
                        <ItemContent firstColumn={4} row={45} />
                        <ItemContent firstColumn={4} row={46} />
                        <ItemContent firstColumn={4} row={47} />
                    </ul>
                </div>
            </>
            : <>Loading</>
    )
}

export default Terreno