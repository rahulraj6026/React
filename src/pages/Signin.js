import React,{useState, useContext} from 'react'
import {
    Container,
    Form,
    Button,
    FormGroup,
    Label,
    Col,
    Input,
    Row,
    Card,
    CardBody,
    CardFooter,
    CardHeader
} from 'reactstrap'
import firebase from 'firebase/app'
import {UserContext} from '../Context/UserCotext'
import { toast } from 'react-toastify'
import {Redirect} from 'react-router-dom'

const Signin = () => {
    const context = useContext(UserContext)

    const [email, setemail] = useState('')

    const [password, setpassword] = useState('')

    const handleSignIn = () => {
        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(
            res => {
                console.log(res.user.email+" "+res.user.uid);
                context.setUser({email: res.user.email, uid: res.user.uid})
            }
        )
        .catch( error => {
            console.log(error)
            toast(error.message,{
                type:"error"
            })
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        handleSignIn()
    }

	if(context.User?.uid){
        return <Redirect to="/" />
    }
    return (
		<Container className='text-center'>
			<Row>
				<Col lg={6} className='offset-lg-3 mt-5'>
					<Card>
						<Form onSubmit={handleSubmit}>
							<CardHeader className=''>SignIn here</CardHeader>
							<CardBody>
								<FormGroup row>
									<Label for='email' sm={3}>
										Email
									</Label>
									<Col sm={9}>
										<Input
											type='email'
											name='email'
											id='email'
											placeholder='provide your email'
											value={email}
											onChange={e => setemail(e.target.value)}
										/>
									</Col>
								</FormGroup>
								<FormGroup row>
									<Label for='password' sm={3}>
										Password
									</Label>
									<Col sm={9}>
										<Input
											type='password'
											name='password'
											id='password'
											placeholder='your password here'
											value={password}
											onChange={e => setpassword(e.target.value)}
										/>
									</Col>
								</FormGroup>
							</CardBody>
							<CardFooter>
								<Button type='submit' block color='primary'>
									Sign In
								</Button>
							</CardFooter>
						</Form>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Signin