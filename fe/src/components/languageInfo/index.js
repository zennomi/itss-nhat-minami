import React from 'react'
import './style.css'

const LanguageCard = ({
    index,
    data,
    register,
    errors,
}) => {
    const language_code = `certificates.${index}.language_code`;
    const level = `certificates.${index}.level`;
    // const salary = `certificates.${index}.salary`;
    // const minPerLesson = `certificates.${index}.minPerLesson`;
    return (
        <div className='frame-2-item'>
            <div className='form-row'>
                <div className='form-field'>
                    <select
                        className="input-field"
                        defaultValue={data.language_code}
                        {...register(language_code)}
                    >
                        <option value="" disabled selected>証明書の種類</option>
                        <option value="IELTS">IELTS</option>
                        <option value="JLPT">JLPT</option>
                        <option value="TOPIK">TOPIK</option>
                        <option value="HSK">HSK</option>
                    </select>
                    {errors.certificates?.[index]?.language_code &&
                        <p className='error-message'>{errors.certificates[index].language_code.message}</p>}
                </div>
                <div className='form-field'>
                    <input
                        type='text'
                        className='input-field'
                        defaultValue={data.level}
                        {...register(level)}
                        placeholder='レベル'
                    />
                    {errors.certificates?.[index]?.level &&
                        <p className='error-message'>{errors.certificates[index].level.message}</p>}
                </div>
            </div>
            {/* <div className='form-row'>
                <div className='form-field'>
                    <input
                        type='text'
                        className='input-field'
                        defaultValue={data.salary}
                        {...register(salary)}
                        placeholder='料金 ¥'
                    />
                    {errors.certificates?.[index]?.salary &&
                        <p className='error-message'>{errors.certificates[index].salary.message}</p>}
                </div>
                <div className='form-field'>
                    <input
                        type='text'
                        className='input-field'
                        defaultValue={data.minPerLesson}
                        {...register(minPerLesson)}
                        placeholder='レッソンの時間 （分）'
                    />
                    {errors.certificates?.[index]?.minPerLesson &&
                        <p className='error-message'>{errors.certificates[index].minPerLesson.message}</p>}
                </div>
            </div> */}

        </div>
    )
}
export default LanguageCard;