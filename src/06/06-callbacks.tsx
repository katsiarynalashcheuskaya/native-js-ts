import React, {ChangeEvent, MouseEvent} from 'react';

export const User = () => {
    const search = (event: MouseEvent<HTMLButtonElement>) => {
        alert(event.currentTarget.name)
    }
    const focusLostHandler = () => {
        alert('focus lost')
    }
    const onNameChanged = () => {
        console.log('name changed')
    }

    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
        console.log('age changed: '+ event.currentTarget.value)
    }

    return (
        <div><textarea onChange={onNameChanged} onBlur={focusLostHandler}>Dimych</textarea>
            <input onChange={onAgeChanged} type={"number"}/>
            <button name='delete' onClick={search}>search</button>
        </div>
    );
};
