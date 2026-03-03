import {create} from "zustand";

export const useTodo = create((set) => ({
    todo: [],
    createTodo: (name) => set((state) => ({
        todo: [
            ...state.todo,
            {
                id: Date.now(),
                name: name
            }
        ]
    })),

    removeTodo: (id) => set((state) => ({ todo: state.todo.filter((t) => t.id !== id) }))

}))