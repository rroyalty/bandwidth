import { withRouter } from 'react-router';

import UserCard from '../../components/Users/UserCards'
// import SearchStatus from '../../components/Search/SearchStatus'
import './style.css'
const Find: React.FC = (): JSX.Element => {


    return (
        <div className="paddingfix" >
            {/* <SearchStatus /> */}
            <UserCard />
        
        </div>
       
     
    )
}

export default withRouter(Find)