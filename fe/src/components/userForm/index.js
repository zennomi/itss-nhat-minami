import { React, useState, useRef, useEffect } from 'react'
import LanguageCard from '../languageInfo';
import './style.css'
import { useForm, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as yup from 'yup';
import Gmap from '../map';

const schema = yup.object().shape({
    name: yup.string().required('氏名を入力してください'),
    gender: yup.string().required('性別を選択してください'),
    address: yup.string().required('場所を入力してください'),
    lang_teach: yup.string().required('教えるために使用する言語を選択してください'),
    date_of_birth: yup.string()
        .required('生年月日を入力してください')
        .test('is-number', '数字で入力してください。', (value) => {
            if (!value) return true;
            const numberValue = Number(value.replace(/\//g, ''));
            return !isNaN(numberValue);
        }).matches(
            /^(\d{2})\/(\d{2})\/(\d{4})$/,
            '日付の形式が正しくありません。正しい形式は「dd/mm/yyyy」です。'
        )
        .test('is-valid', '日付が無効です', (value) => {
            const [day, month, year] = value.split('/');
            const date = new Date(`${year}-${month}-${day}`);
            return date instanceof Date && !isNaN(date);
        }),
    country_of_birth: yup.string()
        .required('国籍を入力してください'),
    price: yup.number()
        .typeError('数字で入力してください。')
        .required('給料を入力してください。'),
    hours: yup.number()
        .typeError('数字で入力してください。')
        .required('レッソンの時間を入力してください。'),
    description: yup.string(),
    certificates: yup.array().of(
        yup.object().shape({
            language_code: yup.string().required('証明書の種類を選択してください。'),
            level: yup.string().required('レベルを入力してください。'),
        }),
    ),
});

export default function Form({ initialData }) {

    const { control, handleSubmit, setValue, watch, register, formState: { errors } } = useForm({
        defaultValues: initialData,
        resolver: yupResolver(schema),
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'certificates',
    });

    const [center, setCenter] = useState({ lat: initialData.latitude, lng: initialData.longitude })
    const [showMap, setShowMap] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState(center);
    const mapRef = useRef(null);

    const onSubmit = (data) => {
        setValue('hours', watch('hours') / 60);
        console.log(data);
    };

    const handleAddButtonClick = () => {
        const newLanguage = {
            language_code: '',
            level: '',
        }
        append(newLanguage);
    };

    const removeLanguage = (index) => {
        remove(index);
    };

    const handleAddressChange = (event) => {
        const address = event.target.value;
        if (address) {
            const geocoder = new window.google.maps.Geocoder();
            geocoder.geocode({ address }, (results, status) => {
                if (status === 'OK') {
                    const { lat, lng } = results[0].geometry.location;
                    setCenter({ lat: lat(), lng: lng() });
                    setSelectedLocation(center);
                    setValue('latitude', lat());
                    setValue('longitude', lng());
                } else {
                    console.error('Geocode failed:', status);
                }
            });
        }
    };

    const handleInputClick = () => {
        setShowMap(true);
    };

    // Make the add file field disappear when clicking outside it
    useEffect(() => {
        const handleOutsideClick = event => {
            const mapContainer = mapRef.current;

            if (
                mapContainer &&
                !mapContainer.contains(event.target) &&
                event.target?.id !== 'address'
            ) {
                setShowMap(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const handleMapClick = (mapProps, map, event) => {
        const { latLng } = event;
        const latitude = latLng.lat();
        const longitude = latLng.lng();
        setValue('latitude', latitude);
        setValue('longitude', longitude);
        setSelectedLocation({ lat: latitude, lng: longitude });
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ location: latLng }, (results, status) => {
            if (status === window.google.maps.GeocoderStatus.OK) {
                if (results[0]) {
                    setValue('address', results[0].formatted_address);
                }
            } else {
                console.error('Geocode failed:', status);
            }
        });
    };

    return (
        <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-row">
                <div className='form-field'>
                    <input
                        id='name'
                        type="text"
                        className="input-field"
                        {...register('name')}
                        placeholder='氏名'
                    />
                    {errors.name && <p className="error-message">{errors.name.message}</p>}
                </div>
                <div className='form-field'>
                    <select
                        id='gender'
                        className="input-field"
                        {...register('gender')}
                        name='gender'
                    >
                        <option value='' disabled selected>性別</option>
                        <option value="男性">男性</option>
                        <option value="女性">女性</option>
                        <option value="他">他</option>
                    </select>
                    {errors.gender && <p className="error-message">{errors.gender.message}</p>}
                </div>
            </div>
            <div className="form-row">
                <div className='form-field'>
                    <input
                        id='address'
                        type='text'
                        className='input-field'
                        {...register('address')}
                        placeholder='場所'
                        onClick={() => handleInputClick}
                        onChange={() => handleAddressChange}
                    />
                    {errors.address && <p className="error-message">{errors.address.message}</p>}
                </div>

                <div className='form-field'>
                    <select
                        id='lang_teach'
                        className="input-field"
                        {...register('lang_teach')}
                        name='lang_teach'
                    >
                        <option value='' disabled selected>何語で教えますか。</option>
                        <option value="English">英語</option>
                        <option value="Vietnamese">ベトナム語</option>
                        <option value="Japanese">日本語</option>
                        <option value="Korean">韓国語</option>
                    </select>
                    {errors.lang_teach && <p className="error-message">{errors.lang_teach.message}</p>}

                </div>
            </div>
            {showMap &&
                <div ref={mapRef} className='form-row'>
                    <div style={{ height: '500px', width: '100%' }}>
                        <Gmap
                            center={center}
                            setCenter={setCenter}
                            selectedLocation={selectedLocation}
                            setSelectedLocation={selectedLocation}
                            handleMapClick={() => handleMapClick} />
                    </div>
                </div>
            }
            <div className="form-row">
                <div className='form-field'>
                    <input
                        id="date_of_birth"
                        type="text"
                        className='input-field'
                        pattern="\d{2}/\d{2}/\d{4}"
                        maxLength="10"
                        {...register('date_of_birth')}
                        placeholder="生年月日"
                    />
                    {errors.date_of_birth && <p className="error-message">{errors.date_of_birth.message}</p>}
                </div>
                <div className="form-field">
                    <input
                        id='country_of_birth'
                        type="text"
                        className='input-field'
                        {...register('country_of_birth')}
                        placeholder='国籍'
                    />
                    {errors.country_of_birth && <p className="error-message">{errors.country_of_birth.message}</p>}
                </div>
            </div>
            <div className='form-row'>
                <div className='form-field'>
                    <span style={{ paddingLeft: '10px' }}>料金</span>
                    <input
                        type='text'
                        className='input-field'
                        {...register('price')}
                        placeholder='¥'
                    />
                    {errors.price &&
                        <p className='error-message'>{errors.price.message}</p>}
                </div>
                <div className='form-field'>
                    <span style={{ paddingLeft: '10px' }}>レッソンの時間</span>
                    <input
                        type='text'
                        className='input-field'
                        {...register('hours')}
                        placeholder='時'
                    />
                    {errors.hours &&
                        <p className='error-message'>{errors.hours.message}</p>}
                </div>
            </div>
            <div className="form-row">
                <textarea
                    id='description'
                    className='textarea'
                    {...register('description')}
                    placeholder='自己紹介'
                />
                {errors.description && <p className="error-message">{errors.description.message}</p>}
            </div>
            <div className='frame-2'>
                <label>証明書</label>
                {fields.map((certi, index) => (
                    <div >
                        <LanguageCard
                            key={index}
                            index={index}
                            data={certi}
                            register={register}
                            errors={errors}
                        />
                        <div className='card-button-row'>
                            <button type="button" onClick={() => removeLanguage(index)}>削除</button>
                        </div>
                    </div>
                ))}
                <div className='button-row'>
                    <button type="button" className='button' onClick={handleAddButtonClick}>
                        <FontAwesomeIcon icon="fa-solid fa-plus" />
                        証明書
                    </button>
                    <button type="submit" className='button'>
                        保存
                    </button>
                </div>
            </div>
        </form>
    )
}