import React, {useState} from 'react'
import './TweetBox.css'
import { Avatar,Button} from '@material-ui/core'
import db from './firebase'


function TweetBox(){
    const [tweetMessage, setTweetMessage]=useState('')
    const [tweetImage, setTweetImage]=useState('')
    const sendTweet = (event) => {
        event.preventDefault()
        db.collection('posts').add({
            displayName: "Dmitry Vorontsov",
            userName: "dmitryvorontsov",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fvectors%2Favatar-icon-placeholder-1577909%2F&psig=AOvVaw3VzHFbbl_asQYyZu5ePRz3&ust=1617711463903000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPjo8fqK5-8CFQAAAAAdAAAAABAI'
        })
        setTweetMessage('');
        setTweetImage('');
    }
    return <div className='tweetBox'>
            <form>
                <div className='tweetBox__input'>
                <Avatar src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fvectors%2Favatar-icon-placeholder-1577909%2F&psig=AOvVaw3VzHFbbl_asQYyZu5ePRz3&ust=1617711463903000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPjo8fqK5-8CFQAAAAAdAAAAABAI'/>
                <input onChange={event => setTweetMessage(event.target.value)} value={tweetMessage} placeholder='What is happening ?' type='text'/>
                </div>
                <input onChange={event => setTweetImage(event.target.value)} value={tweetImage} className='tweetBox__imageInput' placeholder='Enter image Url' type='text'/>
                <Button onClick={sendTweet} type='submit' className='tweetBox__tweetButton'>Tweet</Button>
            </form>
        </div>

}

export default TweetBox