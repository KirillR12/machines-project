import classNames from 'classnames'
import { memo } from 'react'
import styles from './styles.module.css'
import { EquipmentHeader } from '@/entities/EquipmentHeader'
import { EquipmentContent } from '@/features/EquipmentContent'
import { useEquipmentContentApi } from '../../api/equipmentContentApi'

 interface EquipmentProps {
   className?: string
}

export const Equipment = memo((props: EquipmentProps) => {
    const { data } = useEquipmentContentApi(null)
    const {
        className,
    } = props

    if (data) {
        return (
            <div className={classNames(styles.Equipment, {}, [className])}>
                <EquipmentHeader quantity={data.length} />
                <EquipmentContent station={data} />
            </div>
        )
    }
    return null
})
