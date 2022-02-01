import { useDispatch } from "react-redux";
import { useState } from "react";
import allActions from "../../_actions";
import '../../styles/_components/UpdateUser.css';

const UpdateUserComponent = (props) => {

  const [userProfil, setUserProfil] = useState({ firstName: `${props.data.firstName}`, lastName: `${props.data.lastName}` });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.persist();
    const { name, value } = e.target;
    setUserProfil((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (userProfil.firstName !== "" && !userProfil.lastName !== "") {
      dispatch(allActions.user.updateProfil(userProfil));
      props.control();
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="content-update__form">
        <div className="update-form__section">
          <label htmlFor="idFirstname" className="sr-only">firstName</label>
          <input
            type='texte'
            name='firstName'
            className="update-form__input"
            placeholder={props.data.firstName}
            id='idFirstname'
            onChange={handleChange}
          />
          <label htmlFor='idLastname' className="sr-only">lastName</label>
          <input
            type='texte'
            name='lastName'
            className="update-form__input"
            placeholder={props.data.lastName}
            id='idLastname'
            onChange={handleChange}
          />
        </div>
        <div className="update-form__section">
          <input type='submit' value="Save" className="update-form__button" />
          <button onClick={props.control} className="update-form__button">Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default UpdateUserComponent