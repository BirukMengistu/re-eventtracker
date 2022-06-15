import './RegisterView.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector  } from 'react-redux'
import { registerUser } from '../store/actions/authActions'
import { useNavigate } from 'react-router-dom'
import FormInput from '../components/FormInput/FormInput'
// import { render } from 'react-dom'

const Register = () => {

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
  })

  const inputs = [
    {
      id: 1, 
      name: "firstName",
      type: "text",
      placeholder: "Förnamm",
      errorMessage: "Det måste ange i ditt förnamn",
      required: true,
    },
    {
      id: 2, 
      name: "lastName",
      type: "text",
      placeholder: "Efternamn",
      errorMessage: "Du måste ange ditt efternamn",
      required: true
    },
    {
      id: 3, 
      name: "email",
      type: "email",
      placeholder: "E-post",
      errorMessage: "Du måste ange i en gilitg e-postadress",
      required: true
    },
    {
      id: 4, 
      name: "password",
      type: "password",
      placeholder: "Lösenord",
      errorMessage: "Du måste ange ett lösenord",
      required: true
    },
    {
      id: 5, 
      name: "repeatPassword",
      type: "password",
      placeholder: "Bekräfta lösenord",
      errorMessage: "Du måste ange samma lösenord som ovan",
      pattern: values.password,
      required: true
    }
  ]

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const loading = useSelector(state => state.auth.loading)

  const error = useSelector(state => state.auth.error)

  const user = useSelector(state => state.auth.token)  

  
  const onChange = e => {
    setValues(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }


  const handleSubmit = e => {
    e.preventDefault();
    dispatch(registerUser(values))
  }

  useEffect(() => {
    if(user) {
      navigate ('/products')
    }
  }, [user, navigate])


    return (
      <div className='Register'>      
      <div className='register-container'>
      <form className='form-control' onSubmit={ handleSubmit }>
        <Link to="/Login"><i className="fa-solid fa-arrow-left"></i></Link>
        <h1>Registrera</h1>
        <p className='sm-text'>Fyll i informationen nedan för att registrera ett konto</p>
        <div className='input-group'>
        {inputs.map((input) => (
          <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/> 
          ))}
        </div>
        <button className='btn btn-dark'>{loading ? 'Registrerar' : 'Registrera'}</button>
        <p className='error'>{ error && 'E-postadressen är upptagen. Prova en annan'}</p>
      </form>
    </div>
  </div>
   )
  }
export default Register