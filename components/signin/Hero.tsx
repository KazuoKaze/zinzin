// "use client";

// import React, { useState, useEffect } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import {
//   useOtpRequest,
//   useLogin,
//   useAuthValidation,
//   useOtpTimer,
// } from "@/hooks/useAuthOperations";

// interface LoginFormProps {
//   onSuccess?: () => void;
//   className?: string;
// }

// export default function Hero({ onSuccess, className = "" }: LoginFormProps) {
//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState("");
//   const [step, setStep] = useState<"email" | "otp">("email");
//   const [formErrors, setFormErrors] = useState<{
//     email?: string;
//     otp?: string;
//   }>({});

//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const returnUrl = searchParams.get("returnUrl") || "/dashboard";

//   // Custom hooks
//   const {
//     sendOtp,
//     isRequesting,
//     otpSent,
//     error: otpError,
//     reset: resetOtp,
//   } = useOtpRequest();
//   const {
//     performLogin,
//     isLoggingIn,
//     error: loginError,
//     reset: resetLogin,
//   } = useLogin();
//   const { validateEmail, validateOtp, validateLoginForm } = useAuthValidation();
//   const { timeLeft, isActive, startTimer, formatTime, canResend } =
//     useOtpTimer();

//   // Timer effect
//   useEffect(() => {
//     let interval: NodeJS.Timeout;
//     if (isActive && timeLeft > 0) {
//       interval = setInterval(() => {
//         setTimeLeft((prev) => prev - 1);
//       }, 1000);
//     }
//     return () => clearInterval(interval);
//   }, [isActive, timeLeft]);

//   // Handle OTP sent
//   useEffect(() => {
//     if (otpSent) {
//       setStep("otp");
//       startTimer();
//     }
//   }, [otpSent, startTimer]);

//   const handleEmailSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const emailError = validateEmail(email);
//     if (emailError) {
//       setFormErrors({ email: emailError });
//       return;
//     }

//     setFormErrors({});
//     const success = await sendOtp(email);
//     if (success) {
//       setStep("otp");
//     }
//   };

//   const handleOtpSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const errors = validateLoginForm(email, otp);
//     if (Object.keys(errors).length > 0) {
//       setFormErrors(errors);
//       return;
//     }

//     setFormErrors({});
//     const result = await performLogin(email, otp);
//     if (result) {
//       onSuccess?.();
//       router.push(returnUrl);
//     }
//   };

//   const handleResendOtp = async () => {
//     if (!canResend) return;

//     resetOtp();
//     resetLogin();
//     const success = await sendOtp(email);
//     if (success) {
//       startTimer();
//     }
//   };

//   const handleBackToEmail = () => {
//     setStep("email");
//     setOtp("");
//     setFormErrors({});
//     resetOtp();
//     resetLogin();
//   };

//   const currentError = otpError || loginError;


//   return (
//     <div className="sing-in-section">
//       <div className="section-spacing">
//         <div className="container">
//           <div className="auth-content">
//             <div className="auth-heading-title-wrap">
//               <h2 className="auth-heading-title">Sign in</h2>
//             </div>
//             <div className="w-users-userloginformwrapper auth-form-wrap">
//               <form
//                 className="auth-form"
//                 data-wf-user-form-type="login"
//                 data-wf-user-form-redirect="/"
//                 method="post"
//               >
//                 <div className="auth-input-wrap">
//                   <label className="auth-label">Email</label>
//                   <input
//                     placeholder=""
//                     id="wf-log-in-email"
//                     name="Email"
//                     className="auth-input w-input"
//                     type="email"
//                     required
//                     data-wf-user-form-input-type="email"
//                   />
//                 </div>
//                 <div className="auth-input-wrap">
//                   <label className="auth-label">OTP</label>
//                   <input
//                     placeholder=""
//                     id="wf-log-in-password"
//                     name="text"
//                     className="auth-input w-input"
//                     type="text"
//                     required
//                     data-wf-user-form-input-type="password"
//                   />
//                 </div>
//                 <div className="auth-btn-wrap">
//                   <input
//                     data-wait="Please wait..."
//                     type="submit"
//                     className="w-users-userformbutton auth-btn w-button"
//                     value="Log In"
//                   />
//                 </div>
//                 {/* <div className="w-users-userformfooter auth-info-text-wrap">
//                   <span className="auth-info-text">
//                     Don &#x27;t have an account?
//                   </span>
//                   <a
//                     href="/sign-up"
//                     className="auth-info-text-link w-inline-block"
//                   >
//                     Sign Up
//                   </a>
//                 </div> */}
//               </form>
//               {/* <div
//                 //   style="display: none"
//                 data-wf-user-form-error="true"
//                 className="w-users-userformerrorstate w-form-fail"
//               >
//                 <div
//                   className="user-form-error-msg"
//                   wf-login-form-general-error-error="We&#x27;re having trouble logging you in. Please try again, or contact us if you continue to have problems."
//                   wf-login-form-invalid-email_or_password-error="Invalid email or password. Please try again."
//                 >
//                   We &#x27;re having trouble logging you in. Please try again,
//                   or contact us if you continue to have problems.
//                 </div>
//               </div> */}

