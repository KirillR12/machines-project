import classNames from 'classnames'
import { memo } from 'react'
import styles from './styles.module.css'
import { Text } from '@/shared/ui/Text'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Hr } from '@/shared/ui/Hr'
import { Progress } from '@/entities/Progress'
import { Card } from '@/shared/ui/Card'
import { PanelContent } from '@/entities/PanelContent'
import { Station } from '../../model/types/Station'
import { icon } from '../../model/selector/getIcon'

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
            {icon(name)}
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
                                {currentJobs ? (
                                    <Text text={currentJobs} sizeText="Medium14" color="brightBlue" />
                                ) : (
                                    <Text text="Not found" sizeText="Medium14" color="darkGrey" italic />
                                )}
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
                        {currentJobs ? <Progress completed={progress} status={status} /> : null}
                    </VStack>
                </HStack>
            </HStack>
        </HStack>
    )
})
