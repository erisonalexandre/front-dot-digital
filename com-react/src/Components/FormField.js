import React from 'react'

export const FormField =
    ({
        id,
        label,
        onChange,
        value,
        type,
        onBlur,
        placeholder,
        error,
        required,
        className,
        rows,
        ...props
    }) => {
        const typeInput = () => {
            if (type === 'textarea') {
                return <textarea
                    id={id}
                    name={id}
                    onChange={onChange}
                    placeholder={placeholder}
                    onBlur={onBlur}
                    type={type}
                    value={value}
                    required={required}
                    rows={rows}
                    className="form__input"
                    {
                    ...props
                    }
                />
            }

            return <input
                id={id}
                name={id}
                onChange={onChange}
                placeholder={placeholder}
                onBlur={onBlur}
                type={type}
                value={value}
                required={required}
                {
                ...props
                }
                className="form__input"
            />
        }

        return (
            <div className={`form__field ${className}`}>
                <label htmlFor={id} className="form__label">{label}</label>
                {typeInput()}
                {error && <p>{error}</p>}
            </div>
        );
    }