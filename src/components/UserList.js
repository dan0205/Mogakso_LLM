import React, { useState, useEffect } from 'react';
import UserItem from './UserItem';

function UserList() {
  const [users, setUsers] = useState([]);       // 사용자 목록
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState(null);     // 에러 상태

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users') // 예제 API
      .then((response) => {
        if (!response.ok) throw new Error('네트워크 오류');
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>에러 발생: {error}</p>;

  return (
    <ul>
      {users.map((user) => (
        <UserItem key={user.id} name={user.name} email={user.email} />
      ))}
    </ul>
  );
}

export default UserList;
