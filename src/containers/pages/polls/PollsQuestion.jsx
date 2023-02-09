import LoadingCard from "components/loaders/LoadingCard";
import FormChoices from "components/polls/FormChoices";
import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { get_poll } from "redux/actions/polls";

function PollsQuestion({
  get_poll,
  poll,
  choices
}) {
  const params = useParams()
  const slug = params.slug
  
  useEffect(() => {
    get_poll(slug)
  }, [])

  return (
    <FullWidthLayout>
      {
        poll ?
        <div className="relative py-16 bg-white overflow-hidden">
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="text-lg max-w-prose mx-auto">
              <h1>
                <span className="block text-base text-center text-green drop-shadow-lg font-semibold tracking-wide uppercase">
                {poll.category.name}
                </span>
                <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-purple sm:text-4xl">
                {poll.question_text}
                </span>
              </h1>
            </div>

            <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
              {/* <FormChoices /> */}
              choices - La cosa va por aquí para renderizar las choices, choices.map(choice  choice.choice_text y choice.votes)
              {choices[0].choice_text}
              aaaah qué vuelta
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
})(PollsQuestion)
