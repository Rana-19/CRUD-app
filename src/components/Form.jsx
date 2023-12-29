import { Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, edit, getData } from '../features/todo/todoSlice'

const Form = () => {
    const { Edit } = useSelector((state) => state.todos)
    const dispatch = useDispatch()
    const [formData, setFormdata] = useState({
        title: "",
        description: ""
    })
    const { title, description } = formData
    const handleChange = (e) => {
        setFormdata({
            ...formData,
            [e.target.name]: e.target.value
        })

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (Edit.isEdit) {
            dispatch(edit({
                _id: Edit.todo._id,
                title,
                description
            }))
        } else {
            dispatch(add(formData))
        }
        setFormdata({
            title: "",
            description: ""
        })
    }
    useEffect(() => {
        setFormdata({
            title: Edit.todo.title,
            description: Edit.todo.description
        })
    }, [Edit])

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)} style={{ paddingInline: "10px" }}>
                <Typography align='center' variant='h4'>
                    TODO-App
                </Typography>
                <TextField variant='outlined' label='Enter Title' fullWidth sx={{ margin: '20px 0px' }} onChange={(e) => handleChange(e)} value={title} name='title' />
                <TextField variant='outlined' label='Enter Description' multiline rows={6} fullWidth onChange={(e) => handleChange(e)} value={description} name='description' />
                <Button type='Submit' variant='contained' fullWidth color='primary' sx={{ margin: '20px 0px' }}>SAVE</Button>
            </form>
        </>
    )
}

export default Form