import { memo } from 'react'
import classNames from 'classnames'
import styles from './styles.module.css'
import { HStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'
import { PanelContent } from '@/entities/PanelContent'
import { Card } from '@/shared/ui/Card'
import { Progress } from '@/shared/ui/Progress'
import { Station } from '@/entities/StationCard'
import { NameJobContent } from '../NameJobContent/NameJobContent'

interface JobCollapsedCardProps {
   className?: string
   job: Station
}

export const JobNameCard = memo((props: JobCollapsedCardProps) => {
    const {
        className,
        job,
    } = props

    const {
        name,
        description,
        currentJobs,
        panel,
        panelDesctiption,
        progress,
        status,
        // panels,
        // stationList
    } = job

    return (
        <HStack justify="between" max className={classNames(styles.JobNameCard, {}, [className])}>
            <NameJobContent
                className={styles.name}
                name={name}
                description={description}
            />
            <HStack className={styles.status}>
                <Card>
                    <Text text={status} sizeText="Semibold12" color="commentColor" />
                </Card>
            </HStack>
            <PanelContent
                content={panel}
                fraction={panelDesctiption}
                className={styles.panel}
            />
            <Progress
                className={styles.progress}
                completed={progress}
                status={status}
                panelDesctiption={panelDesctiption}
            />
        </HStack>
    )
})
