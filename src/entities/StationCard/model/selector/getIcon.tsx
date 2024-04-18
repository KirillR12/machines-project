import Station1 from '@/shared/assets/icons/station 1.svg'
import Station2 from '@/shared/assets/icons/station 2.svg'
import Station3 from '@/shared/assets/icons/station 3.svg'
import Station4 from '@/shared/assets/icons/station 4.svg'
import { Icon } from '@/shared/ui/Icon'
import styles from '../../ui/StationCard/styles.module.css'

export const icon = (name: string) => {
    switch (name) {
    case 'Station No. 04':
    case 'Name in 20 characters':
        return <Icon Svg={Station1} className={styles.icon} />
        break
    case 'Station No. 01':
    case 'Station No. 05':
        return <Icon Svg={Station2} className={styles.icon} />
        break
    case 'Station No. 02':
    case 'Station No. 03':
        return <Icon Svg={Station3} className={styles.icon} />
        break
    case 'Station No. 06':
        return <Icon Svg={Station4} className={styles.icon} />
        break
    default:
        return null
        break
    }
}
