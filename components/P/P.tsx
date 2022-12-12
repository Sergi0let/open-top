import { PProps } from './P.props';
import styles from './P.module.css';
import cn from 'classnames';

const P = ({ children, size }: PProps): JSX.Element => {
  return (
    <p
      className={cn(styles.p, {
        [styles.small]: size === 'small',
        [styles.big]: size === 'big',
      })}
    >
      {children}
    </p>
  );
};
export default P;