//               {currentError && (
//                 <div
//                   //   style="display: none"
//                   data-wf-user-form-error="true"
//                   className="w-users-userformerrorstate w-form-fail"
//                 >
//                   <div
//                     className="user-form-error-msg"
//                     wf-login-form-general-error-error="We&#x27;re having trouble logging you in. Please try again, or contact us if you continue to have problems."
//                     wf-login-form-invalid-email_or_password-error="Invalid email or password. Please try again."
//                   >
//                     {currentError}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//           <div className="auth-bottom-border"></div>
//         </div>
//       </div>
//     </div>
//   );
// }




// "use client";

// import React, { useState, useEffect } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import {
//   useOtpRequest,
//   useLogin,
//   useAuthValidation,
//   useOtpTimer,
// } from "@/hooks/useAuthOperations";

// interface LoginFormProps {
//   onSuccess?: () => void;
//   className?: string;
// }

// export default function Hero({ onSuccess, className = "" }: LoginFormProps) {
//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState("");
//   const [step, setStep] = useState<"email" | "otp">("email");
//   const [formErrors, setFormErrors] = useState<{
//     email?: string;
//     otp?: string;
//   }>({});

//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const returnUrl = searchParams.get("returnUrl") || "/dashboard";

//   // Custom hooks
//   const {
//     sendOtp,
//     isRequesting,
//     otpSent,
//     error: otpError,
//     reset: resetOtp,
//   } = useOtpRequest();
//   const {
//     performLogin,
//     isLoggingIn,
//     error: loginError,
//     reset: resetLogin,
//   } = useLogin();
//   const { validateEmail, validateOtp, validateLoginForm } = useAuthValidation();
//   const { timeLeft, isActive, startTimer, formatTime, canResend } =
//     useOtpTimer();

//   // Timer effect - handled by the hook internally
//   // Remove this effect as it should be handled by useOtpTimer hook

//   // Handle OTP sent
//   useEffect(() => {
//     if (otpSent) {
//       setStep("otp");
//       startTimer();
//     }
//   }, [otpSent, startTimer]);

//   const handleEmailSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const emailError = validateEmail(email);
//     if (emailError) {
//       setFormErrors({ email: emailError });
//       return;
//     }

//     setFormErrors({});
//     const success = await sendOtp(email);
//     if (success) {
//       setStep("otp");
//     }
//   };

//   const handleOtpSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     // Simple validation - just check if OTP is 6 characters
//     if (otp.length !== 6) {
//       setFormErrors({ otp: "OTP must be 6 characters" });
//       return;
//     }

//     setFormErrors({});
//     const result = await performLogin(email, otp);
//     if (result) {
//       onSuccess?.();
//       router.push(returnUrl);
//     }
//   };

//   const handleResendOtp = async () => {
//     if (!canResend) return;

//     resetOtp();
//     resetLogin();
//     const success = await sendOtp(email);
//     if (success) {
//       startTimer();
//     }
//   };

//   const handleBackToEmail = () => {
//     setStep("email");
//     setOtp("");
//     setFormErrors({});
//     resetOtp();
//     resetLogin();
//   };

//   const currentError = otpError || loginError;

