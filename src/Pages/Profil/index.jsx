import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../_actions";
import UpdateUserComponent from "../../_components/Update-user";
import Account from "../../_components/Account";
import '../../styles/_components/Profil.css'

function ProfilPage() {

  const [userProfil, setUserProfil] = useState({ firstName: "", lastName: "" });
  const [isEdit, setIsEdit] = useState(false);
  const [style, setStyle] = useState("bg-dark");
  const items = useSelector((state) => state.usersReducer.currentUser);
  const dispatch = useDispatch();

  const account = [
    {
      title: "Argent Bank Checking (x8349)",
      amount: "$2,082.79",
      description: "Available Balance",
      button: "View transactions"
    },
    {
      title: "Argent Bank Savings (x6712)",
      amount: "$10,928.42",
      description: "Available Balance",
      button: "View transactions"
    },
    {
      title: "Argent Bank Credit Card (x8349)",
      amount: "$184.30",
      description: "Current Balance",
      button: "View transactions"
    }
  ];

  useEffect(() => {
    dispatch(allActions.user.getProfileFetch())
  }, [dispatch]);

  useEffect(() => {
    if (Object.keys(items).length > 0) {
      setUserProfil((prevState) => {
        return {
          ...prevState,
          firstName: items.firstName,
          lastName: items.lastName
        }
      });
    }
  }, [items]);

  useEffect(()=>{
    setStyle(isEdit ? "bg-ligth" : "bg-dark")
  },[isEdit])

  const handleEdit = () => {
    console.log ("handleEdit");
    
    setIsEdit(!isEdit);
   
  };

  return (
    <div className={style}>
      <div className="header">
        <h1>Welcome back</h1>
        {isEdit
          ? <div>
            <UpdateUserComponent data={userProfil} control={handleEdit} />
          </div>
          : <><p>{items.firstName} {items.lastName} !</p>
            <button className="edit-button" onClick={handleEdit}>Edit Name</button></>
        }
      </div>
      <h2 className="sr-only">Accounts</h2>
      {
        account.map((data, i) => <Account key={i} data={data} state={isEdit} />)
      }
    </div>
  )
}

export default ProfilPage;