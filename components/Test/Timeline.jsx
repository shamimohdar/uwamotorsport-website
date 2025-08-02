import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleDown, faCar, faGears, faCode } from '@fortawesome/free-solid-svg-icons'

import aImg from '../public/potential photos/2022-car.jpg'
import bImg from '../public/potential photos/2021-car.jpeg'

const Draggable = ({ innerRef, rootClass = "", children }) => {
    const ourRef = useRef(null);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const mouseCoords = useRef({
        startX: 0,
        startY: 0,
        scrollLeft: 0,
        scrollTop: 0
    });

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (isMouseDown && ourRef.current) {
                handleDrag(e);
            }
        };

        const handleMouseUp = () => {
            setIsMouseDown(false);
            document.body.style.cursor = "default";
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isMouseDown]);

    const handleDragStart = (e) => {
        if (!ourRef.current) return;
        const slider = ourRef.current.children[0];
        const startX = e.pageX - slider.offsetLeft;
        const startY = e.pageY - slider.offsetTop;
        const scrollLeft = slider.scrollLeft;
        const scrollTop = slider.scrollTop;
        mouseCoords.current = { startX, startY, scrollLeft, scrollTop };
        setIsMouseDown(true);
        document.body.style.cursor = "grabbing";
    };

    const handleDragEnd = () => {
        setIsMouseDown(false);
    };

    const handleDrag = (e) => {
        e.preventDefault();
        const slider = ourRef.current.children[0];
        const x = e.pageX - slider.offsetLeft;
        const y = e.pageY - slider.offsetTop;
        const walkX = (x - mouseCoords.current.startX) * 1.5;
        const walkY = (y - mouseCoords.current.startY) * 1.5;
        slider.scrollLeft = mouseCoords.current.scrollLeft - walkX;
        slider.scrollTop = mouseCoords.current.scrollTop - walkY;
    };

    return (
        <div
            ref={ourRef}
            onMouseDown={handleDragStart}
            onMouseUp={handleDragEnd}
            className={rootClass}
        >
            {children}
        </div>
    );
};



