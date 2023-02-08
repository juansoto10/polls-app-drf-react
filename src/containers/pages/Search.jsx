import { connect } from "react-redux";
import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { search_poll } from "redux/actions/polls";
import PollsList from "components/polls/PollsListSearch";

function Search({
  search_poll,
  polls
}) {

  const params = useParams()
  const term = params.term

  useEffect(() => {
    search_poll(term)
  }, [])

  return (
    <FullWidthLayout>
      <PollsList polls_list={polls}/>
    </FullWidthLayout>
  )
}

const mapStateToProps = state => ({
  polls: state.polls.filtered_polls
})

export default connect(mapStateToProps, {
  search_poll
})(Search)
