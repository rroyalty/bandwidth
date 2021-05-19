import React from 'react';
import { Container } from '@material-ui/core';
import axios from 'axios'

const UserCard = () => {

    let userInfo;
    const fetchItem = async() => {
        const response = await axios('/api/users');
        console.log(response.data);
        userInfo = response.data
        return userInfo
        console.log(userInfo)
    };
    fetchItem();

    // const renderedPosts = posts.map(post => (
    //     <article className="post-excerpt" key={post.id}>
    //       <h3>{post.title}</h3>
    //       <p className="post-content">{post.content.substring(0, 100)}</p>
    //       <PostAuthor userId={post.user} />
    //       <Link to={`/posts/${post.id}`} className="button muted-button">
    //         View Post
    //       </Link>
    //     </article>
    return(
        <Container maxWidth="xs"className="bg">
            {/* {userInfo.map(info => {
                <h1>{userInfo.}</h1>
            })} */}
            <h1>Name</h1>
            <p>photohere</p>
            <p>Status</p>
            <p>City </p>
            <p>State</p>
            <p>Instrument</p>
            <p>Genre</p>
        </Container>
    )
}

export default UserCard