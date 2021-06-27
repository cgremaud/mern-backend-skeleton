import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import ArrowForward from '@material-ui/icons/ArrowForward'
import Person from '@material-ui/icons/Person'
import {Link} from 'react-router-dom'
import {list} from './api-user.js'

const useStyles = makeStyles(theme => ({
    root: theme.mixins.gutters({
      padding: theme.spacing(1),
      margin: theme.spacing(5)
    }),
    title: {
      margin: `${theme.spacing(4)}px 0 ${theme.spacing(2)}px`,
      color: theme.palette.openTitle
    }
  }))

export default function Users() {
    const classes = useStyles()
    //this declares a state variable nambed users which has the setter setUsers
    //normally need to use class component to use state, this allows us to use it in a function component
    //the arg passed to useState sets the init val, so this declares it as empty array
    const [users, setUsers] = useState([])

    //useEffect serves purpose of lifecycle methods in classes
    //allows us to fetch data
    //runs effects after every render including first, but we can tell it to only rerun if something changes in state.
    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal
        //calls the list function from api-users and calls setUsers on the response
        list(signal).then((data) => {
            if (data && data.error) {
                console.log(data.error)
            } else {
                setUsers(data)
            }
        })
        //aborts the fetch call when the component unmounts
        return function cleanup() {
            abortController.abort()
        }
    }, []) //passing an empty array as the 2nd arg so that cleanup only runs on mount and unmount not after every render
    
    //actual view content here
    return (
        <Paper className = {classes.root} elevation = {4}>
            <Typography variant ="h6" className={classes.title}>
                All Users
            </Typography>
            <List dense>
                {users.map((item, i) => {
                    return <Link to ={"/user/" + item._id} key = {i}>
                        <ListItem button>
                            <ListItemAvatar>
                                <Avatar>
                                    <Person />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={item.name} secondary = "What's up?"/>
                            <ListItemSecondaryAction>
                                <IconButton>
                                    <ArrowForward/>
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </Link>
                })}
            </List>
        </Paper>
    )
}