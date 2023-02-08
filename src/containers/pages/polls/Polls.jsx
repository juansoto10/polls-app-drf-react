import PollsList from "components/polls/PollsList";
import PollsCategories from "components/polls/PollsCategories";
import Header from "components/polls/Header";
import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { useEffect } from "react";
import { connect } from "react-redux";
import { get_polls_list, get_polls_list_page } from "redux/actions/polls";


function Polls({
  get_polls_list,
  get_polls_list_page,
  polls_list
}) {

  useEffect(() => {
    get_polls_list()
  }, [])


  return (
    <FullWidthLayout>
      <Header />
      <PollsCategories />
      <PollsList get_polls_list_page={get_polls_list_page} polls_list={polls_list} />
    </FullWidthLayout>
  )
}
  
const mapStateToProps = state => ({
  polls_list: state.polls.polls_list,
})

export default connect(mapStateToProps, {
  get_polls_list,
  get_polls_list_page
})(Polls)
  