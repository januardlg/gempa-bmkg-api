import React, { useState } from "react";

const GempaTerkini = (props) => {


    if(props.terkinis.length == 0){
        return(
            <div className="kosong">Tidak ada data untuk ditampilkan</div>
        )
    }
    else {
        return(
            <>  
                <table>
                    <thead>
                        {/* <tr>{props.terkinis[0] && columns.map((heading) => <th>{heading}</th>)}</tr> */}
                        <tr>
                            <th>Tanggal</th>
                            <th>Jam</th>
                            <th>DateTime <span onClick={() => props.sorting("DateTime")}><img className="icon" src="https://img.icons8.com/ios-glyphs/30/000000/sort.png"/></span> </th>
                            <th>Coordinates</th>
                            <th>Lintang</th>
                            <th>Bujur</th>
                            <th>Magnitude</th>
                            <th>Kedalaman</th>
                            <th>Wilayah</th>
                            <th>Potensi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.terkinis.map((terkini) => (
                            <tr>
                               <td>{terkini.Tanggal}</td>
                               <td>{terkini.Jam}</td>
                               {/* <td>{terkini.DateTime}</td> */}
                               <td>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(terkini.DateTime))) }</td>
                               <td>{terkini.Coordinates}</td>
                               <td>{terkini.Lintang}</td>
                               <td>{terkini.Bujur}</td>
                               <td className="tengah">{terkini.Magnitude}</td>
                               <td className="tengah">{terkini.Kedalaman}</td>
                               <td>{terkini.Wilayah}</td>
                               <td>{terkini.Potensi}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </>
        )
    }
}

export default GempaTerkini;