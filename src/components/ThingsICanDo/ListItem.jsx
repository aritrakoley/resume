import { IconMap } from "../utils/IconMap"

const ListItem = ({label}) => {
    console.log(label)
  return (
    <span className="min-w-fit flex items-center bg-slate-600 rounded-full px-2 py-1 m-1">
        <i className="m-1 text-lime-500">{IconMap[label.toLowerCase()]}</i>{label}</span>
  )
}

export default ListItem