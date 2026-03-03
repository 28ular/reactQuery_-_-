import {useTodo} from "../store/todoStore.js";
import {useState} from "react";

export const TodoList = ()  => {

    const { todo , createTodo , removeTodo } = useTodo()

    const [ name , setName ] = useState('')

    const createTodos = () => {
        if ( !name.trim() ) {
            alert("Please enter a name")
            return
        }
        createTodo(name)
        setName('')
    }

    return (
        <>
        <h1>TodoList</h1>
            <hr/>
            <input
                type="text"
                value={ name }
                onChange={(e) => setName(e.target.value) }
                placeholder=" name..... "
            />
            <button onClick={createTodos}>create</button>
            { todo.length === 0 && <p>пусто создайте заметку</p> }
            <ul>
                {
                    todo.map((t) => <li key={t.name}>{ t.name }
                        <button onClick={() => removeTodo(t.id)}>❌</button></li>)           
                }
            </ul>



        </>
    )
}