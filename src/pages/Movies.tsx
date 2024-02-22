import Filmebi from '../Filmebi'
import Data  from './data.json'; 



export default function movies() {
  return (
    <div>
      <Filmebi title="Movies" items={Data} />
    </div>
  )
}
