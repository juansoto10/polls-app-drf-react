import { Link } from "react-router-dom";

function PollCard(data) {
  let poll = data && data.data

  return (
    <div>
      <div className="flex flex-col rounded-lg shadow-lg  overflow-hidden">
        <div className="flex-shrink-0">
          <img className="h-48 w-full object-cover" src={poll.thumbnail} alt="question thumbnail" />
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium   text-indigo-600">
              <Link to={`/polls/categories/${poll.category.id}`} className="hover:underline">
                {poll.category.name}
              </Link>
            </p>
            <Link to={`/polls/question/${poll.slug}`} className="block mt-2">
              <p className="text-xl font-semibold   text-gray-900">{poll.question_text}</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default PollCard;
