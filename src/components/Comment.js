import react from 'react';
import { faker } from '@faker-js/faker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';

function getRandomLikeBtn(like) {
    return like ? <FontAwesomeIcon style={{color: 'red'}} icon={faHeartSolid} /> : <FontAwesomeIcon style={{color: 'red'}} icon={faHeart} />;
}

const Comment = (props) => {
    return (  
                    <div className='Comment'>
                        <div className='Comment-user-profile'>
                            <img src={props.avatar} alt="User Comment Profile" />
                        </div>
                         <div className='Comment-comment'>
                            <div className='Comment-text'>
                                <span className='Post-caption-username'>{props.username}</span>
                                {props.comment}
                            </div>
                           <div className="Comment-detail"> 
                                <span>{props.time}</span>
                                <span>Reply</span>
                           </div>
                        </div>
                        <div className='Comment-like'>
                              { getRandomLikeBtn(props.is_like) }
                        </div>
                   </div>                  
     );
}

export default Comment;