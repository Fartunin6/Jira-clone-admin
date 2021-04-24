import { Admin, Resource } from 'react-admin';
import DataProvider from './DataProvider';

import UserList from './components/User/UserList';
import BoardList from './components/Board/BoardList';
import BoardBackgroundList from './components/BoardBackground/BoardBackgroundList';

import BoardCreate from './components/Board/BoardCreate';
import BoardBackgroundCreate from './components/BoardBackground/BoardBackgroundCreate';

import BoardEdit from './components/Board/BoardEdit';

const App = () => {
  return (
    <Admin dataProvider={DataProvider}>
      <Resource name="user" list={UserList} />
      <Resource name="board" list={BoardList} create={BoardCreate} edit={BoardEdit} />
      <Resource name="backgrounds" list={BoardBackgroundList} create={BoardBackgroundCreate} />
    </Admin>
  );
};

export default App;
