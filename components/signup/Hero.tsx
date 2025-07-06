


export default function Hero() {
    return (
      <div className="sing-in-section">
        <div className="section-spacing">
          <div className="container">
            <div className="auth-content">
              <div className="w-users-usersignupformwrapper auth-form-wrap">
                <div
                  
                  className="w-users-userformsuccessstate w-form-success"
                >
                  <div className="w-users-userformheader auth-heading-title-wrap-2">
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/6734840970a6950e4503c5d9_thumb-up-line.svg"
                      alt=""
                      className="auth-heading-title-icon"
                    />
                    <h2 className="auth-heading-title">Account activated</h2>
                  </div>
                  <p className="auth-info-text">
                    Your account was created successfully. You will be
                    redirected shortly.
                  </p>
                  <div data-wf-user-form-redirect="" className="auth-reditect-wrap">
                    <a href="/" className="auth-info-text-link w-inline-block">
                      If nothing happens, click here.
                    </a>
                  </div>
                </div>
                <form method="post" data-wf-user-form-type="signup">
                  <div className="w-users-userformheader auth-heading-title-wrap">
                    <h2 className="auth-heading-title">Sign up</h2>
                  </div>
                  <div className="auth-input-wrap">
                    <label  className="auth-label">
                      Email
                    </label>
                    <input
                      placeholder=""
                      id="wf-sign-up-email"
                      
                      name="Email"
                      className="auth-input w-input"
                      type="email"
                      
                      required
                      data-wf-user-form-input-type="email"
                    />
                  </div>
                  <div className="auth-input-wrap">
                    <label  className="auth-label">
                      Name
                    </label>
                    <input
                      className="auth-input w-input"
                      
                      name=""
                      data-name=""
                      data-wf-user-field="wf-user-field-name"
                      placeholder=""
                    //   fieldType="data-wf-user-field-type"
                      type="text"
                      id="wf-sign-up-name"
                      required
                    />
                  </div>
                  <div className="auth-input-wrap">
                    <label className="auth-label">
                      Password
                    </label>
                    <input
                      placeholder=""
                      id="wf-sign-up-password"
                      data-name=""
                      
                      name="Password"
                      className="auth-input w-input"
                      type="password"
                      required
                      data-wf-user-form-input-type="password"
                    />
                  </div>
                  <label className="w-checkbox auth-checkbox-wrap">
                    <input
                      className="w-checkbox-input auth-checkbox"
                      name=""
                      data-name=""
                      data-wf-user-field="wf-user-field-accept-privacy"
                      placeholder=""
                      type="checkbox"
                      id="wf-sign-up-accept-privacy"
                      required
                    />
                    <span className="auth-info-text w-form-label">
                      By creating an account, I agree to this website &#x27;s
                      <a
                        href="/privacy-policy"
                        className="auth-info-text-link w-inline-block"
                      >
                        privacy policy
                      </a>
                      and
                      <a
                        href="/terms-conditions"
                        className="auth-info-text-link w-inline-block"
                      >
                        terms of service
                      </a>
                    </span>
                  </label>
                  <label className="w-checkbox auth-checkbox-wrap">
                    <input
                      className="w-checkbox-input auth-checkbox"
                      name=""
                      data-name=""
                      data-wf-user-field="wf-user-field-accept-communications"
                      placeholder=""
                      type="checkbox"
                      id="wf-sign-up-accept-communications"
                      required
                    />
                    <span className="auth-info-text w-form-label">
                      I consent to receive marketing emails.
                    </span>
                  </label>
                  <div className="auth-btn-wrap">
                    <input
                      data-wait="Please wait..."
                      type="submit"
                      className="w-users-userformbutton auth-btn w-button"
                      value="Sign Up"
                    />
                  </div>
                  <div className="w-users-userformfooter auth-info-text-wrap">
                    <span className="auth-info-text">Already have an account?</span>
                    <a
                      href="/log-in"
                      className="auth-info-text-link w-inline-block"
                    >
                      Log In
                    </a>
                  </div>
                </form>
                <div
                //   style="display: none"
                  data-wf-user-form-error="true"
                  className="w-users-userformerrorstate error-message w-form-fail"
                >
                  <div
                    className="user-form-error-msg"
                    wf-signup-form-general-error-error="There was an error signing you up. Please try again, or contact us if you continue to have problems."
                    wf-signup-form-not-allowed-error="You&#x27;re not allowed to access this site, please contact the admin for support."
                    wf-signup-form-invalid-email-error="Make sure your email exists and is properly formatted (e.g., user@domain.com)."
                    wf-signup-form-email-already_exist-error="An account with this email address already exists. Log in or reset your password."
                    wf-signup-form-use-invite_email-error="Use the same email address your invitation was sent to."
                    wf-signup-form-invalid-password-error="Your password must be at least 8 characters."
                    wf-signup-form-not-verified-error="We couldn&#x27;t verify your account. Please try again, or contact us if you continue to have problems."
                    wf-signup-form-expired-token-error="This link has expired. A new link has been sent to your email. Please try again, or contact us if you continue to have problems."
                    wf-signup-form-validation-failed-error="There was an error in some of the information provided."
                  >
                    There was an error signing you up. Please try again, or
                    contact us if you continue to have problems.
                  </div>
                </div>
                <div
                  
                  className="w-users-usersignupverificationmessage w-form-verification"
                  data-wf-user-form-verification="true"
                >
                  <div className="w-users-userformheader auth-heading-title-wrap-2">
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/6734840970a6950e4503c5d8_mail-unread-line.svg"
                      alt=""
                      className="auth-heading-title-icon"
                    />
                    <h2 className="auth-heading-title">Verification Required</h2>
                  </div>
                  <p className="auth-info-text">
                    Account verification required. Please check your email to
                    find your unique verification link.
                  </p>
                </div>
              </div>
            </div>
            <div className="auth-bottom-border"></div>
          </div>
        </div>
      </div>
    );
}