import Balance from "../components/Balance";
import DashNav from "../components/DashNav";
import Users from "../components/Users";

const Dashboard = () => {
    return (
        <div>
            <DashNav label={"username"}/>
            <div>
                <Balance amount={9999999.99999999} />
            </div>
            <div>
                <Users />
            </div>
        </div>
    )
}

export default Dashboard;