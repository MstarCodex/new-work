import React, { useState } from 'react'

function InputValue(initialValue) {
    const patterns = {
        firstName: /^[a-z]+$/i,
        phoneNumber: /^\+\d{13}$/,
        email: /^([a-z\d\.-]+@)([a-z]+)\.([a-z]{2,12})(\.[a-z]{2,8})?$/,
        password: /^[\w@-]{8,20}$/i,
        confirmPass: /^[\w@-]{8,20}$/i,
    }
    function validate(field, regex){
        if(regex.test(field.value)){
            field.className='valid';
        }else{
            field.className='invalid'
        }
    }
    const [value, setValue] = useState(initialValue)
    const bind = {
        value,
        onChange: e => {
            setValue(e.target.value)
            validate(e.target, patterns[e.target.attributes.name.value])
        }
    }
    return[value, bind]

}

function Form() {
    const [UserFirst, bindUserFirst] = InputValue('')
    const [UserLast, bindUserLast] = InputValue('')
    const [UserEmail, bindUserEmail] = InputValue('')
    const [UserAge, bindUserAge] = InputValue('')
    const [userNUmber, bindUserNumber] = InputValue('')
    const [password, bindPassword] = InputValue('')
    const [confirmPass, bindConfirmPass] = InputValue('')

    const HandleSubmit = e => {
        e.preventDefault()
        alert(`Hello and ${UserFirst}`)
    }
  return (
    <div className='mx-12 flex justify-center w-[100%]'>
        <form onSubmit={HandleSubmit} className='w-[100%] md:mx-auto md:w-[500px] md:left-30% md:absolute'>
        <div className='py-6 px-6 flex flex-col w-[80%]'>
                <label>FirstName</label>
                <input {...bindUserFirst} type="text" name='firstName' />
            </div>
            <div className='py-6 flex flex-col px-6 w-[80%]'>
                <label className=''>LastName</label>
                <input {...bindUserLast} type="text" name='firstName' />
            </div>
            <div className='py-6 px-6 flex flex-col w-[80%]'>
                <label>PhoneNumber</label>
                <input {...bindUserNumber} type="text" name='phoneNumber' />
            </div>
            <div className='py-6 px-6 flex flex-col w-[80%]'>
                <label>Email</label>
                <input{...bindUserEmail} type="text" name='email' />
            </div>
            <div className='px-6 flex flex-col w-[80%]'>
                <label>Age</label>
                <input type="date" name='Age' />
            </div>
            <div className='py-6 px-6 flex flex-col w-[80%]'>
                <label>Password</label>
                <input {...bindPassword}  type="text" name='password' />
            </div>
            <div className='py-6 px-6 flex flex-col w-[80%]'>
                <label>Confirm Password</label>
                <input {...bindConfirmPass} type="text" name='confirmPass' />
            </div>
            <div className='px-6 py-6 text-center w-[80%]'>
                <button className='mx-auto w-[150px] bg-[#9b9bd4] text-white border border-3px-solid-black'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Form