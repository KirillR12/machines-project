import { ButtonHTMLAttributes, ReactNode } from 'react'
import classNames from 'classnames'
import styles from './styles.module.css'

export enum ButtonTheme {
    CLEAR = 'clear',
}

 interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   className?: string,
   theme?: ButtonTheme,
   children: ReactNode
}

export const Button = (props: ButtonProps) => {
    const {
        children,
        className,
        theme = ButtonTheme.CLEAR,
        ...otherProps
    } = props

    return (
        <button
            type="button"
            className={classNames(
                styles.Button,
                {},
                [className, styles[theme]],
            )}
            {...otherProps}
        >
            {children}
        </button>
    )
}
