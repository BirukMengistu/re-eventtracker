import { useState, useEffect } from 'react'
import './LoginView.css'
import { Link } from 'react-router-dom'
import FormInput from '../components/FormInput/FormInput'
import { checkUser, loginUser } from '../store/actions/authActions'
import { useDispatch, useSelector  } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const LoginView = () => {

  const [values, setValues] = useState({
    email:"",
    password:""
  });

  const inputs = [
    {
      id: 1, 
      name: "email",
      type: "email",
      placeholder: "E-post",
      errorMessage: "Du måste ange i en gilitg e-postadress",
      required: true,
    },
    {
      id: 2, 
      name: "password",
      type: "password",
      placeholder: "Lösenord",
      errorMessage: "Du måste ange ditt lösenord",
      required: true
    }
  ]

  const dispatch = useDispatch()

  const loading = useSelector(state => state.auth.loading)

  const error = useSelector(state => state.auth.error)

  const navigate = useNavigate()

  const user = useSelector(state => state.auth.token)  

  const onChange = e => {
    setValues(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginUser(values))
  }

  useEffect(() => {
    if(user) {
    navigate("/")
    }
  }, [user, navigate])

  useEffect (() => {
    dispatch(checkUser())
  }, [dispatch])


 
  return (

    <div className='LoginView'>
      <div className='login-container'>
        <form className='form-control' onSubmit={handleSubmit}>
          <Link to="/"><i className="fa fa-arrow-left"></i>Back to Home</Link>
          <h1>Logga in</h1>
          <p>Logga in genom att fylla i din e-postadress och lösenord</p>
          <div className='input-group'>
            {inputs.map((input) => (
              <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/> 
            ))}
          </div>
          <p className='error'>{ error && 'Du har angett fel e-postadress eller lösenord'}</p>
          <button className='btn btn-dark'>{loading ? 'Loggar in' : 'Logga in'}</button>
          <Link to="/Register"><button className='btn btn-light'>Register</button></Link>
        </form>
      </div>
    </div>
  )
}

export default LoginView