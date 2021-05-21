import { withRouter } from 'react-router';
import UserGrid from '../../components/Users/UserGrid'
import UserCard from '../../components/Users/UserCards'

const Find: React.FC = (): JSX.Element => {


    return (
        <div>
     
            <UserCard />
            {/* <UserGrid /> */}
        </div>
       
     
    )
}

export default withRouter(Find)