import react from 'react';
import { faker } from '@faker-js/faker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';

import Comment from './Comment';




function getRandomLikeBtn() {
    return faker.datatype.boolean() ? <FontAwesomeIcon icon={faHeart} /> : <FontAwesomeIcon style={{color: 'red'}} icon={faHeartSolid} />;
}

const Post = (props) => {
    console.log(props.comments)
    let username = props.username; 
    return (  <div className='Post'>
                <div className='Post-header'>
                    <div className='Post-header-profile-image'>
                        <img src={props.avatar} alt="Post Profile Image"></img>
                    </div>
                    <div className='Post-header-username'>
                        {username}
                    </div>
                    <div className='Post-header-more-btn'>
                       <FontAwesomeIcon icon={faEllipsisV} />
                    </div>
                </div>
                <div className='Post-image'>
                    <img src={props.image} alt="Post Image" />
                </div>
                <div className='Post-caption'>
                    <span className='Post-caption-username'>{props.username}</span>
                        {props.caption}                    
                        <div className='Post-caption-time'>
                        {props.time}
                        </div>
                </div>
                <div className="Post-comments">
                    {
                        props.comments.map(comment => {
                            return <
                                Comment 
                                    username={comment.username} 
                                    comment={comment.comment} 
                                    time={comment.time} 
                                    avatar={comment.avatar} 
                                    is_like = {comment['is-like']}
                                />
                        })
                    }
                </div>
            </div>
            );
}


export default Post;