//   return (
//     <div className="sing-in-section">
//       <div className="section-spacing">
//         <div className="container">
//           <div className="auth-content">
//             <div className="auth-heading-title-wrap">
//               <h2 className="auth-heading-title">
//                 {step === "email" ? "Sign in" : "Verify OTP"}
//               </h2>
//               {step === "otp" && (
//                 <p
//                   style={{ color: "#666", marginTop: "8px", fontSize: "14px" }}
//                 >
//                   Enter the 6-character code sent to {email}
//                 </p>
//               )}
//             </div>
//             <div className="w-users-userloginformwrapper auth-form-wrap">
//               {step === "email" ? (
//                 <form
//                   className="auth-form"
//                   data-wf-user-form-type="login"
//                   data-wf-user-form-redirect="/"
//                   method="post"
//                   onSubmit={handleEmailSubmit}
//                 >
//                   <div className="auth-input-wrap">
//                     <label className="auth-label">Email</label>
//                     <input
//                       placeholder="Enter your email"
//                       id="wf-log-in-email"
//                       name="Email"
//                       className={`auth-input w-input ${
//                         formErrors.email ? "error" : ""
//                       }`}
//                       type="email"
//                       required
//                       data-wf-user-form-input-type="email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       disabled={isRequesting}
//                     />
//                     {formErrors.email && (
//                       <div
//                         style={{
//                           color: "#e53e3e",
//                           fontSize: "14px",
//                           marginTop: "4px",
//                         }}
//                       >
//                         {formErrors.email}
//                       </div>
//                     )}
//                   </div>
//                   <div className="auth-btn-wrap">
//                     <input
//                       data-wait="Please wait..."
//                       type="submit"
//                       className="w-users-userformbutton auth-btn w-button"
//                       value={isRequesting ? "Sending OTP..." : "Send OTP"}
//                       disabled={isRequesting}
//                     />
//                   </div>
//                 </form>
//               ) : (
//                 <form
//                   className="auth-form"
//                   data-wf-user-form-type="login"
//                   data-wf-user-form-redirect="/"
//                   method="post"
//                   onSubmit={handleOtpSubmit}
//                 >
//                   <div className="auth-input-wrap">
//                     <label className="auth-label">OTP</label>
//                     <input
//                       placeholder="ABCD12"
//                       id="wf-log-in-password"
//                       name="text"
//                       className={`auth-input w-input ${
//                         formErrors.otp ? "error" : ""
//                       }`}
//                       type="text"
//                       required
//                       data-wf-user-form-input-type="password"
//                       value={otp}
//                       onChange={(e) => setOtp(e.target.value.slice(0, 6))}
//                       maxLength={6}
//                       disabled={isLoggingIn}
//                       style={{
//                         textAlign: "center",
//                         letterSpacing: "0.2em",
//                         fontSize: "18px",
//                       }}
//                     />
//                     {formErrors.otp && (
//                       <div
//                         style={{
//                           color: "#e53e3e",
//                           fontSize: "14px",
//                           marginTop: "4px",
//                         }}
//                       >
//                         {formErrors.otp}
//                       </div>
//                     )}
//                   </div>

//                   {/* Timer and resend section */}
//                   <div style={{ textAlign: "center", marginBottom: "16px" }}>
//                     {isActive && timeLeft > 0 ? (
//                       <p
//                         style={{ color: "#666", fontSize: "14px", margin: "0" }}
//                       >
//                         Resend OTP in {formatTime(timeLeft)}
//                       </p>
//                     ) : (
//                       <button
//                         type="button"
//                         onClick={handleResendOtp}
//                         disabled={isRequesting}
//                         style={{
//                           background: "none",
//                           border: "none",
//                           color: "#0070f3",
//                           fontSize: "14px",
//                           cursor: isRequesting ? "not-allowed" : "pointer",
//                           textDecoration: "underline",
//                           opacity: isRequesting ? 0.5 : 1,
//                         }}
//                       >
//                         {isRequesting ? "Sending..." : "Resend OTP"}
//                       </button>
//                     )}
//                   </div>

//                   <div className="auth-btn-wrap">
//                     <input
//                       data-wait="Please wait..."
//                       type="submit"
//                       className="w-users-userformbutton auth-btn w-button"
//                       value={isLoggingIn ? "Verifying..." : "Verify & Login"}
//                       disabled={isLoggingIn || otp.length !== 6}
//                     />
//                   </div>

//                   {/* Back to email button */}
//                   <div className="auth-btn-wrap" style={{ marginTop: "12px" }}>
//                     <button
//                       type="button"
//                       onClick={handleBackToEmail}
//                       className="w-users-userformbutton auth-btn w-button"
//                       style={{
//                         backgroundColor: "#f7f7f7",
//                         color: "#333",
//                         border: "1px solid #ddd",
//                       }}
//                     >
//                       Back to Email
//                     </button>
//                   </div>
//                 </form>
//               )}

