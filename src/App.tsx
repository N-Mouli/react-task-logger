import {Counter} from './Counter'

type Task = {
    taskId: string
    taskName: string
    taskStatus: 'in-progress' | 'completed' | 'cancelled'
    taskDescription: string
    estimatedTime: string
    timeTaken: string
    dateReceived: Date
    dateCompleted: Date
}

type TaskLogs = Array<Task>

type ReadBy = {propertyName: string; propertyValue?: string}

type Status = 'Processing Info' | 'Success Info' | 'Error Info'

type CreateTask = (taskLogs: TaskLogs, task: Task) => Status

type ReadTask = (taskLogs: TaskLogs, task: Task) => Status

type UpdateTask = (taskLogs: TaskLogs, taskId: string, task: Task) => Status

type DeleteTask = (taskLogs: TaskLogs, taskId: string) => Status

type TaskLogger = (taskLogs: TaskLogs) => string

export const App = () => {
    return (
        <>
            <h1>React TypeScript Webpack Starter Template</h1>
            <Counter />
        </>
    )
}
