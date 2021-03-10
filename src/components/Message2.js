import withPermissions from "../hoc/withPermissions"

const Message2 = ({role}) => <h1>I am component Message2 for {role}</h1>

export default withPermissions(Message2, "user")
