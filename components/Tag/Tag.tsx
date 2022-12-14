import cn from 'classnames';
import { TagProps } from './Tag.props';

import styles from './Tag.module.css';

const Tag = ({
  size = 'm',
  children,
  color = 'ghoust',
  href,
  className,
  ...props
}: TagProps): JSX.Element => {
  return (
    <div
      className={cn(styles.tag, className, {
        [styles.s]: size === 's',
        [styles.m]: size === 'm',
        [styles.ghoust]: color === 'ghoust',
        [styles.red]: color === 'red',
        [styles.grey]: color === 'grey',
        [styles.green]: color === 'green',
        [styles.primary]: color === 'primary',
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
export default Tag;
