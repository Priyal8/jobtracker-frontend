import React, { useState } from "react";
import AuthModal from "../components/AuthModal";


export default function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div className="">
      {/* Navbar */}
      
      <nav className="flex justify-between items-center px-8 py-4">
        <div className="flex items-center space-x-8 text-xl font-semibold">
          <div className="flex items-center space-x-2">
          <span><img src="src\assets\logo.svg" /></span>
          <span className="text-2xl font-bold">Job-Tracker</span>
          </div>        
        <ul className="font-regular text-lg hidden md:flex space-x-6">
          <li><a href="#features" className="hover:text-darkblue hover:text-xl hover:font-bold">Features</a></li>
          <li><a href="#how-it-works" className="hover:text-darkblue hover:text-xl hover:font-bold">How it Works</a></li>
          <li><a href="#why-us" className="hover:text-darkblue hover:text-xl hover:font-bold">Why Us</a></li>
        </ul>
        </div>
        <div className=" hidden h-10 md:flex space-x-4">
          <button onClick={() => setShowLogin(true)} className="w-24 flex items-center justify-center text-center px-4 py-2 rounded-lg border-2 border-darkblue text-darkblue font-bold hover:bg-indigo-50">LOGIN</button>
          <button onClick={() => setShowSignup(true)} className="w-24 flex items-center justify-center text-center px-4 py-2 rounded-lg bg-darkblue text-white font-bold hover:bg-darkest">JOIN</button>
        </div>
        {/* Hamburger (mobile) */}
        <button
          className="md:hidden text-darkblue"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "x" : <span className="font-bold text-sm">MENU</span> }
        </button>
      {/* </div> */}
      
      {/* Dropdown Mobile Menu (separate box below navbar) */}
      {isOpen && (
        <div className=" z-50 absolute top-18 rounded-b-lg left-0 w-full bg-white shadow-md border-t border-gray-200 md:hidden">          <div className="px-4 py-4 space-y-3 font-medium">
            <a href="#features" className="block hover:text-indigo-600">Features</a>
            <a href="#how-it-works" className="block hover:text-indigo-600">How it Works</a>
            <a href="#why-us" className="block hover:text-indigo-600">Why Us</a>

            <div className="flex flex-col space-y-2 pt-2">
              <button onClick={() => setShowLogin(true)} className="w-full px-4 py-2 rounded border-2 border-darkblue text-darkblue font-bold hover:bg-indigo-50">
                Login
              </button>
              <button onClick={() => setShowSignup(true)} className="w-full px-4 py-2 rounded bg-darkblue text-white font-bold hover:bg-darkest">
                Join
              </button>
            </div>
          </div>
        </div>
      )}
      </nav> 

      {/* Hero */}
      <section className="text-center px-10 py-24 bg-white relative overflow-hidden">
  {/* Left Spheres */}
  <img 
    src="src/assets/sphere-sm.svg" 
    alt="decorative sphere" 
    className="pointer-events-none absolute left-30 top-10 w-40 h-40 opacity-100 hidden md:block md:left-10 md:top-0 md:w-24 lg:left-40 lg:top-5 lg:w-40" 
  />
  <img 
    src="src/assets/sphere-md.svg" 
    alt="decorative sphere" 
    className="pointer-events-none absolute left-0 top-1/2 transform -translate-y-1/2 opacity-100 hidden md:block md:left-5 md:top-80 md:w-38 lg:left-0 lg:top-30 lg:w-auto" 
  />
  <img 
    src="src/assets/sphere-l.svg" 
    alt="decorative sphere" 
    className="pointer-events-none absolute left-0 bottom-15 opacity-100 hidden lg:block lg:bottom-0 lg:w-60" 
  />

  {/* Right Spheres */}
  <img 
    src="src/assets/r-sphere-md.svg" 
    alt="decorative sphere" 
    className="pointer-events-none absolute right-20 top-10 opacity-100 hidden md:block md:right-0 md:top-0 md:w-36 lg:right-0 lg:top-0 lg:w-auto" 
  />
  <img 
    src="src/assets/r-sphere-l.svg" 
    alt="decorative sphere" 
    className="pointer-events-none absolute right-0 top-[92%] transform -translate-y-1/2 opacity-100 hidden lg:block" 
  />
  <img 
    src="src/assets/r-sphere-sm.svg" 
    alt="decorative sphere" 
    className="pointer-events-none absolute right-50 bottom-30 opacity-100 hidden md:block md:right-2 md:top-60 lg:block lg:right-50 lg:bottom-10" 
  />

  <h1 className="text-5xl md:text-4xl font-semibold mb-4">Take Control of Your Job Search</h1>
  <p className="font-regular text-3xl max-w-3xl mx-auto mb-8">
    Job Tracker helps you organize, track, and manage all your job applications in one place
  </p>
  <div className="text-xl flex justify-center items-center space-x-4">
    <button onClick={() => setShowSignup(true)} className="w-48 flex items-center justify-center text-center px-4 py-2 rounded-lg bg-darkblue text-white font-bold hover:bg-darkest">JOIN NOW</button>
    <button onClick={() => setShowLogin(true)} className="w-48 flex items-center justify-center text-center px-4 py-2 rounded-lg border-2 border-darkblue text-darkblue font-bold hover:bg-indigo-50">LOGIN</button>
  </div>
