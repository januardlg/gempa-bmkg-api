import React from "react";

const GempaTable = (props) => {
    if(props.dirasakan.length == 0){
        return(
            <div className="kosong">Tidak ada data untuk ditampilkan</div>
        )
    }
    else {
        return(
            <>  
                <table>
                    <thead>
                        {/* <tr>{props.dirasakan[0] && columns.map((heading) => <th>{heading}</th>)}</tr> */}
                        <tr>
                            <th>Tanggal</th>
                            <th>Jam</th>
                            <th>DateTime <span onClick={() => props.sorting("DateTime")}><img className="iconSort" src="https://img.icons8.com/ios-glyphs/30/000000/sort.png"/></span> </th>
                            <th>Coordinates</th>
                            <th>Lintang</th>
                            <th>Bujur</th>
                            <th>Magnitude</th>
                            <th>Kedalaman</th>
                            <th>Wilayah</th>
                            <th>Dirasakan</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.dirasakan.map((gempa) => (
                            <tr>
                               <td>{gempa.Tanggal}</td>
                               <td>{gempa.Jam}</td>
                               {/* <td>{gempa.DateTime}</td> */}
                               <td>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(gempa.DateTime))) }</td>
                               <td>{gempa.Coordinates}</td>
                               <td>{gempa.Lintang}</td>
                               <td>{gempa.Bujur}</td>
                               <td className="tengah">{gempa.Magnitude}</td>
                               <td className="tengah">{gempa.Kedalaman}</td>
                               <td>{gempa.Wilayah}</td>
                               <td>{gempa.Dirasakan}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>


                {/* {props.terkinis.map((terkini) => (
                    <p>{terkini.Tanggal}</p>
                ))} */}
            </>
        )
    }
}

export default GempaTable;