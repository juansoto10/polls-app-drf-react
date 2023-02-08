import PollsList from "components/polls/PollsList"
import CategoryPollsList from "components/polls/CategoryPollsList"
import FullWidthLayout from "hocs/layouts/FullWidthLayout"
import { useEffect } from "react"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import { get_polls_list_category, get_polls_list_category_page } from "redux/actions/polls"


function PollsCategory({
  get_polls_list_category,
  polls_list, 
  count, 
  get_polls_list_category_page
}) {

  const params = useParams()
  const category_id = params.category_id

  useEffect(() => {
    get_polls_list_category(category_id)
  }, [])

  return (
    <FullWidthLayout>
      <CategoryPollsList get_polls_list_page={get_polls_list_category_page} polls_list={polls_list} category_id={category_id}/>
    </FullWidthLayout>
  )
}

const mapStateToProps = state => ({
  polls_list: state.polls.polls_list_category,
  count: state.polls.count
})

export default connect(mapStateToProps, {
  get_polls_list_category,
  get_polls_list_category_page
})(PollsCategory)
