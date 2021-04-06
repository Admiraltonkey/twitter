import React from 'react'
import './Post.css'
import {Avatar} from "@material-ui/core";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import RepeatIcon from '@material-ui/icons/Repeat';



function Post({
                  displayName,
                  userName,
                  verified,
                  text,
                  image,
                  avatar
              }) {
    return (
        <div className='post'>
        <div className='post__avatar'>
            <Avatar src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fvectors%2Favatar-icon-placeholder-1577909%2F&psig=AOvVaw3VzHFbbl_asQYyZu5ePRz3&ust=1617711463903000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPjo8fqK5-8CFQAAAAAdAAAAABAI'/>
        </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Reeaf Quzi{" "} <span className='post__headerSpecial'>
                            <VerifiedUserIcon className='post_badge'/> @dmitryvorontsov
                        </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>My first Post</p>
                    </div>
                </div>
                <img src='https://habrastorage.org/getpro/habr/post_images/289/59e/4de/28959e4de450ba38b84fd11c5b058570.gif ' alt=''/>
                <div className="post__footer">
    <ChatBubbleOutlineIcon fontSize='small'/>
    <RepeatIcon fontSize='small'/>
    <FavoriteBorderIcon fontSize='small'/>
    <PublishIcon fontSize='small'/>
                </div>
            </div>
        </div>
    )
}

export default Post