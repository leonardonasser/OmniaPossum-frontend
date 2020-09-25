export class loginConstants {

    public static get baseServidor(): string { return "http://localhost:8080/" }

    public static get baseUsuario(): string { return this.baseServidor + "auth/login"}

    public static get baseUrl(): string {return this.baseServidor + "auth"}

}
