import { ButtonHTMLAttributes, FC } from 'react'
import classNames from 'classnames'
import styles from './styles.module.css'

export enum ButtonTheme {
    CLEAR = 'clear',
}

 interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   className?: string,
   theme?: ButtonTheme,
   square?: boolean,
   disabled?: boolean,
   fillWidth?: boolean
   noHover?: boolean
}

export const Button: FC <ButtonProps> = (props) => {
    const {
        children,
        className,
        theme = ButtonTheme.CLEAR,
        square,
        disabled,
        fillWidth,
        noHover,
        ...otherProps
    } = props

    const mods = {
        [styles.square]: square,
        [styles.disabled]: disabled,
        [styles.fillWidth]: fillWidth,
        [styles.noHover]: noHover,
    }

    return (
        <button
            type="button"
            disabled={disabled}
            className={classNames(
                styles.Button,
                mods,
                [className, styles[theme]],
            )}
            {...otherProps}
        >
            {children}
        </button>
    )
}
