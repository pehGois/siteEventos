import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from "react";

export default function Form() {
    const [birth, setBirth] = useState(false);
    const [checked, setCheked] = useState(true)

    const schema = yup.object().shape({
        fullName: yup.string().required("Este é um campo obrigatório"),
        email: yup.string().email().required("Este é um campo obrigatório"),
        phone: yup.string().matches(/^\+\d{10,15}$/
        ).required("Este é um campo obrigatório"),
        birth: yup.date("Este é um campo obrigatório").max((new Date(
            new Date().getFullYear() - 18,
            new Date().getMonth(),
            new Date().getDate()
        )),
        "Você precisa ter ao menos 18 anos").required("Este é um campo obrigatório"),
        eventDate: yup.date("Este é um campo obrigatório").required("Este é um campo obrigatório"),
        contactType: yup.string().required("Selecione uma opção"),
        numParticipants: yup.number().min(1).integer().required("Este é um campo obrigatório"),
        state: yup.string().required("Este é um campo obrigatório"),
        city: yup.string().required("Este é um campo obrigatório"),
        addres: yup.string().required("Este é um campo obrigatório"),
        birthdayPersonAge: yup.number().integer().positive(),
        obs: yup.string()
    });

    const validateForm = (data) => {
        const hasCheckboxChecked = data.wedding || data.birthday || data.debutant || data.corporate;
        const hasRadioChecked = data.email || data.whatsapp;
        setCheked(hasCheckboxChecked && hasRadioChecked);
      };
      

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        validateForm(data)
        if (checked) {
            window.alert("Formulário Enviado com Sucesso!")
            console.log(data)
        }
    };

    return (
        <div>
        <h1 className="title">Contate-nos</h1>
        <div className="formContainer flex">
            <form onSubmit={handleSubmit(onSubmit)} className="flex">

                <div className="field">
                    <input type="text" placeholder="Nome Completo..." required {...register("fullName")}/>
                    {errors.fullName && <p className="error">{errors.fullName?.message}</p>}
                </div>

                <div className="field">
                    <input type="text" placeholder="Email..." required {...register("email")}/>
                    {errors.email && <p className="error">{errors.email?.message}</p>}

                </div>

                <div className="field">
                    <input type="text" placeholder="Telefone..." required {...register("phone")}/>
                    {errors.phone &&<p className="error">{errors.phone?.message}</p>}

                </div>

                <div className="field">
                    <label htmlFor="dataNascimento">Data de Nascimento</label><br/>
                    <input type="date" id="dataNascimento" required {...register("birth")}/>
                    {errors.birth &&<p className="error">{errors.birth?.message}</p>}
                </div>

                <div className="field">
                    <label htmlFor="dataEvento">Data Evento</label><br/>
                    <input type="date" id="dataEvento" required {...register("eventDate")}/>
                    {errors.eventDate &&<p className="error">{errors.eventDate?"Este é um campo obrigatório":""}</p>}
                </div>

                <p>Tipo de Evento</p>
                <div className="flex" style={{justifyContent:"space-around", width:"100%", marginBottom: "5px"}}>
                    <div className="field checkBox">
                        <input type="checkbox" id="casamento" name="eventType" {...register("wedding")}></input>
                        <label htmlFor="casamento">Casamento</label>
                    </div>

                    <div className="field checkBox">
                        <input type="checkbox" id="aniversario" name="eventType" {...register("birthday")} onClick={()=>setBirth(!birth)}></input>
                        <label htmlFor="aniversario">Aniversário</label>
                    </div>

                    <div className="field checkBox">
                        <input type="checkbox" name="eventType" id="debutante" {...register("debutant")}></input>
                        <label htmlFor="debutante">Debutante</label>
                    </div>

                    <div className="field checkBox">
                        <input type="checkbox" name="eventType" id="corporativo" {...register("corporate")}></input>
                        <label htmlFor="corporativo">Corporativo</label>
                    </div>
                </div>
                {!checked && <p className="error">Escolha ao menos uma opção</p>}


                {birth && <div className="field">
                    <input type="number" placeholder="Idade do Aniversariante..." {...register("birthdayPersonAge")}/>
                </div>}

                <div className="field">
                    <input type="number" placeholder="Número de Participantes..." required {...register("numParticipants")}/>
                </div>
                {errors.numParticipants &&<p className="error">{errors.numParticipants?.message}</p>}

                <input type="text" placeholder="Endereço..." {...register("addres")}/>
                <input type="text" placeholder="Cidade..." {...register("city")}/>
                <input type="text" placeholder="Estado/Região..." {...register("state")}/>
                <p>Como você deseja receber este orçamento</p>
                <div className="flex" style={{justifyContent:"space-around", width:"100%",marginBottom: "5px"}}>
                    <div>
                        <input type="radio" name="contact" id="email" {...register("contactType")}></input>
                        <label htmlFor="email">E-mail</label>
                    </div>
                    <div><input type="radio" name="contact" id="whatsapp" {...register("contactType")}></input>
                    <label htmlFor="whatsapp">Whatsapp</label></div>
                </div>
                {errors.contactType &&<p className="error">{errors.contactType?.message}</p>}
                <textarea placeholder="Obeservações..." {...register("obs")}></textarea>

                <input type="submit" value="Enviar"/>
            </form>
        </div>
    </div>
    );
}

