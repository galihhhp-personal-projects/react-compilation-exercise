import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import CounterComponent from './Components/CounterApp/Class/Counter';
// import HomepageComponent from './HomepageComponent/Homepage';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import ContextApp from './ContextApp';
import Songlist from './VidTutorial/hooksContext/Hooks/Component/Songlist';
// import Skeleton from './VidTutorial/SkeletonScreen/Skeleton';
// import Meditation from './ProjectPages/Layout Sections/Hero/Meditation';
// import MainPage from './ProjectPages/Form/MainPage';

ReactDOM.render(
    <React.StrictMode>
        {/* <App /> */}
        {/* <CounterComponent /> */}
        {/* <HomepageComponent/> */}
        {/* <MainPage /> */}
        {/* <Meditation /> */}
        {/* <Skeleton /> */}
        {/* <ContextApp /> */}
        <Songlist />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
