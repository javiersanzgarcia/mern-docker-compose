import './Backdrop.css'

const Backdrop = (show: any, click: any) => {
  return (
    show && <div className="backdrop" onClick={() => click}></div>
  )
}

export default Backdrop
