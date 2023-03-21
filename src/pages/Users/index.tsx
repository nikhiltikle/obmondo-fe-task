import { useCallback, useEffect, useState } from 'react';
import { User } from '../../interfaces/User';
import { getUsers } from '../../apis/users/getUsers';
import { UsersList } from '../../components/UsersList';

export const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [pageCount, setPageCount] = useState(0);

  const fetchUsers = useCallback(async () => {
    const usersRes = await getUsers(pageCount);
    setUsers(usersRes);
  }, [pageCount]);

  const handlePreviousButtonClick = useCallback(() => {
    setPageCount(Number(users[0].ID) - 11);
  }, [users]);

  const handleNextButtonClick = useCallback(() => {
    setPageCount(Number(users[9].ID));
  }, [users]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers, pageCount]);

  return (
    <UsersList
      users={users.slice(0, 10)}
      pageCount={pageCount}
      handleNextButtonClick={handleNextButtonClick}
      handlePreviousButtonClick={handlePreviousButtonClick}
    />
  );
};
