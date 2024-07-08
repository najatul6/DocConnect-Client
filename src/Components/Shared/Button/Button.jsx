

const Button = ({text,customClass}) => {
  return (
    <button className={`px-4 py-3 text-white font-bold  rounded-md transition-all duration-300 ${customClass}`}>
        <p className="capitalize">{text}</p>
    </button>
  )
}

export default Button