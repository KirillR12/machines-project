import { memo } from 'react'
import classNames from 'classnames'
import { Hr } from '@/shared/ui/Hr'
import { Station, StationCard } from '@/entities/StationCard'
import { VStack } from '@/shared/ui/Stack'
import styles from './styles.module.css'

 interface EquipmentContentProps {
   className?: string
   station: Station[]
}

export const EquipmentContent = memo((props: EquipmentContentProps) => {
    const {
        className,
        station,
    } = props

    return (
        <>
            <Hr width="753px" inverted max />
            <VStack gap="6" className={classNames(styles.EquipmentContent, {}, [className])}>
                {station!.map((el, i) => <StationCard key={el.name + i} station={el} />)}
            </VStack>
        </>
    )
})
