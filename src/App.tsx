import { type FC } from 'react'
import DeviceGrid from './components/devicegrid/DeviceGrid';
import styles from './App.module.scss';

 const App: FC<{}> = () => {
  return (
    <div className={styles.appContainer}>
      <DeviceGrid />
    </div>
  )
}


export default App;