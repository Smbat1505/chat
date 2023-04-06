import React, {useState} from 'react'
import Affairs from './affairs/Affairs'
import s2 from '../../s1-main/App.module.css'

/*
*  1 - описать типы AffairPriorityType, AffairType
*   2 - указать нужный тип для defaultAffairs
*  3 - дописать типы и логику функции filterAffairs и проверить её тестами
*  4 - выполнить пункт 3 для функции deleteAffair
*  5 - указать нужный тип в useState с affairs
*  6 - дописать тип и логику функции deleteAffairCallback
*  7 - в файле Affairs.tsx дописать типизацию пропсов
*  8 - в файле Affairs.tsx дописать логику функций setAll, setHigh, setMiddle, setLow
*  9 - в файле Affair.tsx дописать типизацию пропсов
*  10 - в файле Affair.tsx дописать функции deleteCallback и использовать
*  11 - в файле Affair.tsx отобразить приходящие данные
* */

// types
export type AffairPriorityType = 'low' | 'high' | 'middle'
// debugger
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

// constants ))
let defaultAffairs: Array<AffairType> = [
    {_id: 1, name: 'FAMILY', priority: 'high'}, // студенты могут изменить содержимое name и количество элементов в массиве, ...priority не менять!
    {_id: 2, name: 'anime', priority: 'low'},
    // {_id: 3, name: 'React', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'JavaScript', priority: 'middle'},
    {_id: 6, name: 'react', priority: 'high'},
    {_id: 7, name: 'typescript', priority: 'high'},
    {_id: 8, name: 'english', priority: 'middle'},
    {_id: 9, name: 'html & css', priority: 'middle'},
]

// pure helper functions


export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => {
    return affairs.filter(el => filter === 'all' || el.priority === filter)
}

// let currentAffairs = affairs
//
// let low = affairs.filter(el => el.priority === 'low')
// let high = affairs.filter(el => el.priority === 'high')
// let middle = affairs.filter(el => el.priority === 'middle')
// debugger
// if (filter === 'all') return affairs /*console.log(affairs)*/
// else if (filter === 'low') return low /*console.log(low)*/
// else if (filter === 'high') return high /*console.log(high)*/
// else return middle /*console.log(middle)*/
// }

export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => { // need to fix any
    return affairs.filter((affair) => affair._id !== _id);
    // return affairs // need to fix
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => { // need to fix any

        const newAffairs = deleteAffair(affairs, _id);
        setAffairs(newAffairs);
        // console.log(newAffairs)
    }

    return (
        <div id={'hw2'}>
            <div className={s2.hwTitle}>Homework #2</div>
            <div className={s2.hw}>
                <Affairs
                    data={filteredAffairs}
                    setFilter={setFilter}
                    deleteAffairCallback={deleteAffairCallback}
                    filter={filter}
                />
            </div>
        </div>
    )
}

export default HW2
