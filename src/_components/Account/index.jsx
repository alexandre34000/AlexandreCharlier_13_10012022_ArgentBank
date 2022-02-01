import { useEffect, useState } from 'react';
import '../../styles/_components/Account.css'

const Account = (props) => {

    const [color, setColor] = useState();

    useEffect(() => {
        setColor(props.state ? "color-violet" : "color-green")
    }, [props.state])

    return (
        <><section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{props.data.title}</h3>
                <p className="account-amount">{props.data.amount}</p>
                <p className="account-amount-description">{props.data.description}</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className={`transaction-button ${color}`}>{props.data.button}</button>
            </div>
        </section>
        </>
    )
}

export default Account