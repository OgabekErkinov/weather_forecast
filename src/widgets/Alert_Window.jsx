import useAlert from "../states/alertState"

const Alert_Window = () => {
    const { message, isAlert, setIsAlert } = useAlert()

    setTimeout(() => {
        setIsAlert(false)
    },3000)
    
  return (
    <div className={`relative z-20 top-0 left-[50%] ${isAlert ? 'block' : 'hidden'}`}>
    <div className='h-[100vh] w-[100vw] flex justify-center items-center'>
        <div className='h-[120px] w-[300px] flex items-center justify-center rounded-2xl shadow-xs shadow-red-600'>
           <h4 className="font-bold text-rose-600 text-2xl">
             { message }
           </h4>
        </div>  
    </div>
    </div>
  )
}

export default Alert_Window