'use client';
import { useState } from 'react';
import { apiConnector } from '@/lib/apiConnector';
import Cookies from 'js-cookie';
import Image from 'next/image';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { useProfile } from '@/hooks/use-profile';
import ForgotPassword from './Forget-Password';

const signinSchema = z.object({
  email: z.string().min(1, { message: "Username or email address is required" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

export default function Signin() {
  const router = useRouter();
  const { setUser } = useProfile();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      signinSchema.parse(formData);
      setErrors({});
      setLoading(true); 

      const response = await apiConnector('POST', '/user/login', formData);
      const data = response.data;

      Cookies.set("accessToken", data.accessToken);
      Cookies.set('admin', data.user.admin);
      setUser(data.user);

    
      console.log('AccessToken:', Cookies.get('accessToken'));
      console.log('Admin:', Cookies.get('admin'));

      if (data?.user?.admin === 1) {
        router.replace("/");
      } else if (data?.user?.admin === 0) {
        console.log("hello user");
        router.replace("/");
      }
    } catch (err) {
      if (err instanceof z.ZodError) {
        const fieldErrors = {};
        err.errors.forEach((error) => {
          fieldErrors[error.path[0]] = error.message;
        });
        setErrors(fieldErrors);
      } else {
        console.error(err);
        setErrors({ apiError: "Invalid username or password" });
      }
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="w-full mt-4 h-auto p-5">
      <div className="sm:w-[100%] md:w-[100%] lg:w-[60%] w-full sm:h-[600px] bg-white flex sm:flex-row box-border m-auto flex-col">
        <div className='w-full sm:w-1/2 bg-black flex flex-col items-center justify-center p-4 sm:p-0'>
          <div className="h-[20%] flex flex-col items-center justify-center">
            <Image className='w-52'
              src="/images/animalsloverlogo.svg"
              width={200}
              height={128}
              alt="Animals lover logo"
            />
          </div>
          <div className="h-[79%] flex flex-col items-center justify-center">
            <div className="relative">
              <Image className='w-56'
                src="/images/dogimg.svg"
                width={500}
                height={400}
                alt="Dog and Cat"
              />
              <Image className='absolute top-[-22px] right-[-24px] w-[83px]'
                src="/images/dogthumb.svg"
                width={130}
                height={130}
                alt="Dog and Cat"
              />
            </div>
          </div>
        </div>
        <div className='sm:w-1/2 text-black'>
          <div className='flex justify-center items-center flex-col gap-4 w-4/5 m-auto mt-8 mb-8'>
            <div className='text-[#0C7203] text-2xl sm:text-3xl font-bold'>Welcome Back</div>
            <div className='text-[black] text-xs font-bold'>Don&apos;t have an account? <a className='text-[#0C7203]' href="/signup">Sign Up.</a></div>
            <button className='bg-[#D9D9D9] text-[#0C7203] rounded-[10px] p-3 text-xs font-bold w-full'>Continue with Google</button>
          </div>
          <div className="w-4/5 m-auto flex flex-row items-center justify-center gap-2">
            <div className='w-[30%] sm:w-[10%] h-[2px] bg-[#0C7203]'></div>
            <div className='text-[black] text-xs text-center'>Or continue with username/email</div>
            <div className='w-[30%] sm:w-[10%] h-[2px] bg-[#0C7203]'></div>
          </div>
          <div className='pb-4'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-4/5 m-auto mt-8'>
              <input
                className='bg-[#D9D9D9] rounded-[10px] p-3 text-xs tracking-wide font-bold'
                type="text"
                name='email'
                placeholder='Username or email address'
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className='text-red-500'>{errors.email}</span>}
              <input
                className='bg-[#D9D9D9] rounded-[10px] p-3 text-xs tracking-wide font-bold'
                type="password"
                name='password'
                placeholder='Enter Password'
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <span className='text-red-500'>{errors.password}</span>}
              <div>
               <ForgotPassword/>
              </div>
              <button
                className={`bg-[#0C7203] text-white rounded-[10px] p-3 text-xs tracking-wide font-bold w-full flex items-center justify-center ${loading ? 'cursor-not-allowed opacity-70' : ''}`}
                type='submit'
                disabled={loading}
              >
                {loading ? (
                  <span className="loader"></span>
                ) : (
                  'Sign in'
                )}
              </button>
              {errors.apiError && <span className='text-red-500'>{errors.apiError}</span>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
