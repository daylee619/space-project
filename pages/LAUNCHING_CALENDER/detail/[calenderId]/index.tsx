import CalenderReviewList from '../../../../src/components/units/calenderReviewList/CalenderReviewList'
import CalenderReviewWrite from '../../../../src/components/units/calenderReviewWrite/ReviewWrite'
import LaunchingCalenderDetail from '../../../../src/components/units/launching-calender/launching-calender-detail/LaunchingCalenderDetail'
import { Div } from '../../../../styles/LaunchingCalenderDIv.style'



const LaunchingCalenderDetailPage = () => {
    return (
        <Div>
            <LaunchingCalenderDetail />
            <CalenderReviewWrite />
            <CalenderReviewList />
        </Div>
    )
}

export default LaunchingCalenderDetailPage