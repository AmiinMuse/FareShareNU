import React from "react";

const TeamSection = () => {
    return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Meet the Team</h2>
            <p className="mt-1 text-gray-600 dark:text-gray-400">The Whole-Brain Engineers Behind FareShare</p>
        </div>

        <div className="flex grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            <div className="grid sm:flex sm:items-center gap-y-3 gap-x-4">
                <img className="rounded-lg w-20 h-20" src="../../src/assets/desmond.jpg" alt="Image Description"/>

                <div className="sm:flex sm:flex-col sm:h-full">
                    <div>
                        <h3 className="font-medium text-gray-800 dark:text-gray-200">
                            Desmond Adanuty
                        </h3>
                        <p className="mt-1 text-xs uppercase text-gray-500">
                            Project Manager
                        </p>
                    </div>

                    <div className="mt-2 sm:mt-auto space-x-2.5">
                        <a className="inline-flex justify-center items-center text-gray-500 hover:text-gray-800 dark:hover:text-gray-200" href="#" target="_blank">
                            <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                            </svg>
                        </a>
                        <a className="inline-flex justify-center items-center text-gray-500 hover:text-gray-800 dark:hover:text-gray-200" href="#" target="_blank">
                        <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M21.9 0H2.1C.9 0 0 .9 0 2.1v19.8c0 1.2.9 2.1 2.1 2.1h19.8c1.2 0 2.1-.9 2.1-2.1V2.1c0-1.2-.9-2.1-2.1-2.1zM7.5 20.2H3.9V9.5h3.6v10.7zM5.7 8.7h-.1c-1 0-1.6-.7-1.6-1.6s.6-1.6 1.6-1.6c1 0 1.6.7 1.6 1.6s-.6 1.6-1.5 1.6zM20.2 20.2h-3.6v-5.6c0-1.4-.5-2.4-1.7-2.4-1 0-1.6.7-1.9 1.4-.1.3-.1.7-.1 1.1v5.4h-3.6V9.5h3.5v1.5h.1c.5-.9 1.5-1.8 3.2-1.8 3.4 0 4 2.3 4 5.3v6.7z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="grid sm:flex sm:items-center gap-y-3 gap-x-4">
                <img className="rounded-lg w-20 h-20" src="../../src/assets/Chip.png" alt="Image Description"/>

                <div className="sm:flex sm:flex-col sm:h-full">
                    <div>
                        <h3 className="font-medium text-gray-800 dark:text-gray-200">
                            Chibueze Anyanwu
                        </h3>
                        <p className="mt-1 text-xs uppercase text-gray-500">
                            CS | 2025
                        </p>
                    </div>

                    <div className="mt-2 sm:mt-auto space-x-2.5">
                        <a className="inline-flex justify-center items-center text-gray-500 hover:text-gray-800 dark:hover:text-gray-200" href="https://github.com/chipanyanwu" target="_blank">
                            <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                            </svg>
                        </a>
                        <a className="inline-flex justify-center items-center text-gray-500 hover:text-gray-800 dark:hover:text-gray-200" href="https://www.linkedin.com/in/chipanyanwu/" target="_blank">
                            <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M21.9 0H2.1C.9 0 0 .9 0 2.1v19.8c0 1.2.9 2.1 2.1 2.1h19.8c1.2 0 2.1-.9 2.1-2.1V2.1c0-1.2-.9-2.1-2.1-2.1zM7.5 20.2H3.9V9.5h3.6v10.7zM5.7 8.7h-.1c-1 0-1.6-.7-1.6-1.6s.6-1.6 1.6-1.6c1 0 1.6.7 1.6 1.6s-.6 1.6-1.5 1.6zM20.2 20.2h-3.6v-5.6c0-1.4-.5-2.4-1.7-2.4-1 0-1.6.7-1.9 1.4-.1.3-.1.7-.1 1.1v5.4h-3.6V9.5h3.5v1.5h.1c.5-.9 1.5-1.8 3.2-1.8 3.4 0 4 2.3 4 5.3v6.7z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="grid sm:flex sm:items-center gap-y-3 gap-x-4">
                <img className="rounded-lg w-20 h-20" src="../../src/assets/Herbert.jpeg" alt="Image Description"/>

                <div className="sm:flex sm:flex-col sm:h-full">
                    <div>
                        <h3 className="font-medium text-gray-800 dark:text-gray-200">
                            Herbert Botwe
                        </h3>
                        <p className="mt-1 text-xs uppercase text-gray-500">
                            Front-End Developer
                        </p>
                    </div>

                    <div className="mt-2 sm:mt-auto space-x-2.5">
                        <a className="inline-flex justify-center items-center text-gray-500 hover:text-gray-800 dark:hover:text-gray-200" href="https://github.com/Herbert540" target="_blank">
                            <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                            </svg>
                        </a>
                        <a className="inline-flex justify-center items-center text-gray-500 hover:text-gray-800 dark:hover:text-gray-200" href="https://www.linkedin.com/in/herbertbotwe/" target="_blank">
                        <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M21.9 0H2.1C.9 0 0 .9 0 2.1v19.8c0 1.2.9 2.1 2.1 2.1h19.8c1.2 0 2.1-.9 2.1-2.1V2.1c0-1.2-.9-2.1-2.1-2.1zM7.5 20.2H3.9V9.5h3.6v10.7zM5.7 8.7h-.1c-1 0-1.6-.7-1.6-1.6s.6-1.6 1.6-1.6c1 0 1.6.7 1.6 1.6s-.6 1.6-1.5 1.6zM20.2 20.2h-3.6v-5.6c0-1.4-.5-2.4-1.7-2.4-1 0-1.6.7-1.9 1.4-.1.3-.1.7-.1 1.1v5.4h-3.6V9.5h3.5v1.5h.1c.5-.9 1.5-1.8 3.2-1.8 3.4 0 4 2.3 4 5.3v6.7z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="grid sm:flex sm:items-center gap-y-3 gap-x-4">
                <img className="rounded-lg w-20 h-20" src="../../src/assets/amiin.jpeg" alt="Image Description"/>

                <div className="sm:flex sm:flex-col sm:h-full">
                    <div>
                        <h3 className="font-medium text-gray-800 dark:text-gray-200">
                            Amiin Muse
                        </h3>
                        <p className="mt-1 text-xs uppercase text-gray-500">
                            UI/UX Designer
                        </p>
                    </div>

                    <div className="mt-2 sm:mt-auto space-x-2.5">
                        <a className="inline-flex justify-center items-center text-gray-500 hover:text-gray-800 dark:hover:text-gray-200" href="#" target="_blank">
                            <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                            </svg>
                        </a>
                        <a className="inline-flex justify-center items-center text-gray-500 hover:text-gray-800 dark:hover:text-gray-200" href="#" target="_blank">
                        <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M21.9 0H2.1C.9 0 0 .9 0 2.1v19.8c0 1.2.9 2.1 2.1 2.1h19.8c1.2 0 2.1-.9 2.1-2.1V2.1c0-1.2-.9-2.1-2.1-2.1zM7.5 20.2H3.9V9.5h3.6v10.7zM5.7 8.7h-.1c-1 0-1.6-.7-1.6-1.6s.6-1.6 1.6-1.6c1 0 1.6.7 1.6 1.6s-.6 1.6-1.5 1.6zM20.2 20.2h-3.6v-5.6c0-1.4-.5-2.4-1.7-2.4-1 0-1.6.7-1.9 1.4-.1.3-.1.7-.1 1.1v5.4h-3.6V9.5h3.5v1.5h.1c.5-.9 1.5-1.8 3.2-1.8 3.4 0 4 2.3 4 5.3v6.7z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="grid sm:flex sm:items-center gap-y-3 gap-x-4">
                <img className="rounded-lg w-20 h-20" src="https://media.licdn.com/dms/image/C4E03AQHEJ9vGuQb9fQ/profile-displayphoto-shrink_800_800/0/1654136594225?e=2147483647&v=beta&t=o1EIoa0lRzJ7zDlKFLWDcPeoN3ExONW-7NX1__6YD0E" alt="Image Description"/>

                <div className="sm:flex sm:flex-col sm:h-full">
                    <div>
                        <h3 className="font-medium text-gray-800 dark:text-gray-200">
                            Shingirai Tande
                        </h3>
                        <p className="mt-1 text-xs uppercase text-gray-500">
                            Back-end Developer
                        </p>
                    </div>

                    <div className="mt-2 sm:mt-auto space-x-2.5">
                        <a className="inline-flex justify-center items-center text-gray-500 hover:text-gray-800 dark:hover:text-gray-200" href="#" target="_blank">
                            <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                            </svg>
                        </a>
                        <a className="inline-flex justify-center items-center text-gray-500 hover:text-gray-800 dark:hover:text-gray-200" href="#" target="_blank">
                            <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M21.9 0H2.1C.9 0 0 .9 0 2.1v19.8c0 1.2.9 2.1 2.1 2.1h19.8c1.2 0 2.1-.9 2.1-2.1V2.1c0-1.2-.9-2.1-2.1-2.1zM7.5 20.2H3.9V9.5h3.6v10.7zM5.7 8.7h-.1c-1 0-1.6-.7-1.6-1.6s.6-1.6 1.6-1.6c1 0 1.6.7 1.6 1.6s-.6 1.6-1.5 1.6zM20.2 20.2h-3.6v-5.6c0-1.4-.5-2.4-1.7-2.4-1 0-1.6.7-1.9 1.4-.1.3-.1.7-.1 1.1v5.4h-3.6V9.5h3.5v1.5h.1c.5-.9 1.5-1.8 3.2-1.8 3.4 0 4 2.3 4 5.3v6.7z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default TeamSection