import { SubmitHandler, useForm } from "react-hook-form";
import { CreateAccount, UserRegistration } from "../services/UserService";
import { Link } from "react-router-dom";

export const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRegistration>();
  const onSubmit: SubmitHandler<UserRegistration> = async (data) =>{
    const response  = await CreateAccount(data);
    alert(response.data.message)
  };
  return (
    <main className="main-wrapper">
      <section className="signin-section">
        <div className="container-fluid">
          <div className="title-wrapper pt-30">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="title">
                  <h2>Sign in</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-0 auth-row">
            <div className="col-lg-6">
              <div className="auth-cover-wrapper bg-primary-100">
                <div className="auth-cover">
                  <div className="title text-center">
                    <h1 className="text-primary mb-10">Bienvenue</h1>
                    <p className="text-medium">
                      Sign in to your Existing account to continue
                    </p>
                  </div>
                  <div className="cover-image">
                    <img src="assets/images/auth/signin-image.svg" alt="" />
                  </div>
                  <div className="shape-image">
                    <img src="assets/images/auth/shape.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="signin-wrapper">
                <div className="form-wrapper">
                  <h6 className="mb-15">Sign In Form</h6>
                  <p className="text-sm mb-25">
                    Start creating the best possible user experience for you
                    customers.
                  </p>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                    <div className="col-12">
                        <div className="input-style-1">
                          <label>FirstName</label>
                          <input defaultValue="" {...register("firstName",{ required: true })} />
                          {errors.login && <span>Ce champ est requis</span>}
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="input-style-1">
                          <label>LastName</label>
                          <input defaultValue="" {...register("lastName",{ required: true })} />
                          {errors.login && <span>Ce champ est requis</span>}
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="input-style-1">
                          <label>Email</label>
                          <input defaultValue="" {...register("login",{ required: true })} />
                          {errors.login && <span>Ce champ est requis</span>}
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="input-style-1">
                          <label>Password</label>
                          <input type="password" defaultValue="" {...register("password",{ required: true })} />
                          {errors.password && <span>Ce champ est requis</span>}
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="button-group d-flex justify-content-center flex-wrap">
                          <button type="submit" className="main-btn primary-btn btn-hover w-100 text-center">
                            Enregistrer
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="singin-option pt-40">
                    <p className="text-sm text-medium text-center text-gray">
                      Easy Sign In With
                    </p>
                    <p className="text-sm text-medium text-dark text-center">
                      Avez-vous un compte
                      <Link to={`/login`} >
                        Connexion
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
