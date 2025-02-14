import App from './index.vue'
import './index.css'

export default {
    render: App,
    editorProps: {
        title: {
            type: 'string', // 类型，并非值的类型，而是在渲染时决定显示什么类型的输入框（如选择器、滑块）
            defaultValue: '按钮',// 默认图的cdn
            display: '内容' // 在输入框上方显示的名称，无则不显示
        },
        // color: {
        //     type: 'color',
        //     defaultValue: '#333',
        //     display: '颜色'
        // },
        size: {
            type: 'number',
            defaultValue: 15,
            display: '字体大小'
        },
        borderRadius: {
            type: 'number',
            defaultValue: 1,
            display: '圆角'
        }
    }
};
