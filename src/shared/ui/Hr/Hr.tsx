import classNames from 'classnames'
import { memo } from 'react'
import styles from './styles.module.css'

 interface HrProps {
   className?: string
   width?: string
   max?: boolean
   hrVertically?: boolean
   inverted?: boolean
}

export const Hr = memo((props: HrProps) => {
    const {
        className,
        width,
        max,
        hrVertically,
        inverted,
    } = props

    const mods = {
        [styles.hrVertically]: hrVertically,
        [styles.max]: max,
        [styles.inverted]: inverted,
    }

    return (
        <hr style={{ width: `${width}` }} className={classNames(styles.Hr, mods, [className])} />
    )
})
