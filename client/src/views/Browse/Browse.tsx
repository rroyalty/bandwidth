import { withRouter } from 'react-router';
import UserGrid from '../../components/Users/UserCard'
const Browse: React.FC = (): JSX.Element => {
    return (
        <div>
     
            <UserGrid />
        </div>
    )
}

export default withRouter(Browse)