//               {currentError && (
//                 <div
//                   data-wf-user-form-error="true"
//                   className="w-users-userformerrorstate w-form-fail"
//                 >
//                   <div
//                     className="user-form-error-msg"
//                     wf-login-form-general-error-error="We&#x27;re having trouble logging you in. Please try again, or contact us if you continue to have problems."
//                     wf-login-form-invalid-email_or_password-error="Invalid email or password. Please try again."
//                   >
//                     {currentError}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//           <div className="auth-bottom-border"></div>
//         </div>
//       </div>
//     </div>
//   );
// }













"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  useOtpRequest,
  useLogin,
  useAuthValidation,
  useOtpTimer,
} from "@/hooks/useAuthOperations";

interface LoginFormProps {
  onSuccess?: () => void;
  className?: string;
}

export default function Hero({ onSuccess, className = "" }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"email" | "otp">("email");
  const [formErrors, setFormErrors] = useState<{
    email?: string;
    otp?: string;
  }>({});

  const router = useRouter();
  const searchParams = useSearchParams();
  const returnUrl = searchParams.get("returnUrl") || "/dashboard";

  const {
    sendOtp,
    isRequesting,
    otpSent,
    error: otpError,
    reset: resetOtp,
  } = useOtpRequest();
  const {
    performLogin,
    isLoggingIn,
    error: loginError,
    reset: resetLogin,
  } = useLogin();
  const { validateEmail, validateOtp } = useAuthValidation();
  const { timeLeft, isActive, startTimer, formatTime, canResend } =
    useOtpTimer();

  useEffect(() => {
    if (otpSent) {
      setStep("otp");
      startTimer();
    }
  }, [otpSent, startTimer]);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailError = validateEmail(email);
    if (emailError) {
      setFormErrors({ email: emailError });
      return;
    }
    setFormErrors({});
    await sendOtp(email);
  };

  // const handleOtpSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   const otpError = validateOtp(otp);
  //   if (otpError) {
  //     setFormErrors({ otp: otpError });
  //     return;
  //   }
  //   setFormErrors({});
  //   const result = await performLogin(email, otp);
  //   if (result) {
  //     if (onSuccess) {
  //       onSuccess();
  //     }
  //     router.push(returnUrl);
  //   }
  // };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("--- Step 1: handleOtpSubmit triggered ---");

    const otpError = validateOtp(otp);
    if (otpError) {
      console.error("Validation failed:", otpError);
      setFormErrors({ otp: otpError });
      return;
    }

    console.log(
      `--- Step 2: Validation passed. Calling performLogin with email: ${email}, otp: ${otp} ---`
    );
    setFormErrors({});

    // This is the most important part
    const result = await performLogin(email, otp);

    console.log("--- Step 5: performLogin has completed. ---");
    console.log("Result from performLogin:", result);

    if (result?.token) {
      console.log("--- Step 6: Login SUCCESS. Redirecting... ---");
      onSuccess?.();
      router.push(returnUrl);
    } else {
      console.error("--- Step 6: Login FAILED. No token in result. ---");
      // Manually set an error if the hook isn't updating for some reason
      if (!loginError) {
        setFormErrors({
          otp: "Login failed. Please check the console for details.",
        });
      }
    }
  };

  const handleResendOtp = async () => {
    if (!canResend) return;
    resetOtp();
    resetLogin();
    setFormErrors({});
    await sendOtp(email);
  };

  const handleBackToEmail = () => {
    setStep("email");
    setOtp("");
    setFormErrors({});
    resetOtp();
    resetLogin();
  };

  const currentError = otpError || loginError;

  return (
    <div className={`sing-in-section ${className}`}>
      <div className="section-spacing">
        <div className="container">
          <div className="auth-content">
            <div className="auth-heading-title-wrap">
              <h2 className="auth-heading-title">
                {step === "email" ? "Sign in" : "Verify OTP"}
              </h2>
              {step === "otp" && (
                <p
                  style={{ color: "#666", marginTop: "8px", fontSize: "14px" }}
                >
                  Enter the 6-digit code sent to {email}
                </p>
              )}
            </div>
            <div className="w-users-userloginformwrapper auth-form-wrap">
              {step === "email" ? (
                <form
                  className="auth-form"
                  data-wf-user-form-type="login"
                  data-wf-user-form-redirect="/"
                  method="post"
                  onSubmit={handleEmailSubmit}
                >
                  <div className="auth-input-wrap">
                    <label className="auth-label">Email</label>
                    <input
                      placeholder="Enter your email"
                      id="wf-log-in-email"
                      name="Email"
                      className={`auth-input w-input ${
                        formErrors.email ? "error" : ""
                      }`}
                      type="email"
                      required
                      data-wf-user-form-input-type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        // Clear error when user starts typing
                        if (formErrors.email) {
                          setFormErrors({ ...formErrors, email: undefined });
                        }
                      }}
                      disabled={isRequesting}
                    />
                    {formErrors.email && (
                      <div
                        style={{
                          color: "#e53e3e",
                          fontSize: "14px",
                          marginTop: "4px",
                        }}
                      >
                        {formErrors.email}
                      </div>
                    )}
                  </div>
                  <div className="auth-btn-wrap">
                    <input
                      data-wait="Please wait..."
                      type="submit"
                      className="w-users-userformbutton auth-btn w-button"
                      value={isRequesting ? "Sending OTP..." : "Send OTP"}
                      disabled={isRequesting}
                    />
                  </div>
                </form>
              ) : (
                <form
                  className="auth-form"
                  data-wf-user-form-type="login"
                  data-wf-user-form-redirect="/"
                  method="post"
                  onSubmit={handleOtpSubmit}
                >
                  <div className="auth-input-wrap">
                    <label className="auth-label">OTP</label>
                    <input
                      placeholder="123456"
                      id="wf-log-in-password"
                      name="text"
                      className={`auth-input w-input ${
                        formErrors.otp ? "error" : ""
                      }`}
                      type="text"
                      required
                      data-wf-user-form-input-type="password"
                      value={otp}
                      onChange={(e) => {
                        const value = e.target.value.slice(0, 6);
                        setOtp(value);
                        // Clear error when user starts typing
                        if (formErrors.otp) {
                          setFormErrors({ ...formErrors, otp: undefined });
                        }
                      }}
                      maxLength={6}
                      disabled={isLoggingIn}
                      style={{
                        textAlign: "center",
                        letterSpacing: "0.2em",
                        fontSize: "18px",
                      }}
                    />
                    {formErrors.otp && (
                      <div
                        style={{
                          color: "#e53e3e",
                          fontSize: "14px",
                          marginTop: "4px",
                        }}
                      >
                        {formErrors.otp}
                      </div>
                    )}
                  </div>

                  {/* Timer and resend section */}
                  <div style={{ textAlign: "center", marginBottom: "16px" }}>
                    {isActive && timeLeft > 0 ? (
                      <p
                        style={{ color: "#666", fontSize: "14px", margin: "0" }}
                      >
                        Resend OTP in {formatTime(timeLeft)}
                      </p>
                    ) : (
                      <button
                        type="button"
                        onClick={handleResendOtp}
                        disabled={isRequesting}
                        style={{
                          background: "none",
                          border: "none",
                          color: "#0070f3",
                          fontSize: "14px",
                          cursor: isRequesting ? "not-allowed" : "pointer",
                          textDecoration: "underline",
                          opacity: isRequesting ? 0.5 : 1,
                        }}
                      >
                        {isRequesting ? "Sending..." : "Resend OTP"}
                      </button>
                    )}
                  </div>

                  <div className="auth-btn-wrap">
                    <input
                      data-wait="Please wait..."
                      type="submit"
                      className="w-users-userformbutton auth-btn w-button"
                      value={isLoggingIn ? "Verifying..." : "Verify & Login"}
                      disabled={isLoggingIn || otp.length !== 6}
                    />
                  </div>

                  {/* Back to email button */}
                  <div className="auth-btn-wrap" style={{ marginTop: "12px" }}>
                    <button
                      type="button"
                      onClick={handleBackToEmail}
                      className="w-users-userformbutton auth-btn w-button"
                      style={{
                        backgroundColor: "#f7f7f7",
                        color: "#333",
                        border: "1px solid #ddd",
                      }}
                      disabled={isLoggingIn}
                    >
                      Back to Email
                    </button>
                  </div>
                </form>
              )}

              {currentError && (
                <div
                  data-wf-user-form-error="true"
                  className="w-users-userformerrorstate w-form-fail"
                  style={{ marginTop: "16px" }}
                >
                  <div
                    className="user-form-error-msg"
                    wf-login-form-general-error-error="We&#x27;re having trouble logging you in. Please try again, or contact us if you continue to have problems."
                    wf-login-form-invalid-email_or_password-error="Invalid email or password. Please try again."
                  >
                    {currentError}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="auth-bottom-border"></div>
        </div>
      </div>
    </div>
  );
}
