import React from 'react'

function Footer(props) {
    return (
        <div className={props.theme}>
            <footer className="text-black dark:text-gray-400 bg-light-100 dark:bg-deep-900 body-font mt-auto">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <a className="flex title-font font-medium items-center dark:text-white text-black mb-4 md:mb-0">

                        <img src={logo} className='h-8 w-110 rounded-xl' alt="" />

                        <span className="ml-3 text-xl">DreamlyMusic</span>
                    </a>
                    <p className="text-sm text-black dark:text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-0">
                        Built
                        by
                        <a href="https://www.facebook.com/MukeshB2305/" className="text-gray-700 dark:text-gray-500 ml-1" target="_blank"
                            rel="noopener noreferrer">Mukesh</a>
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
