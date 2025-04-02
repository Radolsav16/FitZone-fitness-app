import { useLoadingContext } from "../../../providers/LoadingProvider"

export default function Spinner(){
  const { loading } = useLoadingContext()

  if(!loading) {
    return null
  }
  
    return(
      <section className="flex items-center justify-center h-screen">
      <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
    </section>
    )
}