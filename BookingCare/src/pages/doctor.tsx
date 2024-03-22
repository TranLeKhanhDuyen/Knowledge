import { Image, Options } from "@components/common"
import doctor1 from '@assets/doctors/hua-thuy-vi.jpg'
import Text from "@components/common/Text/Text"

const DoctorDetailPage = () => {
  return (
    <div className="doctor-container">
      <div className="doctor-sumary">
        <Image type='circle' src={doctor1} width="50" height="50" />
        <Text />
      </div>
      <div className="description">

        <div className="description-left">
        </div>

        <div className="description-right">
          <Text />
        </div>
      </div>
      <div className="overview">
      </div>
    </div>
  )
}
export default DoctorDetailPage
