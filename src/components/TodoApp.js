import {React, useState} from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { Container, Paper, Typography } from "@mui/material";

/**
 * Creates a TodoApp component that manages a list of todos.
 *
 * @return {JSX.Element} The rendered TodoApp component.
 */
const TodoApp = () => {
    const [todos, setTodos] = useState([]);

    /**
     * Adds a new todo to the list of todos.
     *
     * @param {Object} newTodo - The new todo to be added.
     */
    const addNewTodo = (newTodo) => {
        setTodos((prevTodos) => [...prevTodos, newTodo]);
    };


    /**
     * Toggles the completion status of a todo item at the specified index.
     *
     * @param {number} index - The index of the todo item to toggle.
     * @return {void} This function does not return a value.
     */
    const toggleTodoItem = (index) => {
        setTodos((prevTodos) => prevTodos.map((todo, i) => i === index ? {...todo, completed: !todo.completed} : todo));
    }

    /**
     * Removes a todo item from the list of todos based on the provided index.
     *
     * @param {number} index - The index of the todo item to remove.
     * @return {void} This function does not return a value.
     */
    const removeTodoItem = (index) => {
        setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
    };

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} style={{padding: 16}}>
                <Typography variant="h4" align="center" gutterBottom>
                    TodoApp
                </Typography>
                <TodoInput addNewTodo={addNewTodo} />
                <TodoList todos={todos} toggleTodo={toggleTodoItem} deleteTodo={removeTodoItem} />
            </Paper>
        </Container>
    );
};


export default TodoApp;