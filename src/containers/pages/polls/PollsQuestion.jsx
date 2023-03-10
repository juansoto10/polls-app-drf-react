import LoadingCard from "components/loaders/LoadingCard";
import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { get_poll } from "redux/actions/polls";
import { useState } from 'react';
/* import { redirect } from 'react-router-dom'; */
import axios from 'axios';

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

  const [selectedChoice, setSelectedChoice] = useState('');

  const onSubmit = async (e) => {
    const config = {
      headers: {
        'Accept': 'application/json'
      },
      choice: selectedChoice
    };

    e.preventDefault();
  
    try {
      const response = await axios.patch(`${process.env.REACT_APP_API_URL}/api/polls/${slug}`, config);
  
      
      console.log(response.data);
      window.location.href = `/polls/question/${slug}/results`;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FullWidthLayout>
      {
        poll ?
        <div className="relative pt-14 pb-6 bg-white overflow-hidden">
          <div className="relative px-4 sm:px-6 lg:px-8">

            <div className="text-lg max-w-prose mx-auto">
              <h1>
                <span className="block text-base text-center text-green drop-shadow-lg font-semibold tracking-wide uppercase">
                {poll.category.name}
                </span>
                <span className="mt-2 mb-10 block text-3xl text-center leading-8 font-extrabold tracking-tight text-purple sm:text-4xl">
                {poll.question_text}
                </span>
              </h1>
            </div>

            <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto flex">

              <form onSubmit={async e => onSubmit(e)} className="w-full flex flex-wrap justify-start items-center">
                {
                  choices.map(choice => (
                    <div className="relative mb-3 w-full sm:w-1/2 flex justify-center items-center">
                      <input
                        id={choice.choice_uuid}
                        name="choice"
                        className="block text-sm sm:text-sm mr-3"
                        type="radio"
                        value={choice.choice_uuid}
                        onChange={(e) => setSelectedChoice(e.target.value)}
                      />
                      <label htmlFor="choice" className="w-1/4">
                        {choice.choice_text}
                      </label>
                    </div>
                  ))
                }

                <div className="w-full flex justify-center items-center">
                  <button
                    type="submit"
                    className="w-fit my-6 px-6 py-2 h-18 sm:h-12 uppercase text-xl font-semibold tracking-wider border-2 border-black bg-teal-400 text-black items-center leading-11 hover:bg-purple hover:text-white text-center"
                  >
                    Vote
                  </button>
                </div>
                
              </form>

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
