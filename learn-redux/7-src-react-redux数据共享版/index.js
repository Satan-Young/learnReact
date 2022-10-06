import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App></App>
    </Provider>
)

/*
使用react-redux不需要检测redux中的变化了
*/
// store.subscribe(()=>{
//     root.render(<App></App>)
// })
