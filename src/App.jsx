import './App.css';
import NavBar from './components/NavBar';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import logo from './assets/herologo.png';
import dlogo from './assets/logo.png';
import section_3 from './assets/section_3.png';
import section_4 from './assets/section_4.png';
import section_5 from './assets/section_5.png';


function App() {
  return (
    <div className='flex flex-col font-inter bg-[#ededed] w-full overflow-x-auto'>
      <NavBar />
      
      {/* section 1 */}
      <section className='flex flex-col h-screen w-[1440px] mx-auto'>
        <div className='flex items-center justify-between gap-10'>
          <div className='w-[50%]'>
            <div className='p-4 space-y-6'>
              <p className='text-[#7f7f7f]'>- Free 30 DAYS TRIAL</p>
              <div className='flex flex-col text-6xl font-bold'>
                <h2 className='text-[#030303]'>The best way</h2>
                <h2 className='text-[#030303]'>to showcase</h2>
                <h2 className='text-[#030303]'>your project</h2>
              </div>

              <p>Here you can put a short description about your project.</p>
              <div className='flex gap-10'>
                <button className='px-4 py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600'>Try for free</button>
                <button className='bg-black text-white font-bold py-2 px-4 rounded'>See how it works</button>
              </div>
            </div>
          </div>

          <div className='w-[50%]'>
            <img src={logo} alt='herologo' className='object-cover' />
          </div>
        </div>

        <div className='flex flex-col items-center mx-auto mt-16 text-2xl text-center max-w-max'>
          <p>Trusted by individuals and teams at the world's best companies</p>
          <div className='flex items-center justify-between gap-4'>
            <p>Logo</p>
            <p>Logo</p>
            <p>Logo</p>
          </div>
        </div>
      </section>

      {/* section 2 */}
      <section className='flex flex-col h-screen pt-[10rem] bg-[#ededed]'>
        <div className='w-[1440px] mx-auto items-center flex justify-between'>
          <div className='flex justify-center w-[85%] mx-auto bg-white rounded-2xl'>
            <div className='flex items-center p-5 h-[479px] rounded-lg justify-between gap-3'>
              <div className='flex flex-col justify-center w-[45%] items-start'>
                <h1 className='mb-4 text-4xl font-bold text-black'>Introducing Great Solution</h1>
                <p className='mb-6 text-lg text-gray-600'>
                  Join our community and experience the benefits today!
                </p>
                <button className='px-6 py-3 font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-600'>
                  Try for Free
                </button>
              </div>
              <div className='w-[60%] rounded-3xl ml-14'>
                <img src={dlogo} className='object-contain w-full h-full rounded-3xl' />
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* section 3 */}
      <section className="bg-[#ededed] py-16 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="w-[50%] ">
            <img 
              src={section_3} 
              alt="Security Visual" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 md:pl-16">
            <h4 className="text-gray-500 uppercase tracking-wider text-sm">SMARTSAVE</h4>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">All your work is safe with us</h2>
            <p className="text-gray-600 mt-4">
            We take your data security seriously, which is why we use advanced encryption protocols to protect your files. Your details are safe and secure with us.
            </p>
            <button className="mt-6 px-6 py-3 white  text-black border-2 border-gray-400 rounded-lg text-sm font-medium hover:bg-gray-300 transition duration-200">
            Try now
            </button>
          </div>
        </div>
      </section>

        {/* section 4 */}
      <section className="bg-[#ededed] py-16 px-8 ">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 md:pr-16">
            <h4 className="text-gray-500 uppercase tracking-wider text-sm">COSTSAVER</h4>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Cost saving in a smart way</h2>
            <p className="text-gray-600 mt-4">
              Powerful tool that help you to reduce cost and save money on your business operation. 
              With advance analytics and optimization algorithm, Costsaver analyzes your existing workflow and identifies area for improvement.
            </p>
            <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition duration-200">
              Try now
            </button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img 
              src={section_4} 
              alt="Security Visual" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

        {/* section 5 */}
        
      <section className="bg-[#ededed] py-40 px-8">
        <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-lg flex relative">
          {/* Left Section with Image */}
          <div className="w-1/2 relative">
            {/* Image positioned to pop out */}
            <img
              src={section_5}
              alt="Community Graphic"
              className="w-full h-full object-cover absolute -top-1/2 -left-1/5 z-10"
            />
            
            {/* Text over the image */}
            <div className="absolute bottom-0 left-0 w-full px-8  bg-white bg-opacity-70 rounded-t-lg ">
              <h2 className="text-3xl font-bold mb-4">How to join our community</h2>
              <p className="text-gray-600 mb-6">
                Just 3 simple steps to optimize your company operations.
              </p>
              <a
                href="#"
                className="inline-block bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition-colors duration-300 mb-6"
              >
                Sign up now
              </a>
            </div>
          </div>

          {/* Right Section with Steps and Text */}
          
          <div className="w-1/2 pl-8 py-20 my-15 flex flex-col justify-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold">Step 1</h3>
                <p className="text-gray-500">
                  Reach out to one of our specialists, and have a short introduction session.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Step 2</h3>
                <p className="text-gray-500">
                  Our specialist will prepare a personalized package suitable for your needs.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Step 3</h3>
                <p className="text-gray-500">
                  Poof! You are ready to work smart with optimized operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonials/>
        {/* section 6*/}
        <section className="bg-[#ededed] py-16 flex justify-center">
      <div className="bg-white rounded-lg shadow-md p-8 flex items-center max-w-5xl w-full">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get started with Lando today</h2>
          <p className="text-lg text-gray-600 mb-6">Start optimizing your processes today.</p>
          <a
            href="#"
            className="bg-blue-600 text-white font-semibold py-3 px-6 rounded hover:bg-blue-500 transition duration-300"
          >
            Sign up now
          </a>
        </div>
        <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src={section_3}
            alt="3D Graphic"
            className="w-64 md:w-80"
          />
        </div>
      </div>
    </section>
    {/* footer */}
      <Footer/>
    </div>
  );
}

export default App;
