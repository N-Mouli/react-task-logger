import {useEffect, useState} from 'react'

const App = () => {
    const [state, setState] = useState(
        window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light',
    )

    useEffect(() => {
        state === 'dark'
            ? document.documentElement.classList.add('dark')
            : document.documentElement.classList.remove('dark')
    }, [state])

    const toggleTheme = () =>
        setState(prevState => (prevState === 'light' ? 'dark' : 'light'))

    return (
        <div
            className={`h-screen w-screen grid place-items-center dark:bg-gray-900 dark:text-gray-50`}
        >
            <div className="flex flex-col align-items-center justify-content-center">
                <p className={`font-extrabold text-[6rem] text-center`}>
                    React Task Logger
                </p>
                <button className="text-6xl" onClick={toggleTheme}>
                    {state === 'dark' ? '🌜' : '☀️'}
                </button>
            </div>
        </div>
    )
}

export default App
