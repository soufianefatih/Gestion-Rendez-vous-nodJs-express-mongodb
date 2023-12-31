import {Navigate} from "react-router-dom";

export function isLogin() {

    return window.localStorage.getItem("login") ?? 0;
}


export function checkLoginBeforeRenderComponent(component, ifNotLoginRedirectToUrl = "/login") {
    let login = window.localStorage.getItem("login") ?? 0;

    if (login !== 0) {
        return component;
    } else {
        return <Navigate to={ifNotLoginRedirectToUrl} />
    }
}


export function checkIfNotLoginBeforeRenderComponent(component, ifNotLoginRedirectToUrl = "/") {
    let login = window.localStorage.getItem("login") ?? 0;

    if (login === 0) {
        return component;
    } else {
        return <Navigate to={ifNotLoginRedirectToUrl} />
    }
}
