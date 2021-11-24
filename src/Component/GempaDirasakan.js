import React, {useEffect, useState} from "react";
import GempaTable from "./GempaTable";
import Header from "./Header";

function GempaDirasakan(){

    const [dirasakan, setDirasakan] = useState([]);
    
    const getGempa = async () => {
        const urlDisarnkan = `https://data.bmkg.go.id/DataMKG/TEWS/gempadirasakan.json`
        const response = await fetch(urlDisarnkan);

        const responseDirasakan = await response.json();

        console.log(responseDirasakan);
        if(responseDirasakan.Infogempa.gempa){
            setDirasakan(responseDirasakan.Infogempa.gempa)
        }
    }

    useEffect(() => {     
        getGempa()
    }, [])


    const[order, setOrder] = useState("ASC")
    const sorting = (col)=>{
        if(order === "ASC"){
            const sorted = [...dirasakan].sort((a,b)=>
            a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            );
            setDirasakan(sorted);
            setOrder("DSC")
        }
        if(order === "DSC"){
            const sorted = [...dirasakan].sort((a,b)=>
            a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
            );
            setDirasakan(sorted);
            setOrder("ASC")
        }
    }

    return(
        <>
            <Header />
            <div className="col-12">
            <h5>Gempabumi Dirasakan</h5>
            <GempaTable dirasakan={dirasakan} sorting={sorting} /> 
            </div>
        </>
    )
}


export default GempaDirasakan;