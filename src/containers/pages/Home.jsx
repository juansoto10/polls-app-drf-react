import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { connect } from "react-redux";
import { Link } from "react-router-dom"

function Home({
}) {

  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen h-screen bg-gradient-to-r from-purple-mid to-misty p-6" >
        <h1 className="text-5xl sm:text-6xl xl:text-8xl font-bold text-purple w-5/6 lg:w-fit mb-20 drop-shadow-lg text-center">
          Welcome to Valkau Polls
        </h1>
        <p className="text-xl md:text-2xl sm:text-3xl xl:text-4xl font-semibold w-5/6 lg:w-fit mb-24 text-center">
          The place for answering interesting questions!
        </p>
        <Link to={`/polls`} className="px-6 py-2 sm:w-fit h-fit md:h-12 uppercase text-base s:text-xl font-semibold tracking-wider border-2 border-black bg-teal-400 text-black items-center leading-11 hover:bg-purple hover:text-white">
          Start answering
        </Link>
      </div>
    </> 
  )
}
  
const mapStateToProps = state => ({
})

export default connect(mapStateToProps, {
})(Home)
