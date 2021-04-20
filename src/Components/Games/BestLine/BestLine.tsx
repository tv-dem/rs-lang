import React, { useEffect, useState } from "react";


const BestLine:React.FC = ({currentLine, bestLine, 
    setBestLine}:any) => {

    const [arrCurrentLine, setArrCurrentLine] = useState([0]);

    useEffect(() => {
        if (currentLine > bestLine) {
          setBestLine(currentLine);
        }
        let arr = new Array(currentLine);
        arr.fill("");
        setArrCurrentLine(arr);
      }, [currentLine]);

    return (
        <>
          <div className="boxLine">
                {arrCurrentLine.map((e: number, i: number) =>
                  <div className="line" key={i}>{e}</div>
                )
                }
              </div>
        </>
    )
}

export default BestLine;