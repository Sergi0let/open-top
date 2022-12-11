import cn from 'classnames';
import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import ArrowIcon from '../../public/arrow.svg';

export const Button = ({
  children,
  appearance,
  className,
  arrow = 'none',
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance == 'primary',
        [styles.ghoust]: appearance == 'ghoust',
      })}
      {...props}
    >
      {children}
      {arrow !== 'none' && (
        <span className={cn(styles.arrow, { [styles.down]: arrow === 'down' })}>
          {/* <img src="./arrow.svg" alt="arrow" /> */}
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};
