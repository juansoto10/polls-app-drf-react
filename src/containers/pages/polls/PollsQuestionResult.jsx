import LoadingCard from "components/loaders/LoadingCard";
import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { get_poll } from "redux/actions/polls";
import { Link } from "react-router-dom";

function PollsQuestionResult({
  get_poll,
  poll,
  choices
}) {

  const params = useParams()
  const slug = params.slug
  
  useEffect(() => {
    get_poll(slug)
  }, [])

  let totalVotes = choices ? choices.reduce((sum, choice) => sum + choice.votes, 0) : 0;

  return (
    <FullWidthLayout>
      {
        poll ?
        <div className="relative py-14 bg-white overflow-hidden">
          <div className="relative px-4 sm:px-6 lg:px-8">

            <div className="text-lg max-w-prose mx-auto">
              <h1>
                <span className="block text-base text-center text-green drop-shadow-lg font-semibold tracking-wide uppercase">
                {poll.category.name}
                </span>
                <span className="mt-2 mb-8 block text-3xl text-center leading-8 font-extrabold tracking-tight text-purple sm:text-4xl">
                {poll.question_text}
                </span>
              </h1>
              <p className="text-gray-500 prose-lg text-center">
                Thank you for voting, here are the results:
              </p>
            </div>

            <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto flex flex-wrap">
              <ul className="relative flex flex-wrap justify-start items-center">
                {
                  choices.map(choice => (
                    <li className="w-full sm:w-1/2 h-10 mb-3 flex justify-center items-center">
                      <div className="w-full flex justify-center items-center">
                        <p className="w-5/6 sm:w-full">{`${choice.choice_text}: ${choice.votes} votes (${(choice.votes / totalVotes * 100).toFixed(2)}%)`}</p>
                      </div>
                    </li>
                  ))
                }
              </ul>

              <div className="w-full sm:h-24 flex flex-wrap sm:flex-row justify-center items-center">
                <Link
                  to="/polls"
                  className="no-underline min-w-[210px] w-1/3 my-4 s:mr-4 sm:h-full sm:mt-3 px-6 py-2 h-18 uppercase text-xl font-semibold tracking-wider border-2 border-black bg-teal-400 text-black items-center leading-10 hover:bg-purple hover:text-white text-center content-center"
                >
                  Go back to Questions
                </Link>

                <Link
                  to={`/polls/question/${slug}`}
                  className="no-underline min-w-[210px] w-1/3 my-4 s:mr-4 sm:h-full sm:mt-3 px-6 py-7 h-18 uppercase text-xl font-semibold tracking-wider border-2 border-black bg-teal-400 text-black items-center leading-10 hover:bg-purple hover:text-white text-center content-center"
                >
                  Vote again
                </Link>
              </div>
            </div>

          </div>
        </div>
        :
        <LoadingCard />
      } 
    </FullWidthLayout>
  )
}

const mapStateToProps = state => ({
  poll: state.polls.poll,
  choices: state.polls.choices
})

export default connect(mapStateToProps, {
  get_poll
})(PollsQuestionResult)
