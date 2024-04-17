import { memo } from 'react'
import classNames from 'classnames'
import styles from './styles.module.css'
import { Text } from '@/shared/ui/Text'
import { HStack } from '@/shared/ui/Stack'
import { Card } from '@/shared/ui/Card'
import { PanelContent } from '@/entities/PanelContent'
import { Progress } from '@/shared/ui/Progress'
import { Job } from '../../model/types/Job'
import { NameJobContent } from '../NameJobContent/NameJobContent'

 interface JobCardProps {
   className?: string
   job: Job
   inverted?: boolean
}

export const JobMainCard = memo((props: JobCardProps) => {
    const {
        className,
        job,
        inverted,
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

    const mods = {
        [styles.inverted]: inverted,
    }

    if (inverted) {
        return (
            <HStack justify="between" className={classNames(styles.JobCard, mods, [className])}>
                <HStack className={styles.jobs}>
                    <Text text={currentJobs} sizeText="Semibold14" color="white" />
                </HStack>
                <NameJobContent
                    className={styles.name}
                    name={name}
                    description={description}
                />
                <HStack className={styles.status}>
                    <Card white>
                        <Text text={status} sizeText="Semibold12" color="commentColor" />
                    </Card>
                </HStack>
                <PanelContent
                    content={panel}
                    fraction={panelDesctiption}
                    className={styles.panel}
                    panelWhite
                />
                <Progress
                    className={styles.progress}
                    completed={progress}
                    status={status}
                    panelDesctiption={panelDesctiption}
                    inverted
                />
            </HStack>
        )
    }

    return (
        <HStack justify="between" className={classNames(styles.JobCard, {}, [className])}>
            <HStack className={styles.jobs}>
                <Text text={currentJobs} sizeText="Semibold14" color="brightBlue" />
            </HStack>
            <HStack className={styles.name}>
                <Text text={name} sizeText="Medium14" color="commentColor" />
                <Text text="/" sizeText="Medium14" color="darkGrey" />
                <Text text="Sheathing Bridge" sizeText="Medium14" color="darkGrey" />
            </HStack>
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
