import React from 'react'
import './style.css'

const LanguageCard = ({
    index,
    data,
    register,
    errors,
}) => {
    const lang_study = `languages.${index}.lang_study`;
    const level = `languages.${index}.level`;
    const salary = `languages.${index}.salary`;
    const minPerLesson = `languages.${index}.minPerLesson`;
    return (
        <div className='frame-2-item'>
            <div className='form-row'>
                <div className='form-field'>
                    <select
                        className="input-field"
                        defaultValue={data.lang_study}
                        {...register(lang_study)}
                    >
                        <option value="" disabled selected>言語</option>
                        <option value="英語">英語</option>
                        <option value="ベトナム語">ベトナム語</option>
                        <option value="日本語">日本語</option>
                        <option value="韓国語">韓国語</option>
                    </select>
                    {errors.languages?.[index]?.lang_study &&
                        <p className='error-message'>{errors.languages[index].lang_study.message}</p>}
                </div>
                <div className='form-field'>
                    <input
                        type='text'
                        className='input-field'
                        defaultValue={data.level}
                        {...register(level)}
                        placeholder='レベル'
                    />
                    {errors.languages?.[index]?.level &&
                        <p className='error-message'>{errors.languages[index].level.message}</p>}
                </div>
            </div>
            <div className='form-row'>
                <div className='form-field'>
                    <input
                        type='text'
                        className='input-field'
                        defaultValue={data.salary}
                        {...register(salary)}
                        placeholder='料金 ¥'
                    />
                    {errors.languages?.[index]?.salary &&
                        <p className='error-message'>{errors.languages[index].salary.message}</p>}
                </div>
                <div className='form-field'>
                    <input
                        type='text'
                        className='input-field'
                        defaultValue={data.minPerLesson}
                        {...register(minPerLesson)}
                        placeholder='レッソンの時間 （分）'
                    />
                    {errors.languages?.[index]?.minPerLesson &&
                        <p className='error-message'>{errors.languages[index].minPerLesson.message}</p>}
                </div>
            </div>

        </div>
    )
}
export default LanguageCard;