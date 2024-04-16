import { memo } from 'react'
import classNames from 'classnames'
import { Hr } from '@/shared/ui/Hr'
import { StationCard } from '@/entities/StationCard'
import { VStack } from '@/shared/ui/Stack'
import styles from './styles.module.css'

 interface EquipmentContentProps {
   className?: string
}

export const EquipmentContent = memo((props: EquipmentContentProps) => {
    const {
        className,
    } = props

    return (
        <>
            <Hr width="753px" inverted max />
            <VStack className={classNames(styles.EquipmentContent, {}, [className])}>
                <StationCard />
            </VStack>
        </>
    )
})
