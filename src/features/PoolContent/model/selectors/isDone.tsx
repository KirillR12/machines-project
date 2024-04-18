import { JobPanelCard, Panel } from '@/entities/JobCard'

export const isDone = (el: Panel, i: number) => {
    switch (el.status) {
    case 'completed':
    case 'Done by hand':
        return (<JobPanelCard key={el.name + i} index={i + 1} panel={el} done />)
        break
    case 'in progress':
        return (<JobPanelCard key={el.name + i} index={i + 1} panel={el} progressCard />)
        break
    default:
        return (<JobPanelCard key={el.name + i} index={i + 1} panel={el} />)
        break
    }
}
