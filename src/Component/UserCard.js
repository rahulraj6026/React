import React from 'react'
import { Card, CardBody } from 'reactstrap'

const UserCard = ({ user }) => {
    return(
        <Card>
            <img src={user.avatar_url} className="img-thumbnail" alt="profile pic" />
            <CardBody>
                <div className="text-primary">{user.name}</div>
                <div className="text-primary">{user.company}</div>
                <div className="text-primary">{user.location}</div>
                <div className="text-info">{user.bio}</div>
            </CardBody>
        </Card>
    )
}

export default UserCard