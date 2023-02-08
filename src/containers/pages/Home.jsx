import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { connect } from "react-redux";
import { Link } from "react-router-dom"

function Home({
}) {

  return (
    
      <>
        <div className="flex flex-col justify-center items-center w-screen h-screen bg-white">
          <h1 className="text-7xl font-bold text-purple w-fit mb-14 drop-shadow-lg">
            Welcome to Valkau Polls
          </h1>
          <p className="text-3xl font-semibold w-fit mb-10">
            The place for answering interesting questions!
          </p>
          <Link to={`/polls`} className="px-6 py-2 h-12 uppercase text-xl font-semibold tracking-wider border-2 border-black bg-teal-400 text-black items-center leading-11 hover:bg-purple hover:text-white">
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