// // // // "use client";

// // // // import Link from "next/link";
// // // // import { useState } from "react";
// // // // import { createClient } from "@/libs/supabase/client";
// // // // import toast from "react-hot-toast";
// // // // import config from "@/config";

// // // // // This a login/singup page for Supabase Auth.
// // // // // Successfull login redirects to /api/auth/callback where the Code Exchange is processed (see app/api/auth/callback/route.js).
// // // // export default function Login() {
// // // //   const supabase = createClient();
// // // //   const [email, setEmail] = useState("");
// // // //   const [isLoading, setIsLoading] = useState(false);
// // // //   const [isDisabled, setIsDisabled] = useState(false);

// // // //   const handleSignup = async (e, options) => {
// // // //     e?.preventDefault();

// // // //     setIsLoading(true);

// // // //     try {
// // // //       const { type, provider } = options;
// // // //       const redirectURL = window.location.origin + "/api/auth/callback";

// // // //       if (type === "oauth") {
// // // //         await supabase.auth.signInWithOAuth({
// // // //           provider,
// // // //           options: {
// // // //             redirectTo: redirectURL,
// // // //           },
// // // //         });
// // // //       } else if (type === "magic_link") {
// // // //         await supabase.auth.signInWithOtp({
// // // //           email,
// // // //           options: {
// // // //             emailRedirectTo: redirectURL,
// // // //           },
// // // //         });

// // // //         toast.success("Check your emails!");

// // // //         setIsDisabled(true);
// // // //       }
// // // //     } catch (error) {
// // // //       console.log(error);
// // // //     } finally {
// // // //       setIsLoading(false);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <main className="p-8 md:p-24" data-theme={config.colors.theme}>
// // // //       <div className="text-center mb-4">
// // // //         <Link href="/" className="btn btn-ghost btn-sm">
// // // //           <svg
// // // //             xmlns="http://www.w3.org/2000/svg"
// // // //             viewBox="0 0 20 20"
// // // //             fill="currentColor"
// // // //             className="w-5 h-5"
// // // //           >
// // // //             <path
// // // //               fillRule="evenodd"
// // // //               d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
// // // //               clipRule="evenodd"
// // // //             />
// // // //           </svg>
// // // //           Home
// // // //         </Link>
// // // //       </div>
// // // //       <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-center mb-12">
// // // //         Sign-in to {config.appName}{" "}
// // // //       </h1>

// // // //       <div className="space-y-8 max-w-xl mx-auto">
// // // //         <button
// // // //           className="btn btn-block"
// // // //           onClick={(e) =>
// // // //             handleSignup(e, { type: "oauth", provider: "google" })
// // // //           }
// // // //           disabled={isLoading}
// // // //         >
// // // //           {isLoading ? (
// // // //             <span className="loading loading-spinner loading-xs"></span>
// // // //           ) : (
// // // //             <svg
// // // //               xmlns="http://www.w3.org/2000/svg"
// // // //               className="w-6 h-6"
// // // //               viewBox="0 0 48 48"
// // // //             >
// // // //               <path
// // // //                 fill="#FFC107"
// // // //                 d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
// // // //               />
// // // //               <path
// // // //                 fill="#FF3D00"
// // // //                 d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
// // // //               />
// // // //               <path
// // // //                 fill="#4CAF50"
// // // //                 d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
// // // //               />
// // // //               <path
// // // //                 fill="#1976D2"
// // // //                 d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
// // // //               />
// // // //             </svg>
// // // //           )}
// // // //           Sign-up with Google
// // // //         </button>

// // // //         <div className="divider text-xs text-base-content/50 font-medium">
// // // //           OR
// // // //         </div>

// // // //         <form
// // // //           className="form-control w-full space-y-4"
// // // //           onSubmit={(e) => handleSignup(e, { type: "magic_link" })}
// // // //         >
// // // //           <input
// // // //             required
// // // //             type="email"
// // // //             value={email}
// // // //             autoComplete="email"
// // // //             placeholder="tom@cruise.com"
// // // //             className="input input-bordered w-full placeholder:opacity-60"
// // // //             onChange={(e) => setEmail(e.target.value)}
// // // //           />

