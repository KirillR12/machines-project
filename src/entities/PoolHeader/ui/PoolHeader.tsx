import { memo } from 'react'
import classNames from 'classnames'
import styles from './styles.module.css'

 interface PoolHeaderProps {
   className?: string
}

export const PoolHeader = memo((props: PoolHeaderProps) => {
    const {
        className,
    } = props

    return (
        <div className={classNames(styles.PoolHeader, {}, [className])}>
            PoolHeader
        </div>
    )
})
