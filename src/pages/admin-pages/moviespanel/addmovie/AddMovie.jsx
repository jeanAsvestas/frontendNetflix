import "./addmovie.scss";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import MovieService from "../../../../services/movie_service";

// var fs = require('fs');
// fs.writeFile(`./public/images/${data.mainImage.name}`, data.mainImage.data);


export default function AddMovie() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleAddMovie = (data) => {
        //data.titleImage = data.titleImage[0].name;
        MovieService.addOneMovie(data).then((res) => {
            console.log(res)
        })
    };

    const handleError = (error) => {
    };


    console.log(errors.description)
    return (
        <div className="add-movie">
            <form onSubmit={handleSubmit(handleAddMovie, handleError)}>
                <h1>Add Movie</h1>
                <input type="title" placeholder="Title"
                    {...register("title", { required: true })}
                />
                {errors.title?.type === 'required' && <div className="alert alert-danger"> Title is required</div>}

                <input type="text" placeholder="Description"
                    {...register("description", { required: true, maxLength: 20 })}
                />
                {errors.description?.type === 'required' && <div className="alert alert-danger"> Description is required</div>}

                <input type="text" placeholder="Duration"
                    {...register("length", { required: true, maxLength: 20, pattern: /^([0-1][0-9]|[2][0-3]):([0-5][0-9])$/ })}
                />
                {errors.length?.type === 'required' && <div className="alert alert-danger"> Duration is required</div>}
                {errors.length?.type === 'pattern' && <div className="alert alert-danger"> Wrong input, match hh:mm .</div>}

                <textarea type="text" placeholder="Description"
                    {...register("description", { required: true })}
                />
                {errors.text?.type === 'required' && <div className="alert alert-danger"> Description is required</div>}

                <input type="number" placeholder="Year of production"
                    {...register("year", { required: true, min: 1920, max: new Date().getFullYear() })}
                />
                {errors.year?.type === 'required' && <div className="alert alert-danger"> Year of production is required</div>}
                {errors.year?.type === 'min' && <div className="alert alert-danger"> Year of production must be between 1920-{new Date().getFullYear()}  </div>}
                {errors.year?.type === 'max' && <div className="alert alert-danger"> Year of production must be between 1920-{new Date().getFullYear()}</div>}

                <input type="text" placeholder="Production country"
                    {...register("prodCountry", { required: true })}
                />
                {errors.prodCountry?.type === 'required' && <div className="alert alert-danger"> Production country is required</div>}

                <input type="file" placeholder="Title Image"
                    {...register("titleImage", { required: true })}
                />
                {errors.titleImage?.type === 'required' && <div className="alert alert-danger"> Title image is required</div>}

                <input type="text" placeholder="Trailer image"
                    {...register("trailerImage", { required: true })}
                />
                {errors.trailerImage?.type === 'required' && <div className="alert alert-danger"> Trailer image is required</div>}

                <input type="texte" placeholder="Main image" multiple
                    {...register("mainImage", { required: true })}
                />
                {errors.mainImage?.type === 'required' && <div className="alert alert-danger"> Main image is required</div>}

                <input type="text" placeholder="Trailer"
                    {...register("trailer", { required: true })}
                />
                {errors.trailer?.type === 'required' && <div className="alert alert-danger"> Trailer is required</div>}

                <input type="text" placeholder="Movie"
                    {...register("movieContent", { required: true })}
                />
                {errors.movieContent?.type === 'required' && <div className="alert alert-danger"> Movie is required</div>}

                <button className="loginButton">
                    Add movie</button>

            </form>
        </div>
    )
}