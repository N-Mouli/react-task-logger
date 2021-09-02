import {useEffect, useState} from 'react'

const colorMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'

const App = () => {
    const [state, setState] = useState(colorMode)

    useEffect(() => {
        const docDoc = document.documentElement.classList
        state === 'dark' ? docDoc.add('dark') : docDoc.remove('dark')
    }, [state])

    const toggleTheme = () => {
        setState(prevState => (prevState === 'light' ? 'dark' : 'light'))
    }

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

// type Task = {
//     taskId: string
//     taskName: string
//     taskStatus: 'in-progress' | 'completed' | 'cancelled'
//     taskDescription: string
//     estimatedTime: string
//     timeTaken: string
//     dateReceived: Date
//     dateCompleted: Date
// }

// type TaskLogs = Array<Task>

// type ReadBy = {propertyName: string; propertyValue?: string}

// type Status = 'Processing Info' | 'Success Info' | 'Error Info'

// type CreateTask = (taskLogs: TaskLogs, task: Task) => Status

// type ReadTask = (taskLogs: TaskLogs, task: Task) => Status

// type UpdateTask = (taskLogs: TaskLogs, taskId: string, task: Task) => Status

// type DeleteTask = (taskLogs: TaskLogs, taskId: string) => Status

// type TaskLogger = (taskLogs: TaskLogs) => string
