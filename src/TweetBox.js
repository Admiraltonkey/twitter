import React from 'react'
import './TweetBox.css'
import { Avatar,Button} from '@material-ui/core'


function TweetBox(){
    return <div className='tweetBox'>
            <form>
                <div className='tweetBox__input'>
                <Avatar src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fvectors%2Favatar-icon-placeholder-1577909%2F&psig=AOvVaw3VzHFbbl_asQYyZu5ePRz3&ust=1617711463903000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPjo8fqK5-8CFQAAAAAdAAAAABAI'/>
                <input placeholder='What is happening ?' type='text'/>
                </div>
                <input className='tweetBox__imageInput' placeholder='Enter image Url' type='text'/>
                <Button className='tweetBox__tweetButton'>Tweet</Button>
            </form>
        </div>

}

export default TweetBox