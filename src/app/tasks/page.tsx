"use client";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useState } from "react";

const TasksPage = () => {
    const tasks = useQuery(api.tasks.getTasks);
    const deleteTask = useMutation(api.tasks.deleteTask);

    return (
        <div className="p-10 flex flex-col gap-4">
            <h1>All tasks are here in real-time</h1>
            { tasks?.map((task) => (
                <div key={task._id} className="flex items-center gap-10">
                    <span>{task.text}</span>
                    <button
                    className="bg-red-500 text-white p-2 rounded"
                    onClick={async () => {
                        await deleteTask({ id: task._id});
                    }}
                    >Delete Task</button>
                </div>
            ))}
        </div>
    
    )
};

export default TasksPage;