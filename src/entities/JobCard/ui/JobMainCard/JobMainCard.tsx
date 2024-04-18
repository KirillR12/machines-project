import { memo, useCallback } from 'react'
import classNames from 'classnames'
import styles from './styles.module.css'
import { Text } from '@/shared/ui/Text'
import { HStack } from '@/shared/ui/Stack'
import { Card } from '@/shared/ui/Card'
import { PanelContent } from '@/entities/PanelContent'
import { Progress } from '@/entities/Progress'
import { Job } from '../../model/types/Job'
import { NameJobContent } from '../NameJobContent/NameJobContent'
import { Icon } from '@/shared/ui/Icon'
import Delete from '@/shared/assets/icons/delete.svg'
import { Button, ButtonTheme } from '@/shared/ui/Button'

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
        stationList,
    } = job

    const mods = {
        [styles.inverted]: inverted,
    }

    const btnDelete = useCallback(() => (e: any) => {
        e.stopPropagation()
    }, [])

    const isStationList = stationList?.length
    const abbreviationsWhite = stationList?.map((el, i) => (
        <Card key={el.abbreviation + i}>
            <Text text={el.abbreviation} sizeText="Semibold12" color="commentColor" />
        </Card>
    ))

    const abbreviationsDark = stationList?.map((el, i) => (
        <Card key={el.abbreviation + i} success>
            <Text text={el.abbreviation} sizeText="Semibold12" color="commentColor" />
        </Card>
    ))

    if (inverted) {
        return (
            <HStack justify="between" className={classNames(styles.JobCard, mods, [className])}>
                <HStack className={styles.jobs}>
                    <Text text={currentJobs} sizeText="Semibold14" color="white" />
                </HStack>
                <HStack className={styles.name}>
                    {!isStationList ? (
                        <NameJobContent
                            className={styles.name}
                            name={name}
                            description={description}
                            inverted
                        />
                    ) : (
                        <HStack justify="between" className={styles.abbreviation}>
                            {abbreviationsDark}
                        </HStack>
                    )}
                </HStack>
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
                {!isStationList ? (
                    <NameJobContent
                        className={styles.name}
                        name={name}
                        description={description}
                    />
                ) : (
                    <HStack justify="between" className={styles.abbreviation}>
                        {abbreviationsWhite}
                    </HStack>
                )}
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
            {progress ? (
                <Progress
                    className={styles.progress}
                    completed={progress}
                    status={status}
                />
            ) : (
                <HStack justify="end" className={styles.btn}>
                    <Button theme={ButtonTheme.CLEAR} onClick={btnDelete()}>
                        <Icon Svg={Delete} />
                    </Button>
                </HStack>
            )}
        </HStack>
    )
})
