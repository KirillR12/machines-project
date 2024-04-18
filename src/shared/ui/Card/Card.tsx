import { ReactNode, memo } from 'react'
import classNames from 'classnames'
import styles from './styles.module.css'

 interface CardProps {
   className?: string
   children: ReactNode
   dark?: boolean
   white?: boolean
   success?: boolean
}

export const Card = memo((props: CardProps) => {
    const {
        className,
        children,
        dark,
        white,
        success,
    } = props

    const mods = {
        [styles.dark]: dark,
        [styles.white]: white,
        [styles.success]: success,
    }

    return (
        <div className={classNames(styles.Card, mods, [className])}>
            {children}
        </div>
    )
})
