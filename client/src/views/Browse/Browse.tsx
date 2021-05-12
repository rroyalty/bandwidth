import { withRouter } from 'react-router';
import UserGrid from '../../components/Users/UserGrid'
const Browse: React.FC = (): JSX.Element => {
    return (
        <div>
     
            <UserGrid />
        </div>
    )
}

export default withRouter(Browse)