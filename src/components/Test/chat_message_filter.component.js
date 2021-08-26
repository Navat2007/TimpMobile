import React from 'react';
import InputComponent from "./UI/input/input.component";
import SelectComponent from "./UI/select/select.component";

const ChatMessageFilter = ({filter, setFilter}) => {
    return (
        <div>
            <InputComponent
                value={filter.search}
                onChange={e => setFilter({...filter, search: e.target.value})}
                placeholder="Поиск"
            />
            <SelectComponent
                value={filter.sort}
                onChange={e => setFilter({...filter, sort: e})}
                defaultValue={'Сортировка'}
                options={[
                    {title: 'По названию', value: 'title'},
                    {title: 'По описанию', value: 'text'},
                ]}
            />
        </div>
    );
};

export default ChatMessageFilter;