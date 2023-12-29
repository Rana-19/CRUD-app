import React, { useEffect } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditIcon from '@mui/icons-material/Edit';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Divider, ListItem, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { edit, editInState, remove, removeFromState } from '../features/todo/todoSlice';

const ListDetail = ({ todo }) => {
    const { isSuccess } = useSelector((state) => state.todos)
    const dispatch = useDispatch()
    const deleteTodo = (_id) => {
        dispatch(remove(_id))
        if (isSuccess) {
            dispatch(removeFromState(_id))
        }

    }
    const handleEdit = (todo) => {
        dispatch(editInState(todo))
    }

    return (
        <div>
            <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                <Box >
                    <Typography variant='h5' sx={{ marginBottom: '20px' }} >{todo.title}</Typography>

                </Box>


                <Accordion style={{ width: "100%" }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Description</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant='h6' sx={{ marginBottom: '20px' }} >{todo.description}</Typography>
                    </AccordionDetails>
                </Accordion>
                <span style={{ marginTop: "10px" }}>
                    <Button variant='outlined' color='error' sx={{ marginRight: '10px' }} endIcon={<DeleteIcon />} onClick={() => deleteTodo(todo._id)}>Delete</Button>
                    <Button variant='outlined' color='warning' endIcon={<EditIcon />} onClick={() => handleEdit(todo)}>Edit</Button>
                </span>
            </ListItem>
            <Divider />
        </div>
    )
}

export default ListDetail