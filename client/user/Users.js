import { list } from './api-user'
import { useEffect } from "react"
import { ListItemText } from '@material-ui/core'
import { ArrowForward } from '@material-ui/icons'

export default function Users() {
    //this declares a state variable nambed users which has the setter setUsers
    //normally need to use class component to use state, this allows us to use it in a function component
    //the arg passed to useState sets the init val, so this declares it as empty array
    const [users, setUsers] = useState([])

    //useEffect serves purpose of lifecycle methods in classes
    //allows us to fetch data
    //runs effects after every render including first, but we can tell it to only rerun if something changes in state.
    useEffect(() => {
        const abortController = new AbortController()
        const signal = new abortController.signal
        
        list(signal).then((data) => {
            if (data && data.error) {
                console.log(data.error)
            } else {
                setUsers(data)
            }
        })
        //aborts the fetch call when the component unmounts
        //passing an empty array as the 2nd arg so that cleanup only runs on mount and unmount not after every render
        return function cleanup() {
            abortController.abort()
        }
    }, [])
    //actual view content here
    return (
        <Paper className = {classes.root} elevation = {4}>
            <Typography variant ="h6" className={classes.title}>
                All Users
            </Typography>
            {/* iterates thru users array and displays list item for each */}
            <List dense>
                {users.map((item, i) => {
                    return <Link to ={"/user/" + item._id} key = {i}>
                        <ListItem button>
                            <ListItemAvatar>
                                <Avatar>
                                    <Person />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={item.name}/>
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