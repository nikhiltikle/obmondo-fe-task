import { User } from '../../interfaces/User';
import { Button } from '../Button';
import { Divider } from '../Divider';
import styles from './styles.module.css';

interface UsersListProps {
  users: User[];
  pageCount: number;
  handlePreviousButtonClick: React.MouseEventHandler<HTMLButtonElement>;
  handleNextButtonClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const UsersList = ({
  users,
  pageCount,
  handlePreviousButtonClick,
  handleNextButtonClick,
}: UsersListProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.tableAndActionWrapper}>
          <p className={styles.tableTitleText}>Users</p>

          <Divider />

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
            <div>
              <p className={styles.currentPageText}>
                Current Page: {(pageCount % 9) + 1}
              </p>
            </div>
            <div className={styles.navigationButtonContainer}>
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
    </div>
  );
};
