import { Admin, Resource } from 'react-admin';
import DataProvider from './DataProvider';

import UserList from './components/User/UserList';

import BoardList from './components/Board/BoardList';
import BoardCreate from './components/Board/BoardCreate';

const App = () => {
  return (
    <Admin dataProvider={DataProvider}>
      <Resource name="user" list={UserList} />
      <Resource name="board" list={BoardList} create={BoardCreate} />
    </Admin>
  );
};

export default App;
