import PollsCategories from "components/polls/PollsCategories";
import Header from "components/polls/Header";
import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { useEffect } from "react";
import { connect } from "react-redux";


function Categories({

}) {

  useEffect(() => {
    
  }, [])


  return (
    <FullWidthLayout>
      <Header />
      <PollsCategories />
    </FullWidthLayout>
  )
}
  
const mapStateToProps = state => ({
  
})

export default connect(mapStateToProps, {

})(Categories)
  