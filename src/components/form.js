import {useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
export default function Form() {
    
    const schema = yup.object().shape({
        fullName: yup.string().required("Este é um campo obrigatório"),
        email: yup.string().email().required("Este é um campo obrigatório"),
        phone: yup.number().positive().integer().required("Este é um campo obrigatório").min(11),
        birth: yup.date().min("01/01/2005").required("Este é um campo obrigatório"),
        eventDate: yup.date().required("Este é um campo obrigatório"),
        casamento:yup.bool(),
        aniversario: yup.bool(),
        debutante: yup.bool(),
        corporativo: yup.bool(),
        numParticipante: yup.number().min(1).integer().required("Este é um campo obrigatório"),
        estado: yup.string().required("Este é um campo obrigatório"),
        cidade: yup.string().required("Este é um campo obrigatório"),
        endereco: yup.string().required("Este é um campo obrigatório"),
        idadeAniversariante: yup.number().integer(),
        observacoes: yup.string()
    })
    
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div>
            <h1 className="title">Contate-nos</h1>
            <div className="formContainer flex">
                <form onSubmit={handleSubmit(onSubmit)}className="flex">

                    <div className="field">
                        <input type="text" placeholder="Nome Completo..." {...register("fullName")}/>
                    </div>

                    <div className="field">
                        <input type="text" placeholder="Email..." {...register("email")}/>
                    </div>

                    <div className="field">
                        <input type="number" placeholder="Telefone..."{...register("phone")}/>
                    </div>

                    <div className="field">
                        <label htmlFor="dataNascimento">Data de Nascimento</label><br/>
                        <input type="date" id="dataNascimento" {...register("birth")}/>
                    </div>

                    <div className="field">
                        <label htmlFor="dataEvento">Data Evento</label><br/>
                        <input type="date" id="dataEvento" {...register("eventDate")}/>
                    </div>

                    <p>Tipo de Evento</p>
                    <div className="flex" style={{justifyContent:"space-around", width:"100%",marginBottom: "5px"}}>
                        <div className="field checkBox">
                            <input type="checkbox" id="casamento" name="eventType" {...register("casamento")}></input>
                            <label htmlFor="casamento">Casamento</label>
                        </div>

                        <div className="field checkBox">
                            <input type="checkbox" id="aniversario" name="eventType" {...register("aniversario")}></input>
                            <label htmlFor="aniversario">Aniversário</label>
                        </div>

                        <div className="field checkBox">
                            <input type="checkbox" name="eventType" id="debutante" {...register("debutante")}></input>
                            <label htmlFor="debutante">Debutante</label>
                        </div>

                        <div className="field checkBox">
                            <input type="checkbox" name="eventType" id="corporativo" {...register("corporativo")}></input>
                            <label htmlFor="corporativo">Corporativo</label>
                        </div>
                    </div>

                    <div className="field">
                        <input type="number" placeholder="Idade do Aniversariante..." {...register("idadeAniversariante")}/>
                    </div>

                    <div className="field">
                        <input type="number" placeholder="Número de Participantes..."{...register("numParticipants")}/>
                    </div>

                    <input type="text" placeholder="Endereço..." {...register("endereco")}/>
                    <input type="text" placeholder="Cidade..." {...register("cidade")}/>
                    <input type="text" placeholder="Estado/Região..." {...register("estado")}/>
                    <p>Como você deseja receber este orçamento</p>
                    <div className="flex" style={{justifyContent:"space-around", width:"100%",marginBottom: "5px"}}>
                        <div>
                            <input type="radio" name="contact" id="email" {...register("email")}></input>
                            <label htmlFor="email">E-mail</label>
                        </div>
                        <div><input type="radio" name="contact" id="whatsapp" {...register("whatsapp")}></input>
                        <label htmlFor="whatsapp">Whatsapp</label></div>
                    </div>
                    <textarea placeholder="Obeservações..." {...register("observacoes")}></textarea>

                    <input type="submit" value="Enviar"/>
                </form>
            </div>
        </div>
    )
}