const Timeline = () => {

    const journalRef = useRef(null);

    return (
        <div className="lg:my-32">
            <Draggable innerRef={journalRef} rootClass={"drag"}>
            <div className="overflow-x-hidden no-scrollbar cursor-grab" id="team-scroll">
                <div className="flex w-fit min-w-full">
                    <div className="flex w-20 lg:w-64 mt-10">
                        <div style={{"webkitMaskImage":"linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0) 100%"}} className="bg-white h-2 w-full -translate-y-1/2"></div>
                    </div>
                    <div>
                        <div className="flex w-48 lg:w-64 mt-10">
                            <div className="bg-white h-2 w-full -translate-y-1/2"></div>
                            <a className="w-4 translate-x-1/2" href="/cars/2024">
                                <div className="h-5 w-5 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                                <div id="2024" className="whitespace-nowrap text-center w-fit -translate-x-1/2 opacity-50 hover:opacity-100">
                                    <h2 className="text-3xl text-primary italic font-helveticaNeue">Tom</h2>
                                    <p className="text-2xl font-bold text-primary">2024</p>
                                </div>
                            </a>
                            <div className="bg-white h-2 w-full -translate-y-1/2"></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex w-48 lg:w-64 mt-10">
                            <div className="bg-white h-2 w-full -translate-y-1/2"></div>
                            <a className="w-4 translate-x-1/2" href="/cars/2023">
                                <div className="h-5 w-5 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                                <div id="2024" className="whitespace-nowrap text-center w-fit -translate-x-1/2 opacity-50 hover:opacity-100">
                                    <h2 className="text-3xl text-primary italic font-helveticaNeue">Flo</h2>
                                    <p className="text-2xl font-bold text-primary">2023</p>
                                </div>
                            </a>
                            <div className="bg-white h-2 w-full -translate-y-1/2"></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex w-48 lg:w-64 mt-10">
                            <div className="bg-white h-2 w-full -translate-y-1/2"></div>
                            <a className="w-4 translate-x-1/2" href="/cars/2022">
                                <div className="h-5 w-5 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                                <div id="2023" className="whitespace-nowrap text-center w-fit -translate-x-1/2 opacity-50 hover:opacity-100">
                                    <h2 className="text-3xl text-primary italic font-helveticaNeue">Mark</h2>
                                    <p className="text-2xl font-bold text-primary">2022</p>
                                </div></a><div className="bg-white h-2 w-full -translate-y-1/2"></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex w-48 lg:w-64 mt-10">
                            <div className="bg-white h-2 w-full -translate-y-1/2"></div>
                            <a className="w-4 translate-x-1/2" href="/cars/2021">
                                <div className="h-5 w-5 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                                <div id="2024" className="whitespace-nowrap text-center w-fit -translate-x-1/2 opacity-50 hover:opacity-100">
                                    <h2 className="text-3xl text-primary italic font-helveticaNeue">Emma</h2>
                                    <p className="text-2xl font-bold text-primary">2021</p>
                                </div>
                            </a>
                            <div className="bg-white h-2 w-full -translate-y-1/2"></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex w-48 lg:w-64 mt-10">
                            <div className="bg-white h-2 w-full -translate-y-1/2"></div>
                            <a className="w-4 translate-x-1/2" href="/cars/2020">
                                <div className="h-5 w-5 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                                <div id="2024" className="whitespace-nowrap text-center w-fit -translate-x-1/2 opacity-50 hover:opacity-100">
                                    <h2 className="text-3xl text-primary italic font-helveticaNeue">Season</h2>
                                    <p className="text-2xl font-bold text-primary">2020</p>
                                </div>
                            </a>
                            <div className="bg-white h-2 w-full -translate-y-1/2"></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex w-48 lg:w-64 mt-10">
                            <div className="bg-white h-2 w-full -translate-y-1/2"></div>
                            <a className="w-4 translate-x-1/2" href="/cars/2019">
                                <div className="h-5 w-5 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                                <div id="2024" className="whitespace-nowrap text-center w-fit -translate-x-1/2 opacity-50 hover:opacity-100">
                                    <h2 className="text-3xl text-primary italic font-helveticaNeue">Season</h2>
                                    <p className="text-2xl font-bold text-primary">2019</p>
                                </div>
                            </a>
                            <div className="bg-white h-2 w-full -translate-y-1/2"></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex w-48 lg:w-64 mt-10">
                            <div className="bg-white h-2 w-full -translate-y-1/2"></div>
                            <a className="w-4 translate-x-1/2" href="/cars/2018">
                                <div className="h-5 w-5 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                                <div id="2024" className="whitespace-nowrap text-center w-fit -translate-x-1/2 opacity-50 hover:opacity-100">
                                    <h2 className="text-3xl text-primary italic font-helveticaNeue">Season</h2>
                                    <p className="text-2xl font-bold text-primary">2018</p>
                                </div>
                            </a>
                            <div className="bg-white h-2 w-full -translate-y-1/2"></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex w-48 lg:w-64 mt-10">
                            <div className="bg-white h-2 w-full -translate-y-1/2"></div>
                            <a className="w-4 translate-x-1/2" href="/cars/2017">
                                <div className="h-5 w-5 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                                <div id="2024" className="whitespace-nowrap text-center w-fit -translate-x-1/2 opacity-50 hover:opacity-100">
                                    <h2 className="text-3xl text-primary italic font-helveticaNeue">Season</h2>
                                    <p className="text-2xl font-bold text-primary">2017</p>
                                </div>
                            </a>
                            <div className="bg-white h-2 w-full -translate-y-1/2"></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex w-48 lg:w-64 mt-10">
                            <div className="bg-white h-2 w-full -translate-y-1/2"></div>
                            <a className="w-4 translate-x-1/2" href="/cars/2016">
                                <div className="h-5 w-5 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                                <div id="2024" className="whitespace-nowrap text-center w-fit -translate-x-1/2 opacity-50 hover:opacity-100">
                                    <h2 className="text-3xl text-primary italic font-helveticaNeue">Season</h2>
                                    <p className="text-2xl font-bold text-primary">2016</p>
                                </div>
                            </a>
                            <div className="bg-white h-2 w-full -translate-y-1/2"></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex w-48 lg:w-64 mt-10">
                            <div className="bg-white h-2 w-full -translate-y-1/2"></div>
                            <a className="w-4 translate-x-1/2" href="/cars/2015">
                                <div className="h-5 w-5 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                                <div id="2024" className="whitespace-nowrap text-center w-fit -translate-x-1/2 opacity-50 hover:opacity-100">
                                    <h2 className="text-3xl text-primary italic font-helveticaNeue">Season</h2>
                                    <p className="text-2xl font-bold text-primary">2015</p>
                                </div>
                            </a>
                            <div className="bg-white h-2 w-full -translate-y-1/2"></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex w-48 lg:w-64 mt-10">
                            <div className="bg-white h-2 w-full -translate-y-1/2"></div>
                            <a className="w-4 translate-x-1/2" href="/cars/2014">
                                <div className="h-5 w-5 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                                <div id="2024" className="whitespace-nowrap text-center w-fit -translate-x-1/2 opacity-50 hover:opacity-100">
                                    <h2 className="text-3xl text-primary italic font-helveticaNeue">Season</h2>
                                    <p className="text-2xl font-bold text-primary">2014</p>
                                </div>
                            </a>
                            <div className="bg-white h-2 w-full -translate-y-1/2"></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex w-48 lg:w-64 mt-10">
                            <div className="bg-white h-2 w-full -translate-y-1/2"></div>
                            <a className="w-4 translate-x-1/2" href="/cars/2013">
                                <div className="h-5 w-5 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                                <div id="2024" className="whitespace-nowrap text-center w-fit -translate-x-1/2 opacity-50 hover:opacity-100">
                                    <h2 className="text-3xl text-primary italic font-helveticaNeue">Season</h2>
                                    <p className="text-2xl font-bold text-primary">2013</p>
                                </div>
                            </a>
                            <div className="bg-white h-2 w-full -translate-y-1/2"></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex w-48 lg:w-64 mt-10">
                            <div className="bg-white h-2 w-full -translate-y-1/2"></div>
                            <a className="w-4 translate-x-1/2" href="/cars/2012">
                                <div className="h-5 w-5 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                                <div id="2024" className="whitespace-nowrap text-center w-fit -translate-x-1/2 opacity-50 hover:opacity-100">
                                    <h2 className="text-3xl text-primary italic font-helveticaNeue">Season</h2>
                                    <p className="text-2xl font-bold text-primary">2012</p>
                                </div>
                            </a>
                            <div className="bg-white h-2 w-full -translate-y-1/2"></div>
                        </div>
                    </div>
                    <div className="flex w-20 lg:w-64 mt-10">
                        <div style={{"webkitMaskImage":"linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0) 100%"}} className="bg-white h-2 w-full -translate-y-1/2"></div>
                    </div>
                </div>
            </div>
            </Draggable>
        </div>
    )
}

export default Timeline