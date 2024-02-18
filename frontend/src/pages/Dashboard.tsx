import { useEffect, useState } from "react";
import Balance from "../components/Balance";
import DashNav from "../components/DashNav";
import Users from "../components/Users";
import axios from "axios";

const Dashboard = () => {
    const [firstName, setFirstName] = useState('')
    const [balance, setBalance] = useState(0)

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/account/balance", {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then((res: any) => {
            setFirstName(res.data.firstName)
            setBalance(res.data.balance)
        })
    }, [])

    return (
        <div>
            <DashNav label={firstName}/>
            <div>
                <Balance amount={balance} />
            </div>
            <div>
                <Users />
            </div>
        </div>
    )
}

export default Dashboard;