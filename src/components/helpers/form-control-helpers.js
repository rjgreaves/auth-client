/**
 * Created by reube on 20/07/2017.
 */
import React from 'react';

export const renderField = ({
                         input,
                         label,
                         className,
                         type,
                         meta: { touched, error, warning },
                     }) => (
    <div>
        <label>{label}</label>
        <input {...input} className={className} type={type}/>
        {touched && error && <div className="error">{error}</div>}
    </div>
);

export const renderSelect = ({
                                 input,
                                 label,
                                 className,
                                 type,
                                 meta: { touched, error, warning },
                             }) => (
    <div>
        <label>{field.input.label}</label>
        <select {...field.input}/>
        {field.touched && field.error && <div className="error">{field.error}</div>}
    </div>
);

