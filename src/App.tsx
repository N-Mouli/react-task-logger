const App = () => {
    return (
        <div className={`h-screen w-screen grid place-items-center`}>
            <p
                className={`font-extrabold text-[6rem] text-indigo-500 text-center`}
            >
                React Task Logger
                <span role="img" aria-label="techie">
                    🧑‍💻
                </span>
            </p>
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
