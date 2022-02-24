import React, {useEffect, useState} from "react";
import GempaTerikiniTable from "./GempaTerikiniTable";
import Header from "./Header";

function GempaTerikiniDataAPI(){

    const [terkini, setTerkini] = useState([]);
    const [q, setQ] = useState("");

    
    const getGempaTerkini = async () => {
        const urlTerkini = `https://data.bmkg.go.id/DataMKG/TEWS/gempaterkini.json`
        const response = await fetch(urlTerkini);

        const responseTerkini = await response.json();

        console.log(responseTerkini);
        if(responseTerkini.Infogempa.gempa){
            setTerkini(responseTerkini.Infogempa.gempa)
        }
    }


    useEffect(() => {     
        getGempaTerkini()
    }, [])

    function searchTerkini(rows){
        return rows.filter(row => row.Potensi.toLowerCase().indexOf(q)> -1)
    }

    const[order, setOrder] = useState("ASC")
    const sorting = (col)=>{
        if(order === "ASC"){
            const sorted = [...terkini].sort((a,b)=>
            a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            );
            setTerkini(sorted);
            setOrder("DSC")
        }
        if(order === "DSC"){
            const sorted = [...terkini].sort((a,b)=>
            a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
            );
            setTerkini(sorted);
            setOrder("ASC")
        }
    }

    return(
        <>
            <Header />
            <div className="col-12">
                <h5>Gempabumi Terkini - Heading -New</h5>
                <div className="filter">
                    <select onChange={(e) => setQ(e.target.value)} >
                    <option value={""}> Filter Sesuai potensi </option>
                    <option value={"berpotensi tsunami"}> Tidak Berpotensi tsunami</option>
                    <option value={"Tidak berpotensi tsunami"}>Berpotensi tsunami</option>
                </select>
                </div>
                <div>
                    <GempaTerikiniTable terkinis={searchTerkini(terkini)} sorting={sorting} />
                </div>
            </div>
        </>
    )
}


export default GempaTerikiniDataAPI;