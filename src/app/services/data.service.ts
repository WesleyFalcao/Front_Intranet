import { Injectable } from "@angular/core";
// import jwt_decode from "jwt-decode";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: "root"
})
export class DataService {

    // Valores para armazenar em memória
    nm_Session: string = environment.SESSION_NAME;

    constructor(){}

    Get_Local(nm_Chave: string) {
        return JSON.parse(window.localStorage.getItem(this.nm_Session + "_" + nm_Chave) ?? "")
    }

    Set_Local(nm_Chave: string, objValue: any) {
        window.localStorage.setItem(this.nm_Session + "_" + nm_Chave, JSON.stringify(objValue))
    }


    // Get_Token_Values() {
    //     if (!this.Get_Session("token")) return null

    //     return jwt_decode(this.Get_Session("token")) as any
    // }

    Limpar_Local() {
        window.localStorage.clear()
    }

    Get_Session(nm_Chave: string) {
        return JSON.parse(window.sessionStorage.getItem(this.nm_Session + "_" + nm_Chave) ?? "")
    }

    Set_Session(nm_Chave: string, objValue: any) {
        window.sessionStorage.setItem(this.nm_Session + "_" + nm_Chave, JSON.stringify(objValue))
    }

    Limpar_Session(){
        window.sessionStorage.clear()
    }
}
