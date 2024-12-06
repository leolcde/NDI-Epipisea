'use client';
import React, { useState } from "react";
// import { useState } from "react";

interface trash {
    color: string
    width: number
    height: number
    start: number
}

function CreateTrash(width: number, height:number, color: string, start: number) {
    return <div
        style={{
            position: 'absolute',
            width: width.toString() + 'vh',
            height: height.toString() + 'vh',
            backgroundColor: color,
            borderRadius: '50%',
            left: start,
            top: '5vh'
        }}
    ></div>
}

export default function Home() {
    const MoveTrash = CreateTrash(10, 10, 'blue', 0)
    const [start, setStart] = useState(0)

    const moveTrash = () => {
        setStart((prevStart) => prevStart + 3);
    };

    React.useEffect(() => {
        const interval = setInterval(() => {
            moveTrash();
        }, 20);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
        <div
            style={{
                backgroundColor:'white',
                minHeight:'30vh',
                display:'flex',
                justifyContent:'center',
                alignItems:'flex-end',
                paddingLeft:'10vh'
            }}
        >
            <div
                style={{
                    borderRadius:'50%',
                    backgroundColor:'green',
                    width:'5vh',
                    height:'5vh'
                }}
            ></div>
        </div>
        <div
            style={{
                backgroundColor:'#3987c9',
                minHeight:'70vh',
                position: 'relative'
            }}
            >
            {CreateTrash(10, 10, 'yellow', start)}
        </div>
        </>
    );
  }

