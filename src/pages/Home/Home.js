import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


export class Home extends Component {
    render() {
        return (
            <div>


                <section className="py-6  ">
                    <div className="grid items-center max-w-8xl grid-cols-1 px-2 mx-auto lg:px-8 md:grid-cols-2 md:divide-x ">
                        <div className="py-6 md:py-0 md:px-6 ">
                            <h1
                                className='text-5xl text-center uppercase font-semibold mt-10'>
                                welcome to Prognosis</h1>
                            <div className='pl-[300px] text-center mt-10'>

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-48 h-48 p-2 dark:text-yellow-400 fill-current">
                                    <path d="M256,104c-83.813,0-152,68.187-152,152s68.187,152,152,152,152-68.187,152-152S339.813,104,256,104Zm0,272A120,120,0,1,1,376,256,120.136,120.136,0,0,1,256,376Z"></path>
                                    <rect width="32" height="48" x="240" y="16"></rect>
                                    <rect width="32" height="48" x="240" y="448"></rect>
                                    <rect width="48" height="32" x="448" y="240"></rect>
                                    <rect width="48" height="32" x="16" y="240"></rect>
                                    <rect width="32" height="45.255" x="400" y="393.373" transform="rotate(-45 416 416)"></rect>
                                    <rect width="32.001" height="45.255" x="80" y="73.373" transform="rotate(-45 96 96)"></rect>
                                    <rect width="45.255" height="32" x="73.373" y="400" transform="rotate(-45.001 96.002 416.003)"></rect>
                                    <rect width="45.255" height="32.001" x="393.373" y="80" transform="rotate(-45 416 96)"></rect>
                                </svg>
                            </div>

                        </div>
                        {/* description part */}
                        <div className="flex flex-col  py-6 space-y-6 md:py-[200px] md:px-6 ">
                            <p className='text-2xl'>Bet smarter with our cutting-edge betting layer. Experience the world's greatest utility platform with effortless data collection and no liquidification worries. Join the thrill now!"</p>
                        </div>
                    </div>
                </section>


                <div className='text-center mt-10'>
                    <NavLink
                        to="/login"
                        className="mt-5  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        login
                    </NavLink>
                </div>
            </div>
        )
    }
}

export default Home