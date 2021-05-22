import { withRouter } from 'react-router';

import UserCard from '../../components/Users/UserCards'

const Find: React.FC = (): JSX.Element => {


    return (
        <div>
     
            <UserCard />
        
        </div>
       
     
    )
}

export default withRouter(Find)