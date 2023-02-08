import LoadingCard from "components/loaders/LoadingCard"
import SmallSetPagination from "components/pagination/SmallSetPagination"
import { useEffect } from "react"
import { connect } from "react-redux"
import PollCard from "./PollCard"

function PollsList({
  polls_list,
  get_polls_list_page,
  count
}) {
    
  return (
    <div>
      {
        polls_list ?
        <>
          <div className="relative bg-white pb-8 px-4 sm:px-6 lg:pb-12 lg:px-8">
            <div className="absolute inset-0">
              <div className="bg-white h-1/3 sm:h-2/3" />
            </div>

            <div className="relative max-w-7xl mx-auto">
                
              <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                {
                  polls_list.map(poll => (
                    <PollCard data={poll}/>
                  ))
                }
              </div>

              <SmallSetPagination 
                get_polls_list_page={get_polls_list_page} 
                polls_list={polls_list}
                count={count}
              />

            </div>
          </div>
        </>

        :
        <LoadingCard/>
      }
    </div>
  )
}

const mapStateToProps = state => ({
  count: state.polls.count
})

export default connect(mapStateToProps, {
})(PollsList)
