
const Dashboard = ({user}) => {
    console.log({user})
    return (
        <section>
            <h3>hello {user.fName} {user.lName}</h3>
        </section>
    )
}

export default Dashboard;