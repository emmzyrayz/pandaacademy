
import Image from 'next/image';
import Panda from '@/assets/img/logo/panda.png';
import Link from 'next/link';

export default function Signup() {

    return (
      <div className="flex relative min-w-[100vw] min-h-[100vh] items-center justify-center">
        <div className="bg absolute flex items-center justify-center min-w-[100vw] min-h-[100vh] z-30">
          <video
            autoPlay
            muted
            loop
            className="flex min-w-[100vw] min-h-[100vh] object-cover"
          >
            <source src="/video/login-bg.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="body z-40 flex flex-col bg-white/20 border-solid border-[3px] border-white/30 w-[50%] h-[50%] items-center justify-center rounded-[12px] relative shadow-lg hover:shadow-xl ">
          <div className="head w-[170px] h-[170px] -top-[50px] rounded-full relative border-solid border-[2px] border-white/70 bg-black/40 shadow-lg">
            <Image
              src={Panda}
              alt=""
              width={300}
              height={500}
              className="absolute -top-[40px] w-full h-full flex"
            />
          </div>

          <div className="text flex flex-col items-center justify-center w-full h-full p-4 -mt-[50px] text-white">
            <span className="title text-[24px] lg:text-[28px] font-semibold lg:font-bold">
              Sign Up Here
            </span>
            <p className="text-[16px] lg:text-[18px] font-medium lg:font-semibold">
              Fill in the form
            </p>
          </div>

          <form
            action="/signup"
            method="post"
            className="flex flex-col w-full h-full items-center justify-center gap-4"
          >
            <div className="name flex flex-col w-[80%] items-start justify-center">
              <span className="name text-white text-[16px] lg:text-[18px] font-semibold lg:font-bold">
                Full Name:
              </span>
              <input
                type="text"
                name="full Name"
                id="name"
                className="flex w-[95%] h-[40px] bg-white/10 focus:bg-white/20 rounded border-none outline-none text-[14px] lg:text-[16px] font-[600] text-white p-1 mx-1"
              />
            </div>

            <div className="username flex flex-col w-[80%] items-start justify-center">
              <span className="username text-white text-[16px] lg:text-[18px] font-semibold lg:font-bold">
                Username:
              </span>
              <input
                type="text"
                name="username"
                id="username"
                className="flex w-[95%] h-[40px] bg-white/10 focus:bg-white/20 rounded border-none outline-none text-[14px] lg:text-[16px] font-[600] text-white p-1 mx-1"
              />
            </div>

            <div className="email flex flex-col w-[80%] items-start justify-center">
              <span className="email text-white text-[16px] lg:text-[18px] font-semibold lg:font-bold">
                Email:
              </span>
              <input
                type="email"
                name="email"
                id="email"
                className="flex w-[95%] h-[40px] bg-white/10 focus:bg-white/20 rounded border-none outline-none text-[14px] lg:text-[16px] font-[600] text-white p-1 mx-1"
              />
            </div>

            <div className="phone flex flex-col w-[80%] items-start justify-center">
              <span className="phone text-white text-[16px] lg:text-[18px] font-semibold lg:font-bold">
                Phone:
              </span>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="flex w-[95%] h-[40px] bg-white/10 focus:bg-white/20 rounded border-none outline-none text-[14px] lg:text-[16px] font-[600] text-white p-1 mx-1"
              />
            </div>

            <div className="password flex flex-col w-[80%] items-start justify-center">
              <span className="password text-white text-[16px] lg:text-[18px] font-semibold lg:font-bold">
                Password:
              </span>
              <input
                type="password"
                name="Password"
                id="password"
                className="flex w-[95%] h-[40px] bg-white/10 focus:bg-white/20 rounded border-none outline-none text-[14px] lg:text-[16px] font-[600] text-white p-1 mx-1"
              />
            </div>

            <input
              type="button"
              value="Sign Up"
              className="flex w-[75%] h-[50px] p-2 rounded-lg border-solid border-black/50 border-[2px] bg-black/40 hover:bg-black items-center justify-center text-white/60 hover:text-white text-[18px] font-semibold cursor-pointer transition-all duration-500 ease-in-out"
            />
          </form>

          <div className="button flex flex-row w-full h-full items-center justify-center gap-2 text-white p-3 mt-4">
            <span className="flex">Already have an account.</span>
            <Link href="/signin">
              <span className="text-[18px] font-semibold cursor-pointer hover:underline">
               Sign In
              </span>
            </Link>
          </div>
        </div>
      </div>
    );
}