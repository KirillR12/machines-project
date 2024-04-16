import classNames from 'classnames'
import { memo } from 'react'
import styles from './styles.module.css'
import { Icon } from '@/shared/ui/Icon'
import Station from '@/shared/assets/icons/station.svg'
import { Text } from '@/shared/ui/Text'
import { HStack, VStack } from '@/shared/ui/Stack'

 interface StationCardProps {
   className?: string
}

export const StationCard = memo((props: StationCardProps) => {
    const {
        className,
    } = props

    return (
        <HStack className={classNames(styles.StationCard, {}, [className])}>
            <Icon Svg={Station} />
            <VStack>
                <HStack gap="6" justify="center" align="end">
                    <Text title="Name in 20 characters" sizeTitle="Semibold16" tag="h5" color="blue" />
                    <Text text="Extruder" sizeText="Medium14" color="grey" />
                    <HStack gap="6" justify="center" align="end">
                        <Text text="Current job:" sizeText="Medium14" color="grey" />
                    </HStack>
                </HStack>
            </VStack>
        </HStack>
    )
})
