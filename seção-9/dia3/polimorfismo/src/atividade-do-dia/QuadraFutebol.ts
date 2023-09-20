import Quadra from "./Quadra";
import IAgenda from "./interfaces/IAgenda";
import normas from "./normas/normasDeUso";

class QuadraFutebol extends Quadra {
  public futebolData: IFutebol = normas.futebol ;
  reservar<IFutebol>(date: Date): IAgenda<IFutebol> {
    const protocolo = (Math.random() + 1).toString(30).substring(3);
    return {
      protocolo,
      data: date,
      regras: this.futebolData as unknown as IFutebol,
    };
  }
}

export default QuadraFutebol;