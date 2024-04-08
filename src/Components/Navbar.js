import React, { useState } from 'react'
import { Navbar } from 'react-bootstrap'

function NavBar() {

    const [name,setfix]=useState(false);
    window.addEventListener('scroll',function(){
        if (this.window.scrollY>30){
            setfix(true);
        }else{
            setfix(false);
        }
    })
    return (
        <section>
            <div className='upperNav'>
                <img src="https://www.sony.com/en/template/2023/img/logo.svg" alt="Sony" />
            </div>
            <Navbar className={name?"navS":"navbar"}>
                <div className='navLeft'>
                    <a href='http://www.playtion.com'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="50"
                            height="50"
                            aria-hidden="true"
                            className="shared-nav-ps-logo"
                            viewBox="0 0 50 50"
                        >
                            <path
                                fill="#0070d1"
                                d="M5.8 32.1c-1.5 1-1 2.9 2.2 3.8 3.3 1.1 6.9 1.4 10.4.8.2 0 .4-.1.5-.1v-3.4l-3.4 1.1c-1.3.4-2.6.5-3.9.2-1-.3-.8-.9.4-1.4l6.9-2.4V27l-9.6 3.3c-1.2.4-2.4 1-3.5 1.8zm23.2-15v9.7c4.1 2 7.3 0 7.3-5.2 0-5.3-1.9-7.7-7.4-9.6C26 11 23 10.1 20 9.5v28.9l7 2.1V16.2c0-1.1 0-1.9.8-1.6 1.1.3 1.2 1.4 1.2 2.5zm13 12.7c-2.9-1-6-1.4-9-1.1-1.6.1-3.1.5-4.5 1l-.3.1v3.9l6.5-2.4c1.3-.4 2.6-.5 3.9-.2 1 .3.8.9-.4 1.4l-10 3.7V40L42 34.9c1-.4 1.9-.9 2.7-1.7.7-1 .4-2.4-2.7-3.4z"
                            ></path>
                        </svg>
                    </a>

                    <div className='icon'>
                        <p>Game</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            className="icon_svg"
                            viewBox="0 0 448 512"
                        >
                            <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
                        </svg>
                    </div>
                    <div className='icon'>
                        <p>PS5</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            className="icon_svg"
                            viewBox="0 0 448 512"
                        >
                            <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
                        </svg>
                    </div>
                    <div className='icon'>
                        <p>PS4</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            className="icon_svg"
                            viewBox="0 0 448 512"
                        >
                            <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
                        </svg>
                    </div>
                    <div className='icon'>
                        <p>Services</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            className="icon_svg"
                            viewBox="0 0 448 512"
                        >
                            <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
                        </svg>
                    </div>
                    <div className='icon'>
                        <p>Accessories</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            className="icon_svg"
                            viewBox="0 0 448 512"
                        >
                            <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
                        </svg>
                    </div>
                    <div className='icon'>
                        <p>Store</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            className="icon_svg"
                            viewBox="0 0 448 512"
                        >
                            <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
                        </svg>
                    </div>
                    <div className='icon'>
                        <p>Support</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            className="icon_svg"
                            viewBox="0 0 448 512"
                        >
                            <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
                        </svg>
                    </div>
                    </div>
                    <div className='navRight'>
                        <button type="button" className='btn btn-primary'>Sign In</button>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="currentColor"
                                fillRule="evenodd"
                                d="M18.319 14.433A8.001 8.001 0 006.343 3.868a8 8 0 0010.564 11.976l.043.045 4.242 4.243a1 1 0 101.415-1.415l-4.243-4.242a1.116 1.116 0 00-.045-.042zm-2.076-9.15a6 6 0 11-8.485 8.485 6 6 0 018.485-8.485z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </div>
            </Navbar>
        </section>
    )
}

export default NavBar