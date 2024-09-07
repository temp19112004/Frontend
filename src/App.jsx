import './App.css'
import NavBar from './components/NavBar'
import logo from './assets/herologo.png'
import dlogo from './assets/logo.png'
function App() {


  return (

    <div className='   flex flex-col  font-inter bg-[#ededed] w-full overflow-x-auto'>
      <NavBar />
      {/* section 1 */}
      <section className='flex flex-col h-screen w-[1440px] mx-auto'>
        <div className='flex items-center justify-between gap-10'>
          <div className='w-[50%] '>
            <div className='p-4 space-y-6'>
              <p className='text-[#7f7f7f]'>- Free 30 DAYS TRIAL</p>
              <div className='flex flex-col text-6xl font-bold'>
                <h2 className='text-[#030303]'>The best way  </h2>
                <h2 className='text-[#030303]'> to showcase</h2>
                <h2 className='text-[#030303]'> your project</h2>
              </div>

              <p>Here you can put a short description about your project.</p>
              <div className='flex gap-10'>
                <button type="submit" class="px-4 py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600">Try for free</button>
                <button type="submit" class="bg-black  text-white font-bold py-2 px-4 rounded">See how it works  </button>
              </div>
            </div>

          </div>

          <div className='w-[50%]'>
            <img src={logo} alt='herologo' className='object-cover ' />
          </div>
        </div>

        <div className='flex flex-col items-center mx-auto mt-16 text-2xl text-center max-w-max'>
          <p>Trusted by individuals and teams at the world's best companies
          </p>
          <div className='flex items-center justify-between gap-4 '>
            <p>Logo</p>
            <p>Logo</p>
            <p>Logo</p>
          </div>

        </div>


      </section>

      


      <section className='flex flex-col h-screen  pt-[10rem] bg-[#ededed] '>
        <div className='w-[1440px] mx-auto items-center flex justify-between'>


          <div className='flex justify-center w-[85%] mx-auto bg-white rounded-2xl'>

            <div className='flex items-center  p-5 h-[479px] rounded-lg  justify-between gap-3'>
              <div className='flex flex-col  justify-center w-[45%] items-start' >
                <h1 className='mb-4 text-4xl font-bold text-black'>Introducing Great Solution</h1>
                <p className='mb-6 text-lg text-gray-600'>
                  Join our community and experience the benefits today!
                </p>
                <button className="px-6 py-3 font-semibold text-white transition bg-blue-500 rounded-full hover:bg-blue-600">
                  Try for Free
                </button>

              </div>
              <div className='w-[60%] rounded-3xl ml-14'>
                <img src={dlogo} className='object-contain w-full h-full rounded-3xl '></img>
              </div>

            </div>



          </div>




        </div>
      </section>


        {/* section 3  */}
        {/* <section className='flex flex-col h-full mt-14 pt-[15rem] bg-[#ededed] mb-18'>
          
        </section> */}

      
    </div>


  )
}

export default App
