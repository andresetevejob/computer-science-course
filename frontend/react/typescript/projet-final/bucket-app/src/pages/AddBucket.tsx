import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";

type Bucket = {
  label: string;
  description: string;
};
export const AddBucket = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Bucket>();
  const onSubmit: SubmitHandler<Bucket> = async (data) => {
    console.log(data);
    // add your logic here
    setTimeout(() => {
      navigate("/dashboard");
    }, 500);
  };
  return (
    <>
      <div className="title-wrapper pt-30">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="title">
              <h2>Ajout de bucket</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="menu-toggle-btn mr-15">
          <Link to={`/dashboard`} className="main-btn primary-btn btn-hover">
            Retour à liste
          </Link>
        </div>
        <div className="card-style mb-30">
          <div className="table-wrapper table-responsive">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-12">
                  <div className="input-style-1">
                    <label>Label</label>
                    <input
                      defaultValue=""
                      {...register("label", { required: true })}
                    />
                    {errors.label && <span>Ce champ est requis</span>}
                  </div>
                </div>
                <div className="col-12">
                  <div className="input-style-1">
                    <label>Description</label>
                    <textarea defaultValue="" {...register("description")}></textarea>
                    {errors.description && <span>Ce champ est requis</span>}
                  </div>
                </div>
                <div className="col-12">
                  <div className="button-group d-flex justify-content-center flex-wrap">
                    <button
                      type="submit"
                      className="main-btn primary-btn btn-hover w-100 text-center"
                    >
                      Enregistrer
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
