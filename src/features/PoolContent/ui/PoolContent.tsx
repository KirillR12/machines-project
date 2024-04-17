import { memo, useCallback, useState } from 'react'
import classNames from 'classnames'
import styles from './styles.module.css'
import {
    Job, JobMainCard, JobNameCard, JobPanelCard,
} from '@/entities/JobCard'
import { VStack } from '@/shared/ui/Stack'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { Hr } from '@/shared/ui/Hr'

interface PoolContentProps {
   className?: string
   job: Job
}

export const PoolContent = memo((props: PoolContentProps) => {
    const {
        className,
        job,
    } = props

    const [collapsed, setCollapsed] = useState(false)

    const collapsedState = useCallback(() => {
        setCollapsed((prev) => !prev)
    }, [])

    const isJobName = job?.stationList?.length
    const isJobPanel = job?.panels?.length

    const jobNameCards = job?.stationList?.map((el) => <JobNameCard key={el.name} job={el} />)
    const jobNamePanels = job?.panels?.map((el, i) => <JobPanelCard key={el.name} index={i + 1} panel={el} />)

    return (
        <Button key={job.panelDesctiption} theme={ButtonTheme.CLEAR} onClick={collapsedState}>
            <VStack className={classNames(styles.PoolContent, {}, [className])}>
                {!collapsed ? <JobMainCard job={job} /> : null}
                {collapsed ? (
                    <JobMainCard job={job} inverted />
                ) : null}
                {collapsed && isJobName ? (
                    <>
                        <VStack gap="12" max className={styles.JobNameCard}>
                            {jobNameCards}
                        </VStack>
                        <Hr max />
                    </>
                ) : null}
                {collapsed && isJobPanel ? (
                    <VStack gap="6" max className={styles.jobPanelCard}>
                        {jobNamePanels}
                    </VStack>
                ) : null}
            </VStack>
        </Button>
    )
})
