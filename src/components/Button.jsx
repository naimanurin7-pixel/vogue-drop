function Button({ children }) {

  return (

    <button
      className="
        bg-yellow-400
        text-black
        px-6
        py-3
        rounded-2xl
        font-bold
        hover:bg-yellow-300
        transition-all
        duration-300
      "
    >
      {children}
    </button>
  )
}

export default Button