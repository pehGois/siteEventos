import {useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
export default function Form() {
    
    const schema = yup.object().shape({
        fullName: yup.string().required("Your Full Name is Required"),
        email: yup.string().email().required(),
        age: yup.number().positive().integer("Precisa ser um número").min(18).required(),
        password: yup.string().min(4).max(20).required(),
        confPassword: yup.string().oneOf([yup.ref("password"),null], "Passwords Do not Match ").required()
    })
    
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div className="formContainer flex">
            <div className="flex">
                <h1 className="title">Contate-nos</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="Full Name..." {...register("fullName")}/>
                    <p>{errors.fullName?.message}</p>
                    <input type="text" placeholder="Email..." {...register("email")}/>
                    <p>{errors.email?.message}</p>
                    <input type="number" placeholder="Age..."{...register("age")}/>
                    <p>{errors.age?.message}</p>
                    <input type="password" placeholder="Password..." {...register("password")}/>
                    <p>{errors.password?.message}</p>
                    <input type="password" placeholder="Confirm Password..." {...register("confPassword")}/>
                    <p>{errors.confPassword?.message}</p>
                    <input type="submit"/>
                </form>
            </div>
        </div>
    )
}
