import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { connect } from "react-redux";
import { Link } from "react-router-dom"

function About({
}) {

  return (
    <FullWidthLayout>
      <div className="flex flex-col justify-center items-center w-screen h-fit bg-white p-8 pb-0">
        <div className="flex flex-col justify-center items-center w-3/4">
          <h2 className="text-6xl font-bold text-purple w-fit mb-10 mt-3 drop-shadow-lg text-center">
            About the creator
          </h2>
          <p className="text-xl lg:text-2xl font-semibold w-fit md:w-4/5 lg:w-3/4 mb-12">
            Hey! I'm a web developer from Colombia, passionate about creating web applications and pages with differents technologies.
            In my free time I like learning languages, listening to music, surfing on the internet and playing videogames.<br></br><br></br>
            Check my social media or my website if you want to know more about me and my work.
          </p>
        </div>
      
        <div className="flex flex-col justify-center items-center" >
          <img
            className="block h-72 rounded-full mb-12"
            src="https://i.postimg.cc/SQzGJxzp/jp-polls-app.png"
            alt="Logo"
          />
          <Link to={`https://juansoto10.github.io/`} className="px-6 py-2 h-18 sm:h-12 uppercase text-xl font-semibold tracking-wider border-2 border-black bg-teal-400 text-black items-center leading-11 hover:bg-purple hover:text-white text-center" target="_blank">
            Visit my Portfolio Page
          </Link>
        </div>
      
      </div>
    </FullWidthLayout>
  )
}
  
const mapStateToProps = state => ({
})

export default connect(mapStateToProps, {
})(About)
