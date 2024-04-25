import first from '/first.png'

const First = () => {
  return (
    <div className='relative'>
      <img src={first} alt="first" className="w-[1725px] h-[940px] rounded-t-[470px]"/>
      <div className='absolute top-[45%] text-white left-32'>
        <p style={Styles.fontSize50}>あたりまえ工房</p>
        <p style={Styles.fontSize50}>ポートフォリオ</p>
      </div>
    </div>
  )
};

const Styles = {
  fontSize50:{
    fontSize: "50px",
    fontFamily: "Noto Sans Japanese"
  }
}



export default First;