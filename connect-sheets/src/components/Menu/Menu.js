import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../../assets/images/navbar_logo.png';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { setDataWebpage } from '../../store/data/dataSlice';
import { API_KEY } from '../../constants';

export function Menu({ props }) {
    const dispatch = useDispatch();
    const [data,setData] = React.useState()
    React.useEffect(()=> {
        let sheet2 = "WEBPAGE"
        axios.get(`https://sheets.googleapis.com/v4/spreadsheets/1FyBkFmdLO8BeNdmDohYRvAh_nJP1jsdsEZ_rPYm8m1s/values/${sheet2}?key=${API_KEY}`)
        .then(res => {
            const data = res.data.values;
            setData(data)
            dispatch(setDataWebpage(data));
        });
    },[])
    return (
        <Navbar bg="dark">
            <Navbar.Brand href="https://yodesarrollo.mx">
                <img
                    src={data? `https://drive.google.com/uc?id=${data[2][1].split('/')[5]}` : logo}
                    className="d-inline-block align-top"
                    alt="Yo desarrollo"
                    style={{ maxHeight: 40 }}
                />
            </Navbar.Brand>
        </Navbar>
    )
}