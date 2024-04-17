import { ReactNode, memo } from 'react'
import classNames from 'classnames'
import styles from './styles.module.css'

 interface CardProps {
   className?: string
   children: ReactNode
   dark?: boolean
   white?: boolean
}

export const Card = memo((props: CardProps) => {
    const {
        className,
        children,
        dark,
        white,
    } = props

    const mods = {
        [styles.dark]: dark,
        [styles.white]: white,
    }

    return (
        <div className={classNames(styles.Card, mods, [className])}>
            {children}
        </div>
    )
})