// // // //           <button
// // // //             className="btn btn-primary btn-block"
// // // //             disabled={isLoading || isDisabled}
// // // //             type="submit"
// // // //           >
// // // //             {isLoading && (
// // // //               <span className="loading loading-spinner loading-xs"></span>
// // // //             )}
// // // //             Send Magic Link
// // // //           </button>
// // // //         </form>
// // // //       </div>
// // // //     </main>
// // // //   );
// // // // }
// // // "use client";

// // // import Link from "next/link";
// // // import { useState } from "react";
// // // import { createClient } from "@/libs/supabase/client";
// // // import toast from "react-hot-toast";
// // // import config from "@/config";
// // // import { GraduationCap } from 'lucide-react';

// // // export default function Login() {
// // //   const supabase = createClient();
// // //   const [isLoading, setIsLoading] = useState(false);

// // //   const handleSignup = async (e, options) => {
// // //     e?.preventDefault();
// // //     setIsLoading(true);

// // //     try {
// // //       const { provider } = options;
// // //       const redirectURL = window.location.origin + "/api/auth/callback";

// // //       await supabase.auth.signInWithOAuth({
// // //         provider,
// // //         options: {
// // //           redirectTo: redirectURL,
// // //         },
// // //       });
// // //     } catch (error) {
// // //       console.log(error);
// // //       toast.error("Authentication failed. Please try again.");
// // //     } finally {
// // //       setIsLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gray-50 flex flex-col">
// // //       {/* Modern minimal header */}
// // //       <header className="w-full py-4 px-6 bg-white border-b border-gray-100">
// // //         <div className="max-w-7xl mx-auto flex justify-between items-center">
// // //           <Link href="/" className="flex items-center space-x-2">
// // //             <div className="w-8 h-8 rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
// // //               <GraduationCap className="text-white" size={16} />
// // //             </div>
// // //             <span className="font-semibold text-xl text-gray-900">Scoorly</span>
// // //           </Link>
// // //         </div>
// // //       </header>

// // //       {/* Clean, modern main content */}
// // //       <main className="flex-1 flex flex-col items-center justify-center px-4">
// // //         <div className="w-full max-w-md">
// // //           <div className="text-center mb-10">
// // //             <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome</h1>
// // //             <p className="text-gray-500">Signup/Login to {config.appName}</p>
// // //           </div>
          
// // //           <div className="space-y-6">
// // //             <button
// // //               className="w-full flex items-center justify-center bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 border border-gray-200 rounded-lg transition-colors"
// // //               onClick={(e) => handleSignup(e, { provider: "google" })}
// // //               disabled={isLoading}
// // //             >
// // //               {isLoading ? (
// // //                 <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin mr-3"></div>
// // //               ) : (
// // //                 <svg
// // //                   xmlns="http://www.w3.org/2000/svg"
// // //                   className="w-5 h-5 mr-3"
// // //                   viewBox="0 0 48 48"
// // //                 >
// // //                   <path
// // //                     fill="#FFC107"
// // //                     d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
// // //                   />
// // //                   <path
// // //                     fill="#FF3D00"
// // //                     d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
// // //                   />
// // //                   <path
// // //                     fill="#4CAF50"
// // //                     d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
// // //                   />
// // //                   <path
// // //                     fill="#1976D2"
// // //                     d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
// // //                   />
// // //                 </svg>
// // //               )}
// // //               Continue with Google
// // //             </button>
            
// // //             <div className="relative">
             
// // //             </div>
            
          
// // //           </div>
          
// // //           {/* <div className="mt-10 text-center text-xs text-gray-500">
// // //             <p>
// // //               By signing in, you agree to our{" "}
// // //               <Link href="/terms" className="text-indigo-600 hover:text-indigo-800">
// // //                 Terms
// // //               </Link>{" "}
// // //               and{" "}
// // //               <Link href="/privacy" className="text-indigo-600 hover:text-indigo-800">
// // //                 Privacy Policy
// // //               </Link>
// // //             </p>
// // //           </div> */}
// // //         </div>
// // //       </main>
      
