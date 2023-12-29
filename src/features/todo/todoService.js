import axios from "axios";
// const api_url = "/api"

export const data = async () => {
    const response = await axios.get("/api/todo")
    return response.data
}
export const removeTodo = async (id) => {
    const response = await axios.delete("/api/todo/" + id)
    return response.data
}

export const addTodo = async (newTodo) => {
    const response = await axios.post("/api/todo", newTodo)
    return response.data
}
export const editTodo = async (todo) => {
    // console.log(todo);
    const response = await axios.put("/api/todo/" + todo._id, {
        title: todo.title,
        description: todo.description
    })
    return response.data
}