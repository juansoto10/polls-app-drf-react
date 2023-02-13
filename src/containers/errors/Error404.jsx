import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <FullWidthLayout>

      <div className="w-full p-4 h-1/2 flex flex-col justify-center items-center mb-[17rem]">
        <p className="text-purple text-4xl mt-16 mb-8">
          Error404 Not Found
        </p>
          
        <Link
          to={`/polls`}
          className="w-min md:w-1/4 my-6 px-6 py-2 h-fit uppercase text-lg sm:text-xlfont-semibold tracking-wider border-2 border-black bg-teal-400 text-blackitems-center leading-6 md:leading-11 hover:bg-purple hover:text-white text-center"
        >
          Go back to Polls
        </Link>
      </div>
    </FullWidthLayout>
  )
}

export default Error404;