// // //       {/* Modern footer */}
// // //       {/* <footer className="py-4 px-6 text-center text-sm text-gray-500">
// // //         <p>
// // //           Need help?{" "}
// // //           <Link href="/support" className="text-indigo-600 hover:text-indigo-800">
// // //             Contact our support team
// // //           </Link>
// // //         </p>
// // //       </footer> */}
// // //     </div>
// // //   );
// // // }
// // "use client";

// // import Link from "next/link";
// // import { useState } from "react";
// // import { createClient } from "@/libs/supabase/client";
// // import toast from "react-hot-toast";
// // import config from "@/config";
// // import Header from "@/components/Header";
// // import FeaturesSection from "@/components/FeaturesSection";
// // import { CheckCircle } from 'lucide-react';

// // export default function Login() {
// //   const supabase = createClient();
// //   const [isLoading, setIsLoading] = useState(false);

// //   const handleSignup = async (e, options) => {
// //     e?.preventDefault();
// //     setIsLoading(true);

// //     try {
// //       const { provider } = options;
// //       const redirectURL = window.location.origin + "/api/auth/callback";

// //       await supabase.auth.signInWithOAuth({
// //         provider,
// //         options: {
// //           redirectTo: redirectURL,
// //         },
// //       });
// //     } catch (error) {
// //       console.log(error);
// //       toast.error("Authentication failed. Please try again.");
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   const highlights = [
// //     "One-time payment, lifetime updates",
// //     "Unlimited mock exams",
// //     "1000s of practice questions",
// //     "Understand, don't just memorize",
// //     "Review bookmarked and wrong answers",
// //     "Track performance by subject"
// //   ];

// //   return (
// //     <div className="min-h-screen bg-gray-50 flex flex-col">
// //       {/* Use the Header component */}
// //       <Header />

// //       {/* Clean, modern main content */}
// //       <main className="flex-1 flex flex-col md:flex-row py-12">
// //         {/* Left side: Login form */}
// //         <div className="w-full md:w-1/2 flex justify-center items-center px-4 mb-10 md:mb-0">
// //           <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-sm border border-gray-100">
// //             <div className="text-center mb-8">
// //               <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome</h1>
// //               <p className="text-gray-500">Signup/Login to {config.appName}</p>
// //             </div>
            
// //             <div className="space-y-6">
// //               <button
// //                 className="w-full flex items-center justify-center bg-white hover:bg-gray-50 text-gray-700 font-medium py-4 px-4 border border-gray-200 rounded-lg transition-colors"
// //                 onClick={(e) => handleSignup(e, { provider: "google" })}
// //                 disabled={isLoading}
// //               >
// //                 {isLoading ? (
// //                   <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin mr-3"></div>
// //                 ) : (
// //                   <svg
// //                     xmlns="http://www.w3.org/2000/svg"
// //                     className="w-5 h-5 mr-3"
// //                     viewBox="0 0 48 48"
// //                   >
// //                     <path
// //                       fill="#FFC107"
// //                       d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
// //                     />
// //                     <path
// //                       fill="#FF3D00"
// //                       d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
// //                     />
// //                     <path
// //                       fill="#4CAF50"
// //                       d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
// //                     />
// //                     <path
// //                       fill="#1976D2"
// //                       d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
// //                     />
// //                   </svg>
// //                 )}
// //                 Continue with Google
// //               </button>
// //             </div>
            
// //             <div className="mt-8 pt-6 border-t border-gray-100">
// //               <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
// //                 <p className="font-medium text-gray-900 mb-1">Limited time offer</p>
// //                 <p className="text-sm text-gray-600">Sign up now and get 30% off your one-time purchase.</p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
        
// //         {/* Right side: Features highlights */}
// //         <div className="w-full md:w-1/2 px-6 flex items-center">
// //           <div className="max-w-md mx-auto">
// //             <h2 className="text-2xl font-bold text-gray-900 mb-6">Why students choose Scoorly</h2>
            
// //             <ul className="space-y-4">
// //               {highlights.map((feature, index) => (
// //                 <li key={index} className="flex items-start">
// //                   <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
// //                   <span className="text-gray-700">{feature}</span>
// //                 </li>
// //               ))}
// //             </ul>
            
// //             <div className="mt-8">
// //               <div className="flex items-center space-x-4">
// //                 <div className="flex -space-x-2">
// //                   {[1, 2, 3].map((item) => (
// //                     <div key={item} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white" />
// //                   ))}
// //                 </div>
// //                 <div>
// //                   <p className="font-medium text-gray-900">Trusted by 2,000+ students</p>
// //                   <div className="flex items-center mt-1">
// //                     {[1, 2, 3, 4, 5].map((star) => (
// //                       <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
// //                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
// //                       </svg>
// //                     ))}
// //                     <span className="ml-1 text-sm text-gray-600">4.9/5</span>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </main>
      
// //       {/* Features Section */}
// //       <FeaturesSection />
// //     </div>
// //   );
// // } 
// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { createClient } from "@/libs/supabase/client";
// import toast from "react-hot-toast";
// import config from "@/config";
// import Header from "@/components/Header";
// import { CheckCircle } from 'lucide-react';

// export default function Login() {
//   const supabase = createClient();
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSignup = async (e, options) => {
//     e?.preventDefault();
//     setIsLoading(true);

//     try {
//       const { provider } = options;
//       const redirectURL = window.location.origin + "/api/auth/callback";

//       await supabase.auth.signInWithOAuth({
//         provider,
//         options: {
//           redirectTo: redirectURL,
//         },
//       });
//     } catch (error) {
//       console.log(error);
//       toast.error("Authentication failed. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const highlights = [
//     "One-time payment, lifetime updates",
//     "Unlimited mock exams",
//     "1000s of questions",
//     "Performance tracking"
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col">
//       {/* Use the Header component */}
//       <Header />

//       {/* Clean, centered main content */}
//       <main className="flex-1 flex flex-col items-center justify-center px-4 py-10">
//         {/* Login form - centered */}
//         <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-8">
//           <div className="text-center mb-6">
//           <p className="text-gray-400 text-bold">Login | Signup</p>

//             <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome to Scoorly</h1>

//             <p className="text-gray-500 text-sm">The smart way to prepare for your exams</p>
//           </div>
          
//           <div className="space-y-4">
//             <button
//               className="w-full flex items-center justify-center bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 border border-gray-200 rounded-lg transition-colors"
//               onClick={(e) => handleSignup(e, { provider: "google" })}
//               disabled={isLoading}
//             >
//               {isLoading ? (
//                 <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin mr-3"></div>
//               ) : (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-5 h-5 mr-3"
//                   viewBox="0 0 48 48"
//                 >
//                   <path
//                     fill="#FFC107"
//                     d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
//                   />
//                   <path
//                     fill="#FF3D00"
//                     d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
//                   />
//                   <path
//                     fill="#4CAF50"
//                     d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
//                   />
//                   <path
//                     fill="#1976D2"
//                     d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
//                   />
//                 </svg>
//               )}
//               Continue with Google
//             </button>
            
//             <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-center">
//               <p className="text-sm text-gray-700">
//                 <span className="font-medium">Limited time offer:</span> Get 30% off your one-time purchase
//               </p>
//             </div>
//           </div>
//         </div>
        
//         {/* Features highlights - small and subtle below the login */}
//         <div className="text-center max-w-md">
//           <div className="flex flex-wrap justify-center gap-2 mb-4">
//             {highlights.map((feature, index) => (
//               <div key={index} className="inline-flex items-center bg-white text-xs text-gray-600 px-3 py-1 rounded-full border border-gray-100">
//                 <CheckCircle size={12} className="text-green-500 mr-1" />
//                 {feature}
//               </div>
//             ))}
//           </div>
          
//           <div className="flex items-center justify-center space-x-1">
//             {[1, 2, 3, 4, 5].map((star) => (
//               <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
//                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//               </svg>
//             ))}
//             <span className="text-xs text-gray-500 ml-1">4.9/5 from 2,000+ students</span>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }
// app/signin/page.js
export default function SignInPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Sign In</h1>
      <p className="text-center mb-8">Our sign in page is currently being updated. Please check back later.</p>
    </div>
  );
}