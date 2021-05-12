import { withRouter } from 'react-router';
import UserGrid from '../../components/Users/UserCard'
const Browse: React.FC = (): JSX.Element => {
    return (
        <p>
            Browse page working!
            <UserGrid />
        </p>
    )
}

export default withRouter(Browse)