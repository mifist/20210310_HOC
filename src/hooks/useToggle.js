import {useState, useCallback} from "react"

const useToggle = () => {
  const [openId, setOpenId] = useState(null)

  const toggle = useCallback(id => setOpenId(x => (x === id ? null : id)), [])

  return {openId, toggle}
}

export default useToggle
