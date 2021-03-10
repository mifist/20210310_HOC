import withPermissions from "../hoc/withPermissions"

const Message1 = ({role}) => <h1>I am component Message1 for {role}</h1>

export default withPermissions(Message1, "admin")
