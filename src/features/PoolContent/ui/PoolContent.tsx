import { memo, useCallback, useState } from 'react'
import classNames from 'classnames'
import styles from './styles.module.css'
import {
    Job, JobMainCard, JobNameCard,
} from '@/entities/JobCard'
import { VStack } from '@/shared/ui/Stack'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { Hr } from '@/shared/ui/Hr'
import { isDone } from '../model/selectors/isDone'

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

    const jobNameCards = job?.stationList?.map((el, i) => <JobNameCard key={el.name + i} job={el} />)
    const jobNamePanels = job?.panels?.map((el, i) => isDone(el, i))

    const jobNameContent = (
        <>
            <VStack gap="12" max className={styles.JobNameCard}>
                {jobNameCards}
            </VStack>
            <Hr max />
        </>
    )

    const jobPanelContent = (
        <VStack gap="6" max className={styles.jobPanelCard}>
            {jobNamePanels}
        </VStack>
    )

    const mods = {
        [styles.border]: collapsed,
    }

    if (job.progress) {
        return (
            <Button theme={ButtonTheme.CLEAR} onClick={collapsedState}>
                <VStack className={classNames(styles.PoolContent, mods, [className])}>
                    {!collapsed ? <JobMainCard job={job} /> : null}
                    {collapsed ? <JobMainCard job={job} inverted /> : null}
                    {collapsed && isJobName ? jobNameContent : null}
                    {collapsed && isJobPanel ? jobPanelContent : null}
                </VStack>
            </Button>
        )
    }

    return (
        <VStack className={classNames(styles.PoolContent, mods, [className])}>
            {!collapsed ? <JobMainCard job={job} /> : null}
            {collapsed ? <JobMainCard job={job} inverted /> : null}
            {collapsed && isJobName ? jobNameContent : null}
            {collapsed && isJobPanel ? jobPanelContent : null}
        </VStack>
    )
})
