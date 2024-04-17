import { memo } from 'react'
import { HStack } from '@/shared/ui/Stack'
import styles from './styles.module.css'
import { Text } from '@/shared/ui/Text'

interface EquipmentHeaderProps {
    quantity: number
}

export const EquipmentHeader = memo((props: EquipmentHeaderProps) => {
    const {
        quantity,
    } = props

    return (
        <HStack gap="6" align="end" className={styles.header}>
            <Text title="Factory equipment" sizeTitle="Semibold28" color="brightBlue" tag="h1" />
            <Text title={String(quantity)} sizeTitle="Bold20" color="grey" tag="h2" />
        </HStack>
    )
})
