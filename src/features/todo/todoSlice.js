import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addTodo, data, editTodo, removeTodo } from "./todoService"

const todoSlice = createSlice({
    name: "todos",
    initialState: {
        allTodos: [],
        isLoading: false,
        isError: false,
        isSuccess: false,
        Edit: {
            todo: {},
            isEdit: false
        }
    },
    reducers: {
        removeFromState: (state, action) => {
            return {
                ...state,
                allTodos: state.allTodos.filter((item) => item._id !== action.payload)
            }
        },

        editInState: (state, action) => {
            return {
                ...state,
                Edit: { todo: action.payload, isEdit: true }
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getData.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(getData.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.allTodos = action.payload
            })
            .addCase(getData.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
            })
            .addCase(add.pending, (state, action) => {
                state.isLoading = true
                state.isSuccess = false
            })
            .addCase(add.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.allTodos = [action.payload, ...state.allTodos]
            })
            .addCase(add.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
            })
            .addCase(remove.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(remove.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
            })
            .addCase(remove.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
            })
            .addCase(edit.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(edit.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.allTodos = state.allTodos.map((item) => item._id === action.payload._id ? action.payload : item)
                state.Edit = {
                    todo: {},
                    isEdit: false
                }
            })
            .addCase(edit.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.isSuccess = false
            })

    },
})

export default todoSlice.reducer
export const getData = createAsyncThunk('GET/DATA', async () => {
    const response = await data()
    return response

})

export const remove = createAsyncThunk('REMOVE/DATA', async (id) => {
    const response = await removeTodo(id)
    return response.data
})

export const add = createAsyncThunk("ADD/TODO", async (newTodo) => {
    const response = await addTodo(newTodo)
    return response
})
export const edit = createAsyncThunk("EDIT/TODO", async (todo) => {
    // console.log(todo);
    const response = await editTodo(todo)
    return response
})



export const { removeFromState, editInState } = todoSlice.actions