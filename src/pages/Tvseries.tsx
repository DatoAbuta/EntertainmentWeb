import Data  from './data.json'; 
import Serialebi from '../Serialebi';

export default function Tvseries() {
  return (
    <div>
      <Serialebi title="TV Series" items={Data} />
    </div>
  ) 
}
