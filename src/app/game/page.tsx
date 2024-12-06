'use client';
import React, { useState } from "react";
import { useCallback } from "react";

function CreateTrash(
    width: number,
    height:number,
    color: string,
    start: number,
    top: number,
    handleMouseEnter: () => void,
    handleMouseLeave: () => void
) {
    return <div
        style={{
            position: 'absolute',
            width: width.toString() + 'vh',
            height: height.toString() + 'vh',
            backgroundColor: color,
            borderRadius: '50%',
            left: start,
            top: top
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
    ></div>
}

export default function Home() {
    const [start, setStart] = useState(0)
    const [top, setTop] = useState(300);
    const [isGrabed, setIsGrabed] = useState(false)
    const [score, setScore] = useState(0)
    const moveTrash = useCallback(() => {
        setStart((prevStart) => {
            if (prevStart > window.innerWidth) {
                return 0;
            }
            return prevStart + 5;
        });

        if (isGrabed) {
            setTop((prevTop) => prevTop - 5);
        }
        if (top <= 0) {
            setTop(300);
            setStart(0);
            setScore((score) => score + 1)
        }
    }, [isGrabed, top, start, score]);
    const handleMouseLeave = () => {
        setIsGrabed(false)
    }
    const handleMouseEnter = () => {
        setIsGrabed(true)
    };

    React.useEffect(() => {
        const interval = setInterval(() => {
            moveTrash();
        }, 20);
        return () => clearInterval(interval);
    }, [moveTrash]);

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
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    padding: '10px',
                    borderRadius: '5px',
                    fontSize: '18px'
                }}
            >
                Score: {score}
            </div>
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
            {CreateTrash(10, 10, 'yellow', start, top, handleMouseEnter, handleMouseLeave)}
        </div>
        </>
    );
  }

