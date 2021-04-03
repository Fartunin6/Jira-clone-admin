import { Admin, Resource } from 'react-admin';
import DataProvider from './DataProvider';
import { UserList } from './components/User/UserList';
import { BoardList } from './components/Board/BoardList';

const App = () => {
  return (
    <Admin dataProvider={DataProvider}>
      <Resource name="user" list={UserList} />
      <Resource name="board" list={BoardList} />
    </Admin>
  );
};

export default App;
