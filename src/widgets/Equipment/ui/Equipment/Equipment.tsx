import classNames from 'classnames'
import { memo } from 'react'
import styles from './styles.module.css'
import { EquipmentHeader } from '@/entities/EquipmentHeader'
import { EquipmentContent } from '@/features/EquipmentContent'

 interface EquipmentProps {
   className?: string
}

export const Equipment = memo((props: EquipmentProps) => {
    const {
        className,
    } = props

    return (
        <div className={classNames(styles.Equipment, {}, [className])}>
            <EquipmentHeader />
            <EquipmentContent />
        </div>
    )
})
