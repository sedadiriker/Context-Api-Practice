import { useState } from "react"
import { Container,Form,Button } from "react-bootstrap"
import { useLoginContext } from "../context/LoginContext"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [user, setUser] = useState({email:"", password:""})
    const navigate = useNavigate()
    //! consuming
    const {setSigned} = useLoginContext()


    const handleSubmit= (e) => {
        e.preventDefault()
        user?.email && user?.password && setSigned(true)
        setUser({email:"", password:""})
       navigate("home")
    }
  return (
    <div>
    <Container>
      <h1 className="text-center mt-4">LOGIN PAGE</h1>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={user?.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            name="password"
            value={user?.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </Form.Group>
        <Container className="text-center">
          <Button variant="danger" type="submit">
            Submit
          </Button>
        </Container>
      </Form>
    </Container>
    </div>
  )
}

export default Login
