import {createStore} from 'redux'


// 儲存資料
const data = {message:[
    {key: "1", name: '京城五', message: '借我5萬'},
    {key: "2", name: '阿琳', message: '你是不是欠揍'},
    {key: "3", name: '上帝', message: '8+9'},
    {key: "4", name: '胖哥哥', message: '下面黑色'},
    {key: "5", name: '小雞', message: '採草莓'},
]};
// 動作指令
const addMessage = article => ({type: 'addMessage', payload: 'article'});

const rootReducer = (state = data, action) => {
    switch (action.type) {
        case 'addMessage':
            break;
        default:
            return state;
    }
}

const store = createStore(rootReducer);

export default store
