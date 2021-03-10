export default function withPermission(Component, status) {
  return function WrappedWithPermission(props) {
    const user = JSON.parse(localStorage.getItem("user"))

    return user && user.status !== "admin" && status === "admin" ? null : (
      <Component {...props} />
    )
  }
}
