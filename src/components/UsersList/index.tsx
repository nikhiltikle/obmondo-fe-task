import { useEffect, useState } from 'react';
import { Container } from '../Container';
import { User } from '../../interfaces/User';
import { getUsers } from '../../apis/users/getUsers';
import { Button } from '../Button';
import { Divider } from '../Divider';
import styles from './styles.module.css';

export const UsersList = () => {
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
    <Container>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.tableAndActionWrapper}>
            <table className={styles.userTable}>
              <thead>
                <tr>
                  <td
                    width='10%'
                    className={styles.userTableHeader}
                  >
                    Sr. No.
                  </td>
                  <td
                    width='20%'
                    className={styles.userTableHeader}
                  >
                    Name
                  </td>
                  <td
                    width='15%'
                    className={styles.userTableHeader}
                  >
                    Phone
                  </td>
                  <td
                    width='25%'
                    className={styles.userTableHeader}
                  >
                    Email
                  </td>
                  <td
                    width='15%'
                    className={styles.userTableHeader}
                  >
                    Job Title
                  </td>
                  <td
                    width='15%'
                    className={styles.userTableHeader}
                  >
                    Company
                  </td>
                </tr>
              </thead>

              <tbody>
                {users.slice(0, 10).map((user, index: number) => (
                  <tr key={user.ID}>
                    <td className={styles.userListItem}>{index + 1}</td>
                    <td className={styles.userListItem}>
                      {user.FirstNameLastName}
                    </td>
                    <td className={styles.userListItem}>{user.Phone}</td>
                    <td className={styles.userListItem}>{user.Email}</td>
                    <td className={styles.userListItem}>{user.JobTitle}</td>
                    <td className={styles.userListItem}>{user.Company}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <Divider />

            <div className={styles.actionButtonContainer}>
              <Button
                title='Previous'
                disabled={pageCount <= 0}
                onClick={handlePreviousButtonClick}
              />
              <Button
                title='Next'
                onClick={handleNextButtonClick}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