</section>


      {/* Features */}
      <section id="features" className="py-16 px-6 bg-lightbg">
        <h2 className="text-2xl font-bold text-center text-darkest mb-12">Features That Help You Succeed</h2>
        <div className="px-12 grid grid-cols-1 md:grid-cols-2 gap-2 max-w-5xl mx-auto">
          {/* Block 1 - spans full width across 2 columns */}
          <div className="bg-darkblue text-white pr-14 pl-14 rounded shadow md:col-span-2">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
              {/* Text and Button */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold mt-10 mb-2">Track Every Application</h3>
                <p className="text-lg mb-4">Stay updated on every job you’ve applied to — from application to offer.</p>
                <button onClick={() => setShowSignup(true)} className="w-48 mt-23 flex items-center justify-center text-center px-4 py-2 rounded-lg bg-white text-darkblue font-bold hover:bg-indigo-50">JOIN</button>
              </div>

              {/* Image */}
              <img 
                src="src\assets\track-application.svg" 
                alt="track application" 
                className="w-110 h-78 object-contain" 
              />
            </div>
          </div>

          {/* Block 2 */}
          <div className="bg-darkblue text-white p-6 rounded shadow">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
              <div className="flex-1"> 
                <h3 className="text-xl font-bold mt-1">Organize Job Details</h3>
                <p className="text-lg mt-5" >Keep notes, deadlines, links, and contact info in one easy-to-access dashboard.</p>
              </div>
                <img 
                src="src\assets\organize-job.svg" 
                alt="track application" 
                className="w-40 h-40 object-contain" 
              />
            </div> 
          </div>

          {/* Block 3 */}
          <div className="bg-darkblue text-white p-6 rounded shadow">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
              <div className="flex-1"> 
              <h3 className="text-xl font-bold mt-1">Secure Login</h3>
              <p className="text-lg mt-5">Your data is protected with secure authentication — your job hunt stays private.</p>
            </div>
            <img 
                src="src\assets\secure-login.svg" 
                alt="track application" 
                className="w-40 h-40 object-contain" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-16 bg-mediumbg px-6">
        <h2 className="text-2xl font-bold text-center text-darkblue mb-12">How it Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
          <div className="relative bg-cardbg rounded-xl p-8  justify-center overflow-visible">
             <img 
                src="src\assets\image 1.svg" 
                alt="1" 
                className="w-20 h-20 oject-contain absolute -top-10 left-1/2 transform -translate-x-1/2" 
              />
            <h3 className="text-lg font-bold mb-1">Register</h3>
            <img 
                src="src\assets\register.svg" 
                alt="register" 
                className="w-30 mx-auto my-2 h-30 oject-contain" 
              />
            <p>Create your free account in seconds.</p>
          </div>
          <div className="relative bg-cardbg rounded-xl p-8  justify-center overflow-visible">
             <img 
                src="src\assets\image 2.svg" 
                alt="1" 
                className="w-20 h-20 oject-contain absolute -top-10 left-1/2 transform -translate-x-1/2" 
              />
            <h3 className="text-lg font-bold mb-1">Add Jobs</h3>
            <img 
                src="src\assets\add-jobs.svg" 
                alt="register" 
                className="w-30 mx-auto my-2 h-30 oject-contain" 
              />
            <p>Fill in details like position, company, and current status.</p>
          </div>
          <div className="relative bg-cardbg rounded-xl p-8  justify-center overflow-visible">
             <img 
                src="src\assets\image 3.svg" 
                alt="1" 
                className="w-20 h-20 oject-contain absolute -top-10 left-1/2 transform -translate-x-1/2" 
              />
            <h3 className="text-lg font-bold mb-1">Track Progress</h3>
            <img 
                src="src\assets\track-progress.svg" 
                alt="register" 
                className="w-30 mx-auto my-2 h-30 oject-contain" 
              />
            <p>Update your job status, take notes, and stay on top of everything.</p>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section id="why-us" className="py-10 px-4 bg-white">
        <div className="max-w-5xl m-8 grid md:grid-cols-2 gap-30 items-center">
          <div>
            <h2 className="text-5xl font-bold text-darkblue mb-8">Why Choose Job Tracker?</h2>
            <p className="text-lg font-medium">
              Applying for jobs can be stressful and confusing. Job Tracker gives you one place to manage all your applications, so you don’t lose track of opportunities. Whether you’re applying to 5 jobs or 50, stay focused and organized — without the chaos.
            </p>
          </div>
          <div className="flex justify-end">
            <img src="src\assets\why-choose 2.svg" alt="Why Choose" className="scale-140 object-contain" />
          </div>
        </div>
      </section>
      
      {showLogin && <AuthModal type="login" onClose={() => setShowLogin(false)} />}
      {showSignup && <AuthModal type="signup" onClose={() => setShowSignup(false)} />}

      {/* Footer */}
      <footer className="text-center text-white bg-black py-6 border-t text-sm text-gray-500">
        © 2025 Job Tracker. Built with <span className="text-red-500">♥</span> by <strong>Priyal</strong>
      </footer>
    </div>
  );
}
