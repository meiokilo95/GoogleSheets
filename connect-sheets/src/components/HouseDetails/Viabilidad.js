import React from 'react'

import './HouseDetails.css'

function Viabilidad({ props }) {

    const house = props;

    // let i = 35;
    // while (i < 41) {
    //     if (house[i][7])
    //         house[i][7] = `https://drive.google.com/uc?id=${house[i][7].split('/')[5]}`
    //     else
    //         house[i][7] = `https://drive.google.com/uc?id=1-4FSCJ7zFBBSevoybODgpLtDOpmDcBaw`
    //     i++;
    // }

    const ItemContent = (params) => {
        let row = params.row
        let firstColumn = params.firstColumn
        return (
            house[row][firstColumn] != 'X' && <li><img src={house[row][firstColumn + 3]} /><h3>{house[row][firstColumn]}</h3><span>{(house[row][firstColumn + 1].split("http").length > 1) ? <a href={house[row][firstColumn + 1]} target={"_blank"} >{house[row][firstColumn + 2]}</a> : house[row][firstColumn + 1]}</span></li>
        )
    }

    return (
        (house.length > 0) ?
            <>
                <div className='col col-5'>
                    <ul className='list-content padding20'>
                        <ItemContent firstColumn={4} row={35} />
                        <ItemContent firstColumn={4} row={36} />
                        <ItemContent firstColumn={4} row={37} />
                    </ul>
                </div>
                <div className='col col-5'>
                    <ul className='list-content padding20'>
                        <ItemContent firstColumn={4} row={38} />
                        <ItemContent firstColumn={4} row={39} />
                        <ItemContent firstColumn={4} row={40} />
                    </ul>
                </div>
            </>
            : <>Loading</>
    )
}

export default Viabilidad