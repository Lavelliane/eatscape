import Avatar from './Avatar'
function Sidebar({ children }) {
  return (
    <div className="bg-white w-60 min-h-screen rounded-r-2xl">
      <h1 className="pl-16 pt-7 text-2xl">
      <span className="text-[#297347] font-bold">eat</span><span className="text-[#a3e635] font-medium">scape</span>
      </h1>
      
   <hr className="border-[#F6F6F6]  m-8 border-t-2 mt-6 "/>
   <Avatar/>
   <h1 className="text-[#000000] pl-5 font-medium text-lg mt-2">Hello! Jhury</h1>

   
        { children }
    </div>
    
  )
  
}




export default Sidebar