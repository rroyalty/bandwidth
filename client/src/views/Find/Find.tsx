import { withRouter } from 'react-router';
import React, {useState} from 'react';

import UserCard from '../../components/Users/UserCards';
import SearchStatus from '../../components/Search/SearchStatus';
import './style.css';


const Find: React.FC = (): JSX.Element => {

const [status, setSearchStatus] = useState("");

    return (
        <div className="paddingfix" >
            <SearchStatus status={status} setSearchStatus={setSearchStatus} />
            <UserCard status={status}>
                {/* <h2>Can also render children components here</h2> */}
            </UserCard>
        </div>
    )
}

export default withRouter(Find);