import { useEffect, useState } from 'react';
import { User } from '../../interfaces/User';
import { getUsers } from '../../apis/users/getUsers';
import { UsersList } from '../../components/UsersList';

export const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [pageCount, setPageCount] = useState(0);

  const fetchUsers = async () => {
    const usersRes = await getUsers(pageCount);
    setUsers(usersRes);
  };

  const handlePreviousButtonClick = () => {
    setPageCount(Number(users[0].ID) - 11);
  };

  const handleNextButtonClick = () => {
    setPageCount(Number(users[9].ID));
  };

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageCount]);

  return (
    <UsersList
      users={users.slice(0, 10)}
      pageCount={pageCount}
      handleNextButtonClick={handleNextButtonClick}
      handlePreviousButtonClick={handlePreviousButtonClick}
    />
  );
};
