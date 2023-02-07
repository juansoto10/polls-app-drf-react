import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { connect } from "react-redux";

function Home({
}) {

  return (
    <FullWidthLayout>
      <>
        <div className="flex flex-col justify-center items-center w-screen h-screen bg-ivory">
          <h1 className="text-7xl font-bold text-purple w-fit mb-14 drop-shadow-lg">
            Welcome to Valkau Polls
          </h1>
          <p className="text-3xl font-semibold w-fit mb-10">
            The place for answering interesting questions!
          </p>
          <button class="px-6 h-12 uppercase text-xl font-semibold tracking-wider border-2 border-black bg-teal-400 text-black" type="submit">
            Start answering
          </button>
        </div>
        
      </>
    </FullWidthLayout>
  )
}
  
const mapStateToProps = state => ({
})

export default connect(mapStateToProps, {
})(Home)