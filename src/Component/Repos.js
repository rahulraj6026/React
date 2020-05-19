import React,{useState, useEffect} from 'react'
import Axios from 'axios'
import { ListGroup, ListGroupItem } from 'reactstrap'

const Repos = ({repo_url}) => {
    const [repo, setrepo] = useState([])

    const fetchRepo = async() => {
        const {data} = await Axios.get(repo_url)
        setrepo(data)
    }

    useEffect(() => {
        fetchRepo()
    }, [repo_url])

    return(
        <ListGroup>
            {
                Object.values(repo).map( (repos) => {
                    return(
                        <ListGroupItem key={repos.id}>
                            <div className="text-primary">{repos.name}</div>
                            <div className="text-secondary">{repos.language}</div>
                            <div className="text-info">{repos.description}</div>
                        </ListGroupItem>
                    )
                })
            }
        </ListGroup>
    )
}

export default Repos