import classNames from 'classnames'
import { memo } from 'react'
import styles from './styles.module.css'
import { Icon } from '@/shared/ui/Icon'
import StationIcon from '@/shared/assets/icons/station.svg'
import { Text } from '@/shared/ui/Text'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Hr } from '@/shared/ui/Hr'
import { Progress } from '@/shared/ui/Progress'
import { Card } from '@/shared/ui/Card'
import { PanelContent } from '@/entities/PanelContent'
import { Station } from '../../model/types/Station'

interface StationCardProps {
   className?: string
   station: Station
}

export const StationCard = memo((props: StationCardProps) => {
    const {
        className,
        station,
    } = props

    const {
        name,
        currentJobs,
        description,
        panel,
        panelDesctiption,
        progress,
        status,
    } = station

    return (
        <HStack gap="16" align="center" className={classNames(styles.StationCard, {}, [className])}>
            <Icon Svg={StationIcon} className={styles.icon} />
            <HStack align="start" className={styles.content} max>
                <HStack gap="24" align="end">
                    <HStack gap="50" align="end">
                        <VStack className={styles.contentLeft}>
                            <HStack gap="6" justify="center" align="end">
                                <Text title={name} sizeTitle="Semibold16" tag="h5" color="blue" />
                                <Text text={description} sizeText="Medium14" color="grey" />
                            </HStack>
                            <HStack gap="6" justify="center" align="end">
                                <Text text="Current job:" sizeText="Medium14" color="grey" />
                                <Text text={currentJobs} sizeText="Medium14" color="brightBlue" />
                            </HStack>
                        </VStack>
                        <HStack gap="16" align="end" className={styles.contentPanel}>
                            {panel ? (
                                <>
                                    <Hr hrVertically inverted height="17px" />
                                    <PanelContent
                                        content={panel}
                                        fraction={panelDesctiption}
                                    />
                                    <Hr hrVertically inverted height="17px" />
                                </>
                            ) : null}
                        </HStack>
                    </HStack>
                    <VStack justify="between" align="end" className={styles.progress}>
                        {status === 'error' ? (
                            (
                                <Card dark>
                                    <Text text={status} sizeText="Semibold12" color="white" />
                                </Card>
                            )
                        ) : (
                            <Card>
                                <Text text={status} sizeText="Semibold12" color="commentColor" />
                            </Card>
                        )}
                        <Progress completed={progress} status={status} panelDesctiption={panelDesctiption} />
                    </VStack>
                </HStack>
            </HStack>
        </HStack>
    )
})
