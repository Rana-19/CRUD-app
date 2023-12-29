import { LinearProgress, List, Typography } from '@mui/material'

import React, { useEffect } from 'react'
import ListDetail from './ListDetail'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../features/todo/todoSlice'


const ListGroup = () => {
    const { allTodos, isLoading, isError } = useSelector((state) => state.todos)
    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(getData())
    }, [])
    if (allTodos.length === 0) {
        return (
            <Typography variant='h4' align='center' color='error'>No todos yet!!</Typography>
        )
    }
    if (!allTodos || isLoading) {
        return (
            <LinearProgress color="primary" sx={{ margin: '20px 0px' }} />
        )
    }
    if (isError) {
        return (
            <Typography variant='h4' align='center' color='error'>Oops something went wrong!!</Typography>
        )
    }
    return (
        <List>
            {
                allTodos.map((todo) => <ListDetail key={todo._id} todo={todo} />)
            }

        </List>
    )
}

export default ListGroup