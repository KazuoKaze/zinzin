


export default function Hero() {
    return (
      <div className="sing-in-section">
        <div className="section-spacing">
          <div className="container">
            <div className="auth-content">
              <div className="auth-heading-title-wrap">
                <h2 className="auth-heading-title">Sign in</h2>
              </div>
              <div className="w-users-userloginformwrapper auth-form-wrap">
                <form
                  className="auth-form"
                  data-wf-user-form-type="login"
                  data-wf-user-form-redirect="/"
                  method="post"
                >
                  <div className="auth-input-wrap">
                    <label  className="auth-label">
                      Email
                    </label>
                    <input
                      placeholder=""
                      id="wf-log-in-email"
                      
                      name="Email"
                      className="auth-input w-input"
                      type="email"
                      
                      required
                      data-wf-user-form-input-type="email"
                    />
                  </div>
                  <div className="auth-input-wrap">
                    <label  className="auth-label">
                      Password
                    </label>
                    <input
                      placeholder=""
                      id="wf-log-in-password"
                      
                      name="Password"
                      className="auth-input w-input"
                      type="password"
                      required
                      data-wf-user-form-input-type="password"
                    />
                  </div>
                  <div className="auth-btn-wrap">
                    <input
                      data-wait="Please wait..."
                      type="submit"
                      className="w-users-userformbutton auth-btn w-button"
                      value="Log In"
                    />
                  </div>
                  <div className="w-users-userformfooter auth-info-text-wrap">
                    <span className="auth-info-text">
                      Don &#x27;t have an account?
                    </span>
                    <a
                      href="/sign-up"
                      className="auth-info-text-link w-inline-block"
                    >
                      Sign Up
                    </a>
                  </div>
                </form>
                <div
                //   style="display: none"
                  data-wf-user-form-error="true"
                  className="w-users-userformerrorstate w-form-fail"
                >
                  <div
                    className="user-form-error-msg"
                    wf-login-form-general-error-error="We&#x27;re having trouble logging you in. Please try again, or contact us if you continue to have problems."
                    wf-login-form-invalid-email_or_password-error="Invalid email or password. Please try again."
                  >
                    We &#x27;re having trouble logging you in. Please try again,
                    or contact us if you continue to have problems.
                  </div>
                </div>
              </div>
            </div>
            <div className="auth-bottom-border"></div>
          </div>
        </div>
      </div>
    );
}