//import necessary components
import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Card, CardMedia } from '@material-ui/core'
import { CardContent } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import crancel from './../assets/images/crancel.jpg'
import {Link} from 'react-router-dom'

//style declarations
const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 600,
        margin: 'auto',
        marginTop: theme.spacing(5)
    },
    title: {
        padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
        color: theme.palette.openTitle,
        textAlign: 'center'
    },
    media: {
        minHeight: 400
    }
}))

export default function Home(){
    const classes = useStyles()
    return (
        <Card className={classes.card}>
            <Typography variant="h6" className={classes.title}>
                Home Page
            </Typography>
            <CardContent>
                <Typography variant = "h6">
                <Link to="/users">Users - </Link>
                <Link to="/signup">Sign up - </Link>
                <Link to="/signin">Sign in</Link>
                </Typography>
            </CardContent>
            <CardMedia 
                className={classes.media} 
                image={crancel} 
                title="Crancel culture"/>
            <CardContent>
                <Typography variant="body2" component="p">
                    Placeholder text for home page element
                </Typography>
            </CardContent>
            
        </Card>
        
    )
}