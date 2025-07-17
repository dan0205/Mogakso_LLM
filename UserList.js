import UserItem from './UserItem';

const users = [
  { name: 'Alice', email: 'alice@email.com' },
  { name: 'Bob', email: 'bob@email.com' },
];

function UserList() {
  return (
    <ul>
      {users.map((user, idx) => (
        <UserItem key={idx} name={user.name} email={user.email} />
      ))}
    </ul>
  );
}
export default UserList; 