import React from 'react'
import { FormField } from './FormField'

export const Form = () => {
    const [form, setForm] = React.useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    })

    const handleChange = ({ target }) => {
        const { id, value } = target
        setForm({ ...form, [id]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }


    const mask = ({ target }) => {
        let { id, value } = target
        value = value.replace(/\D/g, "")                 //Remove tudo o que não é dígito
        value = value.replace(/^(\d\d)(\d)/g, "($1) $2") //Coloca parênteses em volta dos dois primeiros dígitos
        value = value.length === 14 ? value.replace(/(\d{5})(\d)/, "$1-$2") : value.replace(/(\d{4})(\d)/, "$1-$2")
        target.value = value
        setForm({ ...form, [id]: value })
    }

    return (
        <section className="form" onSubmit={handleSubmit}>
            <div className="container">
                <form action="#" className="form__container">
                    <FormField
                        className="form__name"
                        label="*Nome:"
                        id="name"
                        type="text"
                        placeholder="Informe seu nome"
                        required
                        value={form.name}
                        onChange={handleChange}
                    />

                    <FormField
                        className="form__email"
                        label="*E-mail:"
                        id="email"
                        type="text"
                        placeholder="Informe seu e-mail"
                        required
                        value={form.emai}
                        onChange={handleChange}
                    />

                    <FormField
                        className="form__phone"
                        label="*Telefone:"
                        id="phone"
                        type="text"
                        placeholder="(__) ____-____"
                        required
                        value={form.phone}
                        minLength="14"
                        maxLength="15"
                        onChange={mask}
                    />

                    <FormField
                        className="form__message"
                        label="*Mensagem:"
                        id="message"
                        type="textarea"
                        placeholder="Escreva aqui"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                    />
                    <div className="form__button">
                        <button type="submit">ENVIAR</button>
                    </div>
                </form>
            </div>
        </section>
    )
}
