function FormChoices() {

  const onSubmit = e => {
    e.preventDefault()
  }


  return(
    <div className="">
      <form onSubmit={async e => onSubmit(e)} className="w-full">
        
        <div className="relative">
          <input
            id="choice.choice_uuid"
            name="choice"
            className="block text-sm sm:text-sm"
            type="radio"
            value={`choice.choice_uuid`}
          />
          <label htmlFor="choice" className="">
            choice.choice_text
          </label>
        </div>

        <button
          type="submit"
          className="px-6 py-2 h-18 sm:h-12 uppercase text-xl font-semibold tracking-wider border-2 border-black bg-teal-400 text-black items-center leading-11 hover:bg-purple hover:text-white text-center">
          Vote
        </button>
      </form>
    </div>
  )
}

export default FormChoices;
