import { useRouter } from "next/router"
import carsData from "@/data/carsdata"
function carDetail() {
    const router = useRouter()
    const id = router.query.carId-1
    console.log(id)
const carDetails = carsData[id ]
console.log(carDetails)
  return (
    <div>carDetail</div>
  )
}

export default carDetail