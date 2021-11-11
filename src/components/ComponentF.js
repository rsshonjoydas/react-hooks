import { ChannelContext, UserContext } from '../App';

const ComponentF = () => (
  <div>
    <UserContext.Consumer>
      {(user) => (
        <ChannelContext.Consumer>
          {(chnnel) => (
            <div>
              User context value {user}, channel context value {chnnel}
            </div>
          )}
        </ChannelContext.Consumer>
      )}
    </UserContext.Consumer>
  </div>
);

export default ComponentF;
