import cn from 'classnames';
import { ButtonProps } from './Button.props';
import styles from './Button.module.css';

export const Button = ({
  children,
  appearance,
  className,
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
    </button>
  );
